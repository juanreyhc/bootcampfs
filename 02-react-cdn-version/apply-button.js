

const jobsListingSection = document.querySelector('.jobs-listings')

jobsListingSection.addEventListener('click', function(event) {
  const element = event.target

  if (element.classList.contains('button-apply-job')) {
    element.textContent = '¡Aplicado!'
    element.classList.add('is-applied')
    element.disabled = true
  }
})


// recupera solo el primer boton que encuentre
// const boton = document.querySelector('.button-apply-job')
// console.log(boton) // null si no lo encuentra

//otra forma de añadir eventos click a elementos
//recupera solo el primer boton que encuentre

// if (boton !== null) {
//   boton.addEventListener('click', function() {
//     boton.textContent = '¡Aplicado!'
//     boton.classList.add('is-applied')
//     boton.disabled = true
//   })
// }

// const botones = document.querySelectorAll('.button-apply-job')
// // devuelve un NodeList (array-like) con todos los botones que encuentre
// // o una lista vacia [] si no encuentra ninguno

// botones.forEach(boton => {
//   boton.addEventListener('click', function() {
//     boton.textContent = '¡Aplicado!'
//     boton.classList.add('is-applied')
//     boton.disabled = true
//   })
// })




//
//const searchInput = document.querySelector('#empleos-search-input')
//
//searchInput.addEventListener('input', function() {
//  console.log(searchInput.value)
//})
//
//searchInput.addEventListener('blur', function() {
//  console.log('Se dispara cuando el campo pierde el foco')
//})
//
//
//
//
//const searchForm = document.querySelector('#empleos-search-form')
//
//searchForm.addEventListener('submit', function(event) {
//  event.preventDefault() // evita que se recargue la pagina
//
//  console.log('submit')
//})
//
//
//
//document.addEventListener('keydown', function(event) {
//  console.log('Tecla presionada', event.key)
//  console.log('Esta pulsada la tecla Shift', event.shiftKey)
//  console.log('Esta pulsada la tecla Ctrol', event.ctrlKey)
//})
//
//