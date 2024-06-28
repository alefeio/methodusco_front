import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import socketio from 'socket.io-client';

import api from '~/services/api';

import Barra from '~/components/Barra';

import { Container, Prod, Contact, Voltar, Titulo } from './styles';

const schema = Yup.object().shape({
  assunto: Yup.string(),
  mensagem: Yup.string().required('Campo obrigatório!'),
});

export default function Suporte(props) {
  const [perfil, setPerfil] = useState();
  const [filtro, setFiltro] = useState(false);
  const [chamados, setChamado] = useState([]);
  const [chamadosnaolidos, setChamadosnaolidos] = useState([]);

  const perf = useSelector((state) => state.usuario);

  const socket = useMemo(
    () =>
      // socketio('http://localhost:3333', {
      socketio('http://157.245.215.207', {
        query: {
          usuario_id: perf.perfil.id,
        },
      }),
    [perf.perfil.id]
  );

  let i = false;

  async function handleSubmit({ assunto, mensagem }) {
    try {
      await api.post('chamados', {
        assunto,
        mensagem,
      });

      loadChamados();

      toast.success(
        'Obrigado! Seu chamado foi criado com sucesso. Em breve retornaremos.'
      );
    } catch (error) {
      toast.error('Erro ao criar seu chamado. Tente novamente!');
    }
  }

  async function loadChamados(usuario_id = null) {
    let response = '';
    if (perf.perfil.admin) {
      if(!usuario_id) {
        setFiltro(false);
        response = await api.get('chamadosadmin');
      } else {
        setFiltro(true);
        response = await api.get(`chamadosadminfiltro/${usuario_id}`);
      }
    } else {
      response = await api.get('chamados');
    }

    console.log('chamados: ', response.data);

    setChamado(response.data);

    response.data.map((r) => {
      loadRespostas(r.id);
    });
  }

  async function loadRespostas(id) {
    const response = await api.put('respostaschamados', {
      chamado_id: id,
    });

    response.data.map((r) => {
      if (!r.lido && r.usuario_id !== perf.perfil.id)
        setChamadosnaolidos((cnl) => [...cnl, id]);
    });
  }

  useEffect(() => {
    async function loadPerfil() {
      setPerfil(perf.perfil);
    }

    loadPerfil();
    loadChamados();
  }, []);

  useEffect(() => {
    socket.on('resposta', (resposta) => {
      loadChamados();

      return () => {
        socket.disconnect();
      };
    });
  }, [socket, chamadosnaolidos]);

  return (
    <Container>
      <Voltar>
        <ul>
          <li>
            <Link to="/dashboard">
              <small>Home</small>
            </Link>
          </li>
          <li>|</li>
          <li>
            <small>Suporte Técnico</small>
          </li>
        </ul>

        <a href="javascript:history.back()">
          <small>&laquo; Voltar</small>
        </a>
      </Voltar>
      <Prod>
        <div>
          <Titulo>Suporte Técnico</Titulo>
        </div>
        <div>
          {filtro && <Link onClick={() => loadChamados()}>Retirar filtro</Link>}
        </div>
        <div>
          <div>
            <br />
            <div>
              <h2>Chamados em andamento</h2>
              <ul>
                {chamados.map(
                  (c) =>
                    c.concluido === false && (
                      <li key={c.id}>
                        {perfil && perfil.admin && <Link onClick={() => loadChamados(c.usuario_id)}>{c.usuario.nome} - </Link>} 
                        <Link to={`/chamado/${c.id}`}>{c.assunto}</Link>
                        {chamadosnaolidos.map((nl) => {
                          if (nl === c.id) i = true;
                        })}
                        {i && (
                          <>
                            <small>N</small>
                            <span>{(i = false)}</span>
                          </>
                        )}
                      </li>
                    )
                )}
              </ul>
            </div>
            <div>
              <h2>Chamados concluídos</h2>
              <ul>
                {chamados.map(
                  (c) =>
                    c.concluido === true && (
                      <li key={c.id}>
                        {perfil && perfil.admin && <Link onClick={() => loadChamados(c.usuario_id)}>{c.usuario.nome} - </Link>}
                        <Link to={`/chamado/${c.id}`}>{c.assunto}</Link>
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
          {perfil && !perfil.admin && (
            <div>
              <Contact>
                <h2>Novo chamado</h2>
                <p>
                  Crie um novo chamado abaixo com a sua dúvida. Responderemos o
                  mais breve possível.
                </p>
                <Form schema={schema} onSubmit={handleSubmit}>
                  <Input name="assunto" placeholder="Assunto" />
                  <Textarea
                    name="mensagem"
                    placeholder="Descreva seu problema"
                  />

                  <button type="submit">Criar chamado</button>
                </Form>
              </Contact>
            </div>
          )}
        </div>
      </Prod>
    </Container>
  );
}
