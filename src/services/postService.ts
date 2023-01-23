import { ParsedQs } from "qs";
import connection from "../database/db.js";
import { checkUpdate, Product } from "../protocols/product.js";


function addProducts(newProduct: Product) {
    const { name, price, description } = newProduct;

    connection.query<Product>(
        `
        INSERT INTO
        products (name, price, description)
        VALUES ($1, $2, $3)
        `,
        [name, price, description]
    )

}

async function getAllProducts() {

    return await connection.query<String[]>(
        `
        SELECT * FROM
        products
        `
    )

}

async function filterProductsByName(name: string | ParsedQs | string[] | ParsedQs[]) {

    return await connection.query<String>(
        `
        SELECT * FROM
        products WHERE
        LOWER(name) LIKE LOWER($1)
        `,
        [`%${name}%`]
    )

}

async function filterProductsById(id: number) {

    return await connection.query<Number>(
        `
        DELETE FROM products
        WHERE id = $1
        `,
        [id]
    )

}

function updateQuery(newObj: checkUpdate) {

    const { id, price} = newObj

    connection.query<Number>(
        `
        UPDATE products SET price = $2
        WHERE id = $1
        `,
        [id, price]
    )

}

function deleteProduct(id: number) {

    connection.query(
        `
        DELETE FROM products
        WHERE id = $1
        `,
        [id]
    );
}


export {
    addProducts,
    filterProductsByName,
    filterProductsById,
    updateQuery,
    getAllProducts,
    deleteProduct
}