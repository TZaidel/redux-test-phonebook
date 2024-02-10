import css from './Contact.module.css'

export default function Contact({ id, name, number, onDelete }) {
    return (
        <li id={id} className={css.contactItem}>
            <div className={css.contactInfoWrap}>
                <h2>{name}</h2>
                <p>{number}</p>
            </div>
            <button onClick={()=>onDelete(id)}>Delete</button> 
        </li>  
    )
}