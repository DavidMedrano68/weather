import { KtoF } from "./help";
import safeGetWeather from "./weatherApi";
import Validate from "./validate";

// eslint-disable-next-line import/prefer-default-export
export const UI = {
  makeWeather(obj) {
    const content = document.querySelector(".content");
    const weatherDiv = document.createElement("div");
    weatherDiv.classList = "weatherDiv";
    const temp = document.createElement("p");
    temp.classList = "temp";
    temp.textContent = `Tempature: ${KtoF(obj.main.temp)} °F`;
    const feelsLike = document.createElement("p");
    feelsLike.classList = "feels";
    feelsLike.textContent = `Feels like: ${KtoF(obj.main.feels_like)} °F`;
    const weatherGif = document.createElement("img");
    weatherGif.setAttribute("src", "#");
    weatherGif.classList = "weatherGif";
    content.appendChild(weatherDiv);
    weatherDiv.appendChild(temp);
    weatherDiv.appendChild(feelsLike);
    weatherDiv.appendChild(weatherGif);
  },
  load() {
    this.eventListeners();
  },
  reset() {
    const form = document.querySelector(".cityForm");
    form.reset();
    const content = document.querySelector(".content");
    content.innerHTML = "";
  },
  eventListeners() {
    document.querySelector(".cityInput").oninput = Validate;
    document.querySelector(".cityForm").addEventListener("submit", (e) => {
      e.preventDefault();
      if (document.querySelector(".content").innerHTML === "") {
        safeGetWeather(document.querySelector(".cityInput").value);
      }
      if (document.querySelector(".content").innerHTML !== "") {
        document.querySelector(".content").innerHTML = "";
        safeGetWeather(document.querySelector(".cityInput").value);
      }
      this.reset();
    });
  },
};
