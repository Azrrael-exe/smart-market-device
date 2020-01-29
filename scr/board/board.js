import Serialport from 'serialport'
import Logger from '../utils/Logger'
import socket from '../socket/Client'
import LlpParser from './ll_parser'

import { SERIAL_PORT, EVENT_KEY } from '../config/Settings'

const port = new Serialport(SERIAL_PORT, {
    baudRate: 115200
})

const parser = new LlpParser(0x7E)
port.pipe(parser)


const sendResponse = () => {
    var ok_response = [0x7E, 0x06, 0x0A, 0x00, 0x01, 0x0B, 0x00, 0xC8, 0x21]
    // var err_response = [0x7E, 0x06, 0x0A, 0x00, 0x01, 0x0B, 0x01, 0x90, 0x58]
    // var responses = [ok_response, err_response]
    //var response = responses[Math.floor(Math.random() * responses.length)];
    
    Logger.info('Response Send!')

    port.write(Buffer.from(ok_response))
}

parser.on('data', payload => {
    socket.emit(EVENT_KEY, 'ON')
    Logger.info(`Event Sended to socket: {${EVENT_KEY}: ON}`)
    setTimeout(sendResponse, 5000);
})

module.exports = parser