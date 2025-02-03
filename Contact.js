class Contact{
    constructor(nom, prenom, dateNaissance, sexe, adresse, codepostal, ville, email, telephone){
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.sexe = sexe;
        this.adresse = adresse;
        this.codepostal = codepostal;
        this.ville = ville;
        this.email = email;
        this.telephone = telephone;
    }
    afficher(){
        console.log(this.nom, this.prenom, this.dateNaissance, this.sexe, this.adresse, this.codepostal, this.ville, this.email, this.telephone);
    }
}

let contact1 = new Contact("Doe", "John", "01/01/1970", "M", "1 rue de la paix", 75000, "Paris","dqoidnqfu@gmail.com", "0601020304");
let contact2 = new Contact("Doe", "Jane", "01/01/1975", "F", "1 rue de la paix", 75000, "Paris","djdoiqoidqçoa@gmail.com", "0601020304");
let contact3 = new Contact("Doe", "Jim", "01/01/1980", "M", "1 rue de la paix", 75000, "Paris","pojosnoinoeij@gmail.com", "0601020304");
let contact4 = new Contact("Doe", "Jessica", "01/01/1985", "F", "1 rue de la paix", 75000, "Paris","PAJPJANONOJpjcono@gmail.com", "0601020304");

//Méthodes :
// Affiche les infos du contact
// Envoie un mail au contact
//Créer une collection (tableau) de 10 contacts, basés sur la classe "Contact"
//Afficher un listing des contacts

const annuaire = [contact1, contact2, contact3, contact4];
for(let i = 0; i < annuaire.length; i++){
    annuaire[i].afficher();
}
annuaire.forEach(function(Contact) {Contact.afficher();});
