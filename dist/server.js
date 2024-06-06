"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const PORT = process.env.PORT || 3000;
mongoose_1.default.connect(process.env.MONGO_URI)
    .then(() => {
    app_1.default.listen(PORT, () => {
        console.log(`Servidor está rodando na porta ${PORT}`);
    });
})
    .catch((error) => {
    console.error('Erro na conexão com o banco de dados:', error);
});
