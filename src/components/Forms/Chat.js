"use client";
import { useState } from "react";

export default function Chat() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    // "use server";
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setResponse(data.choices?.[0]?.message?.content || "No response");
  };

  return (
    <div>
      <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      <button onClick={sendMessage}>Ask ChatGPT</button>
      <p>{response}</p>
    </div>
  );
}
