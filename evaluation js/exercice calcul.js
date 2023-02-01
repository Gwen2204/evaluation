alert ("exercice 1")

var j=0;
var m=0;
var v=0;
var personnes;
do {
  personnes = window.prompt("Entrez votre age");
    if ( personnes <20) {
    var j = 0;
    j++;

    console.log(personnes);
}
    if ((personnes >=20 && personnes <= 40 ))
    {
      m = 0;
      m = +1;
      console.log(m)
    } 
      else if (personnes >=40) 
      {
      v = 0;
      v = +1;
      console.log(v);
    }
      else if (personnes <=100){
        c=0;
        c=+1;
      console.log(c)
      }

}
    while(personnes < 100);
 
    alert("Il y a " + "" + j + "" + " moins de 20 ans\n " + "Il y a " + "" + m + "" + " entre 20 et 40 ans\n " + " Il y a " + "" + v + "" +" plus de 40 ans\n " + "Il y a" + "" + c + " centenaire ");
