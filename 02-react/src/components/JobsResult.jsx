
import JobCard from './JobCard.jsx';
import Pagination from './Pagination.jsx';

import data from '../data.json';
console.log(data);

function JobsResult() {
  return (
        <section>
          <h2 style={{ textAlign: "center" }}>Resultados de búsqueda</h2>

          <div className="jobs-listings">
            <JobCard
              titulo="Desarrollador Frontend"
              empresa="Tech Solutions Inc."
              ubicacion="Remoto"
              descripcion="Únete a nuestro equipo para crear interfaces de usuario increíbles."
              data={{ modalidad: "remoto", nivel: "junior", technology: "react" }}
            />
          </div>

          <Pagination />

        </section>
  )
}

export default JobsResult;