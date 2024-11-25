import { Request, Response } from 'express'
import Image from '../models/Image.model'
import multer from 'multer'
import path from 'path'

import 'express'

export const getImages = async (req: Request, res: Response) => {
  const image = await Image.findAll({})
  res.status(201).send({ data: image })
}

export const getImageById = async (req: Request, res: Response) => {
  const { id } = req.params
  const image = await Image.findByPk(id)

  if (!image) {
    return res.status(404).json({
      error: 'image Not Found',
    })
  }

  res.send({ data: image })
}

// export const createImage = async (req: Request, res: Response) => {
//   const image = await Image.create(req.body)
//   res.status(201).json({ data: image })
// }

export const createImage = async (req: Request, res: Response) => {
  // Descomenta el if cuando se requiera subir imagen
  // if (!req.file) {
  //   res.status(400).json({ error: 'File not provided or invalid format' })
  // } else {
  let info = {
    // image: req.file.path,
    name: req.body.name,
    description: req.body.description,
    publisher: req.body.publisher,
  }

  const data = await Image.create(info)
  res.status(201).send(data)
  console.log(data)
  // }
}

export const updateImage = async (req: Request, res: Response) => {
  const { id } = req.params
  const image = await Image.findByPk(id)
  if (!image) {
    return res.status(404).send({
      error: 'Item Not Found',
    })
  }

  //   update
  await image.update(req.body)
  await image.save()
  res.json({ data: image })
}

export const deleteImage = async (req: Request, res: Response) => {
  const { id } = req.params
  const image = await Image.findByPk(id)

  if (!image) {
    return res.status(404).send({
      error: 'Item Not Found',
    })
  }

  //   delete
  await image.destroy()
  res.send({ data: 'Item Deleted' })
}

// Upload Image Controller
const storage = multer.diskStorage({
  destination: (req: Request, file, callback) => {
    const imagesPath = path.join(__dirname, '..', 'Images')
    callback(null, imagesPath)
  },
  filename: (req: Request, file, callback) => {
    callback(null, Date.now() + path.extname(file.originalname))
  },
})

export const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: (req: Request, file, callback) => {
    const fileTypes = /jpeg|jpg|png|gif/
    const mimeType = fileTypes.test(file.mimetype)
    const extname = fileTypes.test(path.extname(file.originalname))

    if (mimeType && extname) {
      return callback(null, true)
    }
    callback(new Error('Give proper files formate to upload'))
  },
}).single('image')
