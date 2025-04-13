//imports

import { Box } from "@chakra-ui/react";
import Navbar from "@/components/Navigations/Navbar";
import WrapLayout from "@/components/ui/WrapLayout";
import HomeUi from "@/components/ui/HomeUi";

/**
 *
 * @returns
 */
const Page = () => {
  const navData = [
    { title: "Home", url: "/" },
    { title: "Products", url: "/products" },
    { title: "Cart", url: "/cart" },
    // { title: "MovieDb", url: "/movies" },
    { title: "Blogs", url: "/blogs" },
    { title: "Commentary", url: "/commentary" },
  ];
  return (
    <WrapLayout>
      <div className="font-[family-name:var(--font-geist-sans)]">
        <Box>
          <Navbar navData={navData} />
        </Box>
        <HomeUi />
      </div>
    </WrapLayout>
  );
};

export default Page;
