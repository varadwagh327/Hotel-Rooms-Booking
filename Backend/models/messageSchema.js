import mongoose from "mongoose";
import validator from "validator";

const messageSchema= new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        minLength: [3, "Name Must Contain At Least 3 Characters!"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, " Please Provide A Valid Email!"]
    },
    subject : {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
        minLength: [10, "Message Must Contain At Least 11 Characters!"]
    },
});

export const Message = mongoose.model("Message", messageSchema);