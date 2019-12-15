require('dotenv').config()

const APP_NAME = 'smart-market-device'
const APP_VERSION = '1.0.0'

const {
  PORT,
  DEBUG,
  SOCKET_SERVER,
  SERIAL_PORT,
  EVENT_KEY
} = process.env

const settings = {
  APP_NAME,
  APP_VERSION,
  DEBUG: DEBUG || true,
  PORT: PORT || 3000,
  SOCKET_SERVER: SOCKET_SERVER || `http://localhost:${PORT}`,
  SERIAL_PORT: SERIAL_PORT || '/dev/ttyACM0',
  EVENT_KEY: EVENT_KEY || 'button-report',
  BASE_PATH: `/api/${APP_NAME}`,
  DEPLOYED_AT: new Date().toISOString()
}

module.exports = settings
