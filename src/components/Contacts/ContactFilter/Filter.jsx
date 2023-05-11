import { useSelector, useDispatch } from 'react-redux';
import { filteredContact, selectFilters } from 'redux/filtersSlice';
import { Label, P } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilters);
  const dispatch = useDispatch();

  const changeFilter = ({ target: { value } }) => {
    dispatch(filteredContact(value));
  };

  return (
    <Label>
      <P>Find contacts by name</P>
      <input type="text" value={filter} onChange={changeFilter} />
    </Label>
  );
};
