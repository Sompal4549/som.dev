import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  For,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import Link from "next/link";
import Blogs from "@/components/ui/Blogs";
import Products from "@/components/ui/Products";

/**
 *
 * @returns
 */
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
  const blogs = await stat.json();
  // console.log(blog, "sgjjioj");
  return (
    <>
      <div>
        <Box id="blogs" className="vercel-blogs" as="section">
          <Blogs blogs={blogs} />
        </Box>
        <hr />
        <Box id="products" className="vercel-products" as="section">
          <Products products={products} />
        </Box>
      </div>
    </>
  );
}
