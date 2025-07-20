import mongoose from 'mongoose';

const connectDB = async (mongoUrl) => {
  try {
    await mongoose.connect(mongoUrl);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

export default connectDB;
