// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  if (pickupLocation > 42) {
    return pickupLocation - 42;
  } else {
    return 42 - pickupLocation;
  }
};

function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
};

function distanceTravelledInFeet() {

};

function calculatesFarePrice(start, destination) {

};
