import React, { useContext } from "react";
import { Context } from "../../context/Context";
import LiItems from "../LiItems/LiItems";
import { UlTag } from "./styled";

function UlListData() {
  const { state, dispatch } = useContext(Context);
  const { city } = state;

  return (
    <UlTag>
      {city.map((objCity) => {
        return <LiItems key={objCity.id} objCity={objCity} />;
      })}
    </UlTag>
  );
}

export default UlListData;
