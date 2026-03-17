export const getCurrentUser=async(req,res)=>{
    try {
        if(!req.user){
            return res.status(400).json({message:"user not found"})
        }
        return res.json(req.user)
        
    } catch (error) {
         return res.status(500).json({message:"get current user eroor ${error}"})
        
    }


}