import CityList from "../dist/fakerListData";

const Reducer = (state, action) => {
  switch (action.type) {
    case "input/onKeyUp":
      return {
        ...state,
        city: [
          ...state.city.filter((objCity) => {
            const value = action.palyload;
            if (
              value !== "" &&
              objCity.city.toLowerCase().indexOf(value) > -1
            ) {
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
