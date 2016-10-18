import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Label} from 'react-bootstrap';

const renderField = (field) => (
  <div className="input-row form-group">
    <input className="form-control" {...field.input} type={field.type} placeholder={field.placeholder}/>
    {field.meta.touched && field.meta.error &&
     <span className="error">{field.meta.error}</span>}
  </div>
)

const renderTextareaField = (field) => (
  <div className="input-row form-group">
    <textarea className="form-control" placeholder={field.placeholder} rows="10" cols="70"/>
    {field.meta.touched && field.meta.error &&
     <span className="error">{field.meta.error}</span>}
  </div>
)

const Contact = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (

    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-4">
          <div className="contact-label">
            <Label>Name</Label>
            <Field name="name" component={renderField} type="text" placeholder="Enter your name"/>
          </div>
        </div>
        <div className="col-md-8">
          <div className="contact-label">
            <Label>Email</Label>
            <Field name="email" component={renderField} type="email" placeholder="Enter your Email"/>
          </div>
        </div>
      </div>
      <div>
        <div className="contact-label">
          <Label>Subject</Label>
          <Field name="subject" component={renderField} type="text" placeholder="Enter the email subject"/>
        </div>
      </div>
      <div>
        <div className="contact-label">
          <Label>Question</Label>
          <Field name="question" component={renderTextareaField} type="textarea" placeholder="Enter your question"/>
        </div>
      </div>

      <br></br>
      <div>
        <button
          className="btn btn-default qlab-button"
        >Submit</button>
      </div>

    </form>
  )
}

export default reduxForm({
  form: 'Contact'  // a unique identifier for this form
})(Contact);
