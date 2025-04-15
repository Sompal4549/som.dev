// export default async function handler(req, res) {
//   const { query } = req.query;

//   try {
//     const response = await fetch(
//       `https://api.unsplash.com/search/photos?query=${query}`,
//       {
//         headers: {
//           Authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}`,
//         },
//       }
//     );

//     const data = await response.json();
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch from Unsplash" });
//   }
// }
// import { NextRequest } from "next/server";

// export function GET(request: NextRequest) {
//   const searchParams = request.nextUrl.searchParams;
//   const query = searchParams.get("query"); // e.g. `/api/search?query=hello`

//   return new Response(
//     JSON.stringify({ result: `You searched for: ${query}` }),
//     {
//       headers: { "Content-Type": "application/json" },
//     }
//   );
// }

import { NextRequest } from 'next/server';
 
export async function GET(request: NextRequest) {
  // const response = await fetch('https://example.com/api/data', {
  //   // Optional: forward some headers, add auth tokens, etc.
  //   headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
  // });
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');
     const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}`,
        },
      }
    );
  // Transform or forward the response
  const data = await response.json();
  // const transformed = { ...data, source: 'proxied-through-nextjs' };
 
  return new Response(JSON.stringify(data.results), {
    status:201,
    headers: { 'Content-Type': 'application/json' },
  });
}
