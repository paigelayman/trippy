const { Router } = require('express')
const userControllers = require('../controllers/UserController')
const router = Router()

router.get('/', (req, res) => res.send('Root'))

//User Routes
router.get('/users', userControllers.getAllUsers)
router.post('/users', userControllers.createUser)
router.get('/api/users/:id', userControllers.getUserById)
router.put('/users/:id', userControllers.updateUser)
router.delete('/users/:id', userControllers.deleteUser)

module.exports = router
