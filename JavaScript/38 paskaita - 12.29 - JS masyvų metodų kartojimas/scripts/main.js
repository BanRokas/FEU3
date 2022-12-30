// butai:

  // 27 butai laiptinėje
  // 3 butai aukšte
  // 9 aukštai
  // laiptinių iki 19 imtinai

  const butoNumeris = 55;
  const butoAukstas = butoNumeris%27===0 ? 9 : Math.ceil((butoNumeris % 27)/3);
  //                  146-27-27-27-27... = 12-3-3-3
  console.log(butoAukstas);

// žodžiai:
  const data = `Labas rytas lietuva! Keletas sakinių.
Gero vakaro koderiai, pailsėkite, pamiegokite.
Jis nebeprisikiškiakopūsteliavo.
Pavyzdys su - skyrybos ženklu.`;
  const eilutes = data.split('\n');
  console.log(eilutes);
  const zodziaiEilutese = [];
  eilutes.forEach(eilute => {
    zodziaiEilutese.push(eilute.split(' '));
  });
  console.log(zodziaiEilutese);

  const ilgiausiZodziai = new Array(100).fill(0);
  zodziaiEilutese.forEach(eilute => {
    eilute.forEach((zodis, i) => {
      ilgiausiZodziai[i] < zodis.length ? ilgiausiZodziai[i] = zodis.length : null;
    });
  });
  console.log(ilgiausiZodziai);