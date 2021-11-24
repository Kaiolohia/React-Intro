const Tweet = props => (
    <div>
        <p><b>@{props.username}</b> {props.name}</p>
        <p>{props.content}</p>
        <p><i>{props.date}</i></p>
    </div>
)