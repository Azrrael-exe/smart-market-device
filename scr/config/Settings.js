require('dotenv').config()

const APP_NAME = 'smart-market-device'
const APP_VERSION = '1.0.0'

const {
  PORT,
  DEBUG,
  SOCKET_SERVER,
} = process.env

const settings = {
  APP_NAME,
  APP_VERSION,
  DEBUG: DEBUG || true,
  PORT: PORT || 3000,
  SOCKET_SERVER: SOCKET_SERVER || `http://localhost:${PORT}`,
  BASE_PATH: `/api/${APP_NAME}`,
  DEPLOYED_AT: new Date().toISOString()
}

module.exports = settings
