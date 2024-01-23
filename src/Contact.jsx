export default function Contact({ data:{name, number} }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{number}</p>
        </div>
    )
}