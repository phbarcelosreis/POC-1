import { Request, Response } from "express";
import { Product } from "../protocols/product.js";

function teste(req: Request, res: Response) {

    const { name, price, description} = req.body as Product;

    res.send({name, price, description}).status(200);

}

export { teste };