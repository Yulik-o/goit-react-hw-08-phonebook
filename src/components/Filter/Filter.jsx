//import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { addFilter } from 'redux/filterSlice';

export function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter.filter);

  const handleFilterChange = e => {
    dispatch(addFilter(e.target.value));
  };
  return (
    <div>
      <h4>Find contacts by name</h4>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={handleFilterChange}
      />
    </div>
  );
}
