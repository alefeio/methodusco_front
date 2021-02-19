import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.png';

import { cadastroRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  nome: Yup.string().required('Campo obrigatório!'),
  email: Yup.string().email('E=mail inválido!').required('Campo obrigatório!'),
  password: Yup.string()
    .min(6, 'Mínimo 6 caracteres.')
    .required('Campo obrigatório!'),
});

export default function Cadastro() {
  const dispatch = useDispatch();

  function handleSubmit({ nome, email, password }) {
    const admin = false;

    dispatch(cadastroRequest(nome, email, password, admin));
  }

  return (
    <>
      <img src={logo} alt="Methodus - Curso Leitura Dinâmica OnlineDinâmica e Memorização" />
      <br/>
      <p>Melhore a qualidade da sua leitura em 5 a 8 vezes.</p>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="nome" placeholder="Nome" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho conta</Link>
      </Form>
    </>
  );
}
