import React, { FC } from "react";

interface CardProps {
  width?: string;
  height?: string;
}
const Card: FC<CardProps> = ({ width, height }) => {
  return <div style={{ width, height, border: "gray" }}></div>;
};
export default Card;
