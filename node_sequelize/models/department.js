const { DataTypes } = require('sequelize');
const { sequelize } = require('../connection');

const Department = sequelize.define('Department', {
    departmentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    departmentName: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Department;