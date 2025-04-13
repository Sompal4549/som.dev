"use client";

import { Box, Flex, Text, Button, Skeleton } from "@chakra-ui/react";
// import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect, Suspense } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
import useSWR from "swr";
import ScrollTop from "@/components/icon/ScrollTop";
import { nanoid } from "nanoid";
const CardContainer = ({ products, url, content }) => {
  const [flipped, setFlipped] = useState(-1);
  const [page, setPage] = useState(2);
  const [allData, setAllData] = useState([...products]);
  const [totalPages, setTotalPages] = useState(content.total_pages);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/${url}?api_key=395e7cfa60ed93858869b664e028c4fd&language=en&page=${page}`,
    fetcher
  );
  const handleLoadMore = () => {
    // if (!error) {
    setPage(page + 1);
    setAllData((allData) => [...allData, ...data?.results]);
    // }
  };
  // const fetchMoreData = async () => {
  //   setNextPage(page + 1);
  //   const resp = await axios.get(`
  //   https://api.themoviedb.org/3/movie/${
  //     url || "now_playing"
  //   }?api_key=395e7cfa60ed93858869b664e028c4fd&language=en-US&page=${nextPage}`);
  //   setNextPage(page + 1);
  //   setAllData((allData) => [...allData, ...resp.data.results]);
  // };
  return (
    <Suspense fallback={<Skeleton />}>
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gridGap="20px"
      >
        {allData.map((product, id) => {
          return (
            <Skeleton key={nanoid()} isLoaded={product}>
              {/* <Skeleton isLoaded={product}> */}
              {/* <Link key={id} href={`${product.id}`}> */}
              {/* <> */}
              {/* Hello world */}
              <Box
                className="flip-card"
                key={nanoid()}
                bg="transparent"
                style={{ perspective: "1000px" }}
                width="300px"
                height="350px"
                // transform={flipped === id ? "rotateY(180deg)" : "none"}
              >
                <Box
                  className="flip-card-inner"
                  w="100%"
                  h="100%"
                  pos="relative"
                  transition="transform 0.5s"
                  style={{ transformStyle: "preserve-3d" }}
                  transform={flipped === id ? "rotateY(180deg)" : "none"}
                  textAlign="center"
                  boxShadow="0 4px 8px 0 rgba(0,0,0,0.2)"
                >
                  <LazyBackground
                    className="flip-card-front"
                    w="100%"
                    h="100%"
                    pos="absolute"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                    // backgroundImage={`https://image.tmdb.org/t/p/original/${product.poster_path}`}
                    backgroundPosition="auto"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover !important"
                    src={`https://image.tmdb.org/t/p/original/${product?.poster_path}`}
                    // bg="blue"
                    onMouseEnter={() => setFlipped(id)}
                  ></LazyBackground>
                  <Box
                    className="flip-card-back"
                    pos="absolute"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                    bg="#fff"
                    height="100%"
                    width="100%"
                    transform="rotateY(180deg)"
                    color="#000"
                    textAlign="left"
                    padding="20px"
                  >
                    <Flex w="100%" justifyContent="space-between">
                      <Link key={nanoid()} href={`${product?.id}`}>
                        <Text fontWeight="bold">
                          {product?.name || product?.title}
                        </Text>
                      </Link>
                      <Button
                        p="5px"
                        variant="outline"
                        bg="#3652B8"
                        border="none"
                        onClick={() => setFlipped(null)}
                      >
                        X
                      </Button>
                    </Flex>
                    <Link key={nanoid()} href={`${product?.id}`}>
                      {product?.price && <Text>{product?.price}</Text>}
                      <Text textAlign="left" mt="10px" noOfLines="8">
                        {product?.description || product?.overview}
                      </Text>
                    </Link>
                  </Box>
                </Box>
              </Box>
              {/* </> */}
              {/* </Link> */}
              {/* </Skeleton> */}
            </Skeleton>
          );
        })}
      </Flex>
      {page < totalPages + 1 && (
        <Flex justifyContent="center" padding="20px">
          <Button onClick={handleLoadMore}>LoadMore</Button>
        </Flex>
      )}
      <ScrollTop />
    </Suspense>
  );
};

export default CardContainer;

const LazyBackground = ({ src, placeholder, alt, children, ...props }) => {
  const [imageSrc, setImageSrc] = useState(placeholder);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImageSrc(src);
  }, [src]);

  return (
    <Box
      backgroundImage={`url(${imageSrc})`}
      backgroundSize={"cover"}
      backgroundPosition="center"
      alt={alt}
      {...props}
    >
      {children}
    </Box>
  );
};
