import { useState } from 'react'
import ContactForm from "./ContactForm.jsx"
import SearchBox from "./SearchBox.jsx"
import ContactList from "./ContactList.jsx"


const data = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

function App() {
  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(evt.target.elements.userName.value)
    evt.target.reset()
  }


  const [value, setValue] = useState('apple')

  const [inputValue, setInputValue]=useState('')
  
  const [users, setUsers] = useState([{
    name: 'Andy',
    id: 1,
    },
    {
      name: 'Rock',
      id: 2
    },
    {
      name: 'Anna',
      id: 3
    }])
  
  const deleteUser = userId => {
    setUsers((prevUser) => {
      return prevUser.filter(user=> user.id !==userId)
    })
  }
  
  const visibleUsers = users.filter(user => user.name.toLowerCase().includes(inputValue.toLowerCase()))
  
  const onAdd = (newUser) => {
    console.log(newUser)
    setUsers(prev => {
      return [...prev, {name: newUser, id: Date.now()}]

    })
}

  const handleFormSubmit = (evt) => {
    evt.preventDefault()
    onAdd(evt.target.elements.username.value)
    evt.target.reset()
    return console.log(evt.target.elements.username.value)
  }

  return (
    <div>

      <input value={inputValue} onChange={(evt) => setInputValue(evt.target.value)} />

      <form onSubmit={handleFormSubmit}> 
        <input name='username'/>
        <button type='submit'>Add user</button>
      </form>
      
      
      
      <ul>
        {visibleUsers.map(user => {
          return(
            <li key={user.id}><p>{user.name}</p>
            <button onClick={()=>deleteUser(user.id)}>delete</button></li>
          )
        })}
      </ul>
      <select name="pay" value={value} onChange={evt => setValue(evt.target.value)}>
        <option value="apple">Apple</option>
        <option value="mono">Mono</option>
        <option value="visa">Visa</option>
      </select>


      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <SearchBox/>
      <ContactList data={data} />
    </div>

  )
}

export default App
