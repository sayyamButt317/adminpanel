import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import Routes from "./Routes/static.routes.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes Declaration
app.use("/api", Routes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

export { app };

