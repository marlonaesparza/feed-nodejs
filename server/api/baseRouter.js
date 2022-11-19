const router = require('express').Router();
const PostBusiness = require('./../business/post');


router.get('/all', (req, res) => {
  return PostBusiness.getAllPosts(req, res);
});

router.get('/getMostRecentByOffset', (req, res) => {
  return PostBusiness.getMostRecentByOffset(req, res);
});

router.post('/create', (req, res) => {
  console.log('Base Rotuer (create)...');
  return PostBusiness.createPost(req, res);
});

router.delete('/delete', (req, res) => {
  return PostBusiness.deletePost(req, res);
});


module.exports = router;
