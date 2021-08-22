{
    let a = 0;
    console.log('Tem a igual: ', a)
}

// var
console.log('> existe b  antes do bloco?', b)
{
    var b = 0
}
console.log('> existe b  depois do bloco?', b)

// const e let sao locais 
{
    let c = 1
    console.log('> existe c ?', c)
}
// console.log('> existe c  depois do bloco?', c)

// const
const d = 2
{
    const d = 2
    console.log('> existe d  antes do bloco?', d)
}
console.log('> existe d depois do bloco?', d)


var a = 1 * 18

console.log(a)
