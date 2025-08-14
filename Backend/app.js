import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js";
import bookingRouter from "./router/bookingRouter.js";

const app = express();
config({ path: "./config/config.env"});

app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["GET", "POST"],
        credentials: true,

    })
);

app.use(express.json());


app.use("/api/v1/message", messageRouter);
app.use("/api/v1/booking", bookingRouter);

dbConnection();


export default app;