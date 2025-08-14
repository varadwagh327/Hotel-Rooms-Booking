import mongoose from "mongoose";
import validator from "validator";

const bookingSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "Name is required"],
    minLength: [3, "Name must contain at least 3 characters"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: [validator.isEmail, "Please provide a valid email"]
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    validate: {
      validator: (v) => /^\d{10}$/.test(v),
      message: "Phone number must contain exactly 10 digits"
    }
  },
  time: {
    type: String,
    required: [true, "Time is required"],
    set: function (v) {
      // Convert "1230" to "12:30"
      if (/^\d{4}$/.test(v)) {
        return v.slice(0, 2) + ":" + v.slice(2);
      }
      return v;
    },
    validate: {
      validator: function (v) {
        return /^([01]\d|2[0-3]):([0-5]\d)$/.test(v);
      },
      message: "Time must be in HH:MM format (e.g., 12:30)"
    }
  },
  booking_date: {
    type: Date,
    required: [true, "Booking date is required"]
  },
  roomType: {
    type: String,
    enum: ["Standard Single Room", "Deluxe Double Room", "Presidential Suite"], // matches frontend values
    required: [true, "Room type is required"]
  },
  guests: {
    type: String,
    enum: ["1", "2", "3", "4"], // matches frontend values
    required: [true, "Number of guests is required"]
  }
});

export const Booking =
  mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
