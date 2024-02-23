import { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import ContactList from '../ContactList/ContactList';

import css from './App.module.css';

// const getFromStorage = () => {
//   const savedUsers = window.localStorage.getItem('user-list');
//   return savedUsers !== null ? JSON.parse(savedUsers) : data;
// };

function App() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;

//!-----------------------------------------------
// import { useState, useEffect } from 'react';
// import ContactForm from '../ContactForm/ContactForm.jsx';
// import SearchBox from '../SearchBox.jsx';
// import ContactList from '../ContactList/ContactList';
// import { useSelector } from 'react-redux';

// import css from './App.module.css';

// // const data = [
// //   { id: 'id-1', username: 'Rosie Simpson', number: '459-12-56' },
// //   { id: 'id-2', username: 'Hermione Kline', number: '443-89-12' },
// //   { id: 'id-3', username: 'Eden Clements', number: '645-17-79' },
// //   { id: 'id-4', username: 'Annie Copeland', number: '227-91-26' },
// // ];

// // const getFromStorage = () => {
// //   const savedUsers = window.localStorage.getItem('user-list');
// //   return savedUsers !== null ? JSON.parse(savedUsers) : data;
// // };

// function App() {

//   // const [users, setUsers] = useState(getFromStorage)
//   const [inputValue, setInputValue] = useState('');

//   // useEffect(() => {
//   //   window.localStorage.setItem('user-list', JSON.stringify(users));
//   // }, [users]);

//   const onAdd = newUser => {
//     setUsers(prevUsers => [...prevUsers, newUser]);
//   };

//   const handleChange = e => {
//     setInputValue(e.target.value);
//   };

//   const handleDelete = id => {
//     setUsers(prevUsers => prevUsers.filter(prev => prev.id !== id));
//   };

//   const visibleUsers = users.filter(user =>
//     user.username.toLowerCase().includes(inputValue.toLowerCase())
//   );

//   return (
//     <div className={css.container}>
//       <h1 className={css.title}>Phonebook</h1>
//       <ContactForm onAdd={onAdd} />
//       <SearchBox onChange={handleChange} value={inputValue} />
//       <ContactList data={visibleUsers} onDelete={handleDelete} />
//     </div>
//   );
// }

// export default App;
