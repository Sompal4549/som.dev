"use client";
// imports
import { useCartContext } from "../Cart/CartStore";
import {
  Accordion,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  For,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";

import { nanoid } from "nanoid";
import Link from "next/link";

/**
 *
 * @param {*} param0
 * @returns
 */
const Products = ({ products }) => {
  const items = Object.groupBy(products, (item) => item.category);
  // console.log(items, "items");
  const {
    itemsInCart,
    setItemsInCart,
    addItemsToCart,
    removeItem,
    getTotalPrize,
  } = useCartContext();
  return (
    <>
      <Box maxW={1200} mx="auto" width="100%">
        <Accordion.Root
          collapsible
          defaultValue={[Object.keys(items)[0]]}
          multiple
          lazyMount
        >
          {Object.keys(items).map((name, index) => {
            return (
              <Accordion.Item key={name} value={name} my="2rem">
                <Accordion.ItemTrigger
                  display="flex"
                  justifyContent="space-between"
                >
                  <Heading
                    fontSize="3rem"
                    fontWeight="bold"
                    marginBottom="1rem"
                  >
                    {name.toUpperCase()}
                  </Heading>
                  <Accordion.ItemIndicator fontSize="2rem" />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Accordion.ItemBody>
                    <Stack gap="4" direction="row" wrap="wrap" marginTop="1rem">
                      <For each={items[name]}>
                        {(product) => (
                          <Card.Root
                            width={{ base: "100%", sm: "360px" }}
                            variant="subtle"
                            key={product.id}
                          >
                            <Box>
                              <Image
                                width="100%"
                                src={product.image}
                                alt={product.title}
                                height="300px"
                                maxH="300px"
                              />
                            </Box>
                            <Card.Body gap="2">
                              <Link
                                href={`./products/${product.id}`}
                                style={{ display: "block" }}
                              >
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
                                    {product.rating.count < 50
                                      ? "items left"
                                      : "left"}
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
                              <Link
                                href={`./products/${product.id}`}
                                style={{ display: "block" }}
                              >
                                Buy now
                              </Link>
                              <Button
                                variant="ghost"
                                onClick={() => addItemsToCart(product)}
                              >
                                Add to cart
                              </Button>
                            </Card.Footer>
                          </Card.Root>
                        )}
                      </For>
                    </Stack>
                  </Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            );
          })}
        </Accordion.Root>
      </Box>
    </>
  );
};

export default Products;
