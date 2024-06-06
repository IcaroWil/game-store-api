"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const gameSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    genre: { type: String, required: true },
    platform: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    price: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});
const Game = (0, mongoose_1.model)('Game', gameSchema);
exports.default = Game;
