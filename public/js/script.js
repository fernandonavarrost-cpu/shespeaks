/* Copyright (c) 2026 Fernando Navarro. Licenciado sob a MIT License. */
/* ===== SHE SPEAKS - INTERAÇÕES ===== */

/* Abre e fecha o menu mobile ao clicar no ícone hambúrguer */
var menuToggle = document.querySelector('.menu-toggle');
var navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', function () {
  var isActive = navMenu.classList.toggle('active');
  this.textContent = isActive ? '\u2715' : '\u2630';
  this.setAttribute('aria-expanded', isActive);
});

/* Fecha o menu mobile e restaura o ícone ao clicar em um link de navegação */
navMenu.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navMenu.classList.remove('active');
    menuToggle.textContent = '\u2630';
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});