module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define("comment", {
      message: {
        type: DataTypes.STRING,
      }

    });
    return Comment;
  };