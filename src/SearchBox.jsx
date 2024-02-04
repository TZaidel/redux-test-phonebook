import { Formik, Form, Field  } from "formik"


export default function SearchBox({ value, onSearch }) {
  return (
    <Formik>
      <Form>
        <label>Find contacts by name</label>
        <Field value={value} onChange={ onSearch} />
    </Form>
    </Formik>
  )
}