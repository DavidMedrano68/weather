import cities from "list-of-us-cities";

export default function Validate() {
  const newCities = [];
  cities.forEach((c) => {
    newCities.push(c.toLowerCase());
  });
  const cityInputVal = document.querySelector(".cityInput").value;
  const cityInput = document.querySelector(".cityInput");
  if (newCities.includes(cityInputVal.toLowerCase())) {
    cityInput.setCustomValidity("");
  } else {
    cityInput.setCustomValidity("That isnt a city");
  }
}

export function handleError(fn) {
  return function (...params) {
    return fn(...params).catch((err) => {
      console.error("oops", err);
    });
  };
}
