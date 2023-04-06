
const express = require("express");
const {connectToDB} = require('./DB/connect');
const cors = require('cors')

const auth = require('./routes/auth');
const task_CRUD = require('./routes/task_CRUD');

require("dotenv").config();


const app = express();
const PORT = process.env.PORT || 4000;

// is used to read the requested data from web in FORM .. middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json({limit: "60mb"}));   // allows express to use json in body..
app.use(cors());    // allow cross origin resource sharing..

app.use("/api/auth", auth);
app.use("/api/task", task_CRUD);

( async () => {

    try{
        app.listen(PORT, ()=> {
            console.log(`Server is active on port ${PORT}..`);
        })
        await connectToDB();
    }
    catch(err) {
        console.log("Error in server loading");
        console.log(err);
    }

})();


// default route
app.all('*', (req, res) => {

    res.status(404).send('<h1> Resourse not found </h1> <p> Probably wrong URL </p>');

})

