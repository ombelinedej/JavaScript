
let answer = "";
answer = prompt("De quel nombre veux-tu calculer la factorielle ?");



function factorialize(num) {
  let result = num;


/*--cas ou answer = 0 ou answer = 1 -------*/


  if (num === 0 || num === 1) 
    return 1; 

/*--boucle while pour multiplier à chaque fois par le num - 1-------*/
  while (num > 1) { 
    num--;    /*.   = num - 1.     */
    result = result * num;
  }
  return result;
}



console.log( "Le résultat est" + " " + ":" + " " + factorialize(answer));