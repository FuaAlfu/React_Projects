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

const Book = ({title,author}) => {
    return(
        <div>
            <p>{title}</p>
            <p>{author}</p>    
        </div>
    )
}

const specialBook = {
    title: "xx:xx",
    author: "john doe",
};

const anotherSpecialBook = {
    title: "xx:xx",
    author: "boe doe",
};

module.exports = {
    specialBook: specialBook,
    anotherSpecialBook: anotherSpecialBook,
}

export { Note, Book};