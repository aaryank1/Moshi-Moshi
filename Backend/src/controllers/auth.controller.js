import { generateTokens } from "../config/utils.js";
import UserModel from "../models/user.model.js";
import cloudinary from '../config/cloudinary.js'
import bcrypt from 'bcryptjs'

export const signup = async (req, res) => {
    const {fullName, email, password} = req.body;
    try{
        if(!fullName || !email || !password){
            res.status(400).json({
                message: "All fields are required"
            })
        }
        if(password.length < 6){
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }
        const user = await UserModel.findOne({email});
        if(user) return res.status(400).json({message: "Email already Exists"});

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new UserModel({
            fullName,
            email,
            password: hashedPassword
        })

        if(newUser){
            generateTokens(newUser._id, res)
            await newUser.save()

            return res.status(201).json({
                id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic
            })
        }
        else{
            return res.status(400).json({
                message: "Invalid user Data"
            })
        }
    }
    catch(error){
        console.log("Error in Sign Up Controller:", error.message);
        return res.status(500).json({message: "Internal Server Error"})
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) return res.status(400).json({message: "All fields are required"});
    try{
        const user = await UserModel.findOne({email});

        if(!user){
            return res.status(400).json({
                message: "Invalid Credentials"
            });
        }

        const checkPassword = await bcrypt.compare(password, user.password);
        if(!checkPassword){
            return res.status(400).json({
                message: "Invalid Credentials"
            });
        }
        generateTokens(user._id, res);
        return res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            profilePic: user.profilePic
        });
    }
    catch(error){
        console.log("Error in login controller", error.message);
        return res.status(500).json({message: "Internal Server Error"});
    }
}

export const logout = (req, res) => {
    try{
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({message: "Logged Out Successfully"})
    }
    catch(error){
        console.log("Error in Logout controller", error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
}

export const updateProfile = async (req, res) => {
    try{
        const { profilePic } = req.body;
        const userId = req.user._id;

        if(!profilePic){
            return res.status(400).json({message: "Profile Pic is Required"});
        }
        const uploadResponse = await cloudinary.uploader.upload(profilePic);
        const updatedUser = await UserModel.findByIdAndUpdate(userId, {profilePic: uploadResponse.secure_url}, {new:true});

        return res.status(200).json(updatedUser);
    }
    catch(error){
        console.log("Error in Update Profile: ", error);
        return res.status(500).json({message: "Internal Server Error"});
    }
}

export const checkAuth = (req, res) => {
    try{
        res.status(200).json(req.user);
    }
    catch(error){
        console.log("Error in checkAuth Controller", error.message);
        return res.status(500).json({message: "Internal Server Error"});
    }
}