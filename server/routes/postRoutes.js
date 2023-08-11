import express from 'express';
import {getPost, createPost} from '../controllers/postControllers.js'

const router=express.Router();

router
.route('/')
.get(getPost)
.post(createPost)


export default router;