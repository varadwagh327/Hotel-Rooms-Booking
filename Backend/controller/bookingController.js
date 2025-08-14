
import {Booking} from "../models/bookingSchema.js";

export const postBooking = async(req, res, next) => {
    const {
        Name,
        email,
        phone,
        roomType,
        booking_date,
        time,
        guests
    } = req.body;

    // Check if all required fields are provided
    if (
        !Name ||
        !email ||
        !phone ||
        !roomType ||
        !booking_date ||
        !time ||
        !guests 
    ) {
        return next("Please Fill Full Form!", 400);
    }



   
    // Create the booking
    const booking = await Booking.create({
        Name,
        email,
        phone,
        roomType,
        booking_date,
        time,
        guests
    });

    res.status(201).json({
        success: true,
        message: "Booking Sent Successfully!",
        booking,
    });
};

export const getAllBookings = async(req, res, next) => {
    const bookings = await Booking.find();
    res.status(200).json({
        success: true,
        bookings,
    });
};

