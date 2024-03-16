const sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone_no: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_email_varify : {
       type: DataTypes.TINYINT(1),
      defaultValue: '0'
    },
    is_mobile_varify : {
       type: DataTypes.TINYINT(1),
      defaultValue: '0'
    },
    is_active: {
      type: DataTypes.TINYINT(1),
      defaultValue: '0'
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
