import Serialport from 'serialport'
import Firmata from 'firmata'
import Logger from '../utils/Logger'
import socket from '../socket/Client'

import { SERIAL_PORT, EVENT_KEY } from '../config/Settings'

const serialport = new Serialport(SERIAL_PORT, {
    baudRate: 57600
})

const board = new Firmata(serialport, () => {
    Logger.info('Arduino ready!')
    board.pinMode(7, board.MODES.INPUT);

    board.digitalRead(7, (value) => {
        if(value){
            Logger.info('Sending socket event!')
            socket.emit(EVENT_KEY, 'ON')
        }
    });
})

module.exports = board