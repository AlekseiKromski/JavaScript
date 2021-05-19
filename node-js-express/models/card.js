const {Schema, model} = require('mongoose');

//Set and configure schem
const card = new Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = model('Card', card)