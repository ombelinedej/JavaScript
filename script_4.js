

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


/*----------------------------------------------------------------------*/
console.log("Voici le prénom des entrepreneurs qui sont nés dans les années 70 ");
console.log(entrepreneurs[8].first, entrepreneurs[9].first, entrepreneurs[11].first, entrepreneurs[12].first, entrepreneurs[15].first, entrepreneurs[16].first)


console.log("");


/*----------------------------------------------------------------------*/

console.log("Voici le prénom et le nom des entrepreneurs");

console.log ( (entrepreneurs[0].first) + " " + (entrepreneurs[0].last) );
console.log ( (entrepreneurs[1].first) + " " + (entrepreneurs[1].last) );
console.log ( (entrepreneurs[2].first) + " " + (entrepreneurs[2].last) );
console.log ( (entrepreneurs[3].first) + " " + (entrepreneurs[3].last) );
console.log ( (entrepreneurs[4].first) + " " + (entrepreneurs[4].last) );
console.log ( (entrepreneurs[5].first) + " " + (entrepreneurs[5].last) );
console.log ( (entrepreneurs[6].first) + " " + (entrepreneurs[6].last) );
console.log ( (entrepreneurs[7].first) + " " + (entrepreneurs[7].last) );
console.log ( (entrepreneurs[8].first) + " " + (entrepreneurs[8].last) );
console.log ( (entrepreneurs[9].first) + " " + (entrepreneurs[9].last) );
console.log ( (entrepreneurs[10].first) + " " + (entrepreneurs[10].last) );
console.log ( (entrepreneurs[11].first) + " " + (entrepreneurs[11].last) );
console.log ( (entrepreneurs[12].first) + " " + (entrepreneurs[12].last) );
console.log ( (entrepreneurs[13].first) + " " + (entrepreneurs[13].last) );
console.log ( (entrepreneurs[14].first) + " " + (entrepreneurs[14].last) );
console.log ( (entrepreneurs[15].first) + " " + (entrepreneurs[15].last) );
console.log ( (entrepreneurs[16].first) + " " + (entrepreneurs[16].last) );
console.log ( (entrepreneurs[17].first) + " " + (entrepreneurs[17].last) );

console.log("");


/*----------------------------------------------------------------------*/

console.log("Quel âge aurait chaque inventeur aujourd'hui ? ");


 for(let index in entrepreneurs) {
let a = 2020

console.log ( (entrepreneurs[index].first) + " " + (entrepreneurs[index].last) + " " + ":" + " " +  (a -= entrepreneurs[index].year) + " " + "ans" ) ;

}

console.log("");

/*----------------------------------------------------------------------*/

console.log("Les entrepreneurs par ordre alphabétique du nom de famille")

console.log(entrepreneurs.sort(function(a,b){return ('' + a.last).localeCompare(b.last)}))



