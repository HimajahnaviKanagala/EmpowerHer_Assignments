function MessageCard(props){
    return (
        <div>
            <p>Title:{props.title}</p>
            <p>Message:{props.message}</p>
        </div>

    )
}

export default MessageCard;