import { Router, json } from 'express'
import sendEmail from '../send-email'

const router = Router()

router.use(json())
router.post('/mail/send', async (req, res) => {
  const result = await sendEmail(req.body)
  return res.json({ data: result[0] })
})

export default router
