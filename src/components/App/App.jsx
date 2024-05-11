import { useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactsList';
import Filter from '../Filter/Filter';
import { getContacts } from '../../redux/selectors';
import css from '../App/App.module.css';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div className={css.container}>
      <div>
        <h1 className={css.headText}>Phonebook</h1>
      </div>
      <ContactForm />
      {contacts.length > 0 ? (
        <>
          <h2 className={css.headText}>Contacts</h2>

          <Filter />
        </>
      ) : (
        <p className={css.messageNotAdd}>
          Your phonebook is empty. Add first contact!
        </p>
      )}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
};

export default App;
