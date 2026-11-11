const {sequelize} = require('../connection');
const { DataTypes } = require('sequelize');

const Employee = sequelize.define('Employee', {
    employeeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    employeeName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }

});

module.exports = Employee;