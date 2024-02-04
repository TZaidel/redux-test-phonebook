import { useState, useId } from 'react'
import ContactForm from "./ContactForm.jsx"
import SearchBox from "./SearchBox.jsx"
import ContactList from "./ContactList.jsx"


const data = [
  {id: 'id-1', username: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', username: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', username: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', username: 'Annie Copeland', number: '227-91-26'},
]


// const PaymentForm =({onSubmit}) =>{
//   const nameId=useId()
//   const [nameValue, setNameValue] = useState({
//     username: '',
//     number: ''
//   })

//   // const changeValue = (event) => {
//   //   console.log(event.target.name)
//   //   setNameValue({
//   //     ...nameValue, 
//   //     [event.target.name] = event.target
//   //   })
//   // }

//   const handleSubmit=(evt)=> {
//     evt.preventDefault()
//     onSubmit(evt.target.elements.username.value)
//     evt.target.reset()
//   }

  
//   return (
//      <form onSubmit={handleSubmit}>
//         <label htmlFor={nameId}>Name</label>
//         <input onChange={(e)=>setNameValue(e.target.value)} name="username" id={nameId} value={nameValue} />

//         <label >Number</label>
//         <input onChange={(e)=>setNameValue(e.target.value)} name="number"  value={nameValue} />
//         <button>Submit</button>
//       </form>
//   )
// }

// const FilteredUsers=({value, onChange})=>{
//   return (
//     <input value={value} onChange={e=> onChange(e.target.value) } />
//   )
// }


// const Users = ({visibleUsers, onDelete}) => {
//   return (
//       <ul>
//         {visibleUsers.map(user => <li key={user.id}><h3>{user.username}</h3><button onClick={()=>onDelete(user.id)}>Delete</button></li>)}
//       </ul>
//   )
// }

// const UserForm = ({addUser}) => {
//   const handleSubmit = event => {
//     event.preventDefault()
//     console.log(event.target.username.value)
//     addUser(event.target.username.value)
//     event.target.reset()

//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="username"/>
//       <button type="submit">Add</button>
//     </form>
//   )
// }

// function App() {
//   const [inputValue, setInputValue]= useState('')
//   const [users, setUsers] = useState([
//     {username: 'Lala', id: 1423},
//     {username: 'Lolo', id: 1223},
//     {username: 'Edit', id: 1233},
//     {username: 'David', id: 1123}
//   ])


//   const makePayment = (username) => console.log('makepayment:', username)

//   const visibleUsers = users.filter(user => user.username.toLowerCase().includes(inputValue.toLowerCase()))
  
//   const handleDelete = (userId) => {
//     setUsers(prevUser => {
//      return prevUser.filter(user=> user.id !== userId)
//     })
//   }
  
//   const addUser = newUser => {
//     console.log(newUser)
//     setUsers(prevUser => {
//       return [
//         ...prevUser,
//         {
//           username: newUser,
//         id: Date.now()}
      
//       ]

//     })
//   }
      
//   return (
//     <div>
//       <UserForm addUser={addUser} />
//       <FilteredUsers value={inputValue} onChange={setInputValue} />
//       <Users visibleUsers={visibleUsers} onDelete={handleDelete} />
//       <PaymentForm onSubmit={makePayment} />
//    </div> 
//   )
// }






function App() {

  const addUser = ({value}) => {
    console.log(value)
  }

  const deleteUser = (userId) => {
    
  }

  const visibleUsers = data.filter(user => user.username.toLowerCase().includes(inputValue.toLowerCase()))
  



  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addUser} />
      <SearchBox value={nameFilter} onSearch={setNameFilter } />
      <ContactList data={visibleUsers} onDelete={deleteUser} />
    </div>

  )
}

export default App
