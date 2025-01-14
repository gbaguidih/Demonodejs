export default function exception(requete , response , next ){
    console.log("Sleeping isn't accepted here")
    next()
}