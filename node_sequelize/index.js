const {sequelize} = require('./connection');
const express = require('express');
const app = express();
const PORT = 3000;
const Department = require('./models/department');
const Employee = require('./models/employee');

Department.hasMany(Employee, { foreignKey: 'departmentId' });
Employee.belongsTo(Department, { foreignKey: 'departmentId' });

const departmentRoutes = require('./routes/department');
app.use(express.json());
app.use('/departments', departmentRoutes);

sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
    }).catch((error) => {
        console.error('Error creating database & tables:', error);
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});