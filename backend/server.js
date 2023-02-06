const express = require("express")
// const mongoose = require("mongoose")
// const routes = require("./routes")
const db = require("./db")
const cors = require("cors")
const logger = require("morgan")
const PORT = process.env.PORT || 3001

// mongoose.set("strictQuery", false)

const app = express()

app.use(cors())
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/client/build`))

// app.use("/", routes)

db.on("error", console.error.bind(console, "MongoDB connection error:"))

app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
