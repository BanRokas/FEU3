/*Youtube kanalai:
  Mosh - https://www.youtube.com/@programmingwithmosh (gera info)
  TraversyMedia - https://www.youtube.com/@TraversyMedia (gera info)
  Net Ninja - https://www.youtube.com/@NetNinja (geri tutorials)
  WebDev - https://www.youtube.com/@WebDevSimplified (ne tik JS)
  FreeCodeCamp - https://www.youtube.com/@freecodecamp (apie labai daug ką)

  DaveGray - https://www.youtube.com/@DaveGrayTeachesCode ()
  DevDreamer - https://www.youtube.com/@DevDreamer ( trumpi video - nesunku dėmesį išlaikyti)
  CodingTrain - https://www.youtube.com/@TheCodingTrain (sekamos naujienos ir labai faini projektai, minusas - not beginners friendly)
  FireShip - https://www.youtube.com/@Fireship (fun stuff :) )
  CodeBullet - https://www.youtube.com/@CodeBullet (purely for fun)
  KevinPowell - https://www.youtube.com/@KevinPowell (HTML/CSS)
*/


//        OOP Principai
/*
  Inkapsuliacija  - objekto vidiniai duomenys yra slepiami ir jais galima manipuliuoti tik naudojant objekto viešus metodus.
  Abstrakcija     - objekto nepriklausomumas nuo išorinių sudedamųjų dalių.
  Paveldėjimas    - viena klasė gali būti kitos klasės konkretizacija
  Polimorfizmas   - galimybė dirbti su objektu nežinant jo tikslaus tipo ir struktūros

  video: https://youtu.be/pTB0EiLXUC8
*/

class Gyvunas{
  #pavadinimas;
  #kojuKiekis;
  constructor(pavadinimas, kojuKiekis){
    this.#pavadinimas = pavadinimas;
    this.#kojuKiekis = kojuKiekis;
  }

  getPavadinimas(){
    return this.#pavadinimas;
  }
  setPavadinimas(naujasPavadinimas){
    this.#pavadinimas = naujasPavadinimas;
  }

  getKojuKiekis(){
    return this.#kojuKiekis;
  }
  setKojuKiekis(naujasKojuKiekis){
    this.#kojuKiekis = naujasKojuKiekis;
  }

  valgo(){
    return 'Valgo kažką...';
  }
}

class Kate extends Gyvunas{
  constructor(kojuKiekis){
    super('Katė', kojuKiekis);
  }

  #balsoVariantai = ['Miauuu...', 'Psshhhttt...', 'Murk...', 'Rawr...'];
  #balsoVariantas(){
    return this.#balsoVariantai[Math.floor(Math.random()*this.#balsoVariantai.length)];
  }

  balsas(){
    return this.#balsoVariantas();
  }
  valgo(){
    return `Valgo kačių maistą, peles...`;
  }
}

class Voras extends Gyvunas{
  constructor(kojuKiekis){
    super('Voras', kojuKiekis);
  }

  gasdina(){
    return "Buuuu MUHAHAHA";
  }
  valgo(){
    return `Valgo muses...`;
  }
}

let gyvunas = [
  new Gyvunas('Šuo', 4),
  new Kate(4),
  new Voras(8)
];