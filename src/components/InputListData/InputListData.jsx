import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { InputTag } from "./styled";

function InputListData() {
  const [text, setText] = useState("");
  const { dispatch } = useContext(Context);
  function handleInputChanged(e) {
    const { value } = e.target;
    setText(value);
  }
  function handleOnKeyUp(e) {
    const { value } = e.target;
    dispatch({ type: "input/onkeyup", payload: value });
  }
  return (
    <InputTag
      onChange={handleInputChanged}
      value={text}
      onKeyUp={handleOnKeyUp}
    />
  );
}

export default InputListData;
