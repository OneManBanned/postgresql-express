import db from "../db/queries.js";

class Controller {
  async getUsernames(req, res) {
   const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
  }

  async createUsernamesGet(req, res) {
    return res.render("index");
  }

  async createUsernamePost(req, res) {
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect("/");
  }
}

export default new Controller();
