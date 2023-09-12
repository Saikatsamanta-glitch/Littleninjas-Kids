import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import courseModel from '../../../lib/model/CourseModel.js'
export async function GET() {
    await mongoose.connect('mongodb+srv://nodejs_todo:nodejs_todo@cluster0.ni3psao.mongodb.net/littleNinja')
   const data=await courseModel.find()
   
  return NextResponse.json({ data})
}