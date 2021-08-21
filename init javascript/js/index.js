console.log('Iniciando conhecimentos Javascript')
console.log('Não ignorar')

//String
console.log('"Jhoc""tan"')
console.log(`Conta: ${1 + 10}`)
console.log(1+10)

//Number
/*
    - numeros
    33 // inteiros = int
    12.5 // reais = float
    NaN // Not a Number
    Infinity // infinito
*/

console.log(-33) //int 
console.log(12.5) //float
console.log(12.5 + 33) //Soma
console.log(12.5 / 12) //Dvisao
console.log(12.5 / 'aaa') //NaN
console.log(12.5 === Infinity) // false
console.log(Infinity) // apenas uma palavra

//Boolean
/* somente  2 valores
    
    true // verdadeiro
    false // falso
*/
console.log(true)
console.log(false)


/* 
undefined // indefinido
 null // nulo
*/

console.log(null === undefined)

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
