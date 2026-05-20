const express = require('express')

const app = express()

app.use(express.json())

app.use(
 '/products',
 require('./routes/product.routes')
)

app.listen(3000,()=>{
 console.log('Servidor activo')
})