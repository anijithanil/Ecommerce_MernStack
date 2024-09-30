import express from "express";
import {registerController,loginController,testController} from '../controllers/authController.js'
import { requireSignIn,isAdmin } from "../middlewares/authMiddleWare.js";

//router object
const router = express.Router()

//routing
//client approaching to BE for registration || method post

router.post('/register',registerController);

//LOGIN || METHOD POST
router.post('/login',loginController);

//test route after middleware
router.get('/test',requireSignIn,isAdmin,testController);

export default router;


//Routes File:

// This file defines what should happen when the user visits a certain URL (or endpoint).
// It tells the app which function from the controller to run.