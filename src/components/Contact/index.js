import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './Contact.module.css'

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  function handleSubmit(e) {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  }

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  }

  return (
    <Form
      id="contact-form"
      onSubmit={handleSubmit}
      className="flex-column"
    >
      <Form.Group
        className="mb-3 align-items-center justify-content-center"
        controlId="Name"
      >
        <Form.Label className={styles.font}>Name</Form.Label>
        <Form.Control
          type="text"
          defaultValue={name}
          onBlur={handleChange}
          name="name"
        ></Form.Control>
      </Form.Group>
      <Form.Group
        className="mb-3 align-items-center justify-content-center"
        controlId="Email"
      >
        <Form.Label className={styles.font}>Email address</Form.Label>
        <Form.Control
          type="email"
          defaultValue={email}
          onBlur={handleChange}
          name="email"
        />
      </Form.Group>
      <Form.Group
        className="mb-3 align-items-center justify-content-center"
        controlId="Message"
      >
        <Form.Label className={styles.font}>Message</Form.Label>
        <Form.Control
          as="textarea"
          defaultValue={message}
          onBlur={handleChange}
          name="message"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      {errorMessage && (
        <div>
          <p className={styles.font}>{errorMessage}</p>
        </div>
      )}
    </Form>
  );
}

export default ContactForm;
