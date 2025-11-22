function modificaData(data)
 {
  var toString = data.toString();
  if (toString.length < 2) {
    return "0" + toString;
  }
  else{return toString;}
}

function dataAtual() {
  var hoje = new Date();
  let ano = hoje.getFullYear();
  let mes = modificaData(hoje.getMonth()+1);
  let dia = modificaData(hoje.getDate());
  let hora = modificaData(hoje.getHours());
  let minutos = modificaData(hoje.getMinutes());

  return (ano+"-"+mes+"-"+dia+"T"+hora+":"+minutos);
}

dataAtual();