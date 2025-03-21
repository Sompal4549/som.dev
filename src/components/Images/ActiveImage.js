"use client";
import { Image } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const ActiveImage = () => {
  const [isActive, setIsActive] = useState(false);
  let backgroundClassName = "background";
  let pictureClassname = "picture";
  if (isActive) {
    pictureClassname += "picture--active";
  } else {
    backgroundClassName += " background--active";
  }
  return (
    <div className={backgroundClassName} onClick={() => setIsActive(false)}>
      <Image
        onClick={(e) => {
          e.stopPropagation();
          setIsActive(true);
        }}
        className={pictureClassname}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
};

export default ActiveImage;
