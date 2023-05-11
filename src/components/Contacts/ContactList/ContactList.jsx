import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { selectFilters } from 'redux/filtersSlice';
import { ListItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { ContactsLoader } from '../ContactsLoader/ContactsLoader';

export const ContactList = () => {
  const { data = [], isLoading, isError } = useGetContactsQuery();
  const filter = useSelector(selectFilters);

  const filteredContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {isLoading && !isError && <ContactsLoader />}
      {filteredContacts.map(contact => (
        <ListItem key={contact.id} {...contact} />
      ))}
    </List>
  );
};
