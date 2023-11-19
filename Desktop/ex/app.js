const express = require('express');
const app = express();

app.get("/", (res, req) => {
    res.send("Hello World");
})

app.get("/fun", (res, req) => {
    res.send("Hello World Fun");
})

app.listen(5000, () => {
    console.log("Hello World on 5000")
});