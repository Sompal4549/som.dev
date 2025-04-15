//imports
import React from "react";
import CaptionUi from "@/components/ui/CaptionUi";

/**
 *
 * @param {*} param0
 * @returns
 */
const ImagePage = async ({ params }) => {
  const { image } = await params;
  return (
    <div>
      <CaptionUi id={image} />
    </div>
  );
};

export default ImagePage;
