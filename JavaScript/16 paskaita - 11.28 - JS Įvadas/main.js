/* console.log("Labas rytas JS'e"); */

//      Kintamieji
/*
  string        - žodinis kintamasis rašomas kabutėse: '' / "" / ``
  number        - skaitinis kintamasis
  boolean/bool  - loginis kintamsis (true/false)

  null          - tuščias
  undefined     - neapibrėžtas
  NaN           - Not a Number

  array         - masyvas
  object        - objektas

  ----------------------------------------------------------------------------

  var/let/const - kintamųjų ribų nurodymai
  nameOrSmth    - kintamojo vardas
  value         - kintamojo reikšmė
*/

let manoVardas0 = "Rokas";
let manoVardas1 = 'Rokas';
let manoVardas2 = `Rokas`;

let manoAmzius0 = 26;
let manoAmzius1 = 26.2;
let manoAmzius2 = 26+0.2;

let vedesIrTuriVaiku = false;
let neVedesIrNeTuriVaiku = true;

// ---------------------------TASK1------------------------------------

let number1 = 5;
let number2 = 50;
let number3 = 5.5;
let number4 = 15;
let number5 = -5;

let string1 = "Žodis";
let string2 = "Žodžiai";
let string3 = "Žodinėlis";
let string4 = "Žodis ir vėl žodis";
let string5 = "";

let bool1 = true;
let bool2 = false;

// ----------------------------------------------------------------------------

//          Operatoriai
/*
            Arithmetic
  +   - sudėtis
  -   - atimtis
  *   - daugyba
  /   - dalyba
  **  - kėlimas laipsniu (šaknies traukimas)
  %   - liekanos radimas

            Assignment
  =   - lygybė
  
            Shortcuts
  ++  - didėjimas vienetu (kazkas = kazkas + 1)
  --  - mažėjimas vienetu (kazkas = kazkas - 1)
  +=  - pridėjimas (kazkas = kazkas + kazkiek)
  -=  - atėmimas (kazkas = kazkas - kazkiek)
  *=  - dauginimas (kazkas = kazkas * kazkiek)
  /=  - dalinimas (kazkas = kazkas / kazkiek)
  %=  - liekanos radimas (kazkas = kazkas % kazkiek)
  **= - laipsnio kėlimas / šaknies traukimas (kazkas = kazkas ** kazkiek)

            Comparison
  ==  - ar lygu duomenys
  === - ar lygu duomenys ir tipas
  >   - daugiau negu
  <   - mažiau negu
  >=  - daugiau arba lygu negu
  <=  - mažiau arba lygu negu

            Logical
  !   - ne (apverčia reikšmę) (NOT)
  &&  - ir                    (AND)
  ||  - arba                  (OR)

                  Type
  typeof      - tikrina tipą
*/

// ---------------------------TASK2------------------------------------
{
  console.log('number1+number2', number1+number2);
  console.log('number1-number2', number1-number2);
  console.log('number1*number2', number1*number2);
  console.log('number1/number2', number1/number2);
  console.log('number1**number2', number1**number2);
  console.log('number1%number2', number1%number2);
  console.log('number1++', ++number1);
  console.log('number2--', --number2);

  console.log('string1+string2', string1+string2); // tik šitas viable
  console.log('string1-string2', string1-string2);
  console.log('string1*string2', string1*string2);
  console.log('string1/string2', string1/string2);
  console.log('string1**string2', string1**string2);
  console.log('string1%string2', string1%string2);
  // console.log('string1++', ++string1);
  // console.log('string2--', --string2);

  // Naudojant matematinius operatorius su boolean tipo kintamaisiais, boolean tipo kintamieji yra verčiami į 0 ir 1. false -> 0; true -> 1
  console.log('bool1+bool2', bool1+bool2);
  console.log('bool1+bool1', bool1+bool1);
  console.log('bool2+bool2', bool2+bool2);
  console.log('bool1-bool2', bool1-bool2);
  console.log('bool1*bool2', bool1*bool2);
  console.log('bool1/bool2', bool1/bool2);
  console.log('bool1**bool2', bool1**bool2);
  console.log('bool1%bool2', bool1%bool2); // tik šitas negalimas ( 1 % 0 )
  console.log('bool2%bool1', bool2%bool1);
  // console.log('bool1++', ++bool1);
  // console.log('bool2--', --bool2);

  console.log('number1+string3', number1+string3); // tik šitas galimas
  console.log('number1-string3', number1-string3);
  console.log('number1*string3', number1*string3);
  console.log('number1/string3', number1/string3);
  console.log('number1**string3', number1**string3);
  console.log('number1%string3', number1%string3);

  console.log('string2+number2', string2+number2); // tik šitas galimas
  console.log('string2-number2', string2-number2);
  console.log('string2*number2', string2*number2);
  console.log('string2/number2', string2/number2);
  console.log('string2**number2', string2**number2);
  console.log('string2%number2', string2%number2);

  console.log('number3+bool1', number3+bool1);
  console.log('string4+bool1', string4+bool1);
}
// ---------------------------TASK3------------------------------------
{
  console.log('number4++',++number4);
  console.log('number3--',--number3);
  console.log('number3+=number1',number3+=number1);
  console.log('number4-=number3',number4-=number3);
  console.log('number4*=number1',number4*=number1);
  console.log('number2/=number3',number2/=number3);
  console.log('number1%=number3',number1%=number3);
  console.log('number4**=number5',number4**=number5);
}
// ---------------------------TASK4------------------------------------
{
  console.log('number1==number2',number1==number2);
  console.log('number1!=number2',number1!=number2);
  console.log('number1===number2',number1===number2);
  console.log('number1!==number2',number1!==number2);
  console.log('number1<number2',number1<number2);
  console.log('!(number1<number2)',!(number1<number2));
  console.log('number1>number2',number1>number2);
  console.log('number1>=number2',number1>=number2);
  console.log('!(number1>=number2)',!(number1>=number2));
  console.log('number1<=number2',number1<=number2);
}

//                    Sąlygos
/*
                      If Else
  if        - pradinė sąlyga
  else if   - papildoma sąlyga, kuri tikrinama tik jeigu aukščiau esanti/čios sąlyga/os grąžino false
  else if ...
  else      - vykdomas jeigu visos aukščiau esančios sąlygos grąžino false

                      Nesting
  Sąlygos viduje, rašoma kita sąlyga.


*/

let amzius = 15;
if(amzius >= 18){
  console.log('Esi pilnametis.');
  if(amzius > 90 && amzius < 130){
    console.log('Esi pensininkas.');
  } else if(amzius < 90) {
    console.log('Esi darbingo amžiaus pilietis.');
  } else {
    console.log('Kaip tu dar gyvs?');
  }
} else if(amzius < 7) {
  console.log('Esi iki mokyklinio amžiaus.');
} else {
  console.log('Esi mokyklinukas.');
}


// ---------------------------TASK5-6-7-----------------------------------
{
  let arTuriVairuotojoTeises = true;
  let arTuriAutomobili = false;
  let arEsiBlaivas = false;
  if(arTuriVairuotojoTeises === true){
    console.log("Vairuotojo teises turi.");
    if(arTuriAutomobili === true && arEsiBlaivas === true){
      console.log("Gali sėst ir važiuoti.");
    } else if(arTuriAutomobili === false){
      console.log("Neturi auto - neturi ko vairuot.");
    } else {
      console.log("Nesi blaivas - nėra ko vairuoti.");
    }
  } else {
    console.log("Vairuotojo teisių neturi.");
  }
}

//                  AND ir OR
/*
  Naudojant && tikrinama ar abejose pusėse yra tiesa. Jeigu bent vienoje pusėje yra melas - grąžina melą. Jeigu kairėje pusėje yra melas - dešinės pusės net netikrina/nevykdo.
  Naudojant || tikrinama ar bent vienoje pusėje yra tiesa. Jeigu bent vienoje pusėje yra tiesa - grąžina tiesą. Jeigu kairėje pusėje yra tiesa - dešinės pusės net netikrina/nevykdo.
*/
if(5 == '5' && typeof('5') == typeof(5)){
  console.log('lygu');
} else {
  console.log('nelygu');
}
if(false || false){
  console.log('tiesa');
} else {
  console.log('melas');
}

//                Truthy ir Falsy
/*
  truthy  - true  | not 0 number  | 'string'          | [] | {} | () => {}
  falsy   - false | 0             | '' (empty string) | 
*/

let kintamasisKazkoks = 'a';

if(kintamasisKazkoks){
  console.log('irase');
} else {
  console.log('neirase');
}