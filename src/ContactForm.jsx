export default function ContactForm({onSubmit}) {
  return (
    <>
    <form onSubmit={onSubmit} >
      <label>Name</label>
        <input name="userName"></input>
        <label>Number</label>
        <input name="userNumber"></input>
        <button type="submit">Add contact</button>
    </form>
    </>
  )
}