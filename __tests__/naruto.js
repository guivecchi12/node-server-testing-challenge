const supertest = require("supertest")
const server = require("../server")
const db = require("../data/config")

beforeEach(async () => {
	// run the seeds programatically before each test to start fresh
	await db.seed.run()
})

afterAll(async () => {
	// close the database connection so the test process doesn't hang or give a warning
	await db.destroy()
})

describe("naruto integration tests", () => {
	it("GET /naruto", async () => {
		const res = await supertest(server).get("/naruto")
		expect(res.statusCode).toBe(200)
		expect(res.type).toBe("application/json")
		expect(res.body.length).toBeGreaterThanOrEqual(4)
		expect(res.body[0].name).toBe("Naruto")
	})
	it("create a character", async() => {
		const res = await supertest(server)
			.post("/naruto")
			.send({ name: "Gaara" })
		expect(res.statusCode).toBe(201)
		expect(res.body.name).toBe("Gaara")
		expect(res.req.method).toBe('POST')
	})
	it("Delete a character", async () => {
		const res = await supertest(server).get("/naruto/del/4")
		// console.log(res)
		expect(res.statusCode).toBe(200)
		expect(res.body.message).toBe('character removed')
		expect(res.req.method).toBe('GET')
	})
})

