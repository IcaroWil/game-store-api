import { Router } from 'express';
import { getAllGames, getGameById, getGameByName, createGame, updateGame, deleteGame } from '../controllers/gameController';

const router = Router();

router.get('/games', getAllGames);
router.get('/games/:id', getGameById); // Rota para buscar por ID
router.get('/games/name/:name', getGameByName); // Rota para buscar por nome
router.post('/games', createGame);
router.put('/games/:id', updateGame);
router.delete('/games/:id', deleteGame);

export default router;
