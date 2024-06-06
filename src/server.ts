import app from './app'
import mongoose from 'mongoose'

const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI!)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor está rodando na porta ${PORT}`)
    })
  })
  .catch((error: any) => {
    console.error('Erro na conexão com o banco de dados:', error)
  })
