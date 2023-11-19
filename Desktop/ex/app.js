const express = require('express');
const app = express();

app.get("/", (res, req) => {
    req.send("aa")
})

app.get("/fun", (res, req) => {
    req.send("a fun a")
})

app.listen(1000, () => {
    console.log("Hello World on 5000")
});