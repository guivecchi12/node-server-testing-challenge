exports.seed = async function(knex) {
	await knex("naruto").truncate()
	await knex("naruto").insert([
		{ name: "Naruto" },
		{ name: "Sasuke" },
		{ name: "Kakashi" },
		{ name: "Hinata" },
	])
}