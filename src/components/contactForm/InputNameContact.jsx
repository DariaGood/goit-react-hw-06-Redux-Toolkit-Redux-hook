import { Input } from 'components/Style/Element.styled';
import PropTypes from 'prop-types';

const InputNameContact = ({ onChange, value }) => (
  <Input
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
    placeholder="Enter name"
    onChange={onChange}
    value={value}
  />
);
export default InputNameContact;

InputNameContact.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
