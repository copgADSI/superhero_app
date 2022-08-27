import './Styles.css';

/**
 * Componente encargado  de mostar los detalles de la 
 * apariencia del personaje
 */
const Apearance = ({ powerstat_index, powerstat_value }) => {
  return (
    <div className="bar">
      {powerstat_index} : {powerstat_value}
    </div>
  );
}

export default Apearance