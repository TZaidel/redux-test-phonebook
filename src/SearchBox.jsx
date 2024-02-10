import css from './SearchBox.module.css'

export default function SearchBox({ onChange, value }) {
  return (
    <div >
      <label>Find contacts by name</label>
      <input name="username" value={value}  onChange={onChange} />
    </div>
  )
}