const { Schema, model } = require('mongoose')

const requestSchema = new Schema(
    {
        userGive:
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            }
        ,
        userReceive:
            {
                type: Schema.Types.ObjectId,
                ref: 'User',  
                autopopulate: true
            }
        ,
        food:
            {
                type: Schema.Types.ObjectId,
                ref: 'Food',
                autopopulate: true
            },
        status:{
            type: String,
            enum:['waiting', 'requested', 'accepted', 'denied'],
            default: 'waiting'
        },
    }
)

requestSchema.plugin(require('mongoose-autopopulate'));
module.exports = model('Request', requestSchema)