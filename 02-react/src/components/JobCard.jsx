///Crear un componente Job Card que lo importe y use adentro de App.jsx
import { useState } from 'react';

 function JobCard({ data, titulo, empresa, ubicacion, descripcion }) {
    //destructuring con useState hook 
    //[valor del estado, forma de actualizar el estado]
    const [isApplied, setIsApplied] = useState(false)//devulve un array de dos elementos

    function handleClick() {
        setIsApplied(!isApplied)
      }

    const text = isApplied ? 'Aplicado' : 'Aplicar'
    const buttonClass = isApplied ? 'is-applied' : ''
    const isAppliedText = isApplied ? 'Sí' : 'No'

    return (
        <article 
          className="job-listing-card"
          data-modalidad={data?.modalidad}
          data-nivel={data?.nivel}
          data-technology={data?.technology}
        >
          <div>
            <h3>{titulo}</h3>
            <small>{empresa} - {ubicacion} - ¿He aplicado? {isAppliedText}</small>
            <p>{descripcion}</p>
          </div>

          <button
            className={`button-apply-job ${buttonClass}`}
            onClick={handleClick}
          >
            {text}
          </button>
        </article>
    );
}

export default JobCard;