let enviar = document.getElementById('enviar');
let nombre = document.getElementById('name');
let email = document.getElementById('email');
let comentario = document.getElementById('comentario');
let mostrar = document.getElementById('mostrar-contenido');
let borrar = document.getElementById('borrar');

borrar.addEventListener('click', borrar);
enviar.addEventListener('click', guardar);

let users = [];
console.log(users);

function guardar(e) {
  e.preventDefault();
  let usuario = {
    nombre: nombre.value,
    email: email.value,
    comentario: comentario.value,
  };
  users.push(usuario);
  localStorage.setItem('users', JSON.stringify(users));
}

