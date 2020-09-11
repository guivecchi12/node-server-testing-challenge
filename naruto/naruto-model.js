const db = require("../data/config")

function find() {
	return db("naruto")
}

function findById(id) {
	return db("naruto").where({ id }).first()
}

async function create(data) {
	const [id] = await db("naruto").insert(data)
	return findById(id)
}

async function update(id, data) {
	await db("naruto").where({ id }).update(data)
	return findById(id)
}

function remove(id) {
	return db("naruto").where({ id }).del()
}

module.exports = {
	find,
	findById,
	create,
	update,
	remove,
}
