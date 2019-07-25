// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  if (pickupLocation > 42) {
    return pickupLocation - 42;
  } else {
    return 42 - pickupLocation;
  }
}

function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(pickupLocation, endingBlock) {
  if (pickupLocation < endingBlock) {
    return (endingBlock - pickupLocation) * 264;
  } else {
    return (pickupLocation - endingBlock) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
