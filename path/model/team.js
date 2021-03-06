/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('team', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    teamName: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    teamPic: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'team'
  });
};
