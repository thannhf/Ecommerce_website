import express from "express";
import { upload } from "../middleware/multer.js";
import authAdmin from "../middleware/authAdmin.js";
import {
  addProduct,
  changeStock,
  listProduct,
  singleProduct,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/add", upload.array(["images"]), authAdmin, addProduct);
productRouter.get("/list", listProduct);
productRouter.post("/single", singleProduct);
productRouter.post("/stock", changeStock);

export default productRouter;
