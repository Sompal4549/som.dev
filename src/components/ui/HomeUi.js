"use client";
//imports
import { Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

/**
 *
 * @returns
 */
const HomeUi = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <Stack direction="column" gap="1rem" textAlign="center">
        <Heading
          className="text-5xl font-bold mb-4"
          fontSize="4rem"
          lineHeight="4rem"
        >
          Hi, I'm Sompal Kumar
        </Heading>
        <Text fontSize="2rem" className="text-xl mb-6" my="1rem">
          UI Developer & Learner
        </Text>
        <Link
          style={{ fontSize: "1.5rem", color: "black", textAlign: "center" }}
          href="https://github.com/Sompal4549"
          className="text-blue-500 px-6 py-3 rounded-full font-semibold transition"
        >
          View My Work
        </Link>
      </Stack>
    </section>
  );
};

export default HomeUi;
