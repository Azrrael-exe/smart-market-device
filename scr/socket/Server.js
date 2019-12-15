import SocketIO from 'socket.io'
import Logger from '../utils/Logger'
import { EVENT_KEY } from '../config/Settings'

const io = SocketIO();
io.serveClient(false)

io.on('connection', socket => {
  socket.on(EVENT_KEY, (data) => {
    Logger.info(`Socket Input => ${EVENT_KEY} : ${data}`)
  });
});

module.exports = io