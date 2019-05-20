import { Router, json } from 'express'
import { api } from '../../config/sendgrid'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(api)
const router = Router()

router.use(json())

router.post('/mail/send', async (req, res) => {
  const result = await sgMail.send(req.body)
  return res.json({ data: result[0] })
})

export default router