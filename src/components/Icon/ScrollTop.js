import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const ScrollTop = () => {
  const [scroll, setScroll] = useState(false);
  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    const scrollFunction = () => {
      if (document.documentElement.scrollTop > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);
  return (
    <Box width={50} height={50} pos="fixed" top="87%" right="20px">
      {scroll && (
        <Button
          onClick={scrollTop}
          padding="10px"
          background="linear-gradient(45deg, #f15523, #ef3224, #7c3697)"
          color="#fff"
          _hover={{
            background: "linear-gradient(45deg, #f15523, #ef3224, #7c3697)",
            filter: "blur(0.3px)",
          }}
        >
          &gt;
        </Button>
      )}
    </Box>
  );
};

export default ScrollTop;
