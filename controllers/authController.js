import { comparePassword, hashPassword } from '../helpers/authHelper.js';
import userModels from '../models/userModels.js'
import JWT from 'jsonwebtoken';

export const registerController =async(req,res)=>{
    try{
        const {name,email,password,phone,address} = req.body
        //validations

        if(!name){
            return res.send({message:'Name is required'})
        }
        if(!email){
            return res.send({message:'Email is required'})
        }
        if(!password){
            return res.send({message:'Password is required'})
        }
        if(!phone){
            return res.send({message:'Phone is required'})
        }
        if(!address){
            return res.send({message:'Address is required'})
        }

        //checking user
        const existingUser = await userModels.findOne({email});
        //existing user
        if(existingUser){
            return res.status(200).send({
                success:false,
                message:"Already registered please login",
            })
        }

        //registering user - password encryted
        const hashedpassword = await hashPassword(password);
        //saving all the details from client to DB
        const user = new userModels({
            name,
            email,
            phone,
            address,
            password:hashedpassword,
        }).save();
        
        res.status(201).send({
            success:true,
            message:"User registered succesfully",
        })


    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in Registration',
            error
        })
    }

};

//POST LOGIN
export const loginController = async(req,res) => {
    try {
        const {email,password} = req.body
        //validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:'Email and password are required'
            })
        }
        //check user if  there is in db
        const user = await userModels.findOne({email})
        //provided email not present then send response
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Email is not registered'
            })
        }
        //otherwise we compare the password
        const match = await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:'invalid password'
            })
        }
        //token
        const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET,{expiresIn:"7d",});
        res.status(200).send({
            success:true,
            message:"Login successfully",
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address
            },
            token,
        })

    } catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'error in login',
            error
        })
    }
}

//test controller
export const testController = (req,res)=>{
    res.send("protected route")
}


// Controller File:

// This file contains the actual logic (what happens when the user requests data, creates something, etc.).
// Each function in the controller corresponds to an action (e.g., get all users, create a user, etc.).