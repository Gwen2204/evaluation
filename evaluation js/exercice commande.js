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