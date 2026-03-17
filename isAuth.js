import jwt   from "jsonwebtoken"
import User from "../models/user.js"

const isAuth=async(req,res,next)=>{
    try {
      const token=req.cookies.token
      if(!token)    {  // yaha pr ham apna token ko laka ayanga
        return res.status(400).json({message:"token not found"})  
      }
      // agar token h to ham token ma sa user ki id ko fetch kranga 
    const decoded= await jwt.verify(token,process.env.JWT_SECRET)
    req.user=await User.findById(decoded.id)

    console.log("cookies:",req.cookies);
    
    next()

        
        

    } catch (error) {
         return res.status(400).json({message:"token invalid"})  
        
    }

}

export default isAuth