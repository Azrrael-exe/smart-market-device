import socket from '../socket/Client'
import Logger from '../utils/Logger'
import { APP_NAME, APP_VERSION, DEPLOYED_AT } from '../config/Settings'

module.exports = {
  status: (req, res, next) => {
    Logger.info('Health Check requested!')
    res.payload = {
      app_version: APP_VERSION,
      app_name: APP_NAME,
      deployed_at: DEPLOYED_AT
    }
    return next()
  }
}
