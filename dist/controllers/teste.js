function teste(req, res) {
    var _a = req.body, name = _a.name, price = _a.price, description = _a.description;
    res.send({ name: name, price: price, description: description }).status(200);
}
export { teste };
