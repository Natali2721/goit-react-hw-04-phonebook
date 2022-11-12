import { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import ButtonAdd from 'components/ContactForm/ButtonAdd';
import ContactForm from 'components/ContactForm/ContactForm';
import InputName from 'components/ContactForm/InputName';
import InputTel from 'components/ContactForm/InputTel';
import { LabelContact } from 'components/ContactForm/LabelContact';

export const Phonebook = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const clickOnBtnAdd = e => {
    e.preventDefault();
    onSubmit({ name: name, number: number });
    reset();
    // console.log(this.state);
  };

  return (
    <>
      <ContactForm onSubmit={clickOnBtnAdd}>
        <LabelContact title="Name">
          <InputName value={name} onChange={handleChange} />
        </LabelContact>
        <LabelContact title="Number">
          <InputTel value={number} onChange={handleChange} />
        </LabelContact>
        <ButtonAdd text="Add contact" />
      </ContactForm>
    </>
  );
};
Phonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
