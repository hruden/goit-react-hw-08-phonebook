import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoadingContacts,
} from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export function ContactForm(props) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // const [favorite, setFavorite] = useState(false);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoadingContacts);

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
  // const  handleChange = () => {
	// 	setFavorite(!favorite);
	// }
  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      name: name,
      number: number,
      // favorite: favorite,
    };
    const nameCheck = contacts.find(({ name }) => name === newContact.name);
    if (nameCheck) {
      toast.error(`${newContact.name} is already in contacts`);
      return reset();
    }
    dispatch(addContact(newContact));
    toast.success(`${newContact.name} added successfully`);
    props.onHide();
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Cotantact
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ' \-\u0400-\u04FF]+$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handChange}
              value={name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter number"
              name="number"
              pattern="^[+]?[0-9\\.\\-\\s]{1,15}$"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handChange}
              value={number}
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              label="Favorite"
              checked={favorite}
              onChange={handleChange}
            />
          </Form.Group> */}
          <Button
            variant="primary"
            type="submit"
            disabled={isLoading ? true : false}
          >
            add Contact
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

ContactForm.propTypes = {
  createContact: PropTypes.func,
};
