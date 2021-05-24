import express from 'express'
import mail from './routes/mail.mjs'
import helmet from 'helmet'

const app = express()
const port = 5033

app.use(helmet())
app.use(mail)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
