function Convert()
{
  var input = parseInt(document.getElementById("input1").value);

  var output = document.getElementById("resultado");

  var polV = 2.54;
  var ftV = 30.48;
  
  var combo = document.getElementById("medida");

  if(combo.value == "ft"){
    resultado = (input * ftV);
  }else if(combo.value == "pol") {
    resultado = (input * polV);
  }

  output.innerHTML = resultado.toString();
}