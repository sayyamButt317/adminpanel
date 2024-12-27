import dotenv from "dotenv";
import { app } from "./App.js";
import { connectionDB } from "./db/connection.js";

// Environment variable configuration
dotenv.config({
  path: "./.env",
});

// Connect to MongoDB
connectionDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running on port ${process.env.PORT || 8000}` .bgBlue);
    });
  })
  .catch((err) => console.log(`MongoDB connection failed`, err));
