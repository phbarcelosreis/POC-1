import { Router } from "express";
import { filterProduct, postProduct } from "../controllers/products.controller.js";
import { checkProduct } from "../middlewares/product.middleware.js";


const productRoute = Router();

productRoute.post("/produtos", checkProduct, postProduct);
productRoute.get("/produtos", filterProduct)

export {productRoute}