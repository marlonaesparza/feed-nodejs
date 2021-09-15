const express = require('express');
const postRouter = express.Router();

postRouter.post('/create', (req, res) => {
  console.log('Post Router:', req.body);
  return res.json({});
});

module.exports = postRouter;
