(function () {
    let navbar = document.querySelector('#navbar');
    let hamburger = document.querySelector('#hamburger');
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('open');
    });
})()

const proyecto1 = document.getElementById("proyecto1");
progressContainer.addEventListener("click", setProgress)



function abrirNuevoTab(url) {
        // Abrir nuevo tab
        var win = window.open(url, '_blank');
        // Cambiar el foco al nuevo tab (punto opcional)
        win.focus();
      }
      $('#proyecto1').click(function(){
        abrirNuevoTab('https://00tino.github.io/mp3Player/')
      })

