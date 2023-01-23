import express from "express";
import { testeRota } from "./routes/route.js"
import cors from "cors"

const server = express();

server.use(express.json());
server.use(testeRota);
server.use(cors());

const PORT = process.env.PORT || 5000;

server.listen(5000, () => console.log(`Server running at port: ${PORT}`))