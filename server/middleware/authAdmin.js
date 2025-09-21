import jwt from "jsonwebtoken"

const authAdmin = async(req, res, next) => {
    const {adminToken} = req.cookies

    if(!adminToken) {
        return res.json({success: false, message: "Not Authorized Login again"})
    }

    try {
        const decoded = jwt.verify(adminToken, process.env.JWT_SECRET)
        if(decoded.email === process.env.ADMIN_EMAIL){
            next()
        } else {
            return res.json({success:false, message:"Not Authorized Login again"});
        }
    } catch (error) {
        console.log(error.message)
        res.json({success:false, message: error.message})
    }
}

export default authAdmin