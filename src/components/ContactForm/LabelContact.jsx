import { P } from 'components/Style/Element.styled';
import PropTypes from 'prop-types';

export const LabelContact = ({ title, children }) => (
  <label>
    <P>{title}</P>
    {children}
  </label>
);

LabelContact.propTypes = {
  title: PropTypes.string,
};
