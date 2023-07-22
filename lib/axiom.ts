import { log } from 'next-axiom'

const logger = log.with({ from: process.env.SERVER_CREDENTIAL })

export default logger
