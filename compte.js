// Créer un objet compte (compte bancaire) avec les propriétés suivantes :
// client
// numéro
// solde
// avec les méthodes suivantes :
// afficher: affiche toutes les propriétés du compte
// crediter: ajoute un montant au solde
// debiter: enleve un montant au solde

let compte = {
    client: "Bernard",
    numero: "9481749",
    solde: 0,
    afficher: function() {
        console.log(this.client, this.numero, this.solde);
    },
    crediter: function(montant) {
        this.solde += montant;
        console.log(this.solde);
    },
    debiter: function(montant) {
        this.solde -= montant;
        console.log(this.solde);
    }
}
compte.afficher();
compte.crediter(100);
compte.debiter(50);
