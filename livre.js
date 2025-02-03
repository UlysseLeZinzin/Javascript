//objet livre :
// - titre (string)
// - auteur (string)
// - nbPages (number)
// - empruntable (boolean)
// - afficher() qui affiche le titre, l'auteur et le nombre de pages
// - estLong() qui renvoie true si le nombre de pages dépasse 300, false sinon
// - emprunter() qui renvoie "Le livre a été emprunté" si le livre est empruntable, "Le livre ne peut pas être emprunté" sinon
// - rendre() qui renvoie "Le livre a été rendu" si le livre a été emprunté, "Le livre n'a pas été rendu" sinon
let livre = {
    titre: "Le Seigneur des Anneaux",
    auteur: "J.R.R. Tolkien",
    nbPages: 1000,
    empruntable: true,
    rendu: false,
    afficher: function() {
        console.log(this.titre, this.auteur, this.nbPages);
    },
    estLong: function() {
        return this.nbPages > 300;
    },
    emprunter: function() {
        return this.empruntable ? "Le livre a été emprunté" : "Le livre ne peut pas être emprunté";
    },
    rendre: function() {
        return this.rendu ? "Le livre a été rendu" : "Le livre n'a pas été rendu";
    }
}

livre.afficher();
console.log(livre.estLong());
console.log(livre.emprunter());
console.log(livre.rendre());