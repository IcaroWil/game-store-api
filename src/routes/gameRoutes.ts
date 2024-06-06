import { Router } from 'express'
import { getAllGames, getGameByIdOrName, createGame, updateGame, deleteGame } from '../controllers/gameController'

const router = Router()

router.get('/games', getAllGames)
router.get('/games/:id', getGameByIdOrName)
router.get('/games/name/:name', getGameByIdOrName)
router.post('/games', createGame)
router.put('/games/:id', updateGame)
router.delete('/games/:id', deleteGame)

export default router
