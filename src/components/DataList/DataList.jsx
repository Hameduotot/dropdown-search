
import InputListData from "../InputListData/InputListData";
import UlListData from "../UlListData/UlListData";
import { DivTagContainer } from "./styled";

function DataList() {
  return (
    <DivTagContainer>
      <InputListData />
      <UlListData />
    </DivTagContainer>
  );
}

export default DataList;
