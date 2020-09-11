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

router.get("/:id", async (req, res, next) => {
	try {
		const character = await Naruto.findById(req.params.id)
		if (!character) {
			return res.status(404).json({
				message: "character not found",
			})
		}

		res.json(character)
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