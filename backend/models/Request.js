const { Schema, model } = require('mongoose')

const requestSchema = new Schema(
    {
        userGive:[
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            }
        ],
        userReceive:[
            {
                type: Schema.Types.ObjectId,
                ref: 'User',  
            }
        ],
        food:[
            {
                type: Schema.Types.ObjectId,
                ref: 'Food',
            }
        ],
        status:{
            enum:['pendiente', 'aceptado', 'rechazado'],
            default: 'pendiente'
        }
    }
)

module.exports = model('Request', requestSchema)