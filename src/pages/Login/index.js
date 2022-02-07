import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { store } from '~/store';

import { loginRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

import olhoAberto from "~/assets/ico-olhoaberto.png";
import olhoFechado from "~/assets/ico-olhofechado.png";

const schema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido!').required('Campo obrigatório!'),
  password: Yup.string().required('Campo obrigatório!'),
});

export default function Login() {
  const [olho1, setOlho1] = useState({
    src: olhoFechado,
    type: "password",
  });

  const { logado } = store.getState().auth;
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(loginRequest(email, password));
  }

  async function handleSenha() {
    if (olho1.src === olhoAberto) {
      setOlho1({
        src: olhoFechado,
        type: "password",
      });
    } else {
      setOlho1({
        src: olhoAberto,
        type: "text",
      });
    }
  }

  return (
    <>
      {!logado ? (
        <div>
          <img src={logo} alt="Methodus - Curso Leitura Dinâmica OnlineDinâmica e Memorização" />
          <br />
          <p>Melhore a qualidade da sua leitura em 5 a 8 vezes.</p>
          <Form schema={schema} onSubmit={handleSubmit}>
            <Input name="email" type="email" placeholder="E-mail" />
            <Input name="password" type={olho1.type} placeholder="Senha" />
            <img src={olho1.src} alt="" onClick={() => handleSenha()} />

            <button type="submit">
              {loading ? 'Carregando...' : 'Acessar'}
            </button>
            <Link to="/cadastro">Não tenho conta</Link>
          </Form>
        </div>
      ) : (
        <div>
          <img src={logo} alt="Methodus - Curso Leitura Dinâmica OnlineDinâmica e Memorização" />
          <br />
          <h2>Você está logado.</h2>
          <p>
            <Link to="/dashboard">Clique aqui</Link> para acessar.
          </p>
        </div>
      )}
    </>
  );
}
