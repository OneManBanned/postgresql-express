import pkg from "pg";
const { Pool } = pkg

export default new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.DATABASEPORT,
}) 

