import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  // selectContacts,
  // selectFilter,
  selectFilterContacts,
} from 'redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { getContacts } from 'redux/operations';
import StyledList from './ContactList.styled';

export function ContactList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const filterContacts = useSelector(selectFilterContacts);

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  // );

  return (
    <StyledList>
      {filterContacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} btnId={id} />
      ))}
    </StyledList>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
