"use client";
// imports
import { Button, Card, Image, Input, Stack } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

/**
 *
 * @param {*} param0
 * @returns
 */
const ImagesUi = ({}) => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };
  const fetchImages = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${
          query || "cat"
        }&client_id=${process.env.NEXT_PRIVATE_ACCESS_KEY}`
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
      <Stack gap="4" direction="row" wrap="wrap" marginTop="1rem">
        {images?.map((image, index) => (
          <Card.Root
            maxW="sm"
            overflow="hidden"
            gap="2"
            key={index}
            width="22%"
          >
            <Image
              h={400}
              src={image?.urls?.small || image?.urls?.small_s3}
              alt={image.alt_description}
            />
            <Card.Footer pt={2}>
              <Button
                as={Link}
                href={`/images/${image.id}`}
                variant="solid"
                width="100%"
              >
                Add Captions
              </Button>
            </Card.Footer>
          </Card.Root>
        ))}
      </Stack>
      {error?.message}
    </Stack>
  );
};

export default ImagesUi;
