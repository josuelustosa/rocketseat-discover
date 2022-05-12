let aceitar = false

console.log('Pedir Uber \n--------------------------')

const promessa = new Promise((resolve, reject) => {
    if (aceitar) {
        return resolve('Corrida Aceita!')
    }

    return reject('Corrida Recusada!')
})

console.log('Agurdando motorista...')

promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log('Corrida Finalizada!'))

