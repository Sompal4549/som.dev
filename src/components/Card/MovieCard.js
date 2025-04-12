"use client";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
// import { Image } from "@chakra-ui/next-js";
import React from "react";
import { Link } from "@chakra-ui/react";
import LazyImage from "../Images/LazyImage";
import { nanoid } from "nanoid";

const MovieCard = ({ movie }) => {
  const style = {
    textShadow: "0px 0px 5px #000000",
    marginBottom: "0.5rem",
  };
  return (
    <Box maxWidth={1200} width="100%" mx="auto" px={{ base: "20px", md: "0" }}>
      <Flex
        className="movie"
        width="100%"
        pos="relative"
        flexDirection="column"
        alignItems={{ base: "flex-start", sm: "center" }}
      >
        <Box className="movie-intro" width={{ base: "99%", sm: "90%" }}>
          <Image
            className="movie-backdrop"
            src={`https://image.tmdb.org/t/p/original${
              movie ? movie.backdrop_path : ""
            }`}
            width="100%"
            height={{ base: "400px", md: "600px", lg: "690px" }}
            objectFit="cover"
            objectPosition="0 10%"
            alt=""
          />
        </Box>
        <Flex
          alignItems="center"
          width="75%"
          pos="relative"
          bottom="300px"
          className="movie-detail"
        >
          <Box className="movie-detailLeft" mr={{ base: "80px", lg: "30px" }}>
            <Box className="movie-posterBox">
              <Image
                className="movie-poster"
                pos="relative"
                left={{ sm: "-20px", md: "-30px", lg: "-60px" }}
                width="300px"
                height="400px"
                rounded="10px"
                alt=""
                boxShadow="rgba(0,0,0,0.86) 0p 22px 40px 6px"
                src={`https://image.tmdb.org/t/p/original${
                  movie ? movie.poster_path : ""
                }`}
              />
            </Box>
          </Box>
          <Flex
            flexDir="column"
            height="450px"
            justifyContent="space-between"
            className="movie-detailRight"
            color="#fff"
          >
            <Box className="movie-detailRightTop">
              <Box
                pt={{ base: "50px", sm: "none" }}
                className="movie-name"
                text-shadow="0px 0px 5px #000000"
                fontWeight={700}
                fontSize={{
                  base: "1.8rem",
                  sm: "2.2rem",
                  md: "2.6rem",
                  lg: "3.5rem",
                }}
                {...style}
              >
                {movie.title}
              </Box>
              <Box {...style} className="movie-tagline" fontSize="1.2rem">
                {movie.tagline ? movie.tagline : ""}
              </Box>
              <Box {...style} className="movie-rating">
                {movie ? movie.vote_average : ""} <i className="fas fa-star" />
                <Text ml="1rem" as="span" className="movie-voteCount">
                  {"(" + movie.vote_count + ") votes"}
                </Text>
              </Box>
              <Box {...style} className="movie-runtime">
                {movie.runtime ? movie.runtime + " mins" : ""}
              </Box>
              <Box {...style} className="movie-releaseDate">
                {movie.release_date
                  ? "Release date: " + movie.release_date
                  : ""}
              </Box>
              <Flex
                className="movie-genres"
                h={{ sm: "fit-content", md: "auto" }}
                m="1.5rem 0"
                flexWrap={{ sm: "wrap", md: "wrap", lg: "nowrap" }}
                gap={{ sm: "1.1rem", md: "unset" }}
              >
                {movie && movie.genres
                  ? movie.genres.map((genre, index) => (
                      <Box {...style} key={nanoid()}>
                        <Text
                          as="span"
                          p={{ sm: "0.4rem 0.7rem", md: "0.25rem" }}
                          border={{
                            sm: "1px solid white",
                            md: "2px solid #fff",
                          }}
                          rounded={{ base: "16px", md: 20 }}
                          mr="1.2rem"
                          m={{ base: "52px 10px 34px -15px", md: "auto" }}
                          {...style}
                          className="movie-genre"
                        >
                          {genre.name}
                        </Text>
                      </Box>
                    ))
                  : ""}
              </Flex>
            </Box>
            <Box
              m={{ base: "1.7rem 0", sm: "5.5rem", md: "3rem 0" }}
              flex="0.8"
              className="movie-detailRightBottom"
            >
              <Flex
                pos="relative"
                alignItems="center"
                className="overviewText"
                fontSize="1.5rem"
                mb="1.25rem"
                fontWeight="600"
              >
                Overview
              </Flex>
              <Box ml="auto">{movie ? movie.overview : ""}</Box>
            </Box>
          </Flex>
        </Flex>
        <Flex
          justifyContent="space-between"
          width={{ base: "100%", sm: "75%" }}
          pos="relative"
          flexDir={{ base: "column", sm: "row" }}
          left={{ base: "30px", sm: "unset" }}
          bottom={{ base: "40px", md: "120px" }}
          className="movie-links"
        >
          <Box ml={{ base: "30px", sm: "0" }} className="movie-heading">
            Useful Links
          </Box>
          {movie && movie.homepage && (
            <Link
              href={movie.homepage}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Text>
                <Text
                  as="span"
                  justifyContent="center"
                  alignItems="center"
                  padding={{ base: "1rem 4.8rem", sm: "1rem 2rem" }}
                  w="150px"
                  m={{ base: "10px 0 5px", base: "none" }}
                  borderRadius="20px"
                  cursor="pointer"
                  h="40px"
                  display="flex"
                  color="#000"
                  fontWeight="bold"
                  bgColor="rgb(255, 0, 0)"
                  className="movie-homeButton movie-Button"
                >
                  Homepage{" "}
                  <Text
                    as="i"
                    ml="1.4rem"
                    className="newTab fas fa-external-link-alt"
                  >
                    <FaExternalLinkAlt />
                  </Text>
                </Text>
              </Text>
            </Link>
          )}
          {movie && movie.imdb_id && (
            <Link
              href={"https://www.imdb.com/title/" + movie.imdb_id}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Box>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  padding={{ base: "0.6rem 4.8rem", sm: "0.8rem 2rem" }}
                  w="150px"
                  m={{ base: "10px 0 5px", base: "none" }}
                  borderRadius="20px"
                  height="40px"
                  cursor="pointer"
                  bg="#f3ce13"
                  color="#000"
                  fontWeight="bold"
                  className="movie-imdbButton movie-Button"
                >
                  IMDb
                  <Text ml="1.4rem" className="newTab fas fa-external-link-alt">
                    <FaExternalLinkAlt />
                  </Text>
                </Flex>
              </Box>
            </Link>
          )}
        </Flex>
        {movie.production_companies && (
          <Box ml={{ base: "30px", sm: "0" }} className="movie-heading">
            <Heading as="h3">Production companies:</Heading>
          </Box>
        )}

        <Flex
          alignItems={{ base: "flex-start", sm: "flex-end" }}
          mb="4rem"
          justifyContent="center"
          className="movie-production"
          width="85%"
          flexDir={{ base: "column", sm: "row" }}
          overflowX={{ md: "scroll", lg: "unset" }}
        >
          {movie &&
            movie.production_companies &&
            movie.production_companies.map((company, index) => (
              <Box key={index}>
                {company.logo_path && (
                  <Flex
                    flexDir="column"
                    alignItems="center"
                    justifyContent="center"
                    className="productionCompanyImage"
                  >
                    <LazyImage
                      width={200}
                      alt=""
                      margin="2rem"
                      className="movie-productionComapany"
                      src={
                        "https://image.tmdb.org/t/p/original" +
                        company.logo_path
                      }
                    />
                    <Text as="span">{company.name}</Text>
                  </Flex>
                )}
              </Box>
            ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default MovieCard;
