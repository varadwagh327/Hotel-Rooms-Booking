import express from "express";
import { getAllBookings, postBooking } from "../controller/bookingController.js";

const router = express.Router();

router.post("/post", postBooking);
router.get("/getall", getAllBookings);

export default router;