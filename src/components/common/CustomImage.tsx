import { styled } from "@mui/material";
import React from "react";

const CustomImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <Image {...props} />;
};

export default CustomImage;

const Image = styled("img")(() => ({}));
