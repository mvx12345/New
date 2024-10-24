// index.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', './views'); // Specify views directory

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files

// Route for the login page
app.get('/', (req, res) => {
    res.render('login', { error: null }); // Pass error as null initially
});

// Handle login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'DSR' && password == 1234) {
        // Here, you can add your authentication logic.
        // For demonstration, we will just render the success page with the username.
        res.render('success', { username });
    } else {
        // Render the login page again with an error message
        res.render('login', { error: 'Invalid username or password. Please try again.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
