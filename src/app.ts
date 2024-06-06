import express from 'express'
import dotenv from 'dotenv'
import gameRoutes from './routes/gameRoutes'

dotenv.config()

const app = express()

app.use(express.json())
app.use('/api', gameRoutes)

export default app
