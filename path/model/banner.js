/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('banner', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    bannerTitle: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    bannerImg: {
      type: DataTypes.STRING(300),
      allowNull: true
    }
  }, {
    tableName: 'banner'
  });
};
