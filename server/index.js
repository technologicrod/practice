const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 8000;
app.listen(port)

app.get("/", (req,res) => {
    res.sendFile(
        path.join(_dirname, "../client/src/App.js"),
        function(err){
            if(err){
                res.status(500).send(err)
            }
        }
    )
})
app.get("/hello", (req,res) => {
    let name = "Rodwell"
    console.log("hello world", name)
    res.json(name)
})