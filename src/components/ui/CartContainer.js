"use client";
// imports
import React, { useContext } from "react";
// imports
import { useCartContext } from "../Cart/CartStore";
import {
  Accordion,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Flex,
  For,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { nanoid } from "nanoid";
import Link from "next/link";

/**
 *
 * @returns
 */
const CartContainer = () => {
  const {
    itemsInCart,
    setItemsInCart,
    addItemsToCart,
    removeItem,
    getTotalPrize,
  } = useCartContext();
  // console.log(
  //   itemsInCart,
  //   setItemsInCart,
  //   addItemsToCart,
  //   removeItem,
  //   getTotalPrize
  // );
  // const items = Object.groupBy(itemsInCart, (item) => item.category);
  return (
    <Box>
      <Heading>Cart</Heading>
      <Box maxW={1200} mx="auto" width="100%">
        <Flex gap="1rem">
          <Stack gap="4" direction="column" wrap="wrap" marginTop="1rem">
            <For each={itemsInCart}>
              {(product) => (
                <>
                  <Card.Root flexDirection="row" overflow="hidden" maxW="xl">
                    <Image
                      objectFit="cover"
                      maxW="200px"
                      src={product.image}
                      alt={product.title}
                    />
                    <Box>
                      <Card.Body>
                        <Card.Title mb="2">
                          <Text lineClamp={1}>
                            {product.title || product.name}
                          </Text>
                        </Card.Title>
                        <Card.Description>
                          <Text lineClamp={1}>{product.description}</Text>
                        </Card.Description>
                        <Text
                          textStyle="2xl"
                          fontWeight="medium"
                          letterSpacing="tight"
                          mt="2"
                        >
                          &#8377; {product.price}
                        </Text>
                        {product?.rating?.count && (
                          <Badge>
                            {product.rating.count}{" "}
                            {product.rating.count < 50 ? "items left" : "left"}
                          </Badge>
                        )}
                        {product?.stock && (
                          <Badge>
                            {product.stock}{" "}
                            {product.stock < 50 ? "items left" : "left"}
                          </Badge>
                        )}
                      </Card.Body>
                      <Card.Footer gap="2">
                        {/* <Button variant="solid">Buy now</Button> */}
                        <Button
                          variant="ghost"
                          onClick={() => removeItem(product.id)}
                        >
                          delete from cart
                        </Button>
                      </Card.Footer>
                    </Box>
                  </Card.Root>
                  {/* <Card.Root
                  width={{ base: "100%", sm: "360px" }}
                  variant="subtle"
                  key={product.id}
                >
                  <Box>
                    <Image width="100%" height="300px" maxH="300px" />
                  </Box>
                  <Card.Body gap="2">
                    <Link href={`./products/${product.id}`} display="block">
                      <Card.Title maxW="100%">
                        <Text lineClamp={2}>
                          {product.title || product.name}
                        </Text>
                      </Card.Title>
                      <Card.Description lineClamp={3}>
                        {product.description}
                      </Card.Description>
                      <Text
                        textStyle="2xl"
                        fontWeight="medium"
                        letterSpacing="tight"
                        mt="2"
                      >
                        &#8377; {product.price}
                      </Text>
                      {product?.rating?.count && (
                        <Badge>
                          {product.rating.count}{" "}
                          {product.rating.count < 50 ? "items left" : "left"}
                        </Badge>
                      )}
                      {product?.stock && (
                        <Badge>
                          {product.stock}{" "}
                          {product.stock < 50 ? "items left" : "left"}
                        </Badge>
                      )}
                    </Link>
                  </Card.Body>
                  <Card.Footer gap="2">
                    <Button variant="solid">Buy now</Button>
                    <Button
                      variant="ghost"
                      onClick={() => removeItem(product.id)}
                    >
                      delete from cart
                    </Button>
                  </Card.Footer>
                </Card.Root> */}
                </>
              )}
            </For>
          </Stack>
          <Stack gap="4" direction="column" wrap="wrap" marginTop="1rem">
            <Heading as="h3">
              The total amount is &#8377; {getTotalPrize()}
            </Heading>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};

export default CartContainer;
