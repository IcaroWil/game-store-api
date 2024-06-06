"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGame = exports.updateGame = exports.createGame = exports.getGameByIdOrName = exports.getAllGames = void 0;
const gameModel_1 = __importDefault(require("../models/gameModel"));
const getAllGames = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const games = yield gameModel_1.default.find();
        res.json(games);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAllGames = getAllGames;
const getGameByIdOrName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, name } = req.params;
        const game = id ? yield gameModel_1.default.findById(id) : yield gameModel_1.default.findOne({ name });
        if (!game)
            return res.status(404).json({ message: 'Jogo não encontrado' });
        res.json(game);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getGameByIdOrName = getGameByIdOrName;
const createGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, genre, platform, releaseDate, price } = req.body;
    const newGame = new gameModel_1.default({ name, description, genre, platform, releaseDate, price });
    try {
        const savedGame = yield newGame.save();
        res.status(201).json(savedGame);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.createGame = createGame;
const updateGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, description, genre, platform, releaseDate, price } = req.body;
    try {
        const updatedGame = yield gameModel_1.default.findByIdAndUpdate(id, { name, description, genre, platform, releaseDate, price }, { new: true });
        if (!updatedGame)
            return res.status(404).json({ message: 'Jogo não encontrado' });
        res.json(updatedGame);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.updateGame = updateGame;
const deleteGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedGame = yield gameModel_1.default.findByIdAndDelete(id);
        if (!deletedGame)
            return res.status(404).json({ message: 'Jogo não encontrado' });
        res.json({ message: 'Jogo deletado' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteGame = deleteGame;
