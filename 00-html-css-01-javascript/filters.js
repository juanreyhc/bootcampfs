


const filter = document.querySelector('#filter-location')
const mesaje = document.querySelector('#filter-selected-value')


//evento de cambio de filtro
filter.addEventListener('change', function () {
  const jobs = document.querySelectorAll('.job-listing-card')  //todo los elementos con esa clase

  console.log(filter.value)

  const selectedValue = filter.value

  if(selectedValue) {
    mesaje.textContent = `Has seleccionado: ${selectedValue}`
  }
  else{
    mesaje.textContent = ''
  }

  jobs.forEach( job => {
    //const modalidad = job.dataset.modalidad
    const modalidad = job.getAttribute('data-modalidad')

    const isShow = (selectedValue === modalidad || selectedValue === '')
    job.classList.toggle('is-hidden', !isShow)

    //if (selectedValue === modalidad || selectedValue === '') {
    //  job.style.display = 'flex'  //el valor original
    //} else {
    //  job.style.display = 'none'
    //}

  })

  



})