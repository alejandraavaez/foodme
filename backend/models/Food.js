const { Schema, model } = require ('mongoose')
const PLM = require ('passport-local-mongoose')

const foodSchema = new Schema(
    {
        name: String,
        price: Number,
        image: String,
        description: String,
        availableTime: String,
        duration: String,
        foodContent: [
          {
            type: String,
          }
        ],
        owner:
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
          autopopulate: true
            },
            request: {
              type: Schema.Types.ObjectId,
              ref:'Request',
              autopopulate: true
            }
    }
)

foodSchema.plugin(require('mongoose-autopopulate'));
module.exports = model('Food', foodSchema)