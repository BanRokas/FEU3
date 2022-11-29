//              Kintamieji
/*
  Objektas  - Object  - {raktas:reiksme, raktas1:reiksme1....}
  Masyvas   - Array

  Tiek objektas, tiek masyvas yra konteineriniai kintamieji. Tai reiškia, kad jų viduje galima talpinti keletą reiškmių (gali būti skirtingų kitamųjų tipų).
*/

//              Objektai
{
  /*let vardas = "Rokas";
  let pavarde = "Banaitis";
  let amzius = 26;
  let vedes = false;
  console.log(vardas);
  console.log(pavarde);
  console.log(amzius);
  console.log(vedes);

  let vardas1 = "Petras";
  let pavarde1 = "Petrauskas";
  let amzius1 = 55;
  let vedes1 = true;
  console.log(vardas1);
  console.log(pavarde1);
  console.log(amzius1);
  console.log(vedes1);*/

  let zmogus = {
    vardas: "Rokas",
    pavarde: "Banaitis",
    amzius: 26,
    vedes: false,
    gyvenamojiVieta: {
      miestas: "Kaunas",
      salis: "Lietuva",
      zemynas: "Europa",
      planeta: "Žemė"
    }
  };
  console.log(zmogus.vardas);
  console.log(zmogus.pavarde);
  console.log(zmogus.amzius);
  console.log(zmogus.vedes);
  console.log(zmogus.gyvenamojiVieta.miestas);

  let zmogus1 = {
    vardas: "Petras",
    pavarde: "Petraitis",
    amzius: 55,
    vedes: true
  }
  console.log(zmogus1);
  zmogus1.vardas = "Jonas";
  zmogus1.ugis = 180;
  // zmogus1['ugis'] = 190;
  console.log(zmogus1);
}
//              Masyvai
{
  
}