/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('player', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    playerName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    playerPic: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'player'
  });
};
