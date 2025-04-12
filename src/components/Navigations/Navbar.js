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
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Flex
      as="nav"
      p={{ base: "30px 20px", md: "30px 50px" }}
      alignItems="center"
      justifyContent="space-between"
    >
      <Box w="30%">
        <Link href="/movies">MovieDB clone</Link>
      </Box>
      <Button
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
        w="70%"
        justifyContent="flex-end"
      >
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
        </Box>
      </Box>
      <Show below="md">
        <Drawer
          size={{ base: "full", sm: "xs", md: "small" }}
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg="#2D3748">
            <DrawerCloseButton />
            <DrawerHeader>
              {" "}
              <Box>
                <Link href="/movies">MovieDB clone</Link>
              </Box>
            </DrawerHeader>

            <DrawerBody>
              <List
                listStyleType="none"
                w="70%"
                display="flex"
                flexDir="column"
                justifyContent="flex-end"
              >
                <Box as="li" p="10px 20px">
                  <Link href="/movies/now_playing">Now Playing</Link>
                </Box>
                <Box as="li" p="10px 20px">
                  <Link href="/movies/top_rated">Top Rated</Link>
                </Box>{" "}
                <Box as="li" p="10px 20px">
                  <Link href="/movies/popular">Popular</Link>
                </Box>
                <Box as="li" p="10px 20px">
                  <Link href="/movies/upcoming">Upcoming</Link>
                </Box>
              </List>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Show>
    </Flex>
  );
};
export default Navbar;
