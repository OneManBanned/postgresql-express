import express, { urlencoded } from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import newRouter from "./routes/newRoute.js";
import Controller from "./controllers/newControllers.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", Controller.getUsernames);
app.get("/search", Controller.getSearchUsernames);
app.use("/new", newRouter);

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
