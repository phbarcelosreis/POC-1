import { ParsedQs } from "qs";
import connection from "../database/db.js";
import { Product } from "../protocols/product.js";


function addProducts(newProduct: Product){
    const { name, price, description} = newProduct;

    connection.query<Product>(
        `
        INSERT INTO
        products (name, price, description)
        VALUES ($1, $2, $3)
        `,
        [name, price, description]
    )

}

async function filterProducts(name: string | ParsedQs | string[] | ParsedQs[]){

    return await connection.query<String>(
        `
        SELECT * FROM
        products WHERE
        LOWER(name) LIKE LOWER($1)
        `,
        [`%${name}%`]
    )

}

export {
    addProducts,
    filterProducts
}