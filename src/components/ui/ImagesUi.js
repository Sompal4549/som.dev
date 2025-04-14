"use client";
import { Box, Heading, Image, Input, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { createApi } from "unsplash-js";

const ImagesUi = ({}) => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };
  const fetchImages = async () => {
    // const accessKey = ;

    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${
          query || "cat"
        }&client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`
      );
      const data = await response.json();
      setImages(data.results);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchImages();
  }, [query]);
  return (
    <Stack>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input value={query} onChange={handleChange} />
      </form>
      <p className="mt-2">Current Query: {query}</p>
      {images?.map((image, index) => (
        <Box key={index}>
          <Image
            src={image?.urls?.small || image?.urls?.small_s3}
            alt={image.alt_description}
          />
        </Box>
      ))}
      {error?.message}
    </Stack>
  );
};

export default ImagesUi;
