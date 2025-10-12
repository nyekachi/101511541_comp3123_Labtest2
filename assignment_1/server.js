require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const userRoutes = require('./Routes/userRoutes');
const empRoutes = require('./routes/emproutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();   

// Routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/emp', empRoutes);

//error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));