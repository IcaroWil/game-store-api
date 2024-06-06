"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gameController_1 = require("../controllers/gameController");
const router = (0, express_1.Router)();
router.get('/games', gameController_1.getAllGames);
router.get('/games/:id', gameController_1.getGameByIdOrName);
router.get('/games/name/:name', gameController_1.getGameByIdOrName);
router.post('/games', gameController_1.createGame);
router.put('/games/:id', gameController_1.updateGame);
router.delete('/games/:id', gameController_1.deleteGame);
exports.default = router;
