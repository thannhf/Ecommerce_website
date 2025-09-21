import express from "express"
import { adminLogin, adminLogout, isAdminAuth } from "../controllers/adminController.js"
import authAdmin from "../middleware/authAdmin.js"

const adminRouter = express.Router()

adminRouter.post('/login', adminLogin)
adminRouter.post('/logout', adminLogout)
adminRouter.get('/is-auth', authAdmin, isAdminAuth)

export default adminRouter