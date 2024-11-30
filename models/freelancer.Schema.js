const mongoose = require('mongoose')
const FreelancerSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type: String, 
        required: true
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
})

const Freelancer = mongoose.model('Freelancer',FreelancerSchema);

module.exports = Freelancer
