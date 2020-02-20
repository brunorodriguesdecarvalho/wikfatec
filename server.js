const express = require('express')
const app = express()
var bodyParser = require('body-parser') //importar o bodyparser para lidar com as arrays
var cors = require('cors')
var mongoose = require('mongoose') //importa o mongoose para conectar com o o db
var dbUrl = 'mongodb+srv://pbsc:wlmvccE6paAmpBNg@dbpbsc-mzrlo.mongodb.net/dbpbsc?retryWrites=true&w=majority'
var http = require('http').Server(app) //chama a biblioteca http e cria um servidor com app
const port = process.env.PORT || 3000

app.use(express.static('./'))
app.use(bodyParser.json()) //usa o bodyparse importado para cuidar do JSON
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

app.get('/regaula', (req, res) => {
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect(dbUrl, { useUnifiedTopology: true }, function (err, dbpbsc) {
        console.log('/regaula acessado!')
        if (err) throw err;
        var dbo = dbpbsc.db("dbpbsc");
        dbo.collection("regaulas").find({}, { projection: { _id: 0 } }).toArray(function (err, regaula) {
            if (err) throw err
            else console.log("Collection regaula foi aberta.")
            res.send(regaula)
            dbpbsc.close()
            console.log("MondoDB fechado")
        })
    })
})

var dbModelAula = mongoose.model('regaula', {
    anotMateria: String,
    anotDataAula: Date,
    anotAnota: String,
    anotDuv: String,
})

app.post('/regaula', (req, res) => {
    console.log("Rota /regaula foi acessada")
    var regaula = new dbModelAula(req.body)
    var regaulaMod = regaula.save()
    window.alert('Nova aula salva no MongoDB.')
})

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true}, function(err, dbpbsc) {
    console.log('MongoDB foi acessado.')
})

http.listen(port, () => console.log(`App ok na porta ${port}!`))