import { useSelector } from 'react-redux';
import { selectVisibleContact } from 'redux/selector';

export const useContacts = () => useSelector(selectVisibleContact);
