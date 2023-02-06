const { Schema } = require('mongoose')

const favoriteSchema = new Schema(
  {
    place: [{ type: Schema.Types.ObjectId, ref: 'Places' }]
  },
  { timestamps: true }
)

module.exports = favoriteSchema
