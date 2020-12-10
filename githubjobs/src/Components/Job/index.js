// import './style.css';
function Job(props) {
    return (
        <div className="job">
            <p>{props.company} - {props.type}</p>
            <h3>{props.title}</h3>
            <p>{props.location}</p>
        </div>
    )
}
export default Job