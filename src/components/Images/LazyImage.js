import { Image } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";

const LazyImage = ({ src, alt, className, onLoad, ...props }) => {
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          observer.unobserve(lazyImage);
        }
      });
    });

    observer.observe(imgRef.current);

    // Clean up function
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Image
      ref={imgRef}
      data-src={src}
      alt={alt}
      className={className}
      onLoad={onLoad}
      {...props}
    />
  );
};

export default LazyImage;
