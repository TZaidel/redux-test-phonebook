import { Formik, Form, Field, ErrorMessage  } from "formik"
import * as Yup from "yup";
import {useId} from 'react'

// const FeedbackSchema = Yup.object().shape({
//   username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
//   email: Yup.string().email("Must be a valid email!").required("Required"),
//   message: Yup.string().min(3, "Too short").max(256, "Too long").required("Required"),
// 	level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required")
// });

export default function ContactForm({onAdd}) {
  const userId = useId()
  const numId = useId()

  return (
    <Formik
      initialValues={{
      username: '', 
      number: ''
    }}
      onSubmit={(values, actions) => {
        console.log(values)
        onAdd({id: Date.now, ...values})
        actions.resetForm()
      }}
   
      // validationSchema={FeedbackSchema}
    >
      <Form>
        <label htmlFor={userId}>Name</label>
        <Field name="username" id={userId} />
        <label htmlFor={numId} >Number</label>
        <Field name="number" id={numId}  />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>

  )
}


