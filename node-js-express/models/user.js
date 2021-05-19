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
                course:{
                    type: Schema.Types.ObjectId,
                    ref: 'Course',
                    required: true,
                }
            }
        ]
    }
})

userSchema.methods.addToCard = function (course) {
    const items = [...this.cart.items.concat()];
    const index = items.findIndex(c => {
        return c.course.toString() === course._id;
    })
    if(index){
        items[index].count++;
    }else{
        items.unshift({
            course: course._id,
            count: 1
        });
    }
    //Change user.cart object
    this.cart = {items};
    return this.save();
}

module.exports = model('User', userSchema);