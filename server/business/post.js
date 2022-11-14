const PostDAO = require('./../dao/post');


class PostBusiness {
  constructor() {
    this.createPost = this.createPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.getAllPosts = this.getAllPosts.bind(this);
  }

  createPost(req, res) {
    const postInfo = req.body;

    return PostDAO.createPost(postInfo)
      .then(result => {
        console.log('PostBusiness (create):', result);
        return res.status(200).send(result);
      })
      .catch(error => {
        console.log('PostBusiness ERROR (create):', error);
        return res.status(400).send({});
      });
  };

  deletePost(req, res) {
    const postInfo = req.body;

    return PostDAO.deletePost(postInfo)
      .then(result => {
        console.log('PostBusiness (delete):', result);
        return res.status(200).send(result);
      })
      .catch(error => {
        console.log('PostBusiness ERROR (delete):', error);
        return res.status(400).send({});
      });
  };

  getAllPosts(req, res) {
    const postInfo = req.query;
    console.log('GET ALL POST PARAMS:', postInfo);
    return PostDAO.getAllPosts(postInfo)
      .then(result => {
        console.log('PostBusiness (getAll):', result);
        return res.status(200).send(result);
      })
      .catch(error => {
        console.log('PostBusiness ERROR (getAll):', error);
        return res.status(400).send({});
      });
  };
}


module.exports = new PostBusiness;
