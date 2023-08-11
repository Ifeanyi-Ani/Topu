import mongoose from 'mongoose';

const postSchema=new mongoose.Schema({
  title:String,
  message:String,
  creator:String,
  tags:[String],
  selectedFile:String,
  like:[],
  createdAt: {
    type: Date,
    default:new Date()
  }
})
const Posts=mongoose.model('Posts', postSchema);

export default Posts;