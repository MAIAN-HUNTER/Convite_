const mostrar = document.getElementById('myBtn');

const mostre = document.querySelector('.convite');

mostrar.addEventListener("onclick", showInvite);

function showInvite(){
    mostre.classList.toggle("mostrar")
};

document.getElementById("close").onclick = function(){
    document.querySelector(".convite").classList.remove("mostrar");
  }

  ola