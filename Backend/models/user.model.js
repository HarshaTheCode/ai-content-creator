import mongoose  from "mongoose";

const userschema = mongoose.Schema({
    username:{
        type:String,
        require:true,
        minlegth:[1,"username must be writen"]
        
    },
    email:{
        type:String,
        require:true,
        minlegth:[3,"emmail must be ented to rigister"],
        unique:true
    },
    password:{
        type:String,
        require:true,
        minlegth:[6,"password must be at least 6 charector length "]
    },
    GeneratedResumeIds:[ 
        {
            type: mongoose.Schema.Types.ObjectId, // reference to the user
            ref: 'GeneratedResume',
        } 
        ]

});

const usermodel = mongoose.model('user',userschema)

export default usermodel