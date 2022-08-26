import './Styles.css';

const Apearance = ({ powerstat_index, powerstat_value }) => {
  return (
    <div className="bar">
      {powerstat_index} : {powerstat_value}
    </div>
  );
}

export default Apearance