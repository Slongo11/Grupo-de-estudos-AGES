/**
 * Este método retorna um {@link Array} de objetos com as informações 
 * de localização da cidade informada.
 * @param {String} cityInput nome da cidade ao qual vai ser pesquisado
 * @returns {JSON} com informações da cidade.
 */
export async function getLocation(cityInput) {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityInput}&language=pt-br&format=json`);
        if (!response.ok) {
            throw new Error(`Unable to fetch location. HTTP Err: ${response.status}`);
        }
        
        const geoResults = await response.json();
        if (!geoResults.results || geoResults.results.length === 0) {
            throw new Error(`No location found for ${location}`);
        }

        return geoResults;
}
