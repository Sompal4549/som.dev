export async function sendcomment({ message, author, type }) {
  if (!message.trim()) return;
  await fetch("/api/commentary", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, author, type }),
  });
}
