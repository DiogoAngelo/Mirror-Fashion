document.querySelector('.botao-show').onclick = function() {
    document.documentElement.classList.add('mostrar-menu')
};
document.querySelector('.botao-hide').onclick = function() {
    document.documentElement.classList.remove('mostrar-menu')
};