import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'
import fs from 'fs'
import path from 'path'
import multer from 'multer'

// input errors
export const handleInputErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  next()
}
