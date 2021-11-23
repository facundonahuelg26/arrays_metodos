const numeros = [1,2,3]

/*
    .length devuelve el numero de posiciones del array
*/

/*
    Array.isArray() - devuelve un booleano de acuerdo a si es o no es un array.

    console.log(Array.isArray(numeros)) esto devuelve true, si le pasas un string false.
*/


/*
    Eliminar un elemento
    .shift() - elimina el primer elemento del array y devuelve ese elemento.
    console.log(numeros.shift())
    .pop() - elimina el ultimo elemento del array y lo devuelve.
*/

/*
    Añadir elementos
    .push - añade elementos al final del array
    console.log(numeros)
    const numerosDos = numeros.push(4)

    Para añadir mas numeros por ejemplo se podria utilizar un for of

    const segundoArray = [4,5,6,7]
    for(let numero of segundoArray){
        numeros.push(numero)
    }
    console.log(numeros)


    .unshif - añade uno o mas elementos al principio del array.
*/

/*
    .indexOF() - devuelve el primer indice del elemento que coincida con 
    el valor especificado, o -1 si ninguno es encontrado.

    numeros.indexOf(1) nos va a devolver la posicion cero del array.
    si tuvieramos valores repetidos, nos devolvera la primera posicion 
    del numero repetido que pusimos.

    lastIndexOf() - Lo mismo pero al reves.
    let posicion = numeros.lastIndexOf(3)
    console.log(posicion)
*/

/*
    reverse() - invierte el orden de los elementos.
*/

/*
    .join() - es un separador, se coloca un string, si no por defecto
    ddeja comas.

    console.log(numeros.join("--"))
*/


/*
    splice(a,b) - Extrae elementos de un array desde el indice "A" 
    hasta el indice "B", si no existe "B" lo hace desde "A"  hasta el final, 
    si no hay "A" ni "B" hace una copia del original.

*/

const n = [10, 20, 30, 40, 50]
/*
    .map devuelve un nuevo array

    const n1 = n.map(num => num)
    const n2 = n.map(num => num * 2)

    console.log(n2)

    Caso Practico, hacer una lista y mostrarla.

    const lista = document.querySelector("#list")
    const users = [
        {
            name : "Pepe 👍",
            edad : 25, 
        },
        {
            name : "Juan 😒",
            edad : 26, 
        },
        {
            name : "Jose ✌",
            edad : 28 
        },
    ]

    users.map(({name, edad}) => (
        lista.innerHTML += `<li>Nombre: ${name} - <br> Edad: ${edad} <br><br></li>`
    ))


    Tener en cuenta que el uso de innerHTML para este tipo de casos seria mala practica, pero solo es usado a modo de ejemplo.
    Debera conocerse y evaluarse con otras tecnicas, pero ese ya es otro tema
    que no esta dentro de los metodos de arrays.
*/

const n3 = [20, 30, 40, 50]
/*
        .filter: filtra todos los elementos del array que cumplan con la condicion
        y devuelve un nuevo array.

        const n4 = n3.filter(n => n > 20)

        console.log(n4)
*/

const n5 = [100, 200, 300,]
/*
        .reduce - puede reducir todos los elementos a un unico valor.
        console.log(n5.reduce((a,b) => a+b))

        Casos Practicos

        const usuarios = [
    {
        nombre:"Juancito",
        conectado: true
    },
    {
        nombre:"Mario",
        conectado: false
    },
    {
        nombre:"Aldo",
        conectado: true
    },
    {
        nombre:"Pedro",
        conectado: false
    },
    {
        nombre:"Luis",
        conectado: true
    }
]

    usuarios, recorre el array de objetos, y acumulador los va sumando
    a los usuarios que cumplen con la condicion.

    const usuariosConectados = usuarios.reduce((acumulador, usuario) => {
        if(usuario.conectado){
            acumulador++
        }    
        return acumulador
    },0) // si no se coloca este valor numerico, dara not a number. necesita un
    valor inicial.


    console.log(`Hay ${usuariosConectados} conectados`)


    Segundo caso, sacar el precio total de la venta de diferentes productos
    teniendo en cuenta la cantidad y el precio.

    const productos = [
    {
        producto: "papas",
        cantidad: 1, 
        precio: 100,
    },
    {
        producto: "tomates",
        cantidad: 2, 
        precio: 250,
    },
    {
        producto: "manzanas",
        cantidad: 2, 
        precio: 200,
    },
    ]

    const precioTotal = productos.reduce((acumulador, {cantidad, precio}) => acumulador + cantidad * precio ,0)

    cantidad * precio en el caso 1 es 100, el acumulador guarda el valor,
    cantidad * precio en el caso 2 es 500, vuelve a guardar el acum,
    cantidad * precio en el caso 3 es 400, se guarda,
    el valor acumulado total en todas las vueltas da 1000.

    console.log(precioTotal)
*/







 





