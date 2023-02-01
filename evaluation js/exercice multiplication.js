function Multiplication ()
  {
    var nbr = parseInt(window.prompt("Entrer un nombre"))
    for(i=1;i<=10;i++)
    {
      var egal = nbr +"*"+i + "=" + nbr*i +"<br>";
      document.write(egal) 
    }
  }
Multiplication()