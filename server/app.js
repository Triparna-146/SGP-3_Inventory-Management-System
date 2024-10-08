const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const voucherRoutes = require('./routes/voucherRoutes');
const cylinderRoutes = require('./routes/cylinderRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');


// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/Voucher', voucherRoutes);
app.use('/api/cylinder', cylinderRoutes);
app.use('/api/vehicle', vehicleRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
