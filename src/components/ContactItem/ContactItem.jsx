import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContacts, editContacts } from '../../redux/operations';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './ContactItem.module.css';

import { Modal, Input, Button } from 'antd';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState(contact.name);
  const [newNumber, setNewNumber] = useState(contact.number);

  const handleDeleteContact = contactId => {
    Confirm.show(
      'Delete contact',
      'Are you sure you want to delete this contact?',
      'Yes',
      'No',
      () => {
        dispatch(deleteContacts(contactId));
        Notify.failure(`Contact deleted`);
      },
      () => {
        return;
      },
      {
        titleColor: '#4f46e5',
        okButtonBackground: '#4f46e5',
      }
    );
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleNameChange = e => {
    setNewName(e.target.value);
  };

  const handleNumberChange = e => {
    setNewNumber(e.target.value);
  };

  const handleSave = () => {
    setShowModal(false);
    dispatch(
      editContacts({
        id: contact.id,
        name: newName,
        number: newNumber,
      })
    );
  };
  return (
    <>
      <li className={css.contactListItem}>
        <div>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
        </div>
        {
          <div className={css.deleteButtonDiv}>
            <button
              className={css.deleteButton}
              type="button"
              name="edit"
              onClick={() => setShowModal(true)}
            >
              Edit
            </button>
            <button
              className={css.deleteButton}
              type="button"
              name="delete"
              onClick={() => handleDeleteContact(contact.id)}
            >
              Delete
            </button>
          </div>
        }
      </li>

      <Modal
        open={showModal}
        onCancel={handleCancel}
        footer={[
          <Button
            className={css.modalButton}
            key="cancel"
            onClick={handleCancel}
          >
            Cancel
          </Button>,
          <Button className={css.modalButton} key="save" onClick={handleSave}>
            Save
          </Button>,
        ]}
      >
        <div>
          <label className={css.filterLabel}>New Name:</label>
          <Input
            className={css.modalInput}
            type="text"
            value={newName}
            onChange={handleNameChange}
            pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={css.filterLabel}>New Number:</label>
          <Input
            className={css.modalInput}
            type="text"
            value={newNumber}
            onChange={handleNumberChange}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Phone number must be at least 10 digits long or follow the format +380931112233 or +38 093 333 4455."
            required
          />
        </div>
      </Modal>
    </>
  );
};

export default ContactItem;
