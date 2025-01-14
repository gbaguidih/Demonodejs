import express, { application } from "express"
import Taches from "./Controller/taches.js";
import auth from "./Middleware/auth.js";
import exception from "./Middleware/exception.js";
import "./Config/database.js"
const app = express();

//Middleware
app.use(express.json())
app.use(auth)
app.use(exception)

app.get("/taches" , Taches.getAll);
app.get("/taches/:indice" , Taches.getOne);
app.post("/taches" , Taches.store);
app.delete("/taches/:index" , Taches.destroy);

    // starts a simple http server locally on port 3000
app.listen(3000, '127.0.0.1', () => {
    console.log('L\'application a bien démarré !');
});
