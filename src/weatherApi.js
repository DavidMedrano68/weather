import { KtoF, inBetween } from "./help";
// eslint-disable-next-line import/no-cycle
import { UI } from "./UI";
import { handleError } from "./validate";

function getWeatherGif(obj) {
  const tempature = KtoF(obj.main.temp);
  const weatherGif = document.querySelector(".weatherGif");
  const { nice, hot, cold } = {
    nice: "https://media3.giphy.com/media/3ohjUSYxOccY7zTmNO/giphy.gif?cid=ecf05e47j47czlztwg7mz27ggfuonbdoqdcjyi5ti2hgdyzi&rid=giphy.gif&ct=g",
    hot: "https://media0.giphy.com/media/xT0Gqz4x4eLd5gDtaU/giphy.gif?cid=790b76115e3def6229a2f87b625379cb5c0a47d05e6d53e6&rid=giphy.gif&ct=g",
    cold: "https://media1.giphy.com/media/KFUx0Rtz7p0HTzbJ7x/giphy.gif?cid=ecf05e472byn9k5uf5l0cuivf7ihx2cme1ypy5g0la036kg7&rid=giphy.gif&ct=g",
  };

  if (tempature < 47) {
    weatherGif.src = cold;
    weatherGif.alt = "snowy picture";
    weatherGif.width = "300";
    weatherGif.height = "250";
  }
  if (tempature > 80) {
    weatherGif.src = hot;
    weatherGif.alt = "hot outside tempature";
    weatherGif.width = "300";
    weatherGif.height = "250";
  }
  if (inBetween(tempature, 48, 79)) {
    weatherGif.src = nice;
    weatherGif.alt = "nice day weather";
    weatherGif.width = "300";
    weatherGif.height = "250";
  }
}

async function getWeather(city) {
  const apiKey = "9702b59c186f2ed4415d92b35daff346";
  const houstonWeatherPromise = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`,
    { mode: "cors" }
  );
  const data = await houstonWeatherPromise.json();
  UI.makeWeather(data);
  getWeatherGif(data);
}
const safeGetWeather = handleError(getWeather);
export default safeGetWeather;
