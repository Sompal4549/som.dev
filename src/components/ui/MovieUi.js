"use client";
import React from "react";
import { Box, Text } from "@chakra-ui/react";
import CardContainer from "../Layout/CardContainer";
const MovieUi = ({ content, page }) => {
  return (
    <Box>
      <Box color="#fff">
        <CardContainer
          products={content.results}
          content={content}
          page={page}
          url={"upcoming"}
        />
      </Box>
    </Box>
  );
};

export default MovieUi;
