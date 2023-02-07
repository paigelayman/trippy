const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    favorites: [{ type: Schema.Types.ObjectId, ref: "Favorite" }],
    trips: [{ type: Schema.Types.ObjectId, ref: "Trip" }],
  },
  { timestamps: true }
)

module.exports = userSchema
