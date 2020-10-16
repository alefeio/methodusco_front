import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import socketio from 'socket.io-client';

import api from '~/services/api';

import { Container, Prod, Contact, Voltar, Titulo, Msgs } from './styles';

const schema = Yup.object().shape({
  assunto: Yup.string(),
  mensagem: Yup.string().required('Campo obrigatório!'),
});

export default function Chamado(props) {
  const [perfil, setPerfil] = useState();
  const [chamado, setChamado] = useState([]);
  const [respostas, setResposta] = useState([]);
  const [digitando, setDigitando] = useState(false);

  const id = props.match.params.id;

  const perf = useSelector((state) => state.usuario);

  const socket = useMemo(
    () =>
      socketio('http://localhost:3333', {
        query: {
          usuario_id: perf.perfil.id,
        },
      }),
    [perf.perfil.id]
  );

  async function handleSubmit({ mensagem }) {
    try {
      await api.post('respostaschamados', {
        chamado_id: id,
        mensagem,
      });

      loadRespostas();

      // toast.success(
      //   'Obrigado! Seu chamado foi criado com sucesso. Em breve retornaremos.'
      // );
    } catch (error) {
      toast.error('Erro ao criar seu chamado. Tente novamente!');
    }
  }

  async function loadChamado() {
    const response = await api.get(`chamados/${id}`);

    console.log('chamado: ', response.data);

    setChamado(response.data);
  }

  async function loadRespostas() {
    const response = await api.put('marcarlido', {
      chamado_id: id,
    });

    console.log('respostaschamados: ', response.data);

    setResposta(response.data);
  }

  async function marcarLido() {
    const response = await api.put('marcarlido', {
      chamado_id: id,
    });
  }

  async function finalizarChamado() {
    try {
      const response = await api.put('chamados', {
        id,
      });

      loadChamado();

      toast.success('Chamado finalizado com sucesso!');
    } catch (error) {
      toast.error('Erro ao criar seu chamado. Tente novamente!');
    }
  }

  useEffect(() => {
    async function loadPerfil() {
      setPerfil(perf.perfil);
    }

    loadPerfil();
    loadChamado();
    // marcarLido();
    loadRespostas();
  }, []);

  useEffect(() => {
    loadRespostas();
  }, [respostas.lido]);

  useEffect(() => {
    socket.on('resposta', (resposta) => {
      // marcarLido();
      loadRespostas();

      return () => {
        socket.disconnect();
      };
    });
  }, [socket, respostas]);

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
            <small>Chamado</small>
          </li>
        </ul>

        <a href="javascript:history.back()">
          <small>&laquo; Voltar</small>
        </a>
      </Voltar>
      <Prod>
        <div>
          <Titulo>Chamado nº {id}</Titulo>
          <button onClick={() => finalizarChamado()}>Finalizar chamado</button>
        </div>
        <div>
          <div>
            <Contact onClick={() => loadRespostas()}>
              <h2>Assunto: {chamado.assunto}</h2>
              <h4>Descricao: {chamado.mensagem}</h4>
              {respostas.map((r) =>
                r.usuario_id === perfil.id ? (
                  <Msgs align="right" bg="a9d18e" color="fff" bold="bold">
                    <small>Você em {r.data}:</small>
                    <br />
                    <br />
                    <span>{r.mensagem}</span>
                    <br />
                    <br />
                    {r.lido && <small>Visualizado</small>}
                  </Msgs>
                ) : (
                  <Msgs align="left" bg="fff" color="000" bold="normal">
                    <small>
                      {r.usuario.nome} em {r.data}:
                    </small>
                    <br />
                    <br />
                    <span>{r.mensagem}</span>
                    <br />
                    {!r.lido && <strong>New</strong>}
                  </Msgs>
                )
              )}
              {digitando && (
                <Msgs align="left" bg="fff" color="000" bold="normal">
                  <small>...</small>
                </Msgs>
              )}
              {!chamado.concluido && (
                <div onMouseOut={() => loadRespostas()}>
                  <Form schema={schema} onSubmit={handleSubmit}>
                    <Textarea name="mensagem" placeholder="Mensagem" />
                    <button type="submit">Responder</button>
                  </Form>
                </div>
              )}
            </Contact>
          </div>
        </div>
      </Prod>
    </Container>
  );
}
