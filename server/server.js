import express from "express"
import 'dotenv/config'
import cookieParser from "cookie-parser";
import cors from "cors"
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
import adminRouter from "./routes/adminRoute.js";
import connectCloudinary from "./config/cloudinary.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import { stripeWebhooks } from "./controllers/orderController.js";

const app = express();
const port = process.env.PORT || 4000

await connectDB(); //establish connection to the database
await connectCloudinary(); //setup cloudinary for image storage

// allow multiple origins
const allowedOrigins = ['http://localhost:5173', 'https://ecommerce-website-phi-azure-82.vercel.app/']

app.post('/stripe', express.raw({type:'application/json'}), stripeWebhooks)

// middleware setup
app.use(express.json()) //Enable json request body parsing
app.use(cookieParser()) // cookie-parser middleware to parse http request cookies
app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}))

// Define API routes
app.use('/api/user/', userRouter) // routes for user-related operations
app.use('/api/admin', adminRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

// root endpoint to check api status
app.get("/", (req, res)=>{
    res.send("API successfully connected!")
})

// start server
app.listen(port, ()=> console.log(`Server is running on port http://localhost:${port}`))