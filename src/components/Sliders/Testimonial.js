"use client";
import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Heading, Image, Skeleton, Text } from "@chakra-ui/react";
import Link from "next/link";
import LazyImage from "../Images/LazyImage";
import { nanoid } from "nanoid";

const Testimonial = ({ movies }) => {
  const additionSetting = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...additionSetting,
  };
  return (
    <Skeleton isLoaded={movies}>
      <Box maxH="80vh">
        <div>
          <Box w="100%" maxWidth="100%" mx="auto">
            <Slider {...additionSetting}>
              {movies.map((movie, index) => {
                return (
                  <Box key={nanoid()} pos="relative" h={500}>
                    <Link href={`/movies/${movie.id}`}>
                      <LazyImage
                        w="100%"
                        alt={`${movie?.title}`}
                        maxWidth="100%"
                        h="500px"
                        objectPosition="top"
                        objectFit="cover"
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                      />
                    </Link>
                    <Box
                      pos="absolute"
                      bottom="0"
                      left="auto"
                      right="auto"
                      w="100%"
                      textAlign="left"
                      zIndex={10}
                      p={{ base: "020px", md: "0 30px" }}
                    >
                      <Heading as="h2">{movie.title}</Heading>
                      <Box className="ratings-and-reldate">
                        <Heading as="h5"> {`${movie.release_date}`}</Heading>
                        <Text>
                          Rating: {`${movie.vote_average}`} <FaStar />{" "}
                          {`(${movie.vote_count})`}
                        </Text>
                      </Box>

                      <Box className="description">
                        <Text>{movie.overview}</Text>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Slider>
          </Box>
        </div>
      </Box>
    </Skeleton>
  );
};

export default Testimonial;
