import React from "react";
import { LiTag } from "./styled";

function LiItems({ objCity, handleLiClick }) {
  return <LiTag onClick={handleLiClick}>{objCity.city}</LiTag>;
}

export default LiItems;
