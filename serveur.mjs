import express, { application } from "express"
const app = express();

//Middleware
app.use(express.json())

let Data = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    }

]

app.get("/taches" ,function (requete, response) {
    response.json({data: Data });
});

app.get("/taches/:indice" ,function (requete, response) {
    response.json({data: Data[requete.params.indice] });
});

app.post("/taches" ,function (requete, response) {
    const newtask = requete.body ;
    newtask.id = Data.length + 1
    Data.push(newtask)
    
    response.json({data: newtask});
});

app.delete("/taches/:index" ,function (requete, response) {
    Data.splice(requete.params.index,1)
    response.json({data: requete.params.index });
});

    // starts a simple http server locally on port 3000
app.listen(3000, '127.0.0.1', () => {
    console.log('L\'application a bien démarré !');
});
