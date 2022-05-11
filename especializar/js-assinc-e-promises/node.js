const https = require('https')
const API = 'https://https://api.github.com/users/josuelustosadev'

https.get(API, res => {
    console.log(res.statusCode)
})

console.log('conectando API')