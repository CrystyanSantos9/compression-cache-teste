const express = require('express')
const app = express()
const compression = require('compression')

//testando compressão 
//alto envio de documentos grandes
const largeObject = []
for(let i= 0; i<1000; i++){
    largeObject.push({
        name: `Name posição${i}`,
        addres: 'address',
        anotherField: 'another'
    })
}

//criando compressão 
app.use(compression({ level: 9}))

//rota que receberá compressão de dados
app.get('/', (req, res)=> {
    res.header('Cache-Control', 'public, max-age=3600')
    res.send(largeObject)
}
)

app.listen(3000, ()=> console.log('listening...'))

