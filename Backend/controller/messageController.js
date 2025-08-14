import { Message } from "../models/messageSchema.js";

export const sendMessage = async (req, res, next) => {
    const {Name, email, subject, message} = req.body;
    if (!Name || !email || !subject || !message) {
        return next("Please Fill Full Form!", 400);
    }
    await Message.create({Name, email, subject, message});
    res.status(200).json({
        success: true,
        message: "Message Send Successfully!",
    });
};

export const getAllMessages = async(req, res, next) => {
    const messages = await Message.find();
    res.status(200).json({
        success: true,
        messages,
    });
};
