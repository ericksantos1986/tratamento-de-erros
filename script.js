function validaArray(array, num){
    try{
        if(!array && !num) throw new ReferenceError("Envie os parâmetros");
        if(typeof array !== 'object') throw new TypeError("Array precisa ser do tipo object");
        if(typeof num !== 'number') throw new TypeError("Num precisa ser um número");
        if(array.length !== num) throw new RangeError("Tamanho do array inválido");

        return array;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!")
            console.log(e.message);

        } else if(e instanceof TypeError) {
            console.log("Este erro é um TypeError!")
            console.log(e.message);

        } else if(e instanceof RangeError) {
            console.log("Este erro é um RangeError!")
            console.log(e.message);
 
        } else {
            console.log("Tipo de erro não esperado: " + e);
        }
    }
}

const array = [0, 1, 2, 4, 5]

console.log(validaArray(array, 5));