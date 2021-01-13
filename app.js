// Calcules
function addition(nbrA, nbrB) {
    return nbrA + nbrB;
}

function multiplication(nbrA, nbrB) {
    return nbrA * nbrB;
}

function soustration(nbrA, nbrB) {
    return nbrA - nbrB;
}

function division(nbrA, nbrB) {
    if(nbrB == 0){
        throw new Error("Impossible de diviser par 0");
    }
    return nbrA / nbrB;
}



do {
    var choix = Number(prompt("Que souhaitez vous faire\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4- Division\n"));

} while (choix != 1 && choix != 2 && choix != 3 && choix != 4)

do {
    var nbr1 = Number(prompt("Entrez un premier nombre"));
    var nbr2 = Number(prompt("Entrez un deuxième nombre"));

} while (isNaN(nbr1) || isNaN(nbr2))


try {

    switch (choix) {
        case 1:
            var resultat = addition(nbr1, nbr2);
            break;
        case 2:
            var resultat = multiplication(nbr1, nbr2);
            break;
        case 3:
            var resultat = soustration(nbr1, nbr2);
            break;
        case 4:
            var resultat = division(nbr1, nbr2);
            break;
        default:
            throw new Error("Une erreur est survenue.")

    }
    alert(`Voici le résultat: ${resultat}`);
}
catch(error){
    alert(error);
}
