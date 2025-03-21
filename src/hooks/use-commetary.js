"use client";
// lib/hooks/useCommentary.ts
import { useEffect, useState } from "react";

export function useCommentary() {
  const [commentaries, setCommentaries] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource("/api/commentary");

    eventSource.onopen = () => {
      setIsConnected(true);
      setError(null);
    };

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setCommentaries((prev) => [data, ...prev].slice(0, 50)); // Keep last 50 messages
    };

    eventSource.onerror = () => {
      setIsConnected(false);
      setError("Connection lost. Attempting to reconnect...");
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return { commentaries, isConnected, error };
}
