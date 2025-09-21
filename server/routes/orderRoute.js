import express from "express";
import authAdmin from "../middleware/authAdmin.js";
import {
  allOrders,
  placeOrderCOD,
  placeOrderStripe,
  updateStatus,
  userOrders,
} from "../controllers/orderController.js";
import authUser from "../middleware/authUser.js";

const orderRouter = express.Router();

// for admin
orderRouter.post("/list", authAdmin, allOrders);
orderRouter.post("/status", authAdmin, updateStatus);

// for payment
orderRouter.post("/cod", authUser, placeOrderCOD);
orderRouter.post("/stripe", authUser, placeOrderStripe);

// for User
orderRouter.post('/userorders', authUser, userOrders)

export default orderRouter