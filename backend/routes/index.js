const { Router } = require("express")
const controllers = require("../controllers")
const router = Router()

router.get("/", (req, res) => res.send("Root"))

//User Routes
router.get("/users", controllers.getAllUsers)
router.post("/users", controllers.createUser)
router.get("/api/users/:id", controllers.getUserById)
router.put("/users/:id", controllers.updateUser)
router.delete("/users/:id", controllers.deleteUser)

module.exports = router
