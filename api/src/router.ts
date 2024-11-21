import { Router } from 'express'
import { body, param } from 'express-validator'
import {
  getImages,
  createImage,
  deleteImage,
  getImageById,
  updateImage,
  upload,
} from './handlers/image'
import { handleInputErrors } from './middleware'

const router = Router()

// example
// router.get('/', (req, res) => {
//   res.json('FROM GET')
// })

router.get('/', getImages)
router.post('/', upload, createImage)

router.get('/:id', getImageById as any)
router.patch('/:id', updateImage as any)
router.delete('/:id', deleteImage as any)

export default router
