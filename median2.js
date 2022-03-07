const calcular = document.getElementById('resultado');


    function calcular(arr) {
       var concat = arr;
        concat = concat.sort(
            function (a, b) { return a - b });
  
      console.log(concat);
      
        var length = concat.length;
  
        if (length % 2 == 1) {
  
        console.log(concat[(length / 2) - .5])
  
       return concat[(length / 2) - .5]
  
        } 
        else 
        {
        console.log((concat[length / 2] +
        concat[(length / 2) - 1]) / 2);
                  
            return (concat[length / 2] 
                + concat[(length / 2) - 1]) / 2;
        }
    }
  
    arr = [1, 6, 8, 12, 14, 18, 20]
}

calcular.addEventListener('click', calcular);
