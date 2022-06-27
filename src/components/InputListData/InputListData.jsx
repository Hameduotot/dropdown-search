import React from "react";
import { InputTag } from "./styled";

function InputListData({ handleInputChanged, textValue, handleOnKeyUp }) {
  return (
    <InputTag
      onChange={handleInputChanged}
      value={textValue}
      onKeyUp={handleOnKeyUp}
    />
  );
}

export default InputListData;
