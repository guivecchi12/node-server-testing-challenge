module.exports = {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
        filename: "./data/naruto.db3",
    },
    migrations: {
        directory: "./data/migrations",
    },
    seeds: {
        directory: "./data/seeds",
    },
}