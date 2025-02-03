class Livre{
    constructor(titre, auteur, nbPages, empruntable){
    this.titre = titre;
    this.auteur = auteur;
    this.nbPages = nbPages;
    this.empruntable = empruntable;
    }
    afficher(){
        console.log(this.titre, this.auteur, this.nbPages, this.empruntable);
    }
}

let livre1 = new Livre("Les misérables", "Victor Hugo", 1500, true);
let livre2 = new Livre("Le Seigneur des Anneaux", "J.R.R. Tolkien", 1000, true);
let livre3 = new Livre("Harry Potter", "J.K. Rowling", 500, false);


livre1.nbPages = 2000;
livre1.empruntable = false;


const bibliotheque = [livre1, livre2, livre3];
for(let i = 0; i < bibliotheque.length; i++){
    bibliotheque[i].afficher();
}
bibliotheque.forEach(function(Livre) {livre.afficher();});
bibliotheque.forEach(Livre => livre.afficher());
