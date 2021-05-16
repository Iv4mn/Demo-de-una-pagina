document.getElementById('boton').addEventListener('click', modo);
document.addEventListener('DOMContentLoaded', cambiar)

function modo() {
    if (localStorage.getItem('dark') === null) {
        localStorage.setItem('dark', true);
        cambiar();
    } else {
        localStorage.removeItem('dark');
        cambiar();
    }
}

function cambiar() {
    if ('dark' in localStorage) {
        var modooscuro = document.getElementsByClassName('body');

        for (var i = 0; i < modooscuro.length; i++) {
            modooscuro[i].classList.toggle('black');
        }

        var modooscurocontacto = document.getElementsByClassName('contacto');

        for (var i = 0; i < modooscurocontacto.length; i++) {
            modooscurocontacto[i].classList.toggle('fixed');
        }
    } else {
        var modoscuro = document.getElementsByClassName('body');

        for (var i = 0; i < modooscuro.length; i++) {
            modooscuro[i].classList.remove('black');
        }

        var modooscurocontacto = document.getElementsByClassName('contacto');

        for (var i = 0; i < modooscurocontacto.length; i++) {
            modooscurocontacto[i].classList.remove('fixed');
        }
    }
}