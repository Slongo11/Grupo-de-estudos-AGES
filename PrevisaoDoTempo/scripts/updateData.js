import { weatherCodeMap } from "./weatherCodeMap.js";
import { weatherFeeling } from "./weatherFeeling.js"
import { weatherCodeMapBackground } from "./weatherCodeMapBackGround.js";
const grausCidade = document.getElementById("graus__cidade");
const nomeCidade = document.getElementById("nome__cidade");
const nomePais = document.getElementById("nome__pais");
const diaSemana =document.getElementById("dia__semana");
const temperaturaMaxMinCidade = document.getElementById("temperaturaMaxMin__cidade");
const nascerDoSol = document.getElementById("nascerDoSol");
const porDoSol = document.getElementById("porDoSol"); 
const umidade = document.getElementById("umidade");
const ventania = document.getElementById("ventania");
const iconeDia = document.getElementById("icone__tempo__cidade");
const horaAtual = document.getElementById("hora__atual__local");
const backgroundBody = document.querySelector("body")

/**
 * Preenche as informações na tela para o usuário em relação ao clima do local.
 * @param {JSON} weather Todas as informações para o ser atualizados 
 * referente ao clima no HTML.
 * @param {String} cityName Em que está localizado.
 * @param {String} state Em que está localizado.
 * @param {String} contryCode Em que está localizado.
 */
export async function update(weather, cityName, state, contryCode){
    grausCidade.textContent = weather.currentParams.temp + "°C";
    nomeCidade.textContent = `${cityName} - ${state}`;
    nomePais.textContent = contryCode

    const timestamp = weather.currentParams.time;
    const dias = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ];

    const meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
      ];      

    const data = new Date(timestamp);
    diaSemana.textContent = (dias[data.getDay()]+", " + data.getDate() + " de " + meses[data.getMonth()] +" " + data.getFullYear());
    horaAtual.textContent = weather.currentParams.time.split("T")[1];

    temperaturaMaxMinCidade.textContent = "Máx "+ weather.dailyParams.maxTemp[0] + "°C / " + "Mín " + weather.dailyParams.minTemp[0]+'°C';
    nascerDoSol.textContent = "Nascer do Sol: "+weather.dailyParams.sunrise[0].split("T")[1];
    porDoSol.textContent = "Por do Sol: "+weather.dailyParams.sunset[0].split("T")[1];
    umidade.textContent = "Umidade: " + weather.currentParams.relativeHumidity+"%";
    ventania.textContent = "Ventania: " + weather.currentParams.windSpeed+" km/h";
    
    
    atualizaPrevisaoSemana(weather);
    atualizaTemperaturaHoras(weather.currentParams.time.split("T")[1], weather);
}

/**
 * Atualiza as informações da semana para cada dia.
 * @param {JSON} weather Com as informações referentes do clima.
 */
function atualizaPrevisaoSemana(weather){
    const containerSemana = document.querySelector(".container__informacoes--secundaria__semana");
    while(containerSemana.firstChild) {
        containerSemana.removeChild(containerSemana.firstChild);
    }

    const dias = [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado"
    ];
    
    const hoje = new Date();
    const diaAtual = hoje.getDay();
    
    for (let i = 0; i <= 6; i++) {
        const novoDia = document.createElement("span");
        novoDia.classList.add("container__informacoes--secundaria__semana__item");
    
        const tempMaxDia = document.createElement("p");
        tempMaxDia.classList.add("grausDaSemana");
    
        const diaDaSemana = document.createElement("p");
        diaDaSemana.classList.add("diaDaSemana");
    
        const indiceDoDia = (diaAtual + i + 1) % 7; 
        
        tempMaxDia.textContent = weather.dailyParams.maxTemp[i] + "°C";
        diaDaSemana.textContent = dias[indiceDoDia];
        
        novoDia.style.backgroundImage = `url(${verificaTemp(Number(weather.dailyParams.maxTemp[i]))})`
        novoDia.appendChild(tempMaxDia);
        novoDia.appendChild(diaDaSemana);
        containerSemana.appendChild(novoDia);
    }
    /**
     * Verifica a temperatura passada por parametro.
     * @param {Number} temp Temperatura a ser avaliada
     * @returns A url ferente da temperatura.
     */
    function verificaTemp(temp){
        if(temp > 25){
            return weatherFeeling.hot;
        }
        if(temp > 10){
            return weatherFeeling.warm;
        }
        return weatherFeeling.cold;
    }
     
    
}

/**
 * Atualiza a temperatura de cada hora do dia.
 * @param {String} time Da requisição.
 * @param {JSON} weather Da requisição.
 */
function atualizaTemperaturaHoras(time, weather) {
    const containerHora = document.querySelector(".container__informacoes--secundaria__hora");

    while (containerHora.firstChild) {
        containerHora.removeChild(containerHora.firstChild);
    }

    const horaAtual = parseInt(time.split(":")[0]);
    const sunsetStr = weather.dailyParams.sunset[0].split("T")[1]; // "20:25"
    const sunset = parseInt(sunsetStr.split(":")[0]);
    const sunriseStr = weather.dailyParams.sunrise[0].split("T")[1];
    const sunrise = parseInt(sunriseStr.split(":")[0]);

    if(horaAtual >= sunrise && horaAtual < sunset){
        iconeDia.style.backgroundImage = `url(${weatherCodeMap[weather.hourlyParams.weatherCode[0]].urlDia})`;
        backgroundBody.style.backgroundImage = `url(${weatherCodeMapBackground[weather.hourlyParams.weatherCode[0]].url})`;
    }else{
        iconeDia.style.backgroundImage = `url(${weatherCodeMap[weather.hourlyParams.weatherCode[0]].urlNoite})`;
        backgroundBody.style.backgroundImage = `url(${weatherCodeMapBackground[weather.hourlyParams.weatherCode[0]].url})`;
    }
    iconeDia.title = weatherCodeMap[weather.hourlyParams.weatherCode[0]].descricao;
    
    let hora = horaAtual + 1;
    let horasPorDia = 1
    while(horasPorDia <= 24){
        if(hora == 24){
            hora = 0;
        }

        const novoHorario = document.createElement("div");
        const spanIcone = document.createElement("span");
        spanIcone.classList.add("icone");
        
        const pHora = document.createElement("p");
        pHora.textContent =`${hora}:00`; 
        novoHorario.classList.add("container__informacoes--secundaria__hora__item");

        if(hora >= sunrise && hora < sunset){
            novoHorario.classList.add("dia");
            spanIcone.style.backgroundImage = `url(${weatherCodeMap[weather.hourlyParams.weatherCode[horasPorDia]].urlDia})`;
        }else{
            spanIcone.style.backgroundImage = `url(${weatherCodeMap[weather.hourlyParams.weatherCode[horasPorDia]].urlNoite})`
            novoHorario.classList.add("noite");
        }
        spanIcone.title = weatherCodeMap[weather.hourlyParams.weatherCode[horasPorDia]].descricao;

        pHora.classList.add('container__informacoes--secundaria__hora__item__texto');
        
        const pTemp = document.createElement("p");
        pTemp.classList.add('container__informacoes--secundaria__hora__item__texto')
        pTemp.textContent = weather.hourlyParams.temp[horasPorDia] + "°C";

        novoHorario.appendChild(spanIcone);
        novoHorario.appendChild(pTemp);
        novoHorario.appendChild(pHora);
        containerHora.appendChild(novoHorario);
        hora++;
        horasPorDia++;
    }   
}

