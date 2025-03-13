const apagarTudo = document.getElementById("apagar_tudo");
const apagar = document.getElementById("apagar");
const porcentagem = document.getElementById("porcentagem");
const dividir = document.getElementById("dividir");
const tecla7 = document.getElementById("7");
const tecla8 = document.getElementById("8");
const tecla9 = document.getElementById("9");
const teclaVezes = document.getElementById("vezes");
const tecla4 = document.getElementById("4");
const tecla5 = document.getElementById("5");
const tecla6 = document.getElementById("6");
const teclaMenos = document.getElementById("menos");
const tecla1 = document.getElementById("1");
const tecla2 = document.getElementById("2");
const tecla3 = document.getElementById("3");
const teclaMais = document.getElementById("mais");
const teclaParenteses = document.getElementById("parenteses");
const tecla0 = document.getElementById("0");
const teclaDecimal = document.getElementById("decimal");
const teclaIgual = document.getElementById("igual");
const display = document.getElementById("display");
const resultado = document.getElementById("resultado");
const anterior = document.getElementById("anterior");
/**
 * Adiciona no display um valor.
 * @param {String} valor no qual vai ser mostrado no display. 
 */
function adiconaNoDisplay(valor){
    if(resultado.textContent === "Erro"){
        apagaValor()
    }
    if(resultado.textContent === "0"){
        resultado.textContent = "";
    }
    resultado.textContent += valor;
}
/**
 * Apaga o ultimo valor do display. 
 * Utiliza o método substring para realizar essa operação de exclusão.
 */
function apagaValor(){
    if(resultado.textContent === "Erro"){
        apagarTodoDisplay();
    }else{
        resultado.textContent = resultado.textContent.substring(0, resultado.textContent.length - 1);
    }
}
/**
 * Calcula a porcentagem do valor que está no display.
 * Utiliza o método split para separar os valores do display, com uma 
 * expressão regular \\D que ignora todos os caracteres, resultando em apenas dígitos.
 */
function calculaPorcentagem(){
    const valor = resultado.textContent.split(new RegExp("\\D"));
    let ponto = resultado.textContent.split(".");
    console.log(ponto);
    let temPonto = false;
    let outroSeparacao;
    if(ponto.length > 1){
        outroSeparacao = ponto[ponto.length - 2].split(new RegExp("\\D"));
        temPonto = ponto[ponto.length - 1] === valor[valor.length - 1]
        && ponto[ponto.length - 2] === valor[valor.length - 2] 
        || outroSeparacao[outroSeparacao.length - 1] === valor[valor.length - 2]
        && ponto[ponto.length - 1] === valor[valor.length - 1];
        console.log(outroSeparacao);
    }
    console.log(temPonto);
    if(!temPonto){
        for (let i =0; i < valor[valor.length - 1].length; i++){
            apagaValor();
        }
    }else{
        const backspaceQtd = outroSeparacao[outroSeparacao.length - 1].length + ponto[ponto.length - 1].length + 1; 
        for (let i =0; i < backspaceQtd; i++){
            apagaValor();
        }
        
    }
    let novoValor = 0;
    if(!temPonto){
        novoValor = valor[valor.length - 1]*1/100;
    }else{
        novoValor = Number(outroSeparacao[outroSeparacao.length - 1] +"."+ponto[ponto.length - 1]);
        console.log(novoValor);
        novoValor = novoValor/100;
    }

    adiconaNoDisplay(novoValor);
}
function apagarTodoDisplay(){
    resultado.textContent = "0";
    anterior.textContent = "";
}
// controlador principal dos eventos
addEventListener("click", function(event){
    try{
        if(event.target === apagarTudo){
            apagarTodoDisplay();
        }
        if(event.target === apagar){
            if(resultado.textContent.length === 1){
                resultado.textContent = "0";
            }else{
                apagaValor();
            }
        }
        if(event.target === porcentagem){
           calculaPorcentagem();
        }
        if(event.target === dividir){
            adiconaNoDisplay("/");
        }
        if(event.target === tecla7){
            adiconaNoDisplay("7");
        }
        if(event.target === tecla8){
            adiconaNoDisplay("8");
        }
        if(event.target === tecla9){
            adiconaNoDisplay("9");
        }
        if(event.target === teclaVezes){
            adiconaNoDisplay("*");
        }
        if(event.target === tecla4){
            adiconaNoDisplay("4");
        }
        if(event.target === tecla5){
            adiconaNoDisplay("5");
        }
        if(event.target === tecla6){
            adiconaNoDisplay("6");
        }
        if(event.target === teclaMenos){
            adiconaNoDisplay("-");
        }
        if(event.target === tecla1){
            adiconaNoDisplay("1");
        }
        if(event.target === tecla2){
            adiconaNoDisplay("2");
        }
        if(event.target === tecla3){
            adiconaNoDisplay("3");
        }
        if(event.target === teclaMais){
            adiconaNoDisplay("+");
        }
        if(event.target === teclaParenteses){
            adicionarParenteses();
        }
        if(event.target === tecla0){
            adiconaNoDisplay("0");
        }
        if(event.target === teclaDecimal){
            adiconaNoDisplay(".");
        }
        if(event.target === teclaIgual){
            calculaIgual();
        }
    }catch(e){
        resultado.textContent = "Erro";
    }
});
// Trata eventos do teclado
addEventListener("keydown", function(event){
    try{
        if(event.code === "KeyC"){
            apagarTodoDisplay();
        }
        if(event.code === "Backspace"){
            if(resultado.textContent.length === 1){
                resultado.textContent = "0";
            }else{
                apagaValor();
            }
        }

        if(event.shiftKey &&event.code === "Digit5"){
           calculaPorcentagem();
           return;
        }
        if(event.code === "Slash"){
            adiconaNoDisplay("/");
        }
        if(event.code === "Digit7"){
            adiconaNoDisplay("7");
        }
        if(event.shiftKey && event.code === "Digit8"){
            adiconaNoDisplay("*");
            return
        }
        if(event.code === "Digit8"){
            adiconaNoDisplay("8");
        }
        if(event.code === "Digit9"){
            adiconaNoDisplay("9");
        }
        if(event.code === "Digit4"){
            adiconaNoDisplay("4");
        }
        if(event.code === "Digit5"){
            adiconaNoDisplay("5");
        }
        if(event.code === "Digit6"){
            adiconaNoDisplay("6");
        }
        if(event.code === "Minus"){
            adiconaNoDisplay("-");
        }
        if(event.code === "Digit1"){
            adiconaNoDisplay("1");
        }
        if(event.code === "Digit2"){
            adiconaNoDisplay("2");
        }
        if(event.code === "Digit3"){
            adiconaNoDisplay("3");
        }
        if(event.shiftKey && event.code === "Equal"){
            adiconaNoDisplay("+");
        }
        if(event.code === teclaParenteses){
            adicionarParenteses();
        }
        if(event.code === "Digit0"){
            adiconaNoDisplay("0");
        }
        if(event.code === "Period"){
            adiconaNoDisplay(".");
        }
        if(event.code === "Enter"){
            calculaIgual();
        }
    }catch(e){
        resultado.textContent = "Erro";
    }
});
/**
 * Adiciona os parenteses ao display, um parenses pode ser adicionado por vez e
 * seu inverso, com isso não é possível realizar parenteses alinhados.
 */
function adicionarParenteses(){
    const infoTela = resultado.textContent;
    let contaAbreParenteses = 0;
    let contaFechaParenteses = 0;
    for (let i = 0; i < infoTela.length; i++){
        if(infoTela[i] === "("){
            contaAbreParenteses++;
        }
        if(infoTela[i] === ")"){
            contaFechaParenteses++;
        }
    }
    if(contaAbreParenteses > contaFechaParenteses){
        adiconaNoDisplay(")");
    }else{
        adiconaNoDisplay("(");
    }
    
}
/**
 * Método para calcular o resultado da expressão aritimética que está no display.
 * Utiza o metodo eval para realizar o calculo.
 */
function calculaIgual(){
    anterior.textContent = resultado.textContent;
    // Passa uma valor para a função em forma aritimetica e se tem o retorno
    // do resultado.
    resultado.textContent = eval(display.textContent);
}