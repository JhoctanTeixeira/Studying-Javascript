console.log('Iniciando conhecimentos Javascript')
console.log('Não ignorar')

//String
console.log('"Jhoc""tan"')
console.log(`Conta: ${1 + 10}`)

//Number
/*
    - numeros
    33 // inteiros = int
    12.5 // reais = float
    NaN // Not a Number
    Infinity // infinito
*/

console.log( 'int:', -33) //int 
console.log('float:', 12.5) //float
console.log('Soma:', 12.5 + 33) //Soma
console.log('Divisão:', 12.5 / 12) //Dvisao
console.log('Nan:', 12.5 / 'aaa') //NaN
console.log('True or false:', 12.5 === Infinity) // false
console.log('Apenas uma palavra:', Infinity) // apenas uma palavra


/* 
undefined // indefinido
 null // nulo
*/
console.log('Undefined // Indefinido:', null === undefined)

// obect
/* Objeto
Propiedade / atributos
Funcionalidades / Métodos

{propiedadeed : "valor"}
*/

console.log({

    name: "jhoctan",
    idade: 18,
    andar: function(){
        console.log('andar')
    }
})

// Array
/* Vetores
 Uma lista
 Agrupamento de dados

 ["Jhoctan", 36]
*/

console.log(["Jhoctan", 35, "Ovos", "Leite", 2, 3])

//Declaeração or declaraçoes
var  name = 'Jhoctan'

//multiplos argumentos na função
let age, isHuman

    age = 19
    isHuman = true

console.log( age, isHuman)

//Esxrita de texto + variaveis

//conatatenando valores
console.log(' o ' + name + ' tem ' + age + ' anos. ')

// interporlando valores`com template literals or template strings
console.log(` o ${name} tem ${age} anos.`)

const person = {
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}

console.log(` ${person.name} tem ${person.age} anos ${person.weight}`)

const animals = [
    'Lion',
    'Monkey',
    {
        name: 'Cat',
        age: 3
    }
]
console.log(animals)

//Exer
let weight;
console.log('Tipo undefined:', typeof weight)


const persons = {
    name: 'JHoctan',
    age: 18,
    stars: 18.1,
    isSubscribed: true
}