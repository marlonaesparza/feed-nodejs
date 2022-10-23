const Post = require('../../database/models/post');


class PostDAO {
  constructor() {
    this.getPost = this.createPost.bind(this);
    this.createPost = this.createPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.getAllPosts = this.getAllPosts.bind(this);
  };

  getPost({ userUUID, postID }) {
    return Post.findOne({ where: {
      userUUID,
      postID
    }})
      .then(result => {
        console.log('PostDAO (get):', result);
        return result;
      });
  };

  createPost(post) {
    return this.getPost(post)
      .then(result => {
        if (result) {
          console.log('PostDAO 1 (create):', result);
          throw result;
        };

        console.log('PostDAO 2 (create):', 'No post found. Creat new post.');
        return Post.create(post);
      })
      .then(result => {
        console.log('PostDAO 3 (create):', result);
        return result;
      });
  };

  deletePost({ userUUID, postID }) {
    return this.getPost({ userUUID, postID })
      .then(result => {
        if (!result) {
          throw result;
        };

        console.log('PostDAO 2 (create):', 'No post found. Creat new post.');
        return Post.destroy({ where: {
          userUUID,
          postID
        }});
      })
  };

  getAllPosts({ userUUID }) {
    return Post.findAll({ where: { userUUID }})
      .then(result => {
        if (!result) {
          throw result;
        };

        console.log('PostDAO 1 (getAll):', result);
        return result;
      });
  };
};


module.exports = new PostDAO;
