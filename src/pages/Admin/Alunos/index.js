import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  updateProvaRequest,
  // updateEmProvaRequest,
  updateFimProvaRequest,
} from '~/store/modules/usuario/actions';

import icoPlay from '~/assets/ico-play.png';
import icoTeste from '~/assets/ico-teste.png';
import icoPlay2 from '~/assets/ico-play2.png';
import icoPlay3 from '~/assets/ico-play3.png';
import icoGrafico from '~/assets/ico-grafico.png';

import {
  Container,
  Prod,
  ModUl,
  ModUl2,
  Titulo,
  Titulo2,
  Titulo3,
  Titulo4,
  Default,
  Danger,
  Ladodireito,
  Box1,
} from './styles';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);

  async function loadAlunos() {
    const response = await api.get("alunos");

    console.log('alunos: ', response.data);

    setAlunos(response.data);
  }

  async function excluirAluno(id) {
    await api.delete(`usuarios/${id}`);

    alert('Usuário removido com sucesso!');

    loadAlunos();
  }

  useEffect(() => {
    loadAlunos();
  }, []);

  return (
    <Container>
      <Prod>
        <div>
          <Titulo>
            Administrar Alunos
          </Titulo>

          <Box1>
            {alunos.map((aluno) => (
              <span key={aluno.id}>
                <img src={icoPlay2} />
                <div>
                  <Titulo3>{aluno.id} - {aluno.nome}</Titulo3>
                  <p>{aluno.email}</p>
                  <small>Criado em: {aluno.updated_at.split('T')[0].split('-').reverse().join('/')}</small>
                </div>
                <Link onClick={() => excluirAluno(aluno.id)}>x</Link>
              </span>
            ))}
          </Box1>

        </div>
      </Prod>
    </Container>
  );
}
