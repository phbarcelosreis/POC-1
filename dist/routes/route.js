import { Router } from "express";
import { teste } from "../controllers/teste.js";
import { checkProduct } from "../middlewares/product.middleware.js";
var testeRota = Router();
testeRota.post("/teste", checkProduct, teste);
export { testeRota };
