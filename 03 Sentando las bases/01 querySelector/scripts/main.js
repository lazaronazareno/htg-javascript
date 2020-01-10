console.info('Cuando veas éste mensaje en consola, ya habrás terminado ésta parte del ejercicio. Borra ésta línea cuando ya la hayas visto alguna vez en la consola al acceder a ésta página.')
var parrafos = document.querySelectorAll('.comment--text');
parrafos[0].style.color="red";
parrafos[0].style.backgroundColor="black";
parrafos[0].style.fontSize="150%";

var nuevoestilo = document.querySelectorAll('hr');
for ( i=0;i<nuevoestilo.length;i++){
    nuevoestilo[i].classList.add('estilonuevo');
}

var caracteres =document.querySelectorAll('.comment--text');
  caracteres[2].classList.add('nomostrar');

  var comentarios =document.querySelectorAll('.comment--text'); 
  for (i=0;comentarios.length;i++){
    if (comentarios[i].textContent.length<100){
        comentarios[i].classList.add('nomostrar');
    }
  }