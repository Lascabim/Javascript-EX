function Produto()
{
  var vetor1 = document.getElementById("input1").value;
  var vetor2 = document.getElementById("input2").value;

  const ArVet1 = vetor1.split(",");
  const ArVet2 = vetor2.split(",");

  var countComma1 = vetor1.split(",").length - 1;
  var countComma2 = vetor2.split(",").length - 1;

  var prod, x1, x2, y1, y2, z1, z2;
  var result = document.getElementById("result");

  if (vetor1 != "" && vetor2 != "") {
    if(countComma1 == 2 && countComma2 == 2)
    {

      var confirm = false;

      for(var i = 0; i < ArVet1.length ;i++)
      {
        if(ArVet1[i] == "" || ArVet2[i] == "")
        {
          confirm = true;
        }
      }

      if(confirm == false)
      {
        x1 = ArVet1[0];
        y1 = ArVet1[1];
        z1 = ArVet1[2];
  
        x2 = ArVet2[0];
        y2 = ArVet2[1];
        z2 = ArVet2[2];
  
        prod = x1 * x2 + y1 * y2 + z1 * z2;
        result.value = prod;
      }
      else
      {
        result.value =("VETOR INVÁLIDO");
      }
    }
    else
    {
      result.value =("VETOR INVÁLIDO");
    }
  }else {
    result.value =("CAIXAS VAZIAS!");
  }

}