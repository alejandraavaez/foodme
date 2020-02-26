const { Schema, model } = require ('mongoose')
const PLM = require ('passport-local-mongoose')

const foodSchema = new Schema(
    {
        name: String,
        price: Number,
        description: String,
        foodContent: [
            {
                type: String,
            }
        ],
        owner:[
            {
            type: Schema.Types.ObjectId,
            ref: 'User'
            }
        ]
    }
)

module.exports = model('Food', foodSchema)