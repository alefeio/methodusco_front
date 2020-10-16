import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updatePerfilRequest } from '~/store/modules/usuario/actions';

import Barra from '~/components/Barra';

import { Container, Prod } from './styles';

export default function Perfil() {
  const dispatch = useDispatch();

  const perfil = useSelector((state) => state.usuario.perfil);

  function handleSubmit(data) {
    dispatch(updatePerfilRequest(data));
  }

  return (
    <Container>
      <Prod>
        <Form initialData={perfil} onSubmit={handleSubmit}>
          {/* <AvatarInput name="img_id" /> */}

          <Input name="nome" placeholder="Nome" />
          <Input name="email" type="email" placeholder="E-mail" disabled />

          <hr />

          <Input
            type="password"
            name="oldPassword"
            placeholder="Sua senha atual"
          />
          <Input type="password" name="password" placeholder="Nova senha" />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirmação da senha"
          />

          <button type="submit">Atualizar perfil</button>
        </Form>
      </Prod>
    </Container>
  );
}
