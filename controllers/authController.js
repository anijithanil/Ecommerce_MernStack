import { hashPassword } from '../helpers/authHelper.js';
import userModels from '../models/userModels.js'

export const registerController =async(req,res)=>{
    try{
        const {name,email,password,phone,address} = req.body
        //validations

        if(!name){
            return res.send({error:'Name is required'})
        }
        if(!email){
            return res.send({error:'Email is required'})
        }
        if(!password){
            return res.send({error:'Password is required'})
        }
        if(!phone){
            return res.send({error:'Phone is required'})
        }
        if(!address){
            return res.send({error:'Address is required'})
        }

        //checking user
        const existingUser = await userModels.findOne({email});
        //existing user
        if(existingUser){
            return res.status(200).send({
                success:true,
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




// Controller File:

// This file contains the actual logic (what happens when the user requests data, creates something, etc.).
// Each function in the controller corresponds to an action (e.g., get all users, create a user, etc.).