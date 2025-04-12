import { Button } from "@chakra-ui/react";
import React from "react";

const Loadmore = ({ onClick, text, ...props }) => {
  return (
    <Button onClick={onClick} {...props}>
      {text}
    </Button>
  );
};

export default Loadmore;
