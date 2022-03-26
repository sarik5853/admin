const { Router } = require("express");
const router = Router()
const { v4:uuid } = require("uuid")

const Comments = require("../models/comment")

router.get("/", async(req, res) => {
    const comments = await Comments.find()
    res.status(200).json({ comments })
})

router.post("/", async(req, res) => {
    const { image } = req.files

    const photo = `${uuid()}.${image.mimetype.split("/")[1]}`
    image.mv(process.cwd() + `/src/uploads/${photo}`)

    Comments.create({ photo })
    res.status(201).json({ message: "Created" })
})

router.delete("/:id", async(req, res) => {
    const { id } = req.params
    await Comments.findByIdAndDelete(id)
    res.status(200).json({ message: "Deleted" })
})

module.exports = router