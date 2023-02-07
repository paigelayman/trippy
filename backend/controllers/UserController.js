// const { model } = require("mongoose")
const { User } = require('../models')

//User Controllers
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({})
    return res.status(200).json({ allUsers })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body)
    await newUser.save()
    return res.status(201).json({
      newUser
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getUserById = async (req, res) => {
  try {
    const id = req.params.id
    const user = await User.findById(id)
    if (user) {
      return res.status(200).json({ user })
    }
    return res.status(404).send('User with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(updatedUser)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const deletedUser = await User.findByIdAndDelete(id)
    if (deletedUser) {
      return res.status(200).send('User deleted')
    }
    throw new Error('User not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser
}
