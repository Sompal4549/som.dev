"use client";

import { Box } from "@chakra-ui/react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      &lt;
    </Box>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      &gt;
    </Box>
  );
}
export { SampleNextArrow, SamplePrevArrow };
