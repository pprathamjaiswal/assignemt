const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;
const dbConnector = require("./../dbConnector")

const fields = {}
fields["id"] = {type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true}
fields["name"] = {type : Sequelize.DataTypes.STRING, allowNull: false};
fields["email"] = {type : Sequelize.DataTypes.STRING, allowNull: true};
fields["gender"] = {type : Sequelize.DataTypes.ENUM('M', 'F', 'O'), allowNull: true};
fields["is_deleted"] = {type: Sequelize.DataTypes.BOOLEAN, allowNull: true, defaultValue: false}

module.exports = dbConnector.define("student", fields)