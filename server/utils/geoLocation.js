const geolib = require('geolib');

const filterLocalMeals = (mealArray, { latitude: cusLat, longitude: cusLong }) => mealArray.filter((elem) => {
  const { kitchen_lat_long: { x: cookLat, y: cookLong }, delivery_range_m: maxDelivery } = elem;
  const distance = geolib.getDistance(
    { latitude: cookLat, longitude: cookLong },
    { latitude: cusLat, longitude: cusLong },
  );
  console.log('customer', cusLat, cusLong);
  console.log('cook', cookLat, cookLong);
  console.log(distance);
  return distance < maxDelivery;
});

module.exports = { filterLocalMeals };
