import React from 'react'
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/phonebookSlice';
import { nanoid } from 'nanoid';
import { Form } from 'components/Style/Element.styled';
import { Input } from 'components/Style/Element.styled';
import { ButtonSubmit } from 'components/contactForm/ButtonSubmit';

const ContactForm = () => {
  const contacts = useSelector(state => state.contacts);
  const [userName, setUserName] = useState('');
  const [number, setNumber] = useState('');
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setUserName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const reset = () => {
    setUserName('');
    setNumber('');
  };

  const addContactHandle = data => {
    const id = nanoid(7);
    data.id = id;
    contacts.filter(contact => contact.userName.toLowerCase() === data.userName.toLowerCase()).length > 0
      ? alert(`${userName} is already in contacts.`)
      : dispatch(addContact({ userName, number, id }));
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    addContactHandle({ userName, number });
    reset();
  };

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <label htmlFor={nameInputId}>
          <p>Name</p>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter name"
            onChange={handleChange}
            value={userName}
          />
        </label>
        <label htmlFor={numberInputId}>
          <p>Number</p>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="123-45-67"
            onChange={handleChange}
            value={number}
          />
        </label>
        <ButtonSubmit text="Add contact" />
      </Form>
    </>
  );
};

export default ContactForm;