import { Component } from 'react';
import { nanoid } from 'nanoid/non-secure';
import { Box } from './Box/Box';
import { H1, H2 } from './Title/Title';
import { ContactList } from './ContactList/ContactList';
import Phonebook from './Phonebook/Phonebook';
import { Filter } from './Filter/Filter';
import { P } from './Style/Element.styled';
const LS_KEY = 'contacts';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem(LS_KEY));

    //console.log(savedContacts);
    if (savedContacts) {
      //перевірка наявності в ЛС
      this.setState({ contacts: savedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }
  reset = () => {
    this.setState({ filter: '' });
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  formSubmit = data => {
    const id = nanoid();
    if (
      this.state.contacts.filter(contact => contact.name === data.name).length >
      0
    ) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          name: data.name,
          number: data.number,
          id: id,
        },
      ],
    });
  };

  onClickDelete = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
    this.reset();
  };

  render() {
    const filterValueNormolize = this.state.filter.toLowerCase();
    const contactsToShow = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValueNormolize)
    );
    return (
      <Box as="main" px={5}>
        <H1 title="Phonebook" />
        <Phonebook onChange={this.handleChange} onSubmit={this.formSubmit} />
        {this.state.contacts.length > 0 ? (
          <>
            <H2 title="Contacts" />
            <Filter
              title="Find contact by name"
              onChange={this.handleChange}
              value={this.state.filter}
            />
            <ContactList
              //contacts={this.state.contacts}
              contacts={contactsToShow}
              onClickDelete={this.onClickDelete}
            />
          </>
        ) : (
          <P>Phonebook is empty</P>
        )}
      </Box>
    );
  }
}
