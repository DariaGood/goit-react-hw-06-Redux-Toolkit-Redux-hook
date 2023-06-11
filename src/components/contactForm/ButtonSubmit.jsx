import { Button } from 'components/Style/Element.styled';
import PropTypes from 'prop-types';

export const ButtonSubmit = ({ text }) => <Button type="submit">{text}</Button>;

ButtonSubmit.propTypes = {
  text: PropTypes.string.isRequired,
};
