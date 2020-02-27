const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    email: String,
    name: String,
    username: String,
    photoURL:{
      type: String,
      default: 'https://ps.w.org/ultimate-member/assets/icon-256x256.png?rev=2143339'
    },
    biography: String,
    phone: String,
    adress: String,
    foodRestriction:[String],
    rating: Number,
    createdFood:[
      {
      type: Schema.Types.ObjectId,
      ref: 'Food'
      }
      ]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);
