const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');


// routes
const posts = require('./routes/api/posts');
const events = require('./routes/api/events');

const app = express();
connectDB();

// cors
app.use(cors({origin: true, credentials: true}));

// init Middleware
app.use(express.json({extended: false}));

// for importing images
app.use(express.static('public'));
app.use('/images', express.static('images'));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/posts', posts);
app.use('/api/events', events);

const PORT = process.env.port || 8001

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});