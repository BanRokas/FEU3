import H, { helloWorld, notMorningPerson as noMorning } from './Heading.js';
import T from './Table.js';

//              KOMPONENTAI

//      UL/OL 
{
  class List{
    constructor(props){
      this.props = props;
      return this.render();
    }

    render = () => {
      this.htmlElement = document.createElement(this.props.type);

      Object.keys(this.props.attributes).forEach(attribute => {
        this.htmlElement.setAttribute(attribute, this.props.attributes[attribute]);
      });

      this.props.listItems.forEach(listItem => {
        this.li = document.createElement('li');
        this.liTextNode = document.createTextNode(listItem.text);
        this.li.append(this.liTextNode);
        Object.keys(listItem.attributes).forEach(attribute => {
          this.li.setAttribute(attribute, listItem.attributes[attribute]);
        });
        this.htmlElement.append(this.li);
      });

      return this.htmlElement;
    }
  }

  let list = new List({
    type: 'ul',
    attributes: {
      class: 'lightThemeList',
      id: 'superUnorderedList'
    },
    listItems: [
      {
        text: 'list item tekstas1',
        attributes: {
          class: 'listItem',
          style: 'color: yellow'
        }
      },{
        text: 'list item tekstas2',
        attributes: {
          class: 'listItem',
          style: 'color: green'
        }
      },{
        text: 'list item tekstas3',
        attributes: {
          class: 'listItem',
          style: 'color: red'
        }
      }
    ]
  });

  document.querySelector("body").append(list);
}
//      SELECT

//      TABLE
{
  let table = new T({
    tableAttributes:{
      class: "kaledos sventes"
    },
    tableData : [{
      vardas: "Rokas",
      pavarde: "Banaitis",
      amzius: 26
    }, {
      vardas: "Rokas2",
      pavarde: "Banaitis2",
      amzius: 27
    }, {
      vardas: "Petras",
      pavarde: "Petrauskas",
      amzius: 50
    }]
  });

  document.querySelector('body').append(table);
}

//              MODULIAI
/*
  Kitų JS failų importavimas ir naudojimas

    import ka from 'isKur'; - faile kuriame norime naudoti importus (main.js)
    type="module" - nusirodyti atributą "type" su nustatymu "module" JS failo prijungime HTML'e.
    export default something(){}; 'isKur' faile reikia nurodyti ką jis eksportuoja.

  Galima rašyti tiek export default, tiek export;
    export default - numatytasis eksportas, kurį priimsi rašydamas - import anyNameIWant from 'exportFile.js'. Vardas, kurį nurodai neprivalo sutapti su export default vardu esančiu exportFile.js. Visviena bus eksportuojamas vienas vienintelis elementas, kuris turi default prierašą.
    export - paprastas eksporas, kurį'iuos priimsi rašydamas - import { exportedName, exportedName2 } from 'exportFile.js'. Priimsi būtent tuos elementus, kurių vardus parašei ir kurie yra paprasti export'ai. Priimti paprastus eksportus galima kokiais tik nori pavadinimais naudojant "as" prierašą: import { exportedName as pirmas, exportedName2 as antras } from 'exportFile.js'.
*/
let antraste = new H({
  dydis:'5',
  tekstas:'Labas rytas',
  atributai: {
    style: 'font-size: 50px'
  }
});
// console.log(antraste);

helloWorld();
noMorning();

//              Duomenų saugojimas vartotojo dalyje
//  cookie
document.cookie = `vardas=kazkoks; expires=${new Date('2022 12 17')}`;
document.cookie = `kitas=kazkoks; expires=${new Date('2022 12 17')}`;
document.cookie = `vardas=kitoks; expires=${new Date('2022 12 17')}`;

// session storage
document.querySelector('body').addEventListener('click', () => {
  sessionStorage.setItem('vardas', 'Rokas');
  sessionStorage.setItem('pavarde', 'Banaitis');
  sessionStorage.setItem('lvlOfTired', '30');
});
// local storage
document.querySelector('body').addEventListener('click', () => {
  localStorage.setItem('vardas', 'Rokas');
  localStorage.setItem('pavarde', 'Banaitis');
  localStorage.setItem('pomegiai', ['game','sport','tv']);
  let data = {
    planeta: "Žemė",
    zemynas: "Europa",
    salis: "Lietuva"
  }
  console.log(data);
  console.log(JSON.stringify(data));

  localStorage.setItem('gyvenamojiVieta', JSON.stringify(data));


  // localStorage.clear(); // išvalo visą storage
  // console.log(localStorage.key(0));
  // console.log(localStorage.getItem(localStorage.key(0)));
  // localStorage.removeItem(localStorage.key(0));
});

// JSON.stringify(object) -> paverčia objektą į string'ą
// JSON.parse(stringifiedObject) -> paverčia string'ą į objektą