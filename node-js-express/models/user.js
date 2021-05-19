const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    card: {
        items: [
            {
                count: {
                    type: Number,
                    required: true,
                    default: 1
                },
                courseInfo:{
                    type: Schema.Types.ObjectId,
                    ref: 'Course',
                    required: true,
                }
            }
        ]
    }
})

module.exports = model('User', userSchema);