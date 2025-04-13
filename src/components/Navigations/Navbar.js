"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Drawer,
  useDisclosure,
  Portal,
  Show,
  CloseButton,
} from "@chakra-ui/react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = ({ navData }) => {
  const [open, setOpen] = useState(false);
  const btnRef = React.useRef();
  return (
    <Flex
      as="nav"
      p={{ base: "30px 0px", md: "30px 0px" }}
      alignItems="center"
      justifyContent="space-between"
      width="100%"
    >
      <Box alignSelf="flex-start">
        <Link href={navData[0].url}>{navData[0].title}</Link>
      </Box>
      {/* <Show below="md"> */}
      <Drawer.Root
        size={{ base: "full", sm: "xs", md: "small" }}
        placement="right"
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        finalFocusRef={btnRef}
      >
        <Drawer.Trigger>
          <Button
            alignSelf="flex-end"
            // ref={btnRef}
            colorScheme="teal"
            // onClick={onOpen}
            // display={{ base: "block", md: "none" }}
          >
            <GiHamburgerMenu />
          </Button>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content bg="#2D3748">
              <Drawer.CloseTrigger />
              <Drawer.Header>
                {" "}
                <Box>
                  <Link href="/movies">MovieDB clone</Link>
                </Box>
              </Drawer.Header>

              <Drawer.Body>
                <Box
                  as="ul"
                  listStyleType="none"
                  w="70%"
                  display="flex"
                  flexDir="column"
                  justifyContent="flex-end"
                >
                  {navData.map((nav, index) => {
                    if (index == 0) return null;
                    else {
                      return (
                        <Box as="li" p="10px 20px" key={index}>
                          <Link href={nav.url}>{nav.title}</Link>
                        </Box>
                      );
                    }
                  })}
                </Box>
              </Drawer.Body>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
      {/* </Show> */}

      <Box
        as="ul"
        listStyleType="none"
        display={{ base: "none", md: "flex" }}
        justifyContent="flex-end"
        alignSelf="flex-end"
      >
        {navData.map((nav, index) => {
          if (index == 0) return null;
          else {
            return (
              <Box as="li" px="20px" key={index}>
                <Link href={nav.url}>{nav.title}</Link>
              </Box>
            );
          }
        })}
        {/* <Box as="li" px="20px">
          <Link href="/blogs">Blogs</Link>
        </Box>
        <Box as="li" px="20px">
          <Link href="/movies/now_playing">Now Playing</Link>
        </Box>
        <Box as="li" px="20px">
          <Link href="/movies/top_rated">Top Rated</Link>
        </Box>{" "}
        <Box as="li" px="20px">
          <Link href="/movies/popular">Popular</Link>
        </Box>
        <Box as="li" px="20px">
          <Link href="/movies/upcoming">Upcoming</Link>
        </Box> */}
      </Box>
    </Flex>
  );
};
export default Navbar;
