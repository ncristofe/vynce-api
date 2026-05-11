import axios from "axios";

const API_KEY = "S773d705eeacf613dd35f6833a910acfc"; 
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function getWeather(city) {
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      units: "metric",
      lang: "pt_br",
      appid: API_KEY,
    },
  });
  return response.data;
}

export async function getForecast(city) {
  const response = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: city,
      units: "metric",
      lang: "pt_br",
      appid: API_KEY,
    },
  });
  return response.data;
}
