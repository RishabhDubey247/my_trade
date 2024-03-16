const sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('cryptolist', {
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
    symbol : {
        type: DataTypes.STRING(120),
        allowNull: true
    },
    type_id: {
      type: DataTypes.INTEGER(15),
      allowNull: true
    },
    rank: {
      type: DataTypes.INTEGER(15),
      allowNull: true
    },
    is_active: {
      type: DataTypes.TINYINT(1),
      defaultValue: '0'
    }
  }, {
    sequelize,
    tableName: 'cryptolist',
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
