"use client";
import { useState } from "react";
import { sculptureList } from "../data/sculputureList";
import { Image } from "@chakra-ui/react";
export default function SculptureGallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  function handleMoreClick() {
    setShowMore(!showMore);
  }
  function handleClick() {
    if (index === sculptureList.length) {
      setIndex(0);
    }
    setIndex(index + 1);
  }
  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h2>
      <h3>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h3>
      <button onClick={handleMoreClick}>{showMore ? "Hide" : "Show"}</button>
      {showMore && <p>{sculpture.description}</p>}
      <Image src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
