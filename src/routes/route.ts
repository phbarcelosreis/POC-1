import { Router } from "express";
import { teste } from "../controllers/teste.js";
import { checkProduct } from "../middlewares/product.middleware.js";

const testeRota = Router();

testeRota.post("/teste", checkProduct, teste);

export {testeRota}