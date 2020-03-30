import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail Inválido')
    .required('O E-mail é obrigatório'),
  password: Yup.string().required('Senha Obrigatória'),
});

export default function SignIn() {
  const handleSubmit = (data) => {
    console.tron.log(data);
  };
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua Senha" />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
