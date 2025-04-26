const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;
const dbConnector = require("./../dbConnector")

const fields = {}
fields["id"] = {type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true}
fields["student_id"] = {type : Sequelize.DataTypes.INTEGER, allowNull: false};
fields["subject_id"] = {type : Sequelize.DataTypes.INTEGER, allowNull: false};
fields["marks_obtained"] = {type: Sequelize.DataTypes.DECIMAL(5, 2), allowNull: false}

module.exports = dbConnector.define("mark", fields)