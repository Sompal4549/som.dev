"use client";
// imports
import React from "react";
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
import { FaTrash } from "react-icons/fa6";

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
  return (
    <Box>
      <Heading>Cart</Heading>
      <Box maxW={1200} mx="auto" width="100%">
        <Flex
          gap="1rem"
          flexWrap="wrap"
          flexDir={{ base: "column", md: "row" }}
        >
          <Stack gap="4" direction="column" wrap="wrap" marginTop="1rem">
            <For each={itemsInCart}>
              {(product) => (
                <Card.Root
                  key={nanoid()}
                  flexDirection="row"
                  overflow="hidden"
                  maxW="xl"
                >
                  <Image
                    objectFit="cover"
                    maxW="200px"
                    src={product.image}
                    alt={product.title}
                  />
                  <Box>
                    <Card.Body>
                      <Card.Title mb="2">
                        <Text as="span" lineClamp={1}>
                          {product.title || product.name}
                        </Text>
                      </Card.Title>
                      <Card.Description>
                        <Text as="span" lineClamp={1}>
                          {product.description}
                        </Text>
                      </Card.Description>
                      <Text
                        textStyle="2xl"
                        fontWeight="medium"
                        letterSpacing="tight"
                        mt="2"
                        as="span"
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
                        <FaTrash />
                      </Button>
                      <Badge>{product.itemInCart}</Badge>
                      <Button
                        variant="solid"
                        onClick={() => addItemsToCart(product)}
                      >
                        +
                      </Button>
                    </Card.Footer>
                  </Box>
                </Card.Root>
              )}
            </For>
          </Stack>
          <Stack gap="4" direction="column" wrap="wrap" marginTop="1rem">
            <Card.Root w="100%">
              <Card.Body gap="2">
                <Card.Title mt="2">
                  {" "}
                  The total amount is &#8377; {getTotalPrize()}
                </Card.Title>
                <Card.Description>Proceed to checkout</Card.Description>
              </Card.Body>
              <Card.Footer justifyContent="flex-end">
                <Text fontWeight="bold">Click to Pay</Text>
                <Button>Pay & Order</Button>
              </Card.Footer>
            </Card.Root>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};

export default CartContainer;
