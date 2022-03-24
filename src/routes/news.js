const { Router } = require("express");
const router = Router();
const Joi = require("joi")
const { v4:uuid } = require("uuid")

const News = require("../models/news")

router.get("/", async(req, res) => {
   const { id } = req.query;
   
   const news = id ? News.findById(id) : News.find();

   res.status(200).json({ news });
});

router.post("/", async(req, res) => {
    const { text, title } = req.body;
    const { image } = req.files

    const Schema = Joi.object({
        text: Joi.string().required(),
        title: Joi.string().required(),
        image: Joi.required()
    });

    const { error } = Schema.validate({ text, title, image });
    if(error)
        return res.status(400).json({ message: error.message });
    
    const photo = `${uuid()}.${image.mimetype.split("/")[1]}`;
    image.mv(process.cwd() + `/src/uploads/${photo}`);

    News.create({ text, title, photo })

    res.status(201).json({ message: "Created" })
});

router.put("/:id", async(req, res) => {
    const { text, title } = req.body;
    const { image } = req.files
    const { id } = req.params

    const Schema = Joi.object({
        text: Joi.string().required(),
        title: Joi.string().required(),
        image: Joi.required()
    });

    const { error } = Schema.validate({ text, title, image });
    if(error)
        return res.status(400).json({ message: error.message });
    
    const photo = `${uuid()}.${image.mimetype.split("/")[1]}`;
    image.mv(process.cwd() + `/src/uploads/${photo}`);

    await News.findByIdAndUpdate(id, {
        $set: {
            text,
            title,
            photo
        }
    });

    res.status(200).json({ message: "Updated" })
});


router.delete("/:id", async(req, res) => {
    const { id } = req.params
    await News.findByIdAndDelete(id)

    res.status(200).json({ message: "Deleted" })
});


module.exports = router