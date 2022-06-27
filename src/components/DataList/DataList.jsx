import React, { useState } from "react";
import InputListData from "../InputListData/InputListData";
import UlListData from "../UlListData/UlListData";
import { DivTagContainer } from "./styled";

function DataList({ listData, idList }) {
  const [text, setText] = useState("");

  function handleClick(cityText) {
    setText(cityText);
  }

  return (
    <DivTagContainer className="datalist-container">
      <InputListData />
      <UlListData listData handleClick={handleClick} />
    </DivTagContainer>
  );
}

export default DataList;
