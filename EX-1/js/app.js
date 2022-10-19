function GetHigher()
{
  var num1 = parseInt(document.getElementById("input1").value);
  var num2 = parseInt(document.getElementById("input2").value);
  var num3 = parseInt(document.getElementById("input3").value);

  var maior = document.getElementById("maior");
  var menor = document.getElementById("menor");

  if (num1 == "" && num2 == "" && num3 == ""){
    alert("CAIXAS VAZIAS");
    maior = "";
    menor = "";
    return;
  }else if (num1 == num2 && num2 == num3)  {
    alert("Todos os números são iguais");
    maior = "";
    menor = "";
    return;
  }else if (num1 == num2 && num2 != num3)  {
    alert("O 1º e o 2º número são iguais");
    maior = "";
    menor = "";
    return;
  }else if (num1 == num3 && num2 != num3)  {
    alert("O 1º e o 3º número são iguais");
    maior = "";
    menor = "";
    return;
  }else if (num2 == num3 && num1 != num3)  {
    alert("O 2º e o 3º número são iguais");
    maior = "";
    menor = "";
    return;
  }
  
    if (num1 > num2 && num1 > num3){
      maior.value = num1;

      if(num2 > num3){
        menor.value = num3;
      }
      else
      {
        menor.value = num2;
      }

    }else if (num2 > num1 && num2 > num3){
      maior.value = num2;

      if(num1 > num3){
        menor.value = num3;
      }
      else
      {
        menor.value = num1;
      }

    }else if (num3 > num1 && num3 > num2){
      maior.value = num3;

      if(num1 > num2){
        menor.value = num2;
      }
      else
      {
        menor.value = num1;
      }
    }

}