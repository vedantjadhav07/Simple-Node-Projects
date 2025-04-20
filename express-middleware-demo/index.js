const express = require('express');
const app = express();

function logger(req, res, next) {
    console.log(`[Logger] ${req.method} ${req.url}`);
    next(); 
}


function auth(req, res, next) {
    const authorized = true; 
    if (authorized) {
        console.log("[Auth] User authenticated");
        next();
    } else {
        res.status(401).send("Unauthorized");
    }
}


function timer(req, res, next) {
    req.requestTime = Date.now();
    next();
}


app.use(logger);
app.use(auth);
app.use(timer);


app.get('/', (req, res) => {
    res.send(`Request processed at ${new Date(req.requestTime).toLocaleTimeString()}`);
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
