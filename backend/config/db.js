// =============================================================
// MongoDB Connection Configuration
// =============================================================
// Uncomment the code below and install mongoose to enable MongoDB:
//   npm install mongoose
//
// Then call connectDB() in server.js before app.listen()
// =============================================================

// import mongoose from 'mongoose';
//
// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGODB_URI);
//     console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`❌ MongoDB Error: ${error.message}`);
//     process.exit(1);
//   }
// };
//
// export default connectDB;

// Placeholder export — currently using in-memory data from models
export default null;
