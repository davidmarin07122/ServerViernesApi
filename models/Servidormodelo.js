const express = require('express')

class Servidormodelo {

    constructor(){
        this.app = express()
        this.enrutarPeticiones()
    }

    wakeupServer(){
        this.app.listen(process.env.PUERTO, function () {
            console.log("servidor starting: " + process.env.PUERTO);
        })
    }

    enrutarPeticiones(){

        this.app.get('/Avanzada/v1/jugadores', function (req, res) {
            res.send('im process a get')
        })
        
        this.app.post('/Avanzada/v1/jugadores', function (req, res) {
            res.send('im process a post')
        })
        
        this.app.put('/Avanzada/v1/jugadores', function (req, res) {
            res.send('im process a put')
        })
        
        this.app.delete('/Avanzada/v1/jugadores', function (req, res) {
            res.send('im process adeletes')
        })
    }

    wakeupDB(){

    }

}
module.exports=Servidormodelo;