const Note = (props) => {
    return(
        <div>
             console.log(props);
            {/*access the props object*/}
            <p>{props.title}</p>
            <p>{props.number}</p>    
        </div>
    )
}

export default Note;