/**
 * JS - Aula5: Calculadora Flex
 * @author Professor José de Assis
 */

var etanol ,gasolina;

function calcular() {
    etanol= parseFloat(frmFlex.txtEtanol.value.replace(",","."));
    gasolina= parseFloat(frmFlex.txtGasolina.value.replace(",",".")); 
    if (etanol < 0.7 * gasolina){
      document.getElementById("status").src="imagens/etanol.flex.png";
  }else{
      document.getElementById("status").src="imagens/gasolina.flex.png";
  }
  }
function resetar (){
    document.getElementById("status").src="imagens/flex.neutro.png";
  }

