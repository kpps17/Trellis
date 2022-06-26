const express = require("express");
const {notFoundHandler, errorHandler} = require(`./middleware`);

require('dotenv').config();

const app = express();
const PORT = 8080 || process.env.PORT;

app.get('/', (req, res) => {
    res.json({
        message: "Hi from express",
        status: res.statusCode
    })
})

app.listen(PORT, () => {
    console.log(`Server lisitening on port ${PORT}`);
})

app.use(errorHandler);
app.use(notFoundHandler);