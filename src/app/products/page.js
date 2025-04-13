import Products from "@/components/ui/Products";

export default async function Page() {
  const dynamic = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  const products = await dynamic.json();
  return (
    <>
      <div>
        <Products products={products} />
      </div>
    </>
  );
}
