const express = require('express');
const PostBusiness = require('./../business/post');
const postRouter = express.Router();


postRouter.get('/all', (req, res) => {
  return PostBusiness.getAllPosts(req, res);
});

postRouter.post('/create', (req, res) => {
  return PostBusiness.createPost(req, res);
});

postRouter.delete('/delete', (req, res) => {
  return PostBusiness.deletePost(req, res);
});


module.exports = postRouter;
