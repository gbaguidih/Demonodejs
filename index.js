// Exercice 1
function direBonjours(){
    return ' Bonjour, Monde !'
}
console.log('Exercice 1 :' + direBonjours())

// Exercice 2
function addition(a,b){
    return a + b 
}
console.log ('Exercice 2 :' +addition(15,11) )


// Exercice 3
function trouverMax(a,b){
    if(a>b){
        return a +' est le plus grand'
    }else {
        return b +' est le plus grand'
    }
}
console.log('Exercice 3 :' + trouverMax(10,20))

// Exercice 4
function  compterCaracteres(str){
    let compteur = 0
    for(i=0 ; str[i] !=undefined ; i++){
       compteur ++
    }
    return compteur
}
console.log('Exercice 4 :' + compterCaracteres('hillary  '))

// Exercice 5
function estPair(nombre) {
    if(nombre %2 == 0){
        return 'true'
    }else{
        return 'false'
    }
}
console.log('Exercice 5 :' + estPair(5) )


// // Exercice 6
function saluer(nom='Inconnu'){
    return 'Bonjour, ' +nom + ' !'
}
console.log('Exercice 6 :' + saluer())

// Exercice 7
function calculerAire(largeur, hauteur){
    let resultat = largeur * hauteur
    return resultat <= 0 ? 0 : resultat
}
console.log ('Exercice 7 :' +calculerAire(0, 0))

// Exercice 8
function convertirEnMajuscules(str){
    return str.toUpperCase()
}
console.log ('Exercice 8 :' +convertirEnMajuscules('François'))

// Exercice 9
function sommeTableau(nombres) {
    let somme =0
    for(i=0; i<nombres.length; i++){
        somme +=Number (nombres[i]);
    }
    return somme
}
console.log('Exercice 9 :' +sommeTableau([12,11,80]) )

// Exercice 10
function existeDansTableau(nombre, tableau){
    for(i=0; i<tableau.length; i++){
        if (tableau[i] === nombre){
            return true
        }
    }
    return false
}
console.log('Exercice 10 :' +existeDansTableau(10, [50,14,20]))
