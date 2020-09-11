const server = require("./server")

const port = 5000

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})