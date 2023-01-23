import { Request, Response } from "express";

function teste(req: Request, res: Response) {

    const { teste } = req.query;

    res.send({message: "xauzada"}).status(200);

}

export { teste };