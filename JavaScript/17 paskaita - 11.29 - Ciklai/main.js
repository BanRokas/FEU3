//              Kintamieji
/*
  Objektas  - Object  - {raktas:reiksme, raktas1:reiksme1....}
  Masyvas   - Array   - [reiksme, reiksme, reiksme...]

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
  // let menesis1 = "Sausis";
  // let menesis2 = "Vasaris";
  // let menesis3 = "Kovas";
  // let menesis4 = "Balandis";
  // let menesis5 = "Gegužė";
  //.........
  // let menesiai = {
  //   m1: "Sausis",
  //   m2: "Vasaris",
  //   m3: "Kovas"
  // }
  let menesiai = ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Biržėlis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"];
  console.log(menesiai[10]);
  let masyvas = [654, 12, 555.555, [1, 2, 3, 4, "5", false], false, true, "žodžiai", "haha"];
  console.log(masyvas);
  masyvas[1] = 'pakeistas';
  masyvas.push("push?"); // push - prie masyvo galo prideda naują reikšmę
  masyvas.unshift("unshift?"); // unshift - prie masyvo pradžios prideda naują reiškmę
  console.log(masyvas);
  let masyvoMetoduBandymai = masyvas.pop(); // pop - išima paskutinį masyvo elementą
  masyvoMetoduBandymai = masyvas.shift(); // shift - išima pirmą masyvo elementą
  masyvoMetoduBandymai = masyvas.length; // length - masyvo ilgio duomuo (number)
  console.log(masyvas);
  console.log(masyvas[0]);
  console.log(masyvas[masyvas.length - 1]);
  console.log(masyvas);
}
//              Masyvai ir Objektai
{
  let mixed1 = {
    vardas: "Rokas",
    amzius: 26,
    vedes: false,
    gyvenamojiVieta: {
      miestas: "Kaunas",
      salis: "Lietuva",
      zemynas: "Europa"
    },
    pomegiai: ["Sportas", "Žaidimai", "Technologijos", "Gitara"]
    //                0       1         2               3            
  }
  console.log(mixed1.vardas + " turi " + mixed1.pomegiai.length + " pomėgius.");
  console.log("Vienas iš " + mixed1.vardas + " pomėgių yra " + mixed1.pomegiai[Math.floor(Math.random()*mixed1.pomegiai.length)] + ".");

  let mixed2 = [
    {
      vardas: "Rokas",
      amzius: 26
    },
    {
      vardas: "Petras",
      amzius: 50
    },
    {
      vardas: "Kazimieras",
      amzius: 5
    }
  ];
  console.log(mixed2);
}