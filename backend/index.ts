import express from "express";
import dotenv from "dotenv";
import { Sequelize } from "sequelize";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

const app = express();
const environment = app.get("env") !== "production";

const port = 8001;
app.use(express.json());
app.use(cors())
app.use(helmet())

// Database Connection
async function dbConnection() {
    try {
        await new Sequelize(process.env.DATABASE_URL!, {
            logging: false
        }).authenticate();
        console.log("Database connected!");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}
dbConnection();

// Catch errors
process.on("uncaughtException", async function (err) {
    console.log(`Caught exception at ${new Date()}: ` + err);
});

