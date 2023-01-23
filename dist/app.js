import express from "express";
import { testeRota } from "./routes/route.js";
import cors from "cors";
var server = express();
server.use(express.json());
server.use(testeRota);
server.use(cors());
var PORT = process.env.PORT || 5000;
server.listen(5000, function () { return console.log("Server running at port: ".concat(PORT)); });
