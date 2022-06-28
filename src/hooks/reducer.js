import CityList from "../dist/fakerListData";

const Reducer = (state, action) => {
  switch (action.type) {
    case "input/onKeyUp":
      return {
        ...state,
        city: [
          ...CityList.filter((objCity) => {
            const value = action.palyload;
            console.log("gh");
            if (
              value !== "" &&
              objCity.city.toLowerCase().indexOf(value) > -1
            ) {
              console.log("ii");
              return objCity;
            }
          }),
        ],
      };

    default:
      return state;
  }
};

export default Reducer;
