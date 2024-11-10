import pool from "./pool.js";

const db = {
  async getAllUsernames() {
    const { rows } = await pool.query("SELECT * FROM usernames");
   return rows
  },

  async insertUsername(username) {
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
  },
};

export default db;
