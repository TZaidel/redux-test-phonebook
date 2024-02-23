import Contact from '../Contact/Contact.jsx';
import { useSelector } from 'react-redux';

import css from './ContactList.module.css';

export default function ContactList() {
  const users = useSelector(state => state.users.users);
  const name = useSelector(state => state.name.name);
  const visibleUsers = users.filter(user =>
    user.username.toLowerCase().includes(name.toLowerCase())
  );
  console.log(users);

  return (
    <ul className={css.contactList}>
      {visibleUsers.map(({ id, username, number }) => (
        <Contact id={id} name={username} key={id} number={number} />
      ))}
    </ul>
  );
}
