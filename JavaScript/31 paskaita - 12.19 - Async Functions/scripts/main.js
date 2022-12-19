//                  Async

/*  
  1) async ir await
  2) try catch finally
  3) Promise (resolve, reject)
  4) then catch finally
*/

//  Async Function
/*
  Rašant kodą sinchroniškai kartais prireikia luktelti atsakymų iš prieštai buvusių funkcijų.
  Tam, kad sulauktume atsakymo, reikia uždelsti kodą. Tai galima padaryti su setTimeout();
  Persistengiant su setTimeout'ais ar kitais callback'ais. Sukuriame vadinamąjį "callback Hell". Ko pasekoje nukenčia kodo skaitomumas.
  Tam, kad galėtume rašyti kodą asinchroniškai ir išvengtume "callback Hell" - prieš funkciją/as naudojame prierašą "async", šitaip paversdami funkcijas asinchroniškomis.
  Norėdami nurodyti, kad reikia uždelsti / kažko palaukti - naudojame prierašą await. Await'as gali būti naudojamas tiktais asinchroninių funkcijų viduje.
*/
/*syntax
  async function name(){
    await someOtherF();
    await someMethod();
  }
  let name = async () => {
    await someOtherF();
    await someMethod();
  }
*/

function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1(number) {
  try {
    const x = await resolveAfter2Seconds(number*5);
    console.log(x);
  } catch {
    console.log('Neteisinga funkcija');
  } finally {
    console.log('Baigėsi kodas');
  }

  console.log('hallo');
}

//  try... catch... finally...
/*syntax
  try{code}catch{errorInCode}finally{doWhatever}
*/
/*
  try, catch ir finally naudojami kai norima kontroliuoti kodo error handle'inimą
  try bando vykdyti kodą;
  Jeigu try bloke įvyksta error, tuomet vykdomas catch blokas. Galiausiai vykdomas finally blokas.

  Net jeigu try viduje gausime error, kurį pagaus catch'as. Kodas einantis toliau visviena bus vykdomas.
*/

//  Promise
/*syntax
  Promise((resolve, reject)) => {
    if(good){
      resolve('answer');
    } else { // bad
      reject('error');
    }
  }
*/

const delay = (time) => {
  return new Promise((resolve, reject) => {
    if(typeof(time) !== 'number'){
      reject(new Error('function delay parameter has to be a number'));
      // reject( () => 'function delay parameter has to be a number');
    } else {
      setTimeout(() => resolve('grazinta data'), time);
    }
  });
}

// let promisas = async () => {
//   console.log("-----");
//   await delay(2000);
//   console.log('some data');
// }

// then (then...) catch finally
let promisas = () => {
  console.log("-----");
  delay(2000)
  // console.log(x);
  .then((data0) => {
    console.log(data0);
    return data0+'more data';
  })
  .then((data1) => {
    console.log(data1);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('funkcija baigesi');
  })
}
/*
  Rašant asinchroninį kodą, naudojami Promises.
  Kviečiant Promise'ą, už jo rašomi(chain'inami): .then() .catch() .finally(), kurie vykdomi eilės tvarka sulaukdami duomenų vieni iš kitų (kalbant apie then'us).
*/