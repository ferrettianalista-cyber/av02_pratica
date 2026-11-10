

import express from 'express';
import { jogosRouter } from '../routes/jogos.route.js'

const server = express

server.use(express.json())

server.get('/health', (req, res) => {
    res.json({
    status:'Servidor esta ligado'
})
})
server.use('/jogos', jogosRouter);


server.listen(3000, ()=> {
    console.log('http://localhost:3000')
})