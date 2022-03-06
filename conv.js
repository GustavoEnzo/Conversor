var valor;

function conversao() {
  var dolarAmericano = 5.06;
  var euro = 5.54;
  var libra = 6.70;
  var bitcoin = 196434.17;
  valor = parseFloat(document.getElementById("text2").value);
  var opcao = document.getElementById("opções").value;

  if (isNaN(valor)) {
    alert("Apenas numeros devem ser informados");
  }

  if (opcao == 1) {
    document.getElementById("valorFinal").innerHTML = (
      valor / dolarAmericano
    ).toFixed(2);
  }

  if (opcao == 2) {
    document.getElementById("valorFinal").innerHTML = (valor / euro).toFixed(2);
  }

  if (opcao == 3) {
    document.getElementById("valorFinal").innerHTML = (valor / libra).toFixed(
      2
    );
  }

  if (opcao == 4) {
    document.getElementById("valorFinal").innerHTML = (valor / bitcoin).toFixed(
      2
    );
  }
}
