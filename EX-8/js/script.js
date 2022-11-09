function SearchP()
{
  var input = document.getElementById("num");

  if(parseInt(document.getElementById("num").value.length) > 0 && input.value != "Valor Inválido!") {
    var num = parseInt(input.value);

    if(num == 1){
      input.value = "O número "+num+" não é primo";
    }
    else{
      if((num % 2) == 0){
        if(num != 2) {
          input.value = "O número "+num+" não é primo";
        } else {
          input.value = "O número "+num+" é primo";
        }
      } else {
        var numDiv = 0;
        for(i=1; i < 10000000000 ;i++)
        {
          console.log(num + "/" + i + "=" + (num % i));
          
          if(i <= num && numDiv <= 2)
          {
            if((num % i) == 0)
            {
              numDiv = numDiv + 1;
            }
          }
          else{
            break;
          }
        }

        console.log(numDiv);

        if(numDiv <= 2)
        {
          input.value = "O número "+num+" é primo";
        }
        else
        {
          input.value = "O número "+num+" não é primo";
        }
      }
    }
  } else {
    input.value = "Valor Inválido!";
  }
}

function Clean()
{
  var input = document.getElementById("num");
  input.value = "";
}