import { Request, Response } from "express";
import { Product } from "../protocols/product.js";
import { addProducts, filterProducts } from "../services/postService.js";

function postProduct(req: Request, res: Response) {

    const { name, price, description } = req.body;

    const newProduct: Product = {
        name, price, description
    }

    addProducts(newProduct);

    return res.sendStatus(200);

}

async function filterProduct(req: Request, res: Response) {

    const { name } = req.query;

    const newNames = await filterProducts(name);
    console.log(newNames.rows)

    return res.send(newNames.rows);
}

export { postProduct, filterProduct };