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
let contact5 = new Contact("Doe", "Jack", "01/01/1990", "M", "1 rue de la paix", 75000, "Paris", "jackdoe@gmail.com", "0601020305");
let contact6 = new Contact("Doe", "Jill", "01/01/1995", "F", "1 rue de la paix", 75000, "Paris", "jilldoe@gmail.com", "0601020306");
let contact7 = new Contact("Doe", "James", "01/01/2000", "M", "1 rue de la paix", 75000, "Paris", "jamesdoe@gmail.com", "0601020307");
let contact8 = new Contact("Doe", "Julia", "01/01/2005", "F", "1 rue de la paix", 75000, "Paris", "juliadoe@gmail.com", "0601020308");
let contact9 = new Contact("Doe", "Jason", "01/01/2010", "M", "1 rue de la paix", 75000, "Paris", "jasondoe@gmail.com", "0601020309");
let contact10 = new Contact("Doe", "Jasmine", "01/01/2015", "F", "1 rue de la paix", 75000, "Paris", "jasminedoe@gmail.com", "0601020310");

const annuaire = [contact1, contact2, contact3, contact4, contact5, contact6, contact7, contact8, contact9, contact10];
for(let i = 0; i < annuaire.length; i++){
    annuaire[i].afficher();
}
annuaire.forEach(function(Contact) {Contact.afficher();});
