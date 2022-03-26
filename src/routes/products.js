const { Router } = require("express");
const router = Router()
const Joi = require("joi")
const { v4: uuid } = require("uuid")

const Products = require("../models/products");

router.get("/", async(req, res) => {
    const { id } = req.query;

    const products = id ? await Products.findById(id) : Products.find()
    res.status(200).json({ products })
});

router.post("/", async(req, res) => {
    const { title, text, type, price, sizes, colors } = req.body;
    const { photo, photos } = req.files

    const Schema = Joi.object({
        title: Joi.string().required(),
        text: Joi.string().required(),
        type: Joi.string().required(),
        price: Joi.number().required(),
        colors: Joi.required(),
        sizes: Joi.required(),
        photo: Joi.required(),
        photos: Joi.required(),
    });

    const { error } = Schema.validate({ title, text, type, price, colors, sizes, photo, photos })
    if(error)
        return res.status(400).json({ message: error.message })

    const header = JSON.parse(title)
    const paragraph = JSON.parse(text)
    const kind = JSON.parse(type)
    const cost = JSON.parse(price)
    const format = JSON.parse(sizes)
    const grade = JSON.parse(colors)

    const images = []

    photos.forEach(f => {
        let picture = `${uuid()}.${f.mimetype.split("/")[1]}`
        f.mv(process.cwd() + `/src/uploads/${picture}`)
        images.push(picture)
    });

    const image = `${uuid()}.${photo.mimetype.split("/")[1]}`
    photo.mv(process.cwd() + `/src/uploads/${image}`)

    Products.create({ title: header, text: paragraph, type: kind, price: cost, sizes: format, colors: grade });

    res.status(201).json({ message: "Created" })
});

router.put("/", async(req, res) => {
    const { title, text, type, price, sizes, colors } = req.body;
    const { photo, photos } = req.files
    const { id } = req.params

    const Schema = Joi.object({
        title: Joi.string().required(),
        text: Joi.string().required(),
        type: Joi.string().required(),
        price: Joi.number().required(),
        colors: Joi.required(),
        sizes: Joi.required(),
        photo: Joi.required(),
        photos: Joi.required(),
    });

    const { error } = Schema.validate({ title, text, type, price, colors, sizes, photo, photos })
    if(error)
        return res.status(400).json({ message: error.message })

    const header = JSON.parse(title)
    const paragraph = JSON.parse(text)
    const kind = JSON.parse(type)
    const cost = JSON.parse(price)
    const format = JSON.parse(sizes)
    const grade = JSON.parse(colors)

    const images = []

    photos.forEach(f => {
        let picture = `${uuid()}.${f.mimetype.split("/")[1]}`
        f.mv(process.cwd() + `/src/uploads/${picture}`)
        images.push(picture)
    });

    const image = `${uuid()}.${photo.mimetype.split("/")[1]}`
    photo.mv(process.cwd() + `/src/uploads/${image}`)

    await Products.findByIdAndUpdate(id, {
        $set: { title: header, text: paragraph, type: kind, price: cost, sizes: format, colors: grade }
    });

    res.status(200).json({ message: "Updated" })
});

router.delete("/:id", async(req, res) => {
    const { id } = req.params
    await Products.findByIdAndDelete(id)
    res.status(200).json({ message: "Deleted" })
})

module.exports = router