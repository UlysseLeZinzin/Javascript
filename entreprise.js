const { randomInt } = require("crypto");

class Contact {
  constructor(nom, prenom, DateNaissance) {
    this.nom = nom;
    this.prenom = prenom;
    this.DateNaissance = DateNaissance;
  }

  afficher() {
    console.log('Nom : ' + this.nom);
    console.log('Prénom : ' + this.prenom);
    console.log('Date de naissance : ' + this.DateNaissance);
  }
}

class Employe extends Contact {
    constructor(nom, prenom, DateNaissance) {
        super(nom, prenom, DateNaissance);
        this._ancienete = randomInt(0, 20);
    }

    salaire() { return 2500; }
    ancienete() { return this._ancienete; }
    augmentationMontant() {
        return this.ancienete() > 10 ? this.salaire() * 10 / 100 : this.salaire() * 5 / 100;
    }
    salaireApresAugmentation() {
        return this.salaire() + this.augmentationMontant();
    }
    
    augmentation() {
        let ancienete = this.ancienete();
        let augmentation = this.augmentationMontant();
        let nouveauSalaire = this.salaire() + augmentation;

        console.log('Ancienneté : ' + ancienete + ' ans');
        console.log('Salaire : ' + this.salaire() + '€');
        console.log('Augmentation de : ' + augmentation + '€');
        console.log('Nouveau salaire : ' + nouveauSalaire + '€');
    }
}

let contact1 = new Employe('Doe', 'John', '01/01/1970');
contact1.augmentation();
contact1.afficher();

let contact2 = new Employe('Smith', 'Jane', '05/06/1985');
contact2.augmentation();
contact2.afficher();

let contact3 = new Employe('Brown', 'Michael', '12/12/1990');
contact3.augmentation();
contact3.afficher();

let contact4 = new Employe('Taylor', 'Emma', '23/03/1995');
contact4.augmentation();
contact4.afficher();