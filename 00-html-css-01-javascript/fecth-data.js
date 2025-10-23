

const container = document.querySelector('.jobs-listings');
//Asynchronous JavaScript - Fetch API
console.log('Antes de fetch')
fetch("./data.json")
    .then((response) => {
      return response.json();
    }).then((jobs) => {
      console.log('Dentro del fetch');

      jobs.forEach(job => {
       const article = document.createElement('article');
       article.className = 'job-listing-card';

       article.dataset.modalidad = job.data.modalidad;
       article.dataset.technology = job.data.technology; 
       article.dataset.nivel = job.data.nivel;

       //`
       // Template strings multilinea
       // Evaluar valores dentro de la cadena de texto ${}
       //`

       article.innerHTML = `
          <div>
            <h3>${job.titulo}</h3>
            <small>${job.empresa} | ${job.ubicacion}</small>
            <p>${job.descripcion}</p>
          </div>
          <button class="button-apply-job">Aplicar</button>
       `;

       container.appendChild(article);

      });


      console.log(jobs);
    });
console.log('Después de fetch')




//has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
//fetch('https://midu.dev')
//    .then((response) => { 
//      return response.text();
//    }).then((text) => {
//      console.log(text);
//    });
//    
//fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//    .then((response) => { 
//      return response.text();
//    }).then((text) => {
//      console.log(text);
//    });
//    
//fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//    .then((response) => { 
//      return response.json();
//    }).then((json) => {
//      console.log(json);
//    });
//