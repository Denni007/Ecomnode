import dotenv from 'dotenv';


export default {
    PORT: process.env.PORT || 5000,
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://denny:12345@cluster0.qtgim.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingssecret'
  };
  

