import { Button } from 'components/Style/Element.styled';
import PropTypes from 'prop-types';

const ButtonSubmit = ({ text }) => <Button type="submit">{text}</Button>;

export default ButtonSubmit;

ButtonSubmit.propTypes = {
  text: PropTypes.string.isRequired,
};
