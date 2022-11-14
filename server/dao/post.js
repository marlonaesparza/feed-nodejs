const Post = require('../../database/models/post');


class PostDAO {
  constructor() {
    this.getPost = this.getPost.bind(this);
    this.createPost = this.createPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.getAllPosts = this.getAllPosts.bind(this);
  };

  getPost({ userUUID, postID }) {
    console.log('PostDAO get post call:', userUUID, postID);
    return Post.findOne({ where: {
      userUUID,
      postID
    }})
      .then(result => {
        console.log('PostDAO get post result:', result);
        return result;
      });
  };

  createPost(post) {
    console.log('PostDAO create post:', post);
    return this.getPost(post)
      .then(result => {
        if (result) {
          throw result;
        };

        console.log('PostDAO create post:', 'No post found. Creat new post.');
        return Post.create(post);
      })
      .then(result => {
        console.log('PostDAO create post result:', post);
        return result;
      });
  };

  deletePost({ userUUID, postID }) {
    return this.getPost({ userUUID, postID })
      .then(result => {
        if (!result) {
          throw result;
        };

        console.log('PostDAO delete post:', 'No post found. Creat new post.');
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

        console.log('PostDAO get all:', result);
        return result;
      });
  };
};


module.exports = new PostDAO;
