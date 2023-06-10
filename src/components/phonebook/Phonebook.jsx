import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/phonebookSlice';
import { nanoid } from 'nanoid';
import ButtonSubmit from 'components/contactForm/ButtonSubmit';
import ContactForm from 'components/contactForm/ContactForm';
import InputNameContact from 'components/contactForm/InputNameContact';
import InputNumberContact from 'components/contactForm/InputNumberContact';
import { LabelContact } from 'components/contactForm/LabelContact';

const Phonebook = () => {
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
    console.log(data);
    contacts.filter(contact => contact.userName === data.userName).length > 0
      ? alert(`${userName} is already in contacts.`)
      : dispatch(addContact({ userName, number, id }));
  };

  const clickOnBtnAdd = e => {
    e.preventDefault();
    addContactHandle({ userName, number });
    reset();
  };

  return (
    <>
      <ContactForm onSubmit={clickOnBtnAdd}>
        <LabelContact title="Name" htmlFor={nameInputId}>
          <InputNameContact value={userName} onChange={handleChange} />
        </LabelContact>
        <LabelContact title="Number" htmlFor={numberInputId}>
          <InputNumberContact value={number} onChange={handleChange} />
        </LabelContact>
        <ButtonSubmit text="Add contact" />
      </ContactForm>
    </>
  );
};

export default Phonebook;