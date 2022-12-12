const formSec = document.querySelector('#forma'); // sukuriamas formSec kintamasis, kuris priskiriamas HTML'e esančiam elementui, kuris turi ID 'forma'
const form = document.createElement('form'); // sukuriamas form elementas
const saskaita = document.querySelector('#saskaita'); // sukuriamas saskaita kintamasis, kuris priskiriamas HTML'e esančiam elementui, kuris turi ID 'saskaita'
formSec.append(form); // form įkeliamas į formSec elementą

// funkcija, kuri sukuria naują užsakomo maisto laukelį
let patiekaloSelektoSukurimas = (kelintas) => { // patiekaloSelektoSukurimas funkcijos prilyginimas ir parametras, kuris naudojamas priskirti kuriamiems elementams kitokius name ir ir atributus
  let div = document.createElement('div'); // sukuriams div elementas
  div.classList.add('patiekaloSelektas'); // div elementui suteikiama 'patiekaloSelektas' klasė
  let select = document.createElement('select'); // sukuriamas select elementas
  select.setAttribute('name', 'patiekalas' + kelintas); // kitoks nei buvęs name dėka atributo
  select.setAttribute('id', 'patiekalas' + kelintas); // kitoks nei buvęs id dėka atributo

  meniu.forEach(item => { // sukamas ciklas per visus meniu masyvo objektus
    let option = document.createElement('option'); // sukuriamas option elementas
    option.setAttribute('value', item.id); // option elementui suteikiamas value pagal dabartinio meniu masyvo objekto id
    let text = document.createTextNode(item.pavadinimas); // sukuriamas teksto elementas su dabartinio meniu masyvo objekto pavadinimu
    option.append(text); // tekstas įkeliamas į option elementą 
    // option.textContent = item.pavadinimas;
    select.append(option); // option įkeliamas į selekto elementą
  });

  let input = document.createElement('input'); // sukuriamas input elementas
  input.setAttribute('type', 'number'); // nurodomas input tipas "number"
  input.setAttribute('name', 'kiekis' + kelintas); // kitoks nei buvęs name dėka atributo
  input.setAttribute('id', 'kiekis' + kelintas); // kitoks nei buvęs id dėka atributo
  input.setAttribute('min', 1); // nustatoma minimali galima vertė į 1
  input.setAttribute('value', 1); // nustatoma pradinė vertė į 1

  div.append(select, input); // select ir input įkeliami į div elementą
  form.insertBefore(div, addMoreDiv); // div įkeliamas į form elementą prieš addMoreDiv elementą
}

let addMoreMygtukoSukurimas = () => { // addMoreMygtukoSukurimas funkcijos prilyginimas
  let div = document.createElement('div'); // sukuriamas div elementas
  div.classList.add('addMoreSelect'); // div elementui suteikiama 'addMoreSelect' klasė
  let button = document.createElement('button'); // sukuriamas button elementas
  button.setAttribute('type', 'button'); // button elementui suteikiamas button tipas, kad formą nebūtų pateikiama jį paspaudus
  let text = document.createTextNode('+'); // sukuriamas tekstinis elementas su '+' ženkliuku kaip tekstu
  button.append(text); // tekstas suteikiamas mygtukui
  div.append(button); // mygtukas įkeliamas į div'ą
  form.append(div); // div'as įkeliamas į formą
}

let submitMygtukoSukurimas = () => { // submitMygtukoSukurimas funkcijos prilyginimas
  let div = document.createElement('div'); // sukuriamas div elementas
  div.classList.add('submitDiv'); // div elementui suteikiama 'submitDiv' klasė
  let input = document.createElement('input'); // sukuriamas input elementas 
  input.setAttribute('type', 'submit'); // input elementui suteikiamas atributas type su nustatymu submit
  input.setAttribute('value', 'Užsisakyti'); // input elementui suteikiamas value type su nustatymu Užsisakyti
  div.append(input); // input įkeliamas į div'ą
  form.append(div); // div'as įkeliamas į formą
}

let saskaitosSukurimas = (prekes) => { // saskaitosSukurimas funkcijos prilyginimas ir parametras, kuriame yra prekės, kurias reikia sukelti į sąskaitą
  let mainDiv = document.createElement('div'); // sukuriamas div elementas

  let p1 = document.createElement('p'); // sukuriamas p elementas
  p1.classList.add('date'); // p suteikiama klasė 'date'
  let text = document.createTextNode(gautiDabartiniLaika()); // sukuriamas tekstinis elementas, kurio reikšmė yra išgaunama iš 'gautiDabartiniLaika funkcijos
  p1.append(text); // paragrafui priskiriamas tekstas

  let h4 = document.createElement('h4'); // sukuriamas h4 elementas
  text = document.createTextNode("Įmonės pav"); // sukuriamas tekstinis elementas su tekstu "Įmonės pav"
  h4.append(text); // h4 priskiriamas tekstas

  let h1 = document.createElement('h1'); // sukuriamas h1 elementas
  text = document.createTextNode('Sąskaita'); // sukuriamas tekstinis elementas su tekstu 'Sąskaita'
  h1.append(text); // h1 priskiriamas tekstas

  const hr = document.createElement('hr'); // sukuriamas hr elementas

  const ul = document.createElement('ul'); // sukuriamas ul elementas
  let bendraKaina = 0; // sukuriamas kintamasis, kuriame bus laikoma bendra viso užsakymo kaina
  prekes.forEach(preke => { // sukamas ciklas per visas funkcijai paduotas prekes ir kiekvienas prekes masyvo elementas bus vadinamas 'preke'
    bendraKaina += preke.kaina * preke.kiekis; // papildomas bendraKaina kintamasis sudauginant prekės kainą ir prekės kiekį
    let li = document.createElement('li'); // sukuriamas li elementas
    let div = document.createElement('div'); // sukuriamas div elementas

    let span = document.createElement('span'); // sukuriamas span elementas
    text = document.createTextNode(preke.pavadinimas); // sukuriamas tekstinis elementas, kuriam suteikiamas dabartinės prekės pavadinimas
    span.append(text); // span priskiriamas tekstas
    div.append(span); // span'as įkeliamas į div'ą

    let div2 = document.createElement('div'); // sukuriamas papildomas div elementas (nes reikia dar vieno, o negalime pamiršti ar perrašyti buvusio)

    span = document.createElement('span'); // sukuriamas span elementas
    text = document.createTextNode(`kiekis: ${preke.kiekis}`); // sukuriamas tekstinis elementas, kuriam suteikiamas tekstas 'kiekis: ' ir dabartinės prekės kiekis
    span.append(text); // span priskiriamas tekstas
    div2.append(span) // span'as įkeliamas į papildomą div'ą

    span = document.createElement('span'); // sukuriamas spam elementas
    text = document.createTextNode(`| ${(preke.kaina * preke.kiekis).toFixed(2)}€`); // sukuriamas tekstinis elementas, kuriam suteikiamas tekstas '|' ir dabartinės prekės kiekis padaugintas iš dabartinės prekės kainos ir gale pridėtas euro ženkliukas
    span.append(text); // span priskiriamas tekstas
    div2.append(span); // span'as įkeliamas į papildomą div'ą

    div.append(div2); // papildomas div'as įkeliamas į div'ą
    li.append(div); // div'as įkeliamas į li
    ul.append(li); // li įkeliamas į ul
  }); // pasibaigia ciklas

  const hr1 = document.createElement('hr'); // sukuriamas hr elementas (reikia keletos hr elementų norint juo kelis atvaizduoti)

  let p2 = document.createElement('p'); // sukuriamas p elementas (ne tas pats koks buvo, nes ano dar niekam nepriskyrėm, tai negalime pamiršti)
  p2.classList.add('bendraKaina'); // p suteikiama klasė 'bendraKaina'
  text = document.createTextNode(`Bendra kaina: ${bendraKaina.toFixed(2)}€`); // sukuriamas tekstinis elementas, kuriam suteikiamas tekstas 'Bendra kaina: ' ir bendra viso užsakymo kaina
  p2.append(text); // p suteikiamas tekstas

  const hr2 = document.createElement('hr'); // sukuriamas dar vienas hr elementas (reikia keletos hr elementų norint juo kelis atvaizduoti)

  let h2 = document.createElement('h2'); // sukuriamas h2 elementas
  text = document.createTextNode('Padėkojimas'); // sukuriamas tekstinis elementas su tekstu 'Padėkojimas'
  h2.append(text); // h2 suteikiamas tekstas

  mainDiv.append(p1, h4, h1, hr, ul, hr1, p2, hr2, h2); // į mainDiv'ą sukeliame p1, h4, h1, hr, ul, hr1, p2, hr2, h2 elementus tokia tvarka kaip išvadrinta

  saskaita.innerHTML = ''; // išvalomas buvęs sąskaitos sekcijos laukas, kad nebūtų prikuriama daug sąskaitų
  saskaita.append(mainDiv); // mainDiv'as įkeliamas į sąskaitos sekciją
}

let gautiDabartiniLaika = () => { // gautiDabartiniLaika funkcijos prilyginimas
  // let date = new Date().toISOString();
  // date = date.replace("T", " ");
  // date = date.slice(0, date.indexOf(" ")+1)+
  //         (Number(date.slice(date.indexOf(" ")+1, date.indexOf(" ")+3))+2)+
  //         date.slice(date.indexOf(" ")+3, date.indexOf(" ")+6);
  let date = new Date(); // sukuriamas naujas datos objektas
  let dateString = date.toLocaleString('lt-LT'); // data konvertuojama į lietuvišką formatą
  return dateString; // data (dabartinis laikas) grąžinamas
}

addMoreMygtukoSukurimas(); // iškviečiame funkciją 'addMoreMygtukoSukurimas', kurioje bus sukuriamas mygtukas, kurį paspaudus bus pridedami papildomi selekto laukai
submitMygtukoSukurimas(); // iškviečiame funkciją 'submitMygtukoSukurimas', kurioje bus sukuriamas mygtukas, kurį paspaudus bus pateikiama forma ir pradedamas sąskaitos generavimas
let addMoreDiv; // sukuriamas addMoreDiv kintamasis, kuriam bus prilyginimas addMoreDiv klasę turintis elementas
setTimeout( // uždelsiame šiose ribose esantį kodą, nes bus kreipiamasį į elementą, kuris dar galimai yra kuriamas
  () => { // bevardės funkcijos kvietimas / callback
    addMoreDiv = document.querySelector('.addMoreSelect'); // addMoreDiv kintamąjam prilyginimas addMoreDiv klasę turintis elementas
    patiekaloSelektoSukurimas(0); // iškviečiama 'patiekaloSelektoSukurimas' funkcija, su parametru 0, kad būtų sukuriamas pirmasis selektas su vardais ir ID, kurie bus papildomi skaičiumi '0'
  }, 100 // nurodome kiek laiko (milisekundėmis) uždelsime viduje esantį kodą
); // uždelsimo pabaiga

document // kreipiamasi į dokumentą
  .querySelector('#forma > form') // parenkamas form elementas, kuris yra vaikinis elementas elemento turinčio ID 'forma'
  .addEventListener('submit', e => { // laukiama kada šis elementas bus "submit'inamas" / pateikiamas ir perduosime jo įvykio informacija toliau einančiai funkcijai
    e.preventDefault(); // sustabdome default'ini formos veiksmą (duomenų siuntimą į serverį)

    let uzsakymuMasyvas = []; // sukuriamas masyvas, į kurį kelsime užsakymų objektus
    for(let i = 0; i < e.target.elements.length - 2; i+=2){ // sukamas ciklas per formos viduje esančių elementų ( (selektų+input)*kiekJųBuvo (-2, nes nesuksime ciklo per mygtukus, kurie irgi yra formos viduje) ) kiekį judant per 2 elementus per ciklą
      let [patiekaloId, patiekaloKiekis] = [ // sukuriami kintamieji patiekaloId ir patiekaloKiekis
        e.target.elements[i].value, // destruktūrizavimo būdų priskiriamas patiekalo ID
        e.target.elements[i+1].valueAsNumber // estruktūrizavimo būdų priskiriamas patiekalo kiekis kaip skaičius
      ];
      let pateikiamaPreke = meniu.find(element => element.id === patiekaloId); // surandame duomenyse tokį elementą, kurio ID atitinka mūsų patiekalo ID ir priskiriame jį naujam kintamąjam
      pateikiamaPreke.kiekis = patiekaloKiekis; // papildome naują kintamojo objektą patiekalo kiekiu
      // pateikiamaPreke.kaina = pateikiamaPreke.kiekis*pateikiamaPreke.kaina;
      uzsakymuMasyvas.push(pateikiamaPreke); // į užsakymų masyvą įkeliame naują objekto kintamąjį
    } // ciklo pabaiga

    saskaitosSukurimas(uzsakymuMasyvas); // kviečiame sąskaitos kūrimo funkciją, kuriai paduodame visus užsakymus kaip masyvą
  }); // įvykio pabaiga

document // kreipiamasi į dokumentą
  .querySelector('.addMoreSelect > button') // parenkamas button elementas, kuris yra vaikinis elementas elemento turinčio klasę 'addMoreSelect'
  .addEventListener('click', () => { // laukiama kada šis elementas bus "paspaustas" ir vykdysime toliau einančią funkciją
    let kiek = document.querySelectorAll('.patiekaloSelektas').length; // sukuriame kintamąjį, kuriam prilyginame, dokumente rastų elementų turinčių 'patiekaloSelektas' klasę, kiekį
    patiekaloSelektoSukurimas(kiek); // iškviečiame funkciją, kuri sukurs naują selektą, su parametru, kuris pakeis joje kuriamų elementų name ir ID atributus, taip kad nebūtų kuriami vienodi
  }); // įvykio pabaiga