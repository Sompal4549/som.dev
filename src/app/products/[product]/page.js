// Imports
import WrapLayout from "@/components/ui/WrapLayout";
import ProductDetail from "@/components/Card/ProductDetail";

const Page = async ({ params }) => {
  const { product } = params;
  const dynamic = await fetch("https://fakestoreapi.com/products", {
    cache: "default",
  });
  const products = await dynamic.json();
  const item = products[Number(product) - 1];
  return (
    <>
      <WrapLayout>
        <ProductDetail item={item} />
      </WrapLayout>
    </>
  );
};
export default Page;
