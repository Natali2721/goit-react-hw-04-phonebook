import { Button } from 'components/Style/Element.styled';
import PropTypes from 'prop-types';

const ButtonAdd = ({ text }) => <Button type="submit">{text}</Button>;

export default ButtonAdd;

ButtonAdd.propTypes = {
  text: PropTypes.string.isRequired,
};
