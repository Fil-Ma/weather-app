export function getWindDirection(windDegDirection) {
  if (windDegDirection > 348.75 || windDegDirection <= 11.25) {
    return "N";
  } else if (windDegDirection > 11.25 && windDegDirection <= 33.75) {
    return "NNE";
  } else if (windDegDirection > 33.75 && windDegDirection <= 56.25) {
    return "NE";
  } else if (windDegDirection > 56.25 && windDegDirection <= 78.75) {
    return "ENE";
  } else if (windDegDirection > 78.75 && windDegDirection <= 101.25) {
    return "E";
  } else if (windDegDirection > 101.25 && windDegDirection <= 123.75) {
    return "ESE";
  } else if (windDegDirection > 123.75 && windDegDirection <= 146.25) {
    return "SE";
  } else if (windDegDirection > 146.25 && windDegDirection <= 168.75) {
    return "SSE";
  } else if (windDegDirection > 168.75 && windDegDirection <= 191.25) {
    return "S";
  } else if (windDegDirection > 191.25 && windDegDirection <= 213.75) {
    return "SSW";
  } else if (windDegDirection > 213.75 && windDegDirection <= 236.25) {
    return "SW";
  } else if (windDegDirection > 236.25 && windDegDirection <= 258.75) {
    return "WSW";
  } else if (windDegDirection > 258.75 && windDegDirection <= 281.25) {
    return "W";
  } else if (windDegDirection > 281.25 && windDegDirection <= 303.75) {
    return "WNW";
  } else if (windDegDirection > 303.75 && windDegDirection <= 326.25) {
    return "NW";
  } else if (windDegDirection > 326.25 && windDegDirection <= 348.75) {
    return "NNW";
  }
}

export function convertToKmh(windSpeed) {
  const speed = windSpeed * 3.6;
  return speed.toFixed(2);
}
