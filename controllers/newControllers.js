class Controller {

    get(req, res) {
    return  res.render("index")
    }

    post(req, res) {
          console.log("username to be saved ", req.body.username)
          res.redirect("/")
    }

}

export default new Controller();
