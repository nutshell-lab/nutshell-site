import sendgrid from '@sendgrid/mail'

const APIKEY = process.env.SENDGRID_APIKEY
sendgrid.setApiKey(APIKEY)

export default data => sendgrid.send(data)
