let answer = "";
answer = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");



function repeatStringNumTimes(string, times) {
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times++;
  }
  return repeatedString;
}

for(let count = 0; count <=answer; count++){

	console.log(repeatStringNumTimes("#" , count));

}