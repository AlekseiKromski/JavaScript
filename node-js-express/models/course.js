const {Schema, model} = require('mongoose')

//Set and configure schem
const course = new Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  }
});

module.exports = model('Course', course)