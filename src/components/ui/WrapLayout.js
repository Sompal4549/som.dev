import { Box } from "@chakra-ui/react";
import React from "react";

const WrapLayout = ({ children, width, mx }) => {
  return (
    <Box w="100%" maxW={width || 1200} mx={mx || "auto"} as="main">
      {children}
    </Box>
  );
};

export default WrapLayout;
