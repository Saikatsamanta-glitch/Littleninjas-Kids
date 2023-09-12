import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    
title:{
    type:String
},
 pdf_link:{
    type:String
 },
    levels: [{ type: mongoose.Types.ObjectId, ref: 'levels' }],
}, {
    timestamps: true
})
export default mongoose.models.courses || mongoose.model('courses',courseSchema)