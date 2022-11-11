import styled from 'styled-components';

const Title = styled.h1`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

const TitleSecond = styled.h2`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;
const P = styled.p`
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  padding-top: 0px;
  padding-bottom: 0px;
  margin: 0px;
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

const Input = styled.input`
  font-size: ${p => p.theme.fontSizes.s};
`;

const Form = styled.form`
  width: 300px;
  border: 1px black solid;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  padding: 10px 15px;
  margin-right: auto;
  margin-top: ${p => p.theme.space[4]}px;
  font-size: 16px;
  background-color: transparent;
  border: 1px black solid;
  border-radius: 10px;
  cursor: pointer;
  transition: color 250ms linear;
  transition: background-color 250ms linear;
  &:hover {
    color: white;
    background-color: blue;
  }
`;

const ContactItem = styled.li`
  display: flex;
  align-items: baseline;
`;
const ContactTxt = styled.p`
  margin: 0 15px;
  font-size: 16px;
`;
const Contacts = styled.ul`
  padding: 0px;
  list-style: none;
`;

export {
  Title,
  TitleSecond,
  P,
  Form,
  Button,
  Input,
  ContactItem,
  Contacts,
  ContactTxt,
};
