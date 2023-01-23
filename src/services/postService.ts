import connection from "../database/db.js";
import { Product } from "../protocols/product.js";


async function addProducts(newProduct: Product){
    const { name, price, description} = newProduct;

    await connection.query(
        `
        INSERT INTO
        products (name, price, description)
        VALUES ($1, $2, $3)
        `,
        [name, price, description]
    )

}

async function addClients(name, address, phone) {

        await connection.query(
            `
            INSERT INTO
            clients (name, address, phone)
            VALUES ($1, $2, $3)
            `,
            [name, address, phone]
        );

}