// imports
import React from "react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  For,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import Link from "next/link";

/**
 *
 * @param {*} param0
 * @returns
 */
const Blogs = ({ blogs }) => {
  return (
    <Stack gap="4" direction="row" wrap="wrap" marginTop="1rem">
      <For each={blogs}>
        {(blog) => (
          <Card.Root width="320px">
            <Card.Body gap="2">
              {/* <Avatar.Root size="lg" shape="rounded">
                <Avatar.Image src="https://picsum.photos/200/300" />
                <Avatar.Fallback name="Nue Camp" />
              </Avatar.Root> */}
              <Card.Title mt="2">{blog.title}</Card.Title>
              <Text color="fg.muted" textStyle="sm">
                {blog.author}
              </Text>
              <HStack mt="4">
                <Badge>{blog.category}</Badge>
              </HStack>
              <Card.Description>{blog.content}</Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button variant="outline">View</Button>
              <Button>Join</Button>
            </Card.Footer>
          </Card.Root>
        )}
      </For>
    </Stack>
  );
};

export default Blogs;
