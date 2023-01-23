import { Router } from "express";
import { teste } from "../controllers/teste.js";
var testeRota = Router();
testeRota.get("/teste", teste);
export { testeRota };
