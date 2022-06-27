import React, { useState } from "react";
import InputListData from "../InputListData/InputListData";
import UlListData from "../UlListData/UlListData";
import { DivTagContainer } from "./styled";

function DataList({ listData }) {
  const [text, setText] = useState("");
  const [filterCity, setfilterCity] = useState([]);

  function handleOnChanged(e) {
    setText(e.target.value);
  }
  function handleOnKeyUp(e) {
    const value = e.target.value.toLowerCase();
    const filterList = listData.filter((cityObj) => {
      if (value !== "" && cityObj.city.toLowerCase().indexOf(value) > -1) {
        return cityObj;
      }
    });
    setfilterCity(filterList);
  }
  function handleClick(cityText) {
    setText(cityText);
  }

  return (
    <DivTagContainer>
      <InputListData
        handleInputChanged={handleOnChanged}
        handleOnKeyUp={handleOnKeyUp}
        textValue={text}
      />
      <UlListData listData={filterCity} handleClick={handleClick} />
    </DivTagContainer>
  );
}

export default DataList;
