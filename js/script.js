
function calcular(){
    //alert('Função executada');

    var etanol = document.querySelector('#etanol');
    var gasolina = document.querySelector('#gasolina');
    var result = document.querySelector('#result');

    //console.log(etanol.value);
    //console.log(gasolina.value);


    if(etanol.value != '' && gasolina.value != ''){

        result.style.display = 'flex';

       var resultado = etanol.value / gasolina.value;
        //console.log(resultado);

        if(resultado <= 0.7){
            //alert('Abasteça com Etanol');
            //Fazendo o JS escrever um codigo HTML (innerHTML)
            result.innerHTML = '<span>Abasteça com: <br> <strong>Etanol</strong></span>';
        }

        else{
            //alert('Abasteça com Gasolina');
            result.innerHTML = '<span>Abasteça com: <br> <strong>Gasolina</strong></span>';
        }
    }

}