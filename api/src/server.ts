import express from 'express'
import colors from 'colors'
import router from './router'
import db from './config/db'
import cors, { CorsOptions } from 'cors'
// import cors, { CorsOptions } from 'cors'
import fs from 'fs'
import path from 'path'

// Conectar a base de datos
export async function connectDb() {
  try {
    await db.authenticate()
    db.sync()
    console.log(colors.blue('Database connected'))
  } catch (error) {
    console.log(colors.red.bold('Database Error'))
  }
}

connectDb()

// Crear carpeta de Images en caso de que no exista
const imagesPath = path.join(__dirname, 'Images')
if (!fs.existsSync(imagesPath)) {
  fs.mkdirSync(imagesPath)
}

// express instance
const server = express()
// allow connections - cors
// const corsOptions: CorsOptions = {
//   origin: function (origin, callback) {
//     if (origin === process.env.FRONTEND_URL || process.env.BACKEND_URL) {
//       callback(null, true)
//     } else {
//       callback(new Error('Error de CORS'))
//     }
//   },
// }
// server.use(cors(corsOptions))

// Configuración de CORS para aceptar peticiones de cualquier origen
const corsOptions = {
  origin: '*', // Permitir todos los orígenes
}

server.use(cors(corsOptions))

// read form data
server.use(express.json())
server.use('/Images', express.static('./Images'))
server.use('/api/images', router)

export default server
