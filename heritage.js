class Animal {

    nbPattes;
  constructor(name) {
    this.name = name;
  }

  NbPattes(n) {
    this.nbPattes = n;
  }

  couleur(c) {
    this.couleur = c;
  }

  parler() {
    console.log(this.name + ' fais du bruit.');
  }

  afficher() {
    console.log('Nom : ' + this.name);
    console.log('Nombre de pattes : ' + this.nbPattes);
  }
}

class Chien extends Animal {
  constructor(name) {
    super("chien " + name);
    this.nbPattes = 4;
  }

  parler() {
    console.log(this.name + ' aboie.');
  }
}

class Chat extends Animal {
  constructor(name) {
    super("chat " + name);
    this.nbPattes = 4;
  }

  parler() {
    console.log(this.name + ' miaule.');
  }
}

class Oiseau extends Animal {
  constructor(name) {
    super("oiseau " + name);
    this.nbPattes = 2;
  }

  parler() {
    console.log(this.name + ' chante.');
  }
}

let medor = new Chien('Medor');
medor.afficher();
medor.parler();

let rex = new Chien('Rex');
rex.afficher();
rex.parler();

let felix = new Chat('Felix');
felix.afficher();
felix.parler();

let coco = new Oiseau('Coco');
coco.afficher();
coco.parler();