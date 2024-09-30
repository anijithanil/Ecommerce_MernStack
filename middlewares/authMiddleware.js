import JWT from 'jsonwebtoken'
import userModels from '../models/userModels.js';

//protected routes token base
export const requireSignIn = async (req,res,next) => {
    try{
        const decode = JWT.verify(req.headers.authorization,process.env.JWT_SECRET)
        req.user = decode
//         By assigning the decoded user information to req.user, it makes this information easily accessible in any subsequent middleware or route handlers. For instance, in protected routes, you can access req.user to get details about the current user.
// Example: req.user._id can be used to identify the currently logged-in user in a database query.

// Proceed to the next middleware or route handler
        next();
    }catch(error){
        console.log(error)

    }
}

//admin access
export const isAdmin = async (req,res,next)=>{
    try{
        const user = userModels.findById(req.user._id);
        if(user.role !== 1){
            return res.status(401).send({
                success:false,
                message:"Unauthorized access",

            });

        }else {
            next();
        }
    }catch(error){
        console.log(error)
        res.status(401).send({
            success:false,
            error,
            message:"Error in admin middleware"
        })
    }
}