import React from "react";
import { LiTag } from "./styled";

function LiItems({ objCity }) {
  return <LiTag>{objCity.city}</LiTag>;
}

export default LiItems;
