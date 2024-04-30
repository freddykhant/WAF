const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const timeout = require('connect-timeout');

const app = express();

// Applying helmet to enhance API's security
app.use(helmet());

// Using morgan to log HTTP requests
app.use(morgan('tiny'));

// Setting a timeout of 5 seconds for all requests
app.use(timeout('5s'));

// A route that potentially takes longer than the timeout period
app.get('/', (req, res) => {
    setTimeout(() => {
        if (!req.timedout) res.send('Hello World!');
    }, 6000); // Intentionally longer than the timeout to trigger it
});

// Handling timeout error
app.use((err, req, res, next) => {
    if (req.timedout) {
        res.status(503).send('Service unavailable. Please retry.');
    } else {
        next(err);
    }
});

// Server setup
app.listen(3000, () => {
    console.log("Listening on port 3000.");
});
