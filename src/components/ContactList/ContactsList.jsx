import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/selectors';
import { removeContact } from '../../redux/contactsSlice';
import css from '../ContactList/Contacts.module.css';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <div>
      <ul className={css.contactList}>
        {contacts.map(contact => (
          <li className={css.contactListItem} key={contact.id}>
            {`${contact.name} : ${contact.number}`}
            {
              <button
                className={css.deleteButton}
                type="button"
                name="delete"
                onClick={() => {
                  dispatch(removeContact(contact));
                }}
              >
                Delete
              </button>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
