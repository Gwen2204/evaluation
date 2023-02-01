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
    while (personnes < 100);
 
    window.alert("Il y a " + "" + j + "" + " moins de 20 ans\n " + "Il y a " + "" + m + "" + " entre 20 et 40 ans\n " + " Il y a " + "" + v + "" +" plus de 40 ans\n " + "Il y a" + "" + c + " centenaire ");


alert("Exercice 2");

var A = parseInt(prompt("Entrez un nombre",""));


function TableMultiplication(X) {
var i = 0;
var mul = 0;
var txt = "Table de "+A+" :";

while (i < 10)
{
   i++;
   var mul = i*X;
   var lgn = i+" x "+X+" = "+mul;
   var txt = txt+"\n"+lgn;

}

return txt;

}

alert(TableMultiplication(A));



alert("Exercice 3");

var fin = false;

while (fin==false){

var A = prompt("Choisir le prénom","");

var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var lg1 = tab.length;

const result = tab.filter(tab => tab !== A);
var lg2 = result.length;

if(lg1>lg2){
    result.push('');
    alert("Bravo vous avez trouvé un prénom" + result);
    var fin = true
}
else{
    alert("Erreur : pas trouvé \n");
    var fin = false
}
}






alert("Exercice 4");

var PU = prompt("Prix unitaire");
var QTECOM = prompt("Quantité");
var TOT = (PU*QTECOM);
var REM = 0;

if(TOT>=100 && TOT <=200){
    var REM = 0.05;
}else if(TOT>200){
    var REM = 0.1;
}

var TOTREM = TOT*(1-REM);

var PORT = 0.02*TOTREM;

if(TOTREM>500){
    var PORT = 0;
}

if(PORT<6 && TOTREM<=500){
    var PORT = 6;
}

var PAP = TOTREM + PORT;

alert(PAP);