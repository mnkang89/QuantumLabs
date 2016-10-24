import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { sendMail } from '../../actions/index';


const renderField = ({input, placeholder, type, meta: {touched, error, invalid}}) => {
  return (
    <div className={`input-row form-group ${touched && invalid ? 'has-danger' : ''}`}>
      <input className="form-control" {...input} type={type} placeholder={placeholder}/>
      <div className="text-help">
        {touched && error && <span className="error">{error}</span>}
      </div>
    </div>
  );
}

const renderTextareaField = ({input, placeholder, meta: { touched, error, invalid }}) => {
  return (
    <div className={`input-row form-group ${touched && invalid ? 'has-danger' : ''}`}>
      <textarea className="form-control" {...input} placeholder={placeholder} rows="10" cols="70"/>
      <div className="text-help">
        {touched && error && <span className="error">{error}</span>}
      </div>
    </div>
  );
}

class Contact extends Component {

  onSubmit(props) {
    this.props.sendMail(props).
      then(()=>{
        console.log('done');
      });
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className="row">
          <div className="col-md-4">
            <div className="contact-label">
              <label>Name</label>
            </div>
            <Field name="name" component={renderField} type="text" placeholder="Enter your name"/>
          </div>
          <div className="col-md-8">
            <div className="contact-label">
              <label>Email</label>
            </div>
            <Field name="email" component={renderField} type="email" placeholder="Enter your Email"/>
          </div>
        </div>
        <div>
          <div className="contact-label">
            <label>subject</label>
          </div>
          <Field name="subject" component={renderField} type="text" placeholder="Enter the email subject"/>
        </div>
        <div>
          <div className="contact-label">
            <label>Question</label>
          </div>
          <Field name="content" component={renderTextareaField} type="textarea" placeholder="Enter your question"/>
        </div>

        <br></br>
        <div>
          <button
            className="btn btn-default qlab-button"
            disabled={pristine || submitting}>
            Submit
          </button>
        </div>

      </form>
    );
  }
}

const validate = values => {
  const errors = {}

  if (!values.name) {
    errors.name='enter the username';
  }
  if (!values.email) {
    errors.email='enter the email';
  }
  if (!values.subject) {
    errors.subject='enter some subject';
  }
  if (!values.content) {
    errors.content='enter some content';
  }
  return errors;


}


Contact = reduxForm({
  form: 'ContactForm',  // a unique identifier for this form
  validate
})(Contact);
Contact = connect(null,{sendMail})(Contact);

export default Contact;
