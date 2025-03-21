import { NextResponse } from "next/server";
import { commentaries } from "@/components/data/commentaries";
export async function GET(request) {
  let controller;
  let isClosed = false;

  const stream = new ReadableStream({
    start(_controller) {
      controller = _controller;
      const encoder = new TextEncoder();

      const sendEvent = (data) => {
        if (!isClosed) {
          const eventData = `data: ${JSON.stringify(data)}\n\n`;
          controller.enqueue(encoder.encode(eventData));
        }
      };

      // Initial connection message
      sendEvent({
        id: Date.now().toString(),
        message: "Connected to live football commentary",
        timestamp: new Date().toISOString(),
        type: "system",
      });

      // Simulate commentary updates
      const commentaryInterval = setInterval(() => {
        if (isClosed) {
          clearInterval(commentaryInterval);
          return;
        }

        const randomCommentary =
          commentaries[Math.floor(Math.random() * commentaries.length)];
        sendEvent({
          id: Date.now().toString(),
          message: randomCommentary.message,
          timestamp: new Date().toISOString(),
          type: randomCommentary.type,
        });
      }, 5000);

      // Handle client disconnect
      request.signal.addEventListener("abort", () => {
        isClosed = true;
        clearInterval(commentaryInterval);
        if (!isClosed) {
          controller.close();
        }
      });
    },
    cancel() {
      isClosed = true;
    },
  });

  return new NextResponse(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
