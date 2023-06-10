import styled from 'styled-components';

const Title = styled.h1`
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

const TitleSecond = styled.h2`
  color: ${p => p.theme.colors.black};
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
  font-size: ${p => p.theme.fontSizes.s};
  display: inline-block;
  padding-top: 0px;
  padding-bottom: 0px;
  margin: 0px;
  margin-top: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

const Input = styled.input`
  font-size: ${p => p.theme.fontSizes.s};

  display: block;
  margin-bottom: 20px;
  width: 275px;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  &::placeholder {
    color: #212529;
    opacity: 0.4;
  }

  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
  &:invalid,
  &:valid {
    border-color: #dc3545;
    padding-right: 2.25rem;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.5625rem center;
    background-size: 1.125rem 1.125rem;
  }
  &:valid {
    border-color: #198754;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  }
  &:invalid:focus {
    border-color: #dc3545;
    box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
  }
  &:valid:focus {
    border-color: #198754;
    box-shadow: 0 0 0 0.25rem rgb(25 135 84 / 25%);
  }
`;

const InputFilter = styled.input`
  margin: 20px auto;
  width: 375px;

  display: block;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;

  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`;

const Form = styled.form`
  margin: 0px auto;
  width: 325px;
  display: block;
  padding: 45px;
  border-style: solid;
  border-color: #a7d3a9;
`;

const Button = styled.button`
  margin-top: ${p => p.theme.space[4]}px;
  background-color: #4caf50;
  border: none;
  border-radius: 12px;

  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;

  transition: box-shadow 0.3s ease-in-out;

  &:focus,
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 0 3px white, 0 0 0 4px #4caf50;
  }
`;

const ContactItem = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 400px;

`;
const ContactTxt = styled.p`
  font-size: 16px;
  width: 220px;

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
  InputFilter,
  ContactItem,
  Contacts,
  ContactTxt,
};
