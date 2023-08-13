import axios from 'axios';
const url='http://localhost:5000/api/v1/posts'
export default axios.create({
  baseUrl: url
}) 