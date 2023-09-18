import { useState } from 'react';
import {
  AddContactBtn,
  FormFoneBook,
  InputFoneBook,
} from './ContactForm.styled';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';
import { useDispatch, useSelector} from 'react-redux';
import { selectContacts, selectIsLoadingContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';


export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts)
  const isLoading = useSelector(selectIsLoadingContacts)

  const dispatch = useDispatch();

  const handChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        setName(target.value);
        break;
      case 'number':
        setNumber(target.value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      name: name,
      number: number,
      // id: nanoid()
      }
      const nameCheck = contacts.find(({name})=> name === newContact.name)
      if(nameCheck){
        alert(`${newContact.name} is already in contacts`)
        return reset()
      }
      // addContact(newContact)
    dispatch(
      addContact(newContact)
    );
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <FormFoneBook onSubmit={handleSubmit}>
      Name
      <InputFoneBook
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ' \-\u0400-\u04FF]+$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handChange}
        value={name}
      />
      Number
      <InputFoneBook
        type="tel"
        name="number"
        pattern="^[+]?[0-9\\.\\-\\s]{1,15}$"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handChange}
        value={number}
      />
      {isLoading? <Spinner animation="grow" variant="primary"/>:<AddContactBtn type="submit">add Contact</AddContactBtn>}
    </FormFoneBook>
  );
}

ContactForm.propTypes = {
  createContact: PropTypes.func,
};
