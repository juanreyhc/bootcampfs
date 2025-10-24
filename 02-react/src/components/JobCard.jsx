///Crear un componente Job Card que lo importe y use adentro de App.jsx
import React from 'react';

function JobCard({ job }) {
  return (
    <article className="job-listing-card" data-modalidad={job.data.modalidad} data-technology={job.data.technology} data-nivel={job.data.nivel}>
      <div>
        <h3>{job.titulo}</h3>
        <p>{job.descripcion}</p>
      </div>
    </article>
  );
}

export default JobCard;



