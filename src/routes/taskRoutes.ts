import express from  'express'

const router = express.Router()

router.get('/', getTasks)
router.post('/newtask', createTask)
router.put('/task/:id', updateTask)
router.delete('/task/:id', deleteTask)

export default router