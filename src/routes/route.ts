import { Router } from "express";
import { teste } from "../controllers/teste.js";

const testeRota = Router();

testeRota.get("/teste", teste);

export {testeRota}