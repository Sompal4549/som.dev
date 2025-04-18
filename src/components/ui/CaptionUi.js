"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  IconButton,
  Image,
  Stack,
} from "@chakra-ui/react";
//imports
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { fabric } from "fabric";
import { BsSquare } from "react-icons/bs";
import { BiCircle, BiDownload, BiNotepad } from "react-icons/bi";
import { useSearchParams } from "next/navigation";

/**
 *
 * @returns
 */
const CaptionUi = ({ id }) => {
  const canvasRef = useRef(null);
  const fabricRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  // declaring states
  const [image, setImage] = useState({});
  const [error, setError] = useState(null);
  // fetch function to fetch the image
  const fetchImage = async () => {
    // try {
    //   const response = await fetch(
    //     `https://api.unsplash.com/photos/${id}?client_id=${process.env.NEXT_PRIVATE_ACCESS_KEY}`
    //   );
    //   const data = await response.json();
    //   // console.log(data);
    //   // if (data.ok) {
    //   setImage(data);
    //   // }
    // } catch (err) {
    //   setError(err);
    // }

    await fetch(`/api/getbyId?id=${id}`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => setImage(data))
      .catch((err) => setError(err));
  };
  // useEffect(() => {
  // }, []);

  // canvas
  useEffect(() => {
    if (id) {
      // fetching image
      fetchImage();
    }

    // setting canvas
    if (canvasRef.current) {
      const initCanvas = new fabric.Canvas(canvasRef.current, {
        width: 500,
        height: 500,
      });
      fabricRef.current = canvas;
      // (initCanvas.background = `url(${image?.urls?.small})`),
      initCanvas.background = "#fff";
      // initCanvas.backgroundImage = `url(${image?.urls?.small})`;
      initCanvas.renderAll();
      setCanvas(initCanvas);

      return () => {
        initCanvas.dispose();
      };
    }
  }, []);

  const addImageToCanvas = () => {
    // const canvas = fabricRef.current;
    if (!canvas) return;

    new fabric.Image.fromURL(
      `${image?.urls?.small}`,
      (img) => {
        img.set({
          left: 0,
          top: 0,
          scaleX: 1,
          scaleY: 1,
        });
        console.log(img);
        canvas.add(img);
        canvas.sendToBack(img);
        canvas.setActiveObject(img);
        canvas.renderAll();
      },
      { crossOrigin: "anonymous" }
    );
  };
  const addRectangle = () => {
    if (canvas) {
      const rect = new fabric.Rect({
        top: 100,
        left: 50,
        width: 100,
        height: 50,
        fill: "#084d42",
      });

      canvas.add(rect);
      canvas.bringToFront(rect);
    }
  };
  const addCircle = () => {
    const circle = new fabric.Circle({
      top: 90,
      left: 0,
      // width: 100,
      // height: 50,
      radius: 50,
      fill: "#084d42",
    });

    if (canvas) {
      canvas.add(circle);
      canvas.bringToFront(circle);
    }
  };
  const addTextBox = () => {
    const textbox = new fabric.Textbox("Add caption like a pro", {
      left: 100,
      top: 100,
      width: 200,
      fontSize: 20,
      fill: "#000",
      editable: true,
      backgroundColor: "#fff",
      borderColor: "#000",
      cornerColor: "#00f",
      cornerSize: 8,
      transparentCorners: false,
    });
    if (canvas) {
      canvas.add(textbox);
      canvas.setActiveObject(textbox);
      canvas.bringToFront(textbox);
      canvas.renderAll();
    }
  };
  const exportImage = () => {
    try {
      const dataURL = canvas.toDataURL({ format: "jpeg", quality: 1 });
      const link = document.createElement("a");
      link.download = "canvas-export.jpg";
      link.href = dataURL;
      link.click();
    } catch (err) {
      alert("Export failed: Possible CORS issue with external images.");
      console.error("Export error:", err);
    }
  };

  return (
    <Box>
      {" "}
      <Stack direction="row" flexWrap="wrap">
        <Card.Root overflow="hidden" gap="2">
          <Image
            h={400}
            src={image?.urls?.small || image?.urls?.small_s3}
            alt={image.alt_description}
          />
        </Card.Root>
        <Card.Root overflow="hidden" gap="2">
          <Box
            as="canvas"
            // backgroundImage={`url(${image?.urls?.small})`}
            id="canvas"
            width="500px"
            height="500px"
            ref={canvasRef}
          ></Box>
        </Card.Root>
        <div className="Toolbar darkmode">
          <ButtonGroup>
            <IconButton onClick={addRectangle} variant="ghost" size="md">
              <BsSquare />
            </IconButton>
            <IconButton onClick={addCircle} variant="ghost" size="md">
              <BiCircle />
            </IconButton>
            <IconButton onClick={exportImage}>
              <BiDownload />
            </IconButton>
            <IconButton onClick={addTextBox}>
              <BiNotepad />
            </IconButton>
            <IconButton
              onClick={addImageToCanvas}
              className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
            >
              Add Image
            </IconButton>
          </ButtonGroup>
        </div>
      </Stack>
    </Box>
  );
};

export default CaptionUi;
