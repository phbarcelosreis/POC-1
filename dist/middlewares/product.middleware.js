import { product } from "../schemas/schemas.js";
function checkProduct(req, res, next) {
    var _a = req.body, name = _a.name, price = _a.price, description = _a.description;
    var productObj = {
        name: name,
        price: price,
        description: description
    };
    var validation = product.validate(productObj);
    if (validation.error) {
        var errors = validation.error.details.map(function (detail) { return detail.message; });
        return res.status(422).send(errors);
    }
    next();
}
export { checkProduct };
