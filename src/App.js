import "./index.css";
import DataList from "./components/DataList/DataList";
const cityListData = ["tehran", "tehran1", "tehdh", "tehfff", "tehggg"];

function App() {
  return (
    <div>
      <DataList listData={cityListData} idList={"citylist"} />
    </div>
  );
}

export default App;
