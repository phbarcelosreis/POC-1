function teste(req, res) {
    var teste = req.query.teste;
    res.send({ message: "oizada" }).status(200);
}
export { teste };
