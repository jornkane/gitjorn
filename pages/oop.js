class Animal {
    constructor (art, slekt, familie, orden, klasse, rekke, rike ) {
      this.art = art;
      this.familie = familie;
      this.klasse = klasse;
      this.rike = "dyreriket"
    }
    klassifisering() {
          console.log(`${this.art} tilhører riket ${this.rike} i klassen ${this.klasse} i familen ${this.familie} `);
      }
  }
  // underklasse kan være høne, hund, katt, ku osv. 
  class Dog extends Animal {
      constructor(art, slekt, familie, orden, klasse, rekke, rike, navn ) {
          super(art, slekt, familie, orden, klasse, rekke, rike ); // Kaller konstruktøren til superklassen (Animal)
          this.navn = navn;
      }
      getName() {
          console.log(`${this.name} sjø.`);
      }
  }
  const dog1 = new Dog('hund','hundeslekt','famile','orden','klasse','rekke','rike','Buddy');
  console.log(dog1.getName) 
  