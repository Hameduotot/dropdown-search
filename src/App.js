import "./index.css";
import DataList from "./components/DataList/DataList";
import CityList from "./dist/fakerListData";
import { useReducer } from "react";
import Reducer from "./hooks/reducer";
import { Context } from "./context/Context";

function App() {
  const [state, dispatch] = useReducer(Reducer, {
    city: CityList,
    input: "",
  });
  return (
    <div>
      <Context.Provider value={{ state, dispatch }}>
        <DataList />
      </Context.Provider>
    </div>
  );
}

export default App;
