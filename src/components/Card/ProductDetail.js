"use client";
import {
  Badge,
  Box,
  Button,
  Card,
  HStack,
  Image,
  RatingGroup,
  Text,
} from "@chakra-ui/react";
import React from "react";

const ProductDetail = ({ item }) => {
  //   console.log(item);
  return (
    <div>
      <Card.Root flexDirection="row" overflow="hidden" height="80vh">
        <Image objectFit="cover" maxW="50%" src={item.image} alt={item.title} />
        <Box>
          <Card.Body>
            <Card.Title mb="2">{item.title}</Card.Title>
            <Box my={4}>
              <Badge>{item.category}</Badge>
            </Box>
            <Card.Description>{item.description}</Card.Description>
            <HStack mt="4">
              <Badge>
                <RatingGroup.Root
                  allowHalf
                  count={5}
                  defaultValue={item.rating.rate}
                  size="sm"
                >
                  <RatingGroup.HiddenInput />
                  <RatingGroup.Control />
                </RatingGroup.Root>
              </Badge>
              <Badge>
                {item.rating.count}{" "}
                {item.rating.count < 50 ? "items left" : "left"}
              </Badge>
            </HStack>
            <Text
              textStyle="2xl"
              fontWeight="medium"
              letterSpacing="tight"
              mt="2"
            >
              &#8377; {item.price}
            </Text>
          </Card.Body>
          <Card.Footer>
            <Button>Buy {item.title.slice(0, 20)}...</Button>
          </Card.Footer>
        </Box>
      </Card.Root>
    </div>
  );
};

export default ProductDetail;
