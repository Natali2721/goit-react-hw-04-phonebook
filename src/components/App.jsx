import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid/non-secure';
import { Box } from './Box/Box';
import { H1, H2 } from './Title/Title';
import { ContactList } from './ContactList/ContactList';
import { Phonebook } from './Phonebook/Phonebook';
import { Filter } from './Filter/Filter';
import { P } from './Style/Element.styled';
const LS_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const formSubmit = ({ name, number }) => {
    const id = nanoid();
    const isExist = contacts.find(contact => contact.name === name);
    console.log(isExist);
    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts(contacts => [
      ...contacts,
      {
        name: name,
        number: number,
        id: id,
      },
    ]);
  };

  const handleFilterChange = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const onClickDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
    //reset();
  };
  //const reset = () => {
  //   setFilter('');
  //};

  const filterValueNormolize = filter.toLowerCase();
  const contactsToShow = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValueNormolize)
  );

  return (
    <Box as="main" px={5}>
      <H1 title="Phonebook" />
      <Phonebook onSubmit={formSubmit} />
      {contacts.length > 0 ? (
        <>
          <H2 title="Contacts" />
          <Filter
            title="Find contact by name"
            onChange={handleFilterChange}
            value={filter}
          />
          <ContactList
            contacts={contactsToShow}
            onClickDelete={onClickDelete}
          />
        </>
      ) : (
        <P>Phonebook is empty</P>
      )}
    </Box>
  );
};
