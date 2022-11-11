import ButtonAdd from 'components/ContactForm/ButtonAdd';
import ContactForm from 'components/ContactForm/ContactForm';
import InputName from 'components/ContactForm/InputName';
import InputTel from 'components/ContactForm/InputTel';
import { LabelContact } from 'components/ContactForm/LabelContact';
import { Component } from 'react';

class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  clickOnBtnAdd = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
    // console.log(this.state);
  };

  render() {
    return (
      <>
        <ContactForm onSubmit={this.clickOnBtnAdd}>
          <LabelContact title="Name">
            <InputName value={this.state.name} onChange={this.handleChange} />
          </LabelContact>
          <LabelContact title="Number">
            <InputTel value={this.state.number} onChange={this.handleChange} />
          </LabelContact>
          <ButtonAdd text="Add contact" />
        </ContactForm>
      </>
    );
  }
}

export default Phonebook;
