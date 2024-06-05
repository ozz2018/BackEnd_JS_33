const mongoose = require('mongoose')

const schema= new mongoose.Schema({
    number:{
        type:number,
        require:true,
        min:1,
        max:100
    },
    program:{
        type:String,
        required:true,
        enum:['javaScript',
                'python',
                'ios',
                'android'
    ]
    },
    startDate:{
        type:Date,
        required:true,
    },
    endDate:{
        type:Date,
        required:true
    },
})


module.exports=mongoose.model('generations',schema)