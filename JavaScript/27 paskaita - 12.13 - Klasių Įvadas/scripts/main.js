//              KLASĖS
/*
  Klasė yra objektų kūrimo šablonas.
  Klasė privalo būti aprašyta, prieš kreipiantis į ją.
  Klasių pavadinimai rašomi iš didžiųjų raidžių.
  Klasės konstruktoriuje "this" yra privalomas.

*/
/*syntax
  class KlasesPav{
    constructor(par1, par2){
      this.par1 = par1;
      this.par2 = par2;
    }
    methods...
  }
*/

// kuriame objektų masyvą be klasių
let asmenysBeKlasiu = [
  {
    vardas: "Rokas",
    amzius: 26,
    turiVaiku: false
  },{
    vardas: "Petras",
    amzius: 50,
    turiVaiku: true
  }
];

// kuriame obektų masyvą su klasėmis
{
  class Asmuo{
    constructor(a, b, c){
      this.vardas = a.split(' ')[0];
      this.pavarde = a.split(' ')[1];
      this.amzius = b;
      this.turiVaiku = c;
    }
    pasisveikinaSu(vardas){
      return this.vardas + ' pasisveikina su ' + vardas;
    }
  }

  let asmenysSuKlasemis = [
    new Asmuo("Rokas Banaitis", 26, false),
    new Asmuo("Petras Petrauskas", 50, true)
  ];

  console.log(asmenysSuKlasemis);
  console.log(asmenysSuKlasemis[0].pasisveikinaSu("Jonas"));
}

// ledų užduotis kartu
{
  class Ledai{
    constructor(pavadinimas, skonis, kaina){
      this.pavadinimas = pavadinimas;
      this.skonis = skonis;
      this.kaina = kaina;
    }
    kainosKeitimas(keitimasProcentais){ // neigiamas % - kaina mažinama
      return this.kaina + this.kaina * keitimasProcentais/100; 
      //        0.60    +     0.60   *        -37        /100
    }
  }

  const leduMasyvas = [
    new Ledai("Dadu", "karamelinis", 1.201354),
    new Ledai("Tirpuko", "avietinis", 0.4941132),
    new Ledai("Nykštukas", "vanilinis", 1.505816)
  ];

  console.log(leduMasyvas);

  console.groupCollapsed('Ledų pavadinimai');
  leduMasyvas.forEach(ledas => console.log(ledas.pavadinimas));
  console.groupEnd();

  console.groupCollapsed('Ledų skoniai');
  leduMasyvas.forEach(ledas => console.log(ledas.skonis));
  console.groupEnd();

  console.groupCollapsed('Ledų kainos');
  leduMasyvas.forEach(ledas => console.log(ledas.kaina.toFixed(2)));
  console.groupEnd();

  console.groupCollapsed('Ledų kainos su 37% nuolaida');
  leduMasyvas.forEach(ledas => console.log(ledas.kainosKeitimas(-37).toFixed(2)));
  console.groupEnd();

  console.groupCollapsed('Padidinom ledu kainų duomenis');
  leduMasyvas.forEach(ledas => {
    ledas.kaina += 0.1;
    console.log(ledas.kaina);
  });
  console.groupEnd();
}

// užduotys

// 1
{
  class Car{
    constructor(name, year){
      this.name = name;
      this.year = year;
      this.helloCar = `Labas, čia mano mašina ${this.name} ir ji buvo pagaminta ${this.year} metais.`;
    }
    age(){
      return new Date().getFullYear() - this.year;
    }
  }

  const cars = [
    new Car('Volvo', 1990),
    new Car("Fiat", 2001),
    new Car("Audi", 2005)
  ];

  console.log(cars[0].helloCar);
  console.log(cars[0].age());
}