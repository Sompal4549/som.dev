import { nanoid } from "nanoid";
import Link from "next/link";

export default async function Page() {
  // Since this page is dynamic, it will run through a Vercel Function
  const dynamic = await fetch("https://api.vercel.app/products", {
    cache: "no-store",
  });
  const products = await dynamic.json();

  // Cache the static data and avoid slow origin fetches
  const stat = await fetch("https://api.vercel.app/blog", {
    next: {
      revalidate: 3600, // 1 hour
    },
  });
  const blog = await stat.json();
  // console.log(blog, "sgjjioj");
  return (
    <>
      <div>
        {blog?.map((bl, index) => {
          return (
            <p key={nanoid()}>
              <Link href={`blogs/${bl.id}`}>{bl.title}</Link>
            </p>
          );
        })}
        <hr />
        {products?.map((bl, index) => {
          return (
            <p key={nanoid()}>
              {bl.name}, {bl.category}
            </p>
          );
        })}
      </div>
    </>
  );
}
