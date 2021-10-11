let tela = document.querySelector('#resultado');

function insert(num){
    var r = document.getElementById('resultado').innerHTML;
        if(r.length < 8){
            var numero = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = numero + num;
            console.log(num)
    }
}

function clean()
{
    document.getElementById('resultado').innerHTML = "";
}

function back()
{
    var str = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = str.substring(0,str.length - 1);
}

function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;

    if(resultado){
        resultadoFinal = eval(resultado);
        var r = resultadoFinal.toString();
        document.getElementById('resultado').innerHTML = r;

        if(r.length > 7){
            r = r.substring(0,8);
            document.getElementById('resultado').innerHTML = r;
        }
    }
}