import {
  ContactIcon,
  ContactName,
  DeleteContact,
  DeleteIcon,
  EditBtn,
  EditIcon,
  FavoriteBtn,
  FavoriteIcon,
  MoreDitails,
  Name,
} from './ContactList.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  getVisibleContacts,
  selectIsLoadingContacts,
} from 'redux/contacts/selectors';
import Accordion from 'react-bootstrap/Accordion';
import { EditForm } from 'components/EditForm/EditForm';
import { useState } from 'react';
import { electContactChange } from 'redux/contacts/slice';
// import { IoMdContact } from 'react-icons/io';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingContacts);
  const contactsList = useSelector(getVisibleContacts);
  const [modalShow, setModalShow] = useState(false);


  return (
    <Accordion defaultActiveKey="0">
      {contactsList.map(({ id, name, number }) => (
        <Accordion.Item eventKey={id} key={id}>
          <EditForm
            show={modalShow}
            onHide={() => setModalShow(false)}
            // names={name}
            // numbers={number}
          />
          <Accordion.Header>
            <ContactName>
              <ContactIcon />
              <Name>{name}:</Name>
              <Name>{number}</Name>
            </ContactName>
          </Accordion.Header>
          <Accordion.Body>
            <MoreDitails>
              <EditBtn
                onClick={() => {
                  setModalShow(true);
                  dispatch(electContactChange({ id, name, number }))
                }}
              >
                <EditIcon />
              </EditBtn>
              <FavoriteBtn>
                <FavoriteIcon />
              </FavoriteBtn>
              <DeleteContact
                onClick={() => dispatch(deleteContact(id))}
                disabled={isLoading ? true : false}
              >
                <DeleteIcon />
              </DeleteContact>
            </MoreDitails>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>

    // if(isError){
    //     return(<div>{error.message}</div>)
    // }
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  removeContact: PropTypes.func,
};
