import { Schema, model, Document } from 'mongoose'

interface IGame extends Document {
  name: string
  description: string
  genre: string
  platform: string
  releaseDate: Date
  price: number
  createdAt: Date
}

const gameSchema = new Schema<IGame>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  genre: { type: String, required: true },
  platform: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
})

const Game = model<IGame>('Game', gameSchema)

export default Game
