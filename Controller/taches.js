 import Data from "../data.mjs"
 class Taches {
  getAll(requete, response) {
    response.json({data: Data });
}

  getOne(requete, response) {
    response.json({data: Data[requete.params.indice] });
}

  store (requete, response) {
    const newtask = requete.body ;
    newtask.id = Data.length + 1
    Data.push(newtask)
    
    response.json({data: newtask});
}

  destroy (requete, response) {
    Data.splice(requete.params.index,1)
    response.json({data: requete.params.index });
}




}

const taches= new Taches()
export default taches