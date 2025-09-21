import express from "express"
import authUser from "../middleware/authUser.js"
import { addToCart, updateCart } from "../controllers/cartController.js"

const cartRouter = express.Router()
cartRouter.post('/add', authUser, addToCart)
cartRouter.post('/update', authUser, updateCart)

export default cartRouter