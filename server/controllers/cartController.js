import userModel from "../models/userModel.js";

// adding to cart /api/cart/add
export const addToCart = async(req,res)=>{
    try {
        const {itemId, size} = req.body
        const userId = req.userId
        const userData = await userModel.findById(userId)
        const cartData = await userData.cartData

        if(cartData[itemId]) {
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1
            } else {
                cartData[itemId][size] = 1
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }

        await userModel.findByIdAndUpdate(userId, {cartData})
        res.json({success:true, message:"Added to Cart"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// Updating Cart Function /api/cart/update
export const updateCart = async(req,res)=>{
    try {
        const {itemId, size, quantity} = req.body
        const userId = req.userId
        const userData = await userModel.findById(userId)
        const cartData = await userData.cartData

        cartData[itemId][size] = quantity
        await userModel.findByIdAndDelete(userId, {cartData})
        res.json({success:true, message:"Cart Updated"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}