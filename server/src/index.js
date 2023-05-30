const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const userRoutes = require('./routes/users');

require('dotenv').config();

const app = express();

app.use(express.json()); 
app.use(cors()); 
app.use(morgan('dev')); 

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(`Failed to connect to MongoDB with URI: ${process.env.MONGODB_URI}`);
    console.error(err.stack);
    process.exit(1);
  }
}

connectDB();


app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to your inventory management API!' });
});

app.use((req, res, next) => {
  res.status(404).json({ message: 'Not found' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
