
import JobCard from './JobCard.jsx';
import Pagination from './Pagination.jsx';

import data from '../data.json';
console.log(data);

function JobsResult() {
  return (
        <section>
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

          <Pagination />

        </section>
  )
}

export default JobsResult;