function timer(secondes){

    if(secondes > 0){
        console.log(secondes);
        timer(secondes - 1)
    }
    else {
        console.log(secondes);
    }

}

timer(10);

function somme(nbr){

    if(nbr == 1){
        return 1;
    }
    return nbr + somme(nbr - 1)
}

console.log(somme(3));