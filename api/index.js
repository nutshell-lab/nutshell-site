import express from 'express'
import mail from './routes/mail'

const app = express()

app.use(mail)

export default {
  path: '/api',
  handler: app
}
