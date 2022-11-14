const { connection, sequelize } = require('./../index');

const Post = connection.define('Post', {
  id: {
    type: sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  userUUID: {
    type: sequelize.DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  postID: {
    type: sequelize.DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  postTitle: {
    type: sequelize.DataTypes.STRING,
    allowNull: true,
    unique: false
  },
  postDescription: {
    type: sequelize.DataTypes.STRING,
    allowNull: true,
    unique: false
  },
  postRating: {
    type: sequelize.DataTypes.STRING,
    allowNull: true,
    unique: false
  },
  postMedia: {
    type: sequelize.DataTypes.JSON,
    allowNull: true,
    unique: false
  },
}, {
  tableName: 'post'
});

Post.sync({force: true})
  .then(() => {
    console.log('Post table recreated successfully');
  })

module.exports = Post;
