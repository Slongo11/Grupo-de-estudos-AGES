
/**
 * Obtém as informações do clima ao qual é fornecido a latitudo e longetude
 * para realizar consulta na API.
 * @param {Stirng} lat Latitude referente do local desejado.
 * @param {String} lon Longitudo do local desejado.
 * @returns As informações em um {@link JSON}, do tempo.
 */
export async function getWeather(lat, lon) {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&timezone=auto&daily=weather_code,sunset,rain_sum,precipitation_hours,temperature_2m_max,temperature_2m_min,sunrise,wind_speed_10m_max&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,precipitation,rain,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m&current=temperature_2m,is_day,wind_speed_10m,relative_humidity_2m,precipitation,wind_direction_10m,rain,weather_code`);
    if(!response.ok) {
        throw new Error (`Unable to fetch weather. HTTP Err: ${response.status}`);
    }

    const weatherResults = await response.json();
    if (!weatherResults.current || weatherResults.current.lenght === 0) {
        throw new Error(`No weather data found for ${lat}, ${lon}`);
    }

    const currentParams = {
        "time": weatherResults.current.time,
        "temp": weatherResults.current.temperature_2m,
        "isDay": weatherResults.current.is_day,
        "windSpeed": weatherResults.current.wind_speed_10m,
        "relativeHumidity": weatherResults.current.relative_humidity_2m,
        "precipitation": weatherResults.current.precipitation,
        "windDirection": weatherResults.current.wind_direction_10m,
        "rain": weatherResults.current.rain,
        "weatherCode": weatherResults.current.weather_code
    };
        
    const hourlyParams = {
        "temp": weatherResults.hourly.temperature_2m,
        "relativeHumidity": weatherResults.hourly.relative_humidity_2m,
        "precipitationProbability": weatherResults.hourly.precipitation_probability,
        "precipitation": weatherResults.hourly.precipitation,
        "rain": weatherResults.hourly.rain,
        "weatherCode": weatherResults.hourly.weather_code,
        "cloudCover": weatherResults.hourly.cloud_cover,
        "windSpeed": weatherResults.hourly.wind_speed_10m,
        "windDirection": weatherResults.hourly.wind_direction_10m
    };
        
    const dailyParams = {
        "weatherCode": weatherResults.daily.weather_code,
        "sunset": weatherResults.daily.sunset,
        "sunrise": weatherResults.daily.sunrise,
        "rainSum": weatherResults.daily.rain_sum,
        "precipitationHours": weatherResults.daily.precipitation_hours,
        "maxTemp": weatherResults.daily.temperature_2m_max,
        "minTemp": weatherResults.daily.temperature_2m_min,
        "maxWindSpeed": weatherResults.daily.wind_speed_10m_max
    };
    return { currentParams, hourlyParams, dailyParams };
}