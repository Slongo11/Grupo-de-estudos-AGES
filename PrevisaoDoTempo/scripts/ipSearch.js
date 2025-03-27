import { getWeather } from "./weather.js";
import { update } from "./updateData.js";

/**
 * Busca com base no ip a região em que foi aberto a página.
 */
export async function ipSearch() {
      const response = await fetch("http://ip-api.com/json/");
      const data = await response.json();

      const cidade = data.city;
      const lat = data.lat;
      const lon = data.lon;
      const estado = data.regionName;
      const countryCode = data.countryCode;
      const weather = await getWeather(lat,lon);

      update(weather,cidade,estado,countryCode);
  }