import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContacts } from 'redux/operations';
import StyledButton from './ContactItem.styled';

export function ContactItem({ name, number, btnId }) {
  const dispatch = useDispatch();
  const deleteContact = event => {
    dispatch(deleteContacts(event.target.id));
  };
  return (
    <li>
      {name}: {number}
      <StyledButton id={btnId} onClick={deleteContact}>
        Delete
      </StyledButton>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,

  btnId: PropTypes.string.isRequired,
};
