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