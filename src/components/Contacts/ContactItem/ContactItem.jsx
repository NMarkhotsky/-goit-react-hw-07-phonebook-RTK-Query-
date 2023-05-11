import { useDeleteContactMutation } from 'redux/contactsSlice';
import { Button, Item, Thumb } from './ContactItem.styled';
import PropTypes from 'prop-types';

export const ListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <Item>
      <Thumb>
        <p>{name}: </p>
      </Thumb>
      <Thumb>
        <p>{number}</p>
        <Button
          type="button"
          disabled={isLoading}
          onClick={() => deleteContact(id)}
        >
          Delete
        </Button>
      </Thumb>
    </Item>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
