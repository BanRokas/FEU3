//                    Metodai

//          Number/Math/number
/*
  Kreipimasis į number metodus prasideda žodžiu "Math" arba number kintamuoju už jo rašome tašką "." ir už taško rašome metodo pavadinimą ir skliaustelius su galimais parametrais. Pvz.: Math.random(); (45.9841234).toFixed(3);
  Math - atlieka skaičiavimus, pateikia duomenis, pakeitimus. (daugiau variacijos)
  number - atlieka pakeitimus, konvertavimus.
*/
console.groupCollapsed("Numbers/Math/number");
let number = 50.143451;
console.log(number.toFixed(4));
console.log(Math.floor(number));
console.log(Math.random() * number);
console.log(number.toString());
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Math.pow(5,2));
console.log(Math.sqrt(25));
console.log((Math.random() * number).toFixed(2));
console.log(Number(number.toFixed(4)));
console.log(number.toFixed(4)*1);
console.log("...........");
console.groupEnd();

//                  String
/*
  String metodai yra kažkokios funkcijos, kurios atlieka kažkokius veiksmus su duotosiomis žodinėmis reikšmėmis. Tam tikriems metodams, parametrai yra reikalingi, kitiems - ne.
*/

let zodis = 'Labas . 65.4 asd     .                  .                                 g';
console.log(zodis.split(' '));
console.log(zodis[0]);
console.log(zodis.charAt(0));
console.log(zodis.length);
console.log(zodis.charAt(zodis.length - 1));
console.log(zodis.slice(-1));
console.log(zodis.trim().split(' '));
console.log(zodis.includes(' s'));
console.log(zodis.slice(5,10));
console.log(zodis.replaceAll(/[0-9]/g, "x"));
console.log(zodis.concat(', ', 'labas', zodis));
console.log(zodis.toUpperCase());

//            RegExp
/*
  Regular expression (reguliariosios išraiškos) - yra nurodytos simbolių sekos, kurias turi atitikti vartotojo vedama informacija.

  \d - digit (skaičius nuo 0 iki 9)
  [0-9] - digit (skaičius nuo 0 iki 9)
  [a-z] - char (raidės nuo a iki z)
  [A-Z] - char (raidės nuo A iki Z)
  {sk} - kiek sykių kartoti prieš tai nurodytą info
  \s - whiteSpace (tarpas)
  ^ - sekos pradžia
  $ - sekos pabaiga
  .....
*/
//  (+370) 644 44444
let phoneRegex = new RegExp('^\(\+[0-9]{3}\)\s[0-9]{3}\s[0-9]{5}$');
                         // '^\(\+\d{3}\)\s\d{3}\s\d{5}$'
        // telefono numeris (+666) 666 66666


//          Konspektas
/*
  Math.E -    Euler's number          - approximately 2.718
  Math.LN10 - natural logarithm of 10 - approximately 2.302



*/