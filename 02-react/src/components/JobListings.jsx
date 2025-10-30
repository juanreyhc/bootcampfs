import JobCard from './JobCard.jsx';

import data from '../data.json';
console.log(data);

function JobListings() {
  return (
        <>
          <h2 style={{ textAlign: "center" }}>Resultados de búsqueda</h2>

          <div className="jobs-listings">
            {data.map((job) => (
              <JobCard
                key={job.id}
                titulo={job.titulo}
                empresa={job.empresa}
                ubicacion={job.ubicacion}
                descripcion={job.descripcion}
                data={job.data}
              />
            ))}
          </div>
        </>
  )
}

export default JobListings;