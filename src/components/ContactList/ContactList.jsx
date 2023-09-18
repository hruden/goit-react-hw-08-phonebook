import { ContactsBook, ContactsItem, DeleteContact, DeleteSpinner } from "./ContactList.styled"
import PropTypes from 'prop-types';
import { useDispatch, useSelector} from "react-redux";
import { deleteContact } from "redux/contacts/operations";
import { getVisibleContacts, selectIsLoadingContacts } from "redux/contacts/selectors";


export const ContactList = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(selectIsLoadingContacts)
    const contactsList = useSelector(getVisibleContacts)
// if(isFetching){
//     return <div>...loading</div>
// }

    return (
        <ContactsBook>
            {contactsList.map(({id, name, number}) => 
                <ContactsItem key={id}>{name}: {number}
                    {isLoading? <DeleteSpinner animation="border" variant="danger"/>:<DeleteContact onClick={()=>dispatch(deleteContact(id))}>Delete</DeleteContact>}
                </ContactsItem>            
            )}
        </ContactsBook>
    )

// if(isError){
//     return(<div>{error.message}</div>)
// }
}
    

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string,
            number: PropTypes.string,
        })
    ),
    removeContact: PropTypes.func
}
