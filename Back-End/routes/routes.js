import express from 'express'
import { createNews, deleteNews, getNews, showAllNews, updateNews } from '../controllers/newsControlers.js'

const router = express.Router()

router.get('/', showAllNews)
router.get('/:id', getNews)
router.post('/', createNews)
router.put('/:id', updateNews)
router.delete('/:id', deleteNews)

export default router