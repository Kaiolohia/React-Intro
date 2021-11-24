const Person = props => {
    return (
        <div>
            <p>Learn some information about this Person</p>
            <h3>{props.name.slice(0,6)} {props.age >= 18 ? "please go vote!" : "you must be 18"}</h3>
            <p>Hobbies: </p>
            <ul>
                {props.hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
        </div>
    )
}