const express = require('express');
const cors = require('cors');
const {default: mongoose} = require('mongoose');
require('dotenv').config();
const entrepreneursRouter = require('./routes/entrepreneursRouter');
const bodyParser = require('body-parser');
const authRouter = require('./routes/authRouter');

const PORT = process.env.PORT || 9999;


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(bodyParser.json())
app.use('/api/entrepreneurse', entrepreneursRouter);
app.use('/api/auth', authRouter)

app.use((_, res) => {
    res.status(404).json({message: "Page not found"});
})

app.use((error, req, res, next) => {
    const {status = 500, message = "Server error"} = error;
    res.status(status).json({message})
})

const {DB_HOST} = process.env;

mongoose.connect(DB_HOST)
.then(() => {
     console.log("Database connection succsessful")
    app.listen(PORT, () => {
        console.log(`Server is running on PORT: ${PORT}`)
    })
})
.catch((error) => {
    console.log(error.message)
    process.exit(1)
})





