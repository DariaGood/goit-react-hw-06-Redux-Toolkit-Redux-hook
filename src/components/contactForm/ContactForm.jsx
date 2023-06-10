import PropTypes from 'prop-types';
import { Form } from 'components/Style/Element.styled';

const ContactForm = ({ onSubmit, children }) => (
  <Form onSubmit={onSubmit}>{children}</Form>
);

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
