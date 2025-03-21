"use client";
import { useCommentary } from "@/hooks/use-commetary";
import { Alert, Box } from "@chakra-ui/react";
import CommentaryCard from "./CommentaryCard";

export default function CommentaryFeed() {
  const { commentaries, isConnected, error } = useCommentary();
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Live football Commentary</h1>
        <p>{isConnected ? "Live" : "Disconnected"}</p>
        {error && <Alert>{error}</Alert>}
      </div>
      <Box className="h-[600px] rounded-md border p-4">
        {commentaries.length === 0 ? (
          <Box className="text-center text-muted-foreground py-8">
            Waiting for Commentary...
          </Box>
        ) : (
          <Box className="space-y-4">
            {commentaries.map((commentary) => {
              return (
                <CommentaryCard key={commentary.id} commentary={commentary} />
              );
            })}
          </Box>
        )}
      </Box>
    </div>
  );
}
