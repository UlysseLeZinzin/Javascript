const { randomInt } = require("crypto");

class Contact {
  constructor(nom,prenom,DateNaissance) {
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
    salaire() {
        return 2500;
    }
    ancienete() {
        return randomInt(0, 20);
    }
    augmentation() {
        console.log('Salaire : ' + this.salaire()+'€');
        console.log('Ancienneté : ' + this.ancienete()+'ans');
        if (this.ancienete() > 10) {
            console.log('Augmentation de : ' + this.salaire() * 10 / 100 +'€');
        }
        else {
            console.log('Augmentation de : ' + this.salaire() * 5 / 100 +'€');
        }
    }
}

let contact1 = new Employe('Doe','John','01/01/1970');
contact1.afficher();
contact1.augmentation();


let contact2 = new Employe('Doe','Jane','01/01/1975');
contact2.afficher();
contact2.augmentation();