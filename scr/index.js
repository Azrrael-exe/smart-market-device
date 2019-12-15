import express from 'express'
import bodyParser from 'body-parser'

import resHandler from './utils/ResHandler'
import settings from './config/Settings'
import Logger from './utils/Logger'
import SocketServer from './socket/Server'
import board from './board/board'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const api = require('./routes/Api')

app.use(settings.BASE_PATH, api)
app.use(resHandler.susscess)
app.use(resHandler.error)

const server = require('http').createServer(app);

const port = settings.PORT || 3000

server.listen(port, () => {
  Logger.info(`HTTP Server running on port: ${settings.PORT}`)
})

if (settings.DEBUG) {
  SocketServer.attach(server)
  Logger.info(`Server listen on port: ${settings.PORT}`)
}

module.exports = app