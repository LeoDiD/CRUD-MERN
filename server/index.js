import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./route/userRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose
    .connect(MONGOURL)
    .then(() => {
        console.log("DB connected successfully.");
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`); // Use backticks for interpolation
        });
    })
    .catch((error) => console.log(error));

app.use("/api", route);