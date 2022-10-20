var x = 2;

function Play()
{
    var result = document.getElementById("result");
    result.value = "";

    var a = Math.floor(Math.random() * 2);
    var b = Math.floor(Math.random() * 3);
    var c = Math.floor(Math.random() * 4);
    
    var d = Math.floor(Math.random() * 5);
    var e = Math.floor(Math.random() * 6);
    var f = Math.floor(Math.random() * 7);

    var g = Math.floor(Math.random() * 8);
    var h = Math.floor(Math.random() * 9);
    var i = Math.floor(Math.random() * 10);

    total = a * e * i + d * h * c + g * b * f - g * e * c - d * b * i - a * h * f;

    result.value = (total) 

    // alert(
    //     "A = " + a + "\n"+
    //     "B = " + b + "\n"+
    //     "C = " + c + "\n"+
    //     "D = " + d + "\n"+
    //     "E = " + e + "\n"+
    //     "F = " + f + "\n"+
    //     "G = " + g + "\n"+
    //     "H = " + h + "\n"+
    //     "I = " + i + "\n"
    //     );
}