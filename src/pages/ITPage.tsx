import Navbar from '../components/Navbar';
import { useEffect } from 'react';

// TypeScript klasser for objektorientert programmering

class Person {
  name: string;
  age: number;
  job?: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName = (): string => {
    return this.name;
  };

  getAge = (): number => {
    return this.age;
  };

  setJob = (job: string): void => {
    this.job = job;
  };
}

class House {
  adress: string;
  price: number;
  residents: Person[];

  constructor(adress: string, price: number, residents: Person[]) {
    this.adress = adress;
    this.price = price;
    this.residents = residents;
  }

  getAdress = (): string => {
    return this.adress;
  };

  getPrice = (): number => {
    return this.price;
  };

  getResidents = (): Person[] => {
    return this.residents;
  };

  addResident = (resident: Person): void => {
    this.residents.push(resident);
  };
}

class Programmer extends Person {
  company: string;
  salary: number;
  language: string;

  constructor(
    name: string,
    age: number,
    company: string,
    salary: number,
    language: string
  ) {
    super(name, age);
    this.company = company;
    this.salary = salary;
    this.language = language;
  }

  sayHi = (): void => {
    console.log(
      `Hello, I am a programmer! My name is ${this.getName()} I work for ${
        this.company
      }`
    );
  };
}

const ITPage = () => {
  useEffect(() => {
    // Kjør TypeScript kode når komponenten lastes
    const runTypeScriptDemo = () => {
      const Jornis = new Person('Jornis', 40);
      const Balt = new Person('Balthazar', 80);

      // oppretter hus med jornis og baltazar som residents
      const house = new House('husnavn', 2500000, [Jornis, Balt]);

      const Margot = new Person('Margot', 37); // ny person i person-klassen
      Jornis.setJob('Programmeringsekspert');
      house.addResident(Margot); // legges til enklere siden vi har addResident som klassemetode :)

      console.log(Jornis.getName());
      console.log(Jornis.getAge());
      console.log(Balt.getName());

      console.log(house.residents); // viser alt som ligger i hus 1

      const house2 = new House('kvgs', 60000000, []);
      house2.addResident(new Person('MB', 69));
      const Harra = new Person('arra', 17);
      Harra.setJob('Elev');
      house2.addResident(Harra);
      console.log(house2.getResidents()); // viser alle som hører til hus 2

      const programmer = new Programmer(
        'Jokane',
        47,
        'Kvgs',
        378000,
        'JavaScript'
      );
      programmer.sayHi();
    };

    runTypeScriptDemo();
  }, []);

  return (
    <div className="bg-linear-to-r from-[#00735c] to-[rgba(177,245,6,0.5)] text-white font-sans text-lg overflow-x-hidden min-h-screen">
      <Navbar />
      <main className="p-8 max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">VG2 IT</h1>

        <div className="mb-8">
          <img
            src="/img/storRobot.jpg"
            className="w-2/5 rounded-lg shadow-lg"
            alt="illustration-of-people-building-a-gigantic-robot-with-ai-on-its-chest-which-then-breaks-loose-and-destroys-the-city-around-it"
          />
          <p className="text-sm mt-2">
            Bildekilde:{' '}
            <a
              href="https://spectrum.ieee.org/isaac-asimov-robotics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-100 underline"
            >
              spectrum.ieee.org
            </a>
          </p>
        </div>

        <div className="mb-6">
          <a
            href="/oevingJS.html"
            className="text-blue-300 hover:text-blue-100 underline text-xl"
          >
            Øving JavaScript oop ligger her
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6 shadow-xl">
          <p className="mb-4">
            Vi har jobbet med målet: "vurdere fordeler og ulemper ved ulike
            programmeringsspråk og velge og anvende relevante
            programmeringsspråk og algoritmer i eget arbeid"
          </p>
          <p className="mb-4">
            Og derfor har vi nå holdt på med litt mer avansert programmering,
            nærmere bestemt objektorientert programmering (oop). Og først er det
            JavaScript vi undersøker. Link til
            <a
              href="https://www.youtube.com/watch?v=GEuS0tfLfEY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-100 underline ml-1"
            >
              videoen vi har brukt her
            </a>
          </p>
          <p>
            Og her er kode jeg har skrevet samtidig som jeg har gått gjennom
            videoen (legg alt i body-taggen i html-dokumentet ditt og åpne
            konsoll i browser med Chrome: fn+f12, Opera: ctrl+shift+c):
          </p>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 shadow-xl">
          <pre className="text-green-400 overflow-x-auto text-sm">
            {`class Person {
  name: string;
  age: number;
  job?: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName = (): string => {
    return this.name;
  };

  getAge = (): number => {
    return this.age;
  };

  setJob = (job: string): void => {
    this.job = job;
  };
}

class House {
  adress: string;
  price: number;
  residents: Person[];

  constructor(adress: string, price: number, residents: Person[]) {
    this.adress = adress;
    this.price = price;
    this.residents = residents;
  }

  getAdress = (): string => {
    return this.adress;
  };

  getPrice = (): number => {
    return this.price;
  };

  getResidents = (): Person[] => {
    return this.residents;
  };

  addResident = (resident: Person): void => {
    this.residents.push(resident);
  };
}

let Jornis = new Person("Jornis", 40);
let Balt = new Person("Balthazar", 80);

// oppretter hus med jornis og baltazar som residents
let house = new House("husnavn", 2500000, [Jornis, Balt]);

let Margot = new Person("Margot", 37); // ny person i person-klassen
Jornis.setJob("Programmeringsekspert");
house.addResident(Margot); // legges til enklere siden vi har addResident som klassemetode :)

console.log(Jornis.getName());
console.log(Jornis.getAge());
console.log(Balt.getName());

console.log(house.residents); // viser alt som ligger i hus 1

let house2 = new House("kvgs", 60000000, []);
house2.addResident(new Person("MB", 69));
let Harra = new Person("arra", 17);
Harra.setJob("Elev");
house2.addResident(Harra);
console.log(house2.getResidents()); // viser alle som hører til hus 2

class Programmer extends Person {
  company: string;
  salary: number;
  language: string;

  constructor(
    name: string,
    age: number,
    company: string,
    salary: number,
    language: string
  ) {
    super(name, age);
    this.company = company;
    this.salary = salary;
    this.language = language;
  }

  sayHi = (): void => {
    console.log(
      \`Hello, I am a programmer! My name is \${this.getName()} I work for \${this.company}\`
    );
  };
}

let programmer = new Programmer("Jokane", 47, "Kvgs", 378000, "JavaScript");
programmer.sayHi();`}
          </pre>
        </div>
      </main>
    </div>
  );
};

export default ITPage;
