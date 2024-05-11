import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import ContactItem from 'components/ContactItem/ContactItem';
import css from '../ContactList/Contacts.module.css';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <div>
      <ul className={css.contactList}>
        {contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
