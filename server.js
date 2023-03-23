const express= require("express");

const app = express();
const db =require("./db");
const pizza=require("./models/pizzaModel");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Connected...");
    console.log("connected")
});

app.get("/getpizzas", (req, res) => {

    pizza.find({}, (err, data) => {
        if (err) {
            console.log("error has occured");
        } else {
         res.send(data);
        }
    });

})
app.listen(8000)
