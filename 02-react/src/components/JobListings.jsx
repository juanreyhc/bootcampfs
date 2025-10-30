import JobCard from './JobCard.jsx';

export function JobListings({ jobs }) {
  return (
        <>
          <h2 style={{ textAlign: "center" }}>Resultados de búsqueda</h2>

          <div className="jobs-listings">
            {jobs.map((job) => (
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