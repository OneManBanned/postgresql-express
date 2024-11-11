import db from "../db/queries.js";

class Controller {
  async getUsernames(req, res) {
    const usernames = await db.getAllUsernames();
    res.render("index", { users: usernames });
  }

  async getSearchUsernames(req, res) {
    const { search } = req.query;
    const usernames = await db.searchAllUsernames(search);
    res.render("index", { users: usernames });
  }

  async createUsernamesGet(req, res) {
    return res.render("create");
  }

  async createUsernamePost(req, res) {
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect("/");
  }
}

export default new Controller();
