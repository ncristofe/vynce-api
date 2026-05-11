import axios from "axios";

const API_KEY = "SUA_CHAVE_AQUI"; // substitua pela chave da OpenWeather
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
