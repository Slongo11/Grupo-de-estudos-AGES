import { getLocation } from "./location.js";
import { fillSearch } from "./fillSearch.js";
import { ipSearch } from "./ipSearch.js";

const botao = document.getElementById("btn__pesquisar");
botao.addEventListener("click", handleSearch);
/**
 * Método principal da Página, chama o restantes dos métodos, para que assim
 * se mantenha a lógica principal em um único local.
 */
async function handleSearch() {

    try {
        const cityInput =  document.getElementById("input__cidade").value;
        const location = await getLocation(cityInput);
        fillSearch(location);
    } catch (error) {
        console.log(error);
        console.error(`Unable to fetch results. ERROR:  ${error.message}`);
    }
}

window.onload = ipSearch();