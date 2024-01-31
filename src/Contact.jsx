export default function Contact({ data:{id, name, number} }) {
    return (
        <div id={id}>
            <h2>{name}</h2>
            <p>{number}</p>
            <button>Delete</button>
        </div>
    )
}