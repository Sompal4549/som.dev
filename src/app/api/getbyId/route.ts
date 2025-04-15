// export default async function handler(req, res) {
//   const { query } = req.query;

//   try {
//     const response = await fetch(`https://api.unsplash.com/photos/${query}`, {
//       headers: {
//         Authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}`,
//       },
//     });
//     const data = response.json();
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch from Unsplash" });
//   }
// }
import { NextRequest } from 'next/server';
 
export async function GET(request: NextRequest) {
  // const response = await fetch('https://example.com/api/data', {
  //   // Optional: forward some headers, add auth tokens, etc.
  //   headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
  // });
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get('id');
     const response = await fetch(
      `https://api.unsplash.com/photos/${id}`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}`,
        },
      }
    );
  // Transform or forward the response
  const data = await response.json();
  // const transformed = { ...data, source: 'proxied-through-nextjs' };
 
  return new Response(JSON.stringify(data), {
    status:201,
    headers: { 'Content-Type': 'application/json' },
  });
}
