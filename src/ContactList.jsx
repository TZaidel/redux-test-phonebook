import Contact from "./Contact.jsx"
import css from './ContactList.module.css'

export default function ContactList({ data, onDelete}) {
  return (
    <ul className={css.contactList}>
      {data.map(({ id, username, number }) => (
        <Contact id={id} name={username} key={id} number={number} onDelete={onDelete} />
      ))}
    </ul>
  )   
}

