import { Request, Response, NextFunction } from "express";
import { product } from "../schemas/schemas.js";

function checkProduct(req: Request, res: Response, next: NextFunction){

    const { name, price, description } = req.body;

    const productObj = {
        name,
        price,
        description
    }

    const validation = product.validate(productObj);
    if(validation.error){
        const errors = validation.error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }

    next();

}

export {checkProduct};