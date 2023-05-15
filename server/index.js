const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req,res) => {
    let name = "Rodwell"
    console.log("hello world", name)
    res.json(name)
})

app.listen(8000, () => {
    console.log("running on port 8000");
})