const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const jwt = require('jsonwebtoken');
const connection = require('./connection');

// app.use(customMiddleware);
app.use(express.json());

function customMiddleware(req, res, next) {
    console.log('Request URL:', req.url);
    console.log('Request Method:', req.method);
    console.log('You will see me in all requests');
    next();
}

app.get('/customers', (req, res) => {

    connection.query('SELECT * FROM fssept2026.customers', (err, results) => {
        if (err) {
            console.error('Error fetching customers:', err);
        } 
        res.json(results);
    });
});

app.get('/customers/:id', customMiddleware , (request, response) => {
    if(request.params.id > 0) {
        
        let customerId = parseInt(request.params.id);
        
        connection.query('SELECT * FROM fssept2026.customers WHERE customer_id = ?', [customerId], (err, results) => {
            if (err) {
                console.error('Error fetching customer:', );
                response.status(500).send(err);
            }
            if (results.length === 0) {
                response.status(404).send('Customer not found');
            }
             else {
                let customer = results[0];
                response.json(customer);
            }
        });
    } else {
        response.status(400).send('Invalid customer ID');
    }
});

app.post('/customers/', (req, res) => {

    // let customer_name = req.body.customer_name;
    // let age = req.body.age;
    // let email = req.body.email;
    
    // OR
    let { customer_name, age, email } = req.body;

    connection.query(`INSERT INTO fssept2026.customers (customer_name, age, email)
                      VALUES (?, ?, ?)`, [customer_name, age, email], (err, results) => {
        if (err) {
            res.status(500).json(err);
            return;
        } else {
            res.send(`Customer ${customer_name} added successfully`);
        }
    });
    // let password = req.body.password;

    // bcrypt.hash(password, 10, (err, hash) => {
    //     if (err) {
    //         res.status(500).send('Error hashing password');
    //     } else {
    //         // Store the hashed password in the database or perform other operations
    //         console.log('Hashed Password:', hash);
    //         res.send(`Customer ${hash}`);
    //     }
    // });

});

// app.put();

// app.delete()

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const token = jwt.sign({ username }, 'your-secret-key', { expiresIn: '1h' });
    res.json({ token });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

