import MessageModel from "../models/message.model.js";
import UserModel from "../models/user.model.js";
import cloudinary from '../config/cloudinary.js'

export const getUsersForSidebar = async (req, res) => {
    try{
        const loggedInUserId = req.user._id;
        const filteredUsers = await UserModel.find({_id: {$ne: loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers);
    }
    catch(error){
        console.error("Error in getUsersForSidebar: ", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const getMessages = async (req, res) => {
    try{
        const {id: receiverId} = req.params
        const myId = req.user._id

        const messages = await MessageModel.find({
            $or:[
                {senderId:myId, receiverId: receiverId},
                {senderId: receiverId, receiverId: myId}
            ]
        })

        return res.status(200).json(messages);
    }
    catch(error){
        console.log("Error in getMessages Controller: ", error.message);
        res.status(500).json({error: "Internal Server error"});
    }
}

export const sendMessage = async (req, res) => {
    try{
        const {text, image} = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let imgUrl;
        if(image){
            const uploadResponse = await cloudinary.uploader.upload(image);
            imgUrl = uploadResponse.secure_url;
        }

        const newMessage = new MessageModel({
            senderId,
            receiverId,
            text,
            image: imgUrl
        });
        await newMessage.save();

        // Todo: Realtime functionality to be implemented here using socket.io

        return res.status(201).json(newMessage);
    }
    catch(error){
        console.log("Error in sendMessage Controller: ", error.message);
        return res.status(500).json({message: "Internal Server Error."})
    }
}