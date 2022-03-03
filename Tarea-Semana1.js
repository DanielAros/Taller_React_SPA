/*
A Jack le gustan los juegos de cartas, le gusta coleccionar barajas de diferentes tipos. Quiere escribir un método que emule mazos españoles, 
franceses y suizos usando la menor cantidad de código posible usando el siguiente esquema. ¿Puedes ayudarlo?

* Tipo francés, ordenado por corazones, tréboles, diamantes y picas; y cartas del uno al diez más una jota, una reina, un rey y un as.
* Tipo español, ordenado por monedas, copas, espadas y bastones; y cartas del uno al diez y un escudero, un caballo y un rey.
* Tipo suizo, ordenados por escudos, rosas, campanas y bellotas; y cartas del seis al diez y un escudero, un caballo y un rey.

El método debe recibir un argumento para establecer el tipo de mazo, como 'francés', 'español' o 'suizo', la salida debe ser una matriz 
de cadenas que contengan elementos denominados como "uno_de_tréboles", "dos_de_tréboles", etc. ., según el tipo de argumento dado y 
utilizando guiones bajos en lugar de espacios.

* [input] string tipo
Establece el tipo de mazo que se devolverá. Si es nulo, deberá devolver una baraja francesa.

* [salida] array.
Un arreglo de strings con valores como 'uno_de_tréboles', 'dos_de_tréboles', etc dependiendo del tipo proporcionado como parámetro.

*/

function solucion(tipoMazo){
    tipoMazo = tipoMazo.toLowerCase();

    let numeroMazo = ['uno_de_', 'dos_de_', 'tres_de_', 'cuatro_de_', 'cinco_de_', 'seis_de_', 'siete_de_', 'ocho_de_', 'nueve_de_', 'diez_de_',];
    
    let concatenar = (cartas_mazo, mazo, a,b,c) =>{
        for(let i = 0; i < cartas_mazo.length-a; i++){
            for(let j = b; j < numeroMazo.length; j++){
                mazo.push(numeroMazo[j]+cartas_mazo[i]);
            }
            for(let k = c; k < cartas_mazo.length; k++){
                mazo.push(cartas_mazo[k]+cartas_mazo[i]);
            }
        }

        return mazo;
    }

    switch(tipoMazo){
        case 'español':
            let cartas_mazo_español = ['corazones', 'tréboles', 'diamanetes', 'picas', 'jota_de_', 'reina_de_', 'rey_de_', 'as_de_'];

            return concatenar(cartas_mazo_español, [], 4, 0, 4);
        case 'frances':
            let cartas_mazo_frances = ['monedas', 'copas', 'espadas', 'bastones', 'escudero_de_', 'caballo_de_', 'rey_de_'];

            return concatenar(cartas_mazo_frances, [], 3, 0, 4);
        case 'suizo':
            let cartas_mazo_suizo = ['escudos', 'rosas', 'campanas', 'escudero_de_', 'caballo_de_', 'rey_de_'];

            return concatenar(cartas_mazo_suizo, [], 3, 5, 3);
        default:
            return solucion('Frances');
    }

}

console.log(solucion('Suizo'));