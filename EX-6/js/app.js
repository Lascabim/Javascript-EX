function Produto()
{
  var m = document.getElementById("input1").value;
  var vetor = document.getElementById("input2").value;

  const ArVet = vetor.split(",");

  var countComma = vetor.split(",").length - 1;

  var px, py, pz, vx, vy, vz;

  var result = document.getElementById("result");

  if (vetor != "") {
    if(countComma == 2)
    {

      var confirm = false;

      for(var i = 0; i < ArVet.length ;i++)
      {
        if(ArVet[i] == "")
        {
          confirm = true;
        }
      }

      if(confirm == false)
      {
        vx = ArVet[0];
        vy = ArVet[1];
        vz = ArVet[2];
  
        px = vx * m;
        py = vy * m;
        pz = vz * m;

        result.value = "P = " + px + ", " + py + ", " + pz;
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