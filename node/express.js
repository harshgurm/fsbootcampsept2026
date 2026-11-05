const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const jwt = require('jsonwebtoken');

// app.use(customMiddleware);
app.use(express.json());

function customMiddleware(req, res, next) {
    console.log('Request URL:', req.url);
    console.log('Request Method:', req.method);
    console.log('You will see me in all requests');
    next();
}

let customers = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' }
];

app.get('/customers', (req, res) => {
    res.json(customers);
});

app.get('/customer/:id', customMiddleware , (request, response) => {
    if(request.params.id > 0) {
        let customerId = parseInt(request.params.id);
        let customer = customers.find(c => c.id === customerId);
        if (customer) {
            response.json(customer);
        } else {
            response.status(404).send('Customer not found');
        }
    } else {
        response.status(400).send('Invalid ID');
    }
});

app.post('/customers/', (req, res) => {
    let password = req.body.password;

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            res.status(500).send('Error hashing password');
        } else {
            // Store the hashed password in the database or perform other operations
            console.log('Hashed Password:', hash);
            res.send(`Customer ${hash}`);
        }
    });

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

