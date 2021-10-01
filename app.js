//importo el servidor modelo
const Servidormodelo = require('./models/Servidormodelo.js')

//configurando variables de entorno
require('dotenv').config()

    //crear un obvjeto de la clase servidor
    const servidorFPC = new Servidormodelo()

//despertar el sevidor
servidorFPC.wakeupServer()