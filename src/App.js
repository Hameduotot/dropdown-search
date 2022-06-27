import "./index.css";
import DataList from "./components/DataList/DataList";
import CityList from "./dist/fakerListData";
function App() {
  return (
    <div>
      <DataList listData={CityList} />
    </div>
  );
}

export default App;
