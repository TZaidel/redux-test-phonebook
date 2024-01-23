import Contact from "./Contact.jsx"

export default function ContactList({ data}) {
    console.log(data)
    return (
        <ul>
            {data.map(user => {
                return (
                <li key={user.id} >
                  <Contact data={user} />
                </li>  
                )
            })}
        </ul>

    )
}

// name= {user.name} number={user.number}