const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
 
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    flag: {
        required: true,
        type: Boolean
    },
    id: {
        required: true,
        type: String
    },
    
})

dataSchema.methods.showEmail = function(){
    console.log(`My email is ${this.email}`)
}

dataSchema.statics.findByEmail = function(email){
    return this.find({email: new RegExp(email, 'i')})
}

dataSchema.statics.byEmail = function(email){
    return this.where({email: new RegExp(email, 'i')})
}

dataSchema.virtual('namedEmail').get(function(){
    return ` ${this.email}`
})

module.exports = mongoose.model('Data', dataSchema)