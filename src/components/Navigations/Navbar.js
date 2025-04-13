"use client";
import React from "react";
import {
  Box,
  Button,
  Flex,
  List,
  ListItem,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Show,
} from "@chakra-ui/react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = ({ navData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      <Button
        alignSelf="flex-end"
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        display={{ base: "block", md: "none" }}
      >
        <GiHamburgerMenu />
      </Button>
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
      <Show below="md">
        <Drawer.Root
          size={{ base: "full", sm: "xs", md: "small" }}
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
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
            </Drawer.Content>
          </Drawer.Positioner>
        </Drawer.Root>
      </Show>
    </Flex>
  );
};
export default Navbar;
