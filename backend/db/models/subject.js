const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;
const dbConnector = require("./../dbConnector")

const fields = {}
fields["id"] = {type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true}
fields["subject_name"] = {type : Sequelize.DataTypes.STRING, allowNull: false};

module.exports = dbConnector.define("subject", fields)