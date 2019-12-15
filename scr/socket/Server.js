import SocketIO from 'socket.io'
import Logger from '../utils/Logger'

const io = SocketIO();
io.serveClient(false)

io.on('connection', socket => {
  socket.on('hardware-event', (data) => {
    Logger.info(`hardware-event received: ${data}`)
  });
});

module.exports = io