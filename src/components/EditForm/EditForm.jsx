import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchContacts, patchContact } from 'redux/contacts/operations';
import { ContForm, Input, SubmitButton, CloseButton, ModalContainer } from './EditForm.styled';
import { GrClose } from 'react-icons/gr';

const EditForm = ({ onClose, id, name, number }) => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      patchContact({
        id,
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    setTimeout(() => {
      dispatch(fetchContacts())
    }, 500);
    form.reset();
  };
  

  return (
    <ModalContainer>
      <CloseButton type="button" onClick={onClose}><GrClose /></CloseButton>
      <ContForm onSubmit={handleSubmit} autoComplete="off">
        <label>
          Name
          <Input
            defaultValue={name}
            type="text"
            name="name"
            placeholder="John Smith"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <Input
            defaultValue={number}
            type="text"
            name="number"
            placeholder="012-345-6789"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <SubmitButton type="submit">Edit</SubmitButton>
      </ContForm>
    </ModalContainer>
  );
};

EditForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default EditForm;
