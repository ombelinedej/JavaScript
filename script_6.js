

/*---------CCGUCGUUGCGCUACAGC-----------------------------*/



var DNA = "CCGUCGUUGCGCUACAGC";
console.log(DNA.match(/.{1,3}/g) );


codon = DNA.match(/.{1,3}/g);


 for(let index in codon) {


 	if(codon[index] === "CCU" || codon[index] === "CCC" || codon[index] === "CCA" || codon[index] === "CCG")
  console.log("Proline")

 	if(codon[index] === "UCU" || codon[index] === "UCC" || codon[index] === "UCA" || codon[index] === "UCG" || codon[index] === "AGU" || codon[index] === "AGC")
  console.log("Sérine")

 	if(codon[index] === "UUG" || codon[index] === "UUA")
  console.log("Leucine")

 	if(codon[index] === "UAC" || codon[index] === "UAU" )
  console.log("Tyrosine")

 	if(codon[index] === "UUU" || codon[index] === "UUC")
  console.log("Phénylalanine")

 	if(codon[index] === "CGU" || codon[index] === "CGC" || codon[index] === "CGA" || codon[index] === "CGG" || codon[index] === "AGA" || codon[index] === "AGG"  )
  console.log("Arginine")



}


/*---------CCUCGCCGGUACUUCUCG-----------------------------*/




var DNA = "CCUCGCCGGUACUUCUCG";
console.log(DNA.match(/.{1,3}/g) );


codon = DNA.match(/.{1,3}/g);


 for(let index in codon) {

 	if(codon[index] === "CCU" || codon[index] === "CCC" || codon[index] === "CCA" || codon[index] === "CCG")
  console.log("Proline")

 	if(codon[index] === "UCU" || codon[index] === "UCC" || codon[index] === "UCA" || codon[index] === "UCG" || codon[index] === "AGU" || codon[index] === "AGC")
  console.log("Sérine")

 	if(codon[index] === "UUG" || codon[index] === "UUA")
  console.log("Leucine")

 	if(codon[index] === "UAC" || codon[index] === "UAU" )
  console.log("Tyrosine")

 	if(codon[index] === "UUU" || codon[index] === "UUC")
  console.log("Phénylalanine")

 	if(codon[index] === "CGU" || codon[index] === "CGC" || codon[index] === "CGA" || codon[index] === "CGG" || codon[index] === "AGA" || codon[index] === "AGG"  )
  console.log("Arginine")


}
