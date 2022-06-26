const express = require("express");

const app = express();
const PORT = 8080

app.get('/', (req, res) => {
    res.json({
        message: "Hi from express",
    }).status(201);
})

app.listen(PORT, () => {
    console.log(`Server lisitening on port ${PORT}`);
})
