function Solution()
{
    var result = document.getElementById("result");

    result.value = "";

    var a = parseInt(document.getElementById("input1").value);
    var b = parseInt(document.getElementById("input2").value);
    var c = parseInt(document.getElementById("input3").value);

    var numSols, solution, solution2;
    var check = (b*b) - 4*a*c 
    
    if(check > 0) {
      numSols = 2;
    }
    else if(check == 0) {
      numSols = 1;
    }
    else if(check < 0){
      numSols = 0;
    }

    if (numSols > 0)
    {
        var raiz = Math.sqrt(check)

        if(numSols == 2){
          solution = ((-b + raiz) / 2 * a).toFixed(2);
          solution2 = ((-b - raiz) / 2 * a).toFixed(2);
          var final = solution.toString() + " ou " + solution2.toString()
          result.value = final;
        }
        else{
          solution = (-b + raiz) / 2 * a;
          result.value = solution.toFixed(2);
        }


    }
    else
    {
      result.value = "0 soluções";
    }

}