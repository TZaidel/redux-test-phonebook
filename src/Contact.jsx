export default function Contact({ name, number, onDelete} ) {
    return (
        <li >
            <h2>{name}</h2>
            <p>{number}</p>
            <button onClick={onDelete}>Delete</button> 
        </li>  
    )
}