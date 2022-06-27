import React from "react";
import LiItems from "../LiItems/LiItems";
import { UlTag } from "./styled";

function UlListData({ listData, handleClick }) {
  return (
    <UlTag>
      {listData.map((objCity) => {
        return (
          <LiItems
            key={objCity.id}
            objCity={objCity}
            handleLiClick={() => handleClick(objCity.city)}
          />
        );
      })}
    </UlTag>
  );
}

export default UlListData;
