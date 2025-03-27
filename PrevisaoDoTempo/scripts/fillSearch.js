import { update } from "./updateData.js";
import { getWeather } from "./weather.js";
const localDePesquisa = document.querySelector(".container__pesquisa");
let dropdown = null;
/**
 * Preenche com dados da pesquisa de uma cidade solicitada.
 * @param {JSON} data Com as cidades a serem usadas para a criar um elemento HTML.
 */
function fillSearch(data){
    clearSearch();
    dropdown = createElemet();
    localDePesquisa.appendChild(dropdown);
    data.results.forEach( (element) => {
        dropdown.appendChild( makeDropdownItem(element));
    });
}
/**
 * Limpa a barra de pesquisa do usuário.
 */
function clearSearch(){
    if(dropdown){
        localDePesquisa.removeChild(dropdown);
        dropdown = null;
    }
}
/**
 * Cria o elemento dropdown.
 * @returns o elemento criado.
 */
function createElemet(){
    const element = document.createElement("ul");
    element.id = "dropdown";
    element.classList.add("container__pesquisa__lista");
    return element;
}

/**
 * Realiza a criação de elementos para o HTML.
 * @param {JSON} city Em qual vai ser extraido as informações.
 * @returns um elemento pronto para ser adicionado no HTML.
 */
function makeDropdownItem(city){
    const item = document.createElement('li');
    item.classList.add('container__pesquisa__lista__item');
    let estado = "";
    let countryCode =""
   
    if(city.admin1){
        estado = city.admin1;
    }
    if(city.country_code){
        countryCode = city.country_code;
    }

    item.innerText = city.name + ', ' + estado + ', ' + countryCode;
    item.dataset.lat = city.latitude;
    item.dataset.lng = city.longitude;
    item.dataset.name = city.name;
    item.dataset.state = estado;
    item.dataset.countryCode = countryCode;
    
    item.addEventListener('click',async (event) =>{
        clearSearch();
        const weather = await getWeather(event.target.dataset.lat,event.target.dataset.lng);
        update(weather,event.target.dataset.name, event.target.dataset.state,event.target.dataset.countryCode);
    });
    return item;
}

export { clearSearch, fillSearch };