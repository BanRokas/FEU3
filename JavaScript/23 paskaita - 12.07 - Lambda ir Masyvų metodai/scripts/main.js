//        lambda/arrow function
// lambda syntax
/*
  parametras => veiksmas

  (parametras1, parametras2) => veiksmas
  
  (parametras1, parametras2) => { return veiksmas }
  
  (parametras1, parametras2) => {
    veiksmas1
    veiksmas2
    return ats;
  }

  let pavadinimas = (parametras1, parametras2) => { return veiksmas }
*/
// Lambda yra standartizuotas funkcijų užrašymo būdas nuo ECMA6 versijos (2015 metų). Jis yra trumpesnis, patogesnis, greitesnis.

// senuoju
function daugyba0(par1, par2){
  return par1*par2;
}
// naujuoju (lambda/arrow)
let daugyba1 = (par1, par2) => par1*par2;