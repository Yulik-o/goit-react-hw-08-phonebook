import { useState } from 'react';
//import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
//import { addContact } from 'redux/slice';
import { addContact } from 'redux/operations';
import { StyledBtn } from './contactForm.styled';
import { StyledForm } from './contactForm.styled';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleInputChange = event => {
    // setNumber({ [event.target.name]: event.target.value });
    // setName({ [event.target.name]: event.target.value });
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = { name, number };
    const isExist = contacts.some(contact => {
      return contact.name === name;
    });
    if (isExist) {
      alert(`${name} is already in contacts`);

      return;
    }
    dispatch(addContact(newContact));
    reset();
  };

  function reset() {
    setName('');
    setNumber('');
  }
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <label>
          <span>Name </span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          <span> Number </span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={handleInputChange}
            required
          />
        </label>
        <StyledBtn type="submit">Add contact</StyledBtn>
      </StyledForm>
    </>
  );
}
