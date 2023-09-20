import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  // getVisibleContacts,
  selectContacts,
  selectElectContact,
  selectIsLoadingContacts,
} from 'redux/contacts/selectors';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { updateContact } from 'redux/contacts/operations';

export function EditForm(props) {
  // const contactsList = useSelector(getVisibleContacts);
  // const editContact = contactsList.filter(el => el.id === props.id)
    const electContact = useSelector(selectElectContact)
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
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
    const handleSubmit = e => {
      e.preventDefault();
      const exemple = {
        name: electContact.name,
        number: electContact.number,
        id: electContact.id,
      }
      console.log(exemple)
      const newContact = {
        name: name,
        number: number,
        id: electContact.id,
      };
      const nameCheck = contacts.find(({ name }) => name === newContact.name);
      if (nameCheck) {
        toast.error(`${newContact.name} is already in contacts`);
        return;
      }
      console.log(newContact)
      dispatch(updateContact(newContact));
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
            Edit Contact
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder={electContact.name}
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
                placeholder={electContact.number}
                name="number"
                pattern="^[+]?[0-9\\.\\-\\s]{1,15}$"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={handChange}
                value={number}
              />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Add this contact in favorite" />
            </Form.Group> */}
            <Button
              variant="primary"
              type="submit"
              disabled={isLoading ? true : false}
            >
              edit Contact
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }