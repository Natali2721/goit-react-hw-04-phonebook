import React from 'react';
import PropTypes from 'prop-types';
import { Input, P } from 'components/Style/Element.styled';

export const Filter = ({ title, onChange, value }) => (
  <div>
    <P>{title}</P>
    <Input
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      onChange={onChange}
      value={value}
      placeholder="Enter name"
    />
  </div>
);

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
