import { Request, Response } from 'express'
import Game from '../models/gameModel'

export const getAllGames = async (req: Request, res: Response) => {
  try {
    const games = await Game.find()
    res.json(games)
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const getGameByIdOrName = async (req: Request, res: Response) => {
  try {
    const { id, name } = req.params
    const game = id ? await Game.findById(id) : await Game.findOne({ name })
    if (!game) return res.status(404).json({ message: 'Jogo não encontrado' })
    res.json(game)
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const createGame = async (req: Request, res: Response) => {
  const { name, description, genre, platform, releaseDate, price } = req.body
  const newGame = new Game({ name, description, genre, platform, releaseDate, price })
  try {
    const savedGame = await newGame.save()
    res.status(201).json(savedGame)
  } catch (error: any) {
    res.status(400).json({ message: error.message })
  }
}

export const updateGame = async (req: Request, res: Response) => {
  const { id } = req.params
  const { name, description, genre, platform, releaseDate, price } = req.body
  try {
    const updatedGame = await Game.findByIdAndUpdate(id, { name, description, genre, platform, releaseDate, price }, { new: true })
    if (!updatedGame) return res.status(404).json({ message: 'Jogo não encontrado' })
    res.json(updatedGame)
  } catch (error: any) {
    res.status(400).json({ message: error.message })
  }
}

export const deleteGame = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const deletedGame = await Game.findByIdAndDelete(id)
    if (!deletedGame) return res.status(404).json({ message: 'Jogo não encontrado' })
    res.json({ message: 'Jogo deletado' })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}