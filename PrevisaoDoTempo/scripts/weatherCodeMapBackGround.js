const cleanSky = "../assets/backgroundimage/cleansky.gif";
const cloudy = "../assets/backgroundimage/cloudy.gif";
const coldrain = "../assets/backgroundimage/coldrain.gif";
const snow = "../assets/backgroundimage/snow.gif";


export const weatherCodeMapBackground = {
    0: { descricao: "Céu limpo", url: cleanSky},
    1: { descricao: "Poucas nuvens", url: cleanSky},
    2: { descricao: "Parcialmente nublado", url: cloudy},
    3: { descricao: "Nublado", url: cloudy},
    45: { descricao: "Nevoeiro", url: coldrain},
    48: { descricao: "Nevoeiro com geada", url: coldrain},
    51: { descricao: "Garoa leve", url: coldrain},
    53: { descricao: "Garoa moderada", url: coldrain},
    55: { descricao: "Garoa intensa", url: coldrain},
    61: { descricao: "Chuva fraca", url: coldrain},
    63: { descricao: "Chuva moderada", url: coldrain},
    65: { descricao: "Chuva forte", url: coldrain},
    66: { descricao: "Nevasca leve", url: snow}, 
    67: { descricao: "Nevasca leve", url: snow},
    71: { descricao: "Nevasca leve", url: snow},
    73: { descricao: "Nevasca moderada", url: snow},
    75: { descricao: "Nevasca intensa", url: snow},
    77: { descricao: "Chuva com granizo", url: snow},
    80: { descricao: "Pancadas de chuva fraca", url: coldrain},
    81: { descricao: "Pancadas de chuva moderada", url: coldrain},
    82: { descricao: "Pancadas de chuva forte", url: coldrain},
    85: { descricao: "Nevasca", url: snow},
    86: { descricao: "Nevasca", url: snow},
    95: { descricao: "Tempestade", url: coldrain},
    96: { descricao: "Tempestade com granizo pequeno", url: coldrain},
    99: { descricao: "Tempestade com granizo grande", url: coldrain},
};
