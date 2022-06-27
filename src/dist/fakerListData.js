import { faker } from "@faker-js/faker";

let CityList = [];
for (let index = 0; index < 1000; index++) {
  CityList.push({
    id: faker.database.mongodbObjectId(),
    city: faker.address.cityName(),
  });
}
export default CityList;
