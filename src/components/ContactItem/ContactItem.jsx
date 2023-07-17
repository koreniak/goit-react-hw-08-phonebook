import PropTypes from 'prop-types';
import { ContItem, DeleteButton, EditButton } from './ContacItem.styled';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Modal from 'components/Modal';
import EditForm from 'components/EditForm';


const ContactItem = ({ name, number, id }) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    if (showModal) {
      setShowModal(false);
    };
  };

  const openModal = () => {
    if (!showModal) {
      setShowModal(true)
    };
  };

  const dispatch = useDispatch();
  return (
    <ContItem>
      <p>{name}: {number}</p>
      <div>
        <EditButton type="button" onClick={openModal}>Edit</EditButton>
        <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>Delete</DeleteButton>
      </div>
      {showModal && <Modal onClose={closeModal}><EditForm id={id} onClose={closeModal} /></Modal>}
    </ContItem>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default ContactItem;