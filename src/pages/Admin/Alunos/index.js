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

import icoEdit from '~/assets/edit.png';
import icoDelete from '~/assets/delete.png';
import icoCheck from '~/assets/check.png';

import {
  Container,
  Prod,
  ModUl,
  ModUl2,
  Titulo,
  Titulo2,
  Titulo3,
  Voltar,
  Box1,
} from './styles';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [ativos, setAtivos] = useState(true);

  async function loadAlunos() {
    let response = '';
    if (ativos) response = await api.get("alunos");
    else response = await api.get("alunosinativos");

    console.log('alunos: ', response.data);

    let objAlunos = [];

    response.data.map(a => {
      if (a.nome) objAlunos.push(a);
    });
    setAlunos(objAlunos);
  }

  async function excluirAluno(id) {
    await api.put(`usuariosdel/${id}`);

    alert('Usuário removido com sucesso!');

    loadAlunos();
  }

  async function ativarAluno(id) {
    await api.put(`usuarios/${id}`, {
      ativo: true,
    });

    alert('Usuário ativado com sucesso!');
  }

  function alternarAtivos() {
    setAtivos(true);
  }

  function alternarInativos() {
    setAtivos(false);
  }

  useEffect(() => {
    loadAlunos();
  }, [alunos, ativos]);

  return (
    <Container>
      <Prod>
        <div>
          <Titulo>
            Administrar Alunos {ativos ? 'Ativos' : 'Inativos'}
          </Titulo>

          <Box1>
            {alunos && alunos.map((aluno) => (
              <span key={aluno.id}>
                {/* <img src={icoPlay2} /> */}
                <div>
                  <Titulo3>{aluno.id} - {aluno.nome}</Titulo3>
                  <p>{aluno.email}</p>
                  <small>{aluno.password_hash}</small>
                  {/* <small>Criado em: {aluno.updated_at.split('T')[0].split('-').reverse().join('/')}</small> */}
                </div>
                {ativos ? <>
                  <Link to={`alunos/editar/${aluno.id}`}><img src={icoEdit} /></Link>
                  <Link onClick={() => excluirAluno(aluno.id)}><img src={icoDelete} /></Link>
                </>
                  : <Link onClick={() => ativarAluno(aluno.id)}><img src={icoCheck} /></Link>
                }
              </span>
            ))}
          </Box1>
          <p>
            {ativos ? <Link onClick={() => alternarInativos()}>Ver usuários inativos</Link>
              : <Link onClick={() => alternarAtivos()}>Ver usuários ativos</Link>
            }
          </p>
        </div>
      </Prod>
    </Container>
  );
}
