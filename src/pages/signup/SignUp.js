import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é Obrigatório'),
  email: Yup.string()
    .email('E-mail Inválido')
    .required('O E-mail é obrigatório'),
  password: Yup.string()
    .min(5, 'Minimo 5 caracteres')
    .required('Senha Obrigatória'),
});

export default function SignUp() {
  const handleSubmit = (data) => {
    console.tron.log(data);
  };
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua Senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho conta</Link>
      </Form>
    </>
  );
}
