var x = 2;

function Play()
{
    var result = document.getElementById("result");

    var imagem = document.getElementById("imagem");

    // imagem.style.width = "100%";
    // imagem.style.backgroundColor = "red";

    result.value = "";

    var a = Math.floor(Math.random() * 10);
    var b = Math.floor(Math.random() * 10);
    var c = Math.floor(Math.random() * 10);
    
    var d = Math.floor(Math.random() * 10);
    var e = Math.floor(Math.random() * 10);
    var f = Math.floor(Math.random() * 10);

    var g = Math.floor(Math.random() * 10);
    var h = Math.floor(Math.random() * 10);
    var i = Math.floor(Math.random() * 10);

    total = a * e * i + d * h * c + g * b * f - g * e * c - d * b * i - a * h * f;

    result.value = (total) 
}