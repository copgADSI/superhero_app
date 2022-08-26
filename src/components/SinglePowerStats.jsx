import './Styles.css';

const SinglePowerStats = ({ index_powerstat, powerstat_item }) => {
    return (
        <div className="bar">
            <div className="info"> {index_powerstat} </div>
            <div className="progress-line">
                <span style={{ width: `${powerstat_item}%`, color:'#fff'}}>
                 { powerstat_item }
                </span>
            </div>
        </div>
    );
}

export default SinglePowerStats