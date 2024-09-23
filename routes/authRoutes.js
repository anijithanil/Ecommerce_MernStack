import express from "express";
import {registerController} from '../controllers/authController.js'

//router object
const router = express.Router()

//routing
//client approaching to BE for registration || method post

router.post('/register',registerController);

export default router;


//Routes File:

// This file defines what should happen when the user visits a certain URL (or endpoint).
// It tells the app which function from the controller to run.