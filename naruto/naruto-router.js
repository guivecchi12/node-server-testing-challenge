const express = require("express")
const Naruto = require("./naruto-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		res.json(await Naruto.find())
	} catch(err) {
		next(err)
	}
})

router.get("/del/:id", async (req, res, next) => {
	try {
		const id = req.params.id
		const character = await Naruto.findById(id)
		if (!character) {
			return res.status(404).json({
				message: "character not found",
			})
		}
		Naruto.remove(id)
		res.json({message: "character removed"})
	} catch (err) {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
	try {
		const character = await Naruto.create(req.body)
		res.status(201).json(character)
	} catch (err) {
		next(err)
	}
})

module.exports = router