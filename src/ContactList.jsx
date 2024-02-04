import Contact from "./Contact.jsx"

export default function ContactList({ data, onDelete}) {
    console.log(data)
    return (
        <ul>
            {data.map(({id, username, number})  => (
                <Contact name={username} key={id} number={number} onDelete={()=> onDelete(id)} />
                )
            )}
        </ul>
    )   
}

