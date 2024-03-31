const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Jobs extends Model {
    static associate() {
      //define associations here
    }

    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }

  Jobs.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      institutionName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      imageURL: {
        type: DataTypes.STRING,
      },
      post: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      level: {
        type: DataTypes.STRING,
      },
      vacancy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      type: {
        type: DataTypes.STRING,
      },
      salary: {
        type: DataTypes.INTEGER,
      },
      deadline: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      venue: {
        type: DataTypes.STRING,
      },
      education: {
        type: DataTypes.STRING,
      },
      experience: {
        type: DataTypes.STRING,
      },
      specifications: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Jobs",
      tableName: "jobs",
    }
  );
  return Jobs;
};
