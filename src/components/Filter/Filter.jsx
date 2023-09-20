import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { filterContacts } from 'redux/contacts/slice';
import Form from 'react-bootstrap/Form';
import { FilterInput } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter)
  const dispatch = useDispatch();

  const handleFind = ({ target }) => {
    const normalizedValue = target.value.trim().toLocaleLowerCase();
    dispatch(filterContacts(normalizedValue));
  };
  return (
    <>
    <FilterInput size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          onChange={handleFind}
          value={filter}
          name="searchContact"
          type="text"
          placeholder="Search contacts..."
  
        />
      </FilterInput>
      {/* <input
        onChange={handleFind}
        value={filter}
        name="searchContact"
        type="text"
        placeholder="Find contacts by name"
      /> */}
    </>
  );
};

Filter.propTypes = {
  searchContact: PropTypes.string,
  handleFind: PropTypes.func,
};
