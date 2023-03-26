var dataHora = new Date();
dataHora.setDate(1);
var dia = dataHora.getDate();
var mes = dataHora.getMonth();
var ano = dataHora.getFullYear();


var arrayMeses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

//Guardando o elemento BODY em uma variavel
var body = document.querySelector("body");

//Criando o elemnto <h1>
var h1 = document.createElement("h1");

//Inserindo um texto dentro do h1 = <h1>Calendario em JS</h1>
h1.innerText = "Calendário em JS";

//div container
var divContainer = document.createElement("div");

//inserindo elementos dentro do body
body.appendChild(h1);

//div onde ficara o calendario
body.appendChild(divContainer);

//DIV CALENDARIO
var divCalendario = document.createElement("div");
divCalendario.setAttribute("class", "calendario");

//COLOCANDO A DIV DENTRO DA TAG MAIN
body.appendChild(divCalendario);


//INICIO DA TABELA DO CALENDARIO

//FUNCAO QUE REDEFINE AS VARIAVEIS NA MUDANCA DOS MESES
function defineVariaveisDatas() {
    dataHora.setDate(1);
    dia = dataHora.getDate();
    mes = dataHora.getMonth();
    ano = dataHora.getFullYear();
}

//FUNCAO QUE IMPRIME O CALENDARIO NA TELA
function imprimeCalendario() {

    //VERIFICANDO SE EXISTE UM CALENDARIO NA TELA
    var existe = document.querySelector("table");

    //SE EXISTIR
    if (existe) {
        //REMOVA O CALENDARIO EXISTENTE
        existe.remove();
    }

    //ADICIONANDO O NOVO CALENDARIO

    //CRIANDO A TABELA
    var table = document.createElement("table");
    table.setAttribute("cellspacing", "0");
    table.setAttribute("cellpadding", "0");
    table.setAttribute("border", "1");

    //CRIANDO O THEAD = CABECALHO DA TABELA
    var thead = document.createElement("thead");

    //CRIANDO A PRIMEIRA LINHA DO THEAD
    var tr = document.createElement("tr");

    //CRIANDO A COLUNA QUE VAI TER O BOTAO DE VOLTAR O MES
    var tdVoltar = document.createElement("td");
    tdVoltar.innerHTML = "<button onclick='voltarMes()'> < </button>";
    tr.appendChild(tdVoltar);
    

    //CRIANDO A COLUNA QUE MOSTRA O MES E O ANO
    var td = document.createElement("td");
    td.setAttribute("colspan", "5");
    td.innerText = `${arrayMeses[mes]} ${ano}`;
    tr.appendChild(td);

    //CRIANDO A COLUNA QUE VAI TER O BOTAO DE AVANCAR O MES
    var tdAvancar = document.createElement("td");
    tdAvancar.innerHTML = "<button onclick='avancarMes()'> > </button>";
    tr.appendChild(tdAvancar);


    //CRIANDO O TBODY = CORPO DA TABELA
    var tbody = document.createElement("tbody");

    //COLOCANDO A TAG TABLE DENTRO DA DIV
    divCalendario.appendChild(table);

    //COLOCANDO A TAG THEAD DENTRO DA TAG TABLE
    table.appendChild(thead);

    //COLOCANDO A TAG TR DENTRO DA TAG THEAD
    thead.appendChild(tr);

    //COLOCANDO A TAG TBODY DENTRO DA TAG TABLE
    table.appendChild(tbody);
    
    //CHAMADAS DAS FUNCOES
    diasDaSemana(tbody);
    diasDoMes(tbody);
}

//ESSA FUNCAO É CHAMADA QUANDO CLICAMOS NO BOTAO DE VOLTAR O MES
function voltarMes(){
    dataHora.setMonth(dataHora.getMonth() - 1);
    defineVariaveisDatas();
    imprimeCalendario();
}

//ESSA FUNCAO É CHAMADA QUANDO CLICAMOS NO BOTAO DE AVANCAR O MES
function avancarMes(){
    dataHora.setMonth(dataHora.getMonth() + 1);
    defineVariaveisDatas();
    imprimeCalendario();
}

//FUNCAO QUE MOSTRA OS DIAS DA SEMANA
function diasDaSemana(tbodyRecebido) {
    var arrayDias = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];
    var tr = document.createElement("tr");


    for (var dia of arrayDias) {
        var td = document.createElement("td");
        td.innerText = dia;
        tr.appendChild(td);
    }

    tbodyRecebido.appendChild(tr);
}


//FUNCAO QUE MOSTRA OS DIAS DO MES A PARTIR DO DIA DA SEMANA EM QUE COMECA O MES
function diasDoMes(tbodyRecebido) {
    var tr = document.createElement("tr");
    var comecaNoDia = dataHora.getDay();
    var terminaNoDia = null;
    var numeroDoDia = 1;
    var x = 1;

    while (numeroDoDia <= pegaUltimoDiaMes(dataHora)) {
        var dataHoraCopia = new Date(dataHora);
        dataHoraCopia.setDate(numeroDoDia);
        var td = document.createElement("td");

        if (x <= comecaNoDia) {
            td.innerText = "";
        } else {
            td.innerText = numeroDoDia;
            terminaNoDia = dataHoraCopia.getDay();
            numeroDoDia++;
        }
        tr.appendChild(td);

        if (x % 7 === 0) {
            tbodyRecebido.appendChild(tr);
            var tr = document.createElement("tr");
        }
        
        x++; 

    }

    var totalTds = 6 - terminaNoDia;

    for (var x = 0; x < totalTds; x++) {
        var td = document.createElement("td");
        td.innerText = "";
        tr.appendChild(td);
    }

    tbodyRecebido.appendChild(tr);
}


//FUNCAO QUE RETORNA O ULTIMO DIA DO MES
function pegaUltimoDiaMes(data) {
    var dataCopia = new Date(data);
    dataCopia.setMonth(data.getMonth() + 1);
    dataCopia.setDate(1);
    dataCopia.setDate(dataCopia.getDate() - 1);
    return dataCopia.getDate();

}

imprimeCalendario();