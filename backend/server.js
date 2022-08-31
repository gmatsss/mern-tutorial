import express from "express";
import data from "./data.js";//data.js importing those data

const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products)//calling products in data,js
})

//server for api where data are stored
//install nodemon --save -dev
const port = process.env.PORT || 5000;
app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
});