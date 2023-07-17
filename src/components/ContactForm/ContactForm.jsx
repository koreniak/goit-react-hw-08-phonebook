import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { ContForm, Input, SubmitButton, Error } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { toast } from 'react-toastify';
import { selectContacts } from 'redux/contacts/selectors';

const validationSchema = object({
  name: string().min(4).required(),
  number: string().min(4).required(),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = ({name, number}, { resetForm }) => {

    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase()) ?
      toast.error(`${name} is already in contacts`) :
      dispatch(addContact({name, number}));

    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: ""
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <ContForm>
        <label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            placeholder="John Smith"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name">{() => <Error>Please enter a contact name</Error>}</ErrorMessage>
        </label>
        <label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            placeholder="012-345-6789"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number">{() => <Error>Please enter a phone number</Error>}</ErrorMessage>
        </label>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </ContForm>
    </Formik>
  );
};

export default ContactForm;