function GetHigher()
{
  var n = parseInt(document.getElementById("input1").value);
  var l = parseInt(document.getElementById("input2").value);
  var e = parseInt(document.getElementById("input3").value);
  var a = parseInt(document.getElementById("input4").value);

  var result = document.getElementById("result");

  if (n != "NaN" && l != "NaN" && e != "NaN" && a != "NaN"){
    var delta = (n*l/e*a).toFixed(2);

    if(delta != "NaN")
    {
      result.value = delta;
    }
    else
    {
      result.value = "";
    }

  }
  else
  {
    result.value = "CAIXAS VAZIAS";
  }

}