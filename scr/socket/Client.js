import Socket from 'socket.io-client'
import settings from '../config/Settings'
import Logger from '../utils/Logger'

const socket = Socket.connect(settings.SOCKET_SERVER, {
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax : 5000,
    reconnectionAttempts: 99999
})

socket.on('connect', ()=>{
    Logger.info(`Socket Client connected to: ${settings.SOCKET_SERVER}`)
})

module.exports = socket