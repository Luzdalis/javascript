let array = [];
let array_ordenado = [];

let tamanho_array = Number(prompt("Ingrese o tamanho do array:"));

for(let i=0; i<tamanho_array; i++){
    let valor= Number(prompt(`Ingrese o valor: ${i+1}`));
    array.push(valor);
}

function ordenar(array){
    for ( let i=0; i<tamanho_array; i++)
    {        
        for (let x=i+1; x<tamanho_array; x++)
        {
            if (array[i] > array[x]){
                auxiliar= array[i];
                array[i] = array[x];
                array[x]= auxiliar;
            }
        }  
    }
    return(array);
}

function suma(array){
    let suma = 0;
    for (var i=0; i<array.length; i++){
        if (array[i]%2 == 0) {
            suma += array[i];
        }
    }
    return(suma);
}

console.log(array);
array_ordenado = ordenar(array);
console.log(array_ordenado);
let sumatoria = suma(array);
console.log(sumatoria);
