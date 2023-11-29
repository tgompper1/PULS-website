const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');


// routes
const posts = require('./routes/api/posts');

const app = express();
connectDB();

// cors
app.use(cors({origin: true, credentials: true}));

// init Middleware
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/posts', posts);

const PORT = process.env.port || 8001

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});