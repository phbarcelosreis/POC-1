import { Router } from "express";
import { filterProduct, postProduct } from "../controllers/products.controller.js";
import { checkProduct, verifyFilterProduct } from "../middlewares/product.middleware.js";


const productRoute = Router();

productRoute.post("/produtos", checkProduct, postProduct);
productRoute.get("/produtos", verifyFilterProduct, filterProduct);
productRoute.delete("/produtos")

export {productRoute}