import { Request, Response, NextFunction } from "express";
import { product } from "../schemas/schemas.js";
import { filterProducts } from "../services/postService.js";

function checkProduct(req: Request, res: Response, next: NextFunction) {

    const { name, price, description } = req.body;

    const productObj = {
        name,
        price,
        description
    }

    const validation = product.validate(productObj);
    if (validation.error) {
        const errors = validation.error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }

    next();

}

async function verifyFilterProduct(req: Request, res: Response, next: NextFunction) {

    const { name } = req.query;

    const checkName = await filterProducts(name);

    if(checkName.rowCount === 0){
        return res.status(400).send({message: "Não foi encontrado produto com esse nome!"});
    }

    next();

}

export { checkProduct, verifyFilterProduct };