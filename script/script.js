//Uso da funcao temporal no topo do inicio da pagina
var topos = [
  "imagens/topo/topo1.jpg",
  "imagens/topo/topo2.jpg",
  "imagens/topo/topo3.jpg",
];

var posicao = 0;

function trocaImg() {
  posicao = (posicao + 1) % 3;
  document.getElementById("imgTopo").src = topos[posicao];
}



//modificando a data para string e para o formato datetime-local
function modificaData(data) {
  var toString = data.toString();
  if (toString.length < 2) {
    return "0" + toString;
  } else {
    return toString;
  }
}

//deixando a data atual como padrao
function dataAtual() {
  var hoje = new Date();
  let ano = hoje.getFullYear();
  let mes = modificaData(hoje.getMonth() + 1);
  let dia = modificaData(hoje.getDate());
  let hora = modificaData(hoje.getHours());
  let minutos = modificaData(hoje.getMinutes());

  ano + "-" + mes + "-" + dia + "T" + hora + ":" + minutos;

  return (document.getElementById("tele_data_hora").value =
    ano + "-" + mes + "-" + dia + "T" + hora + ":" + minutos);
}

//validando a data e hora escolhida pelo cliente
function validaData() {
 
  var elemento = document.getElementById("tele_data_hora");

  //escolha da telebusca(sim ou nao)
  var telebusca = document.getElementById("telebusca").value;

  //Passando a data escolhida para Date pra poder compararm
  var dataEscolhida = new Date(elemento.value);
  var dataHoje = new Date();

  //caso a data escolhida esteja no passado, enviar uma alerta.
  
  if (dataEscolhida < dataHoje) {
    alert("Data se encontra no passado. Escolha uma data atual.");
    dataAtual();
    return;
  }
  //Caso o dia escolhida seja um domingo, enviar uma alerta
  if (dataEscolhida.getDay() == "0") {
    alert("Petshop fechado aos domingos e feriados. Escolha uma nova data.");
    dataAtual();
    return;
  }
  //caso o horário escolhido esteja fora do intervalo de horário de funcionamento estabelecido, enviar uma alerta
  if ((dataEscolhida.getHours() < 8) || (dataEscolhida.getHours() >= 18) ) {
    alert("Horário de Funcionamento das 8h ás 18h");
    dataAtual();
    return;
  }

  if(dataEscolhida.getHours() =="17"){

    //Caso o cliente escolha telebusca, deve ser agendado no maximo 40 minutos antes do fechamento da loja

    if(telebusca==="sim" && dataEscolhida.getMinutes()> 20){  alert(
        "A telebusca deve ser agendada com pelo menos 40 minutos de antecedência ao fechamento."
      );
      dataAtual();
      return;}

      // //Caso o cliente escolha sem telebusca, deve ser agendado no maximo 20 minutos antes do fechamento da loja.
      else if(telebusca==="nao" && dataEscolhida.getMinutes() >40){
        alert("Serviço deve ser agendado com pelo menos 20 minutos de antecedência ao fechamento.")
        dataAtual();
        return;
      }
  }


  }

