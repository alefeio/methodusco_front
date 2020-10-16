import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import {
  updateProvaRequest,
  updateRespostaRequest,
} from '~/store/modules/usuario/actions';

import Barra from '~/components/Barra';

import { Prod, Strong, Strong2, ListaCores } from './styles';

import api from '~/services/api';

import icoConcluido from '~/assets/ico-concluido.jpg';

export default function Cores(props) {
  const [contador, setContador] = useState(0);
  const [contagem, setContagem] = useState(false);
  const [prova, setProva] = useState();
  const [concluido, setConcluido] = useState(false);
  const [opcao, setOpcao] = useState({ cor: '', palavra: '' });
  const [apresentacao, setApresentacao] = useState(true);

  const isMountedRef = useRef(null);

  const { ex, exercicio, pergunta, cor } = props;

  const exercicio_id = parseInt(exercicio);

  const dispatch = useDispatch();

  const resp = useSelector((state) => state.usuario);

  async function loadProva() {
    const response = await api.get(`provas`);

    setProva(response.data);
    dispatch(updateProvaRequest(response.data));

    const prova_id = response.data.id;

    const respostaExiste = await api.get(
      `respostaid?prova_id=${prova_id}&exercicio_id=${exercicio_id}`
    );

    if (respostaExiste.data) {
      setConcluido(true);

      const re = resp.resposta.filter((r) => r === exercicio_id);

      if (!re) dispatch(updateRespostaRequest(exercicio_id));
    }
  }

  async function loadResposta() {
    try {
      await api.post('resposta', {
        resposta: 0,
        prova_id: prova.id,
        exercicio_id,
      });

      const response = await api.get(`provas`);

      setProva(response.data);
      dispatch(updateProvaRequest(response.data));
      dispatch(updateRespostaRequest(exercicio_id));

      setContagem(true);
      setContador(null);
      setConcluido(true);

      // loadProva();

      // toast.success('Exercício concluído com sucesso!');
    } catch (error) {
      setContagem(true);
      setContador(null);
    }
  }

  async function loadProximo() {
    try {
      await api.post('resposta', {
        resposta: 100,
        prova_id: prova.id,
        exercicio_id,
      });

      const response = await api.get(`provas`);

      setProva(response.data);
      dispatch(updateProvaRequest(response.data));
      dispatch(updateRespostaRequest(exercicio_id));

      setContagem(true);

      loadProva();
    } catch (error) {
      setContagem(true);
    }
  }

  function loadContador(max) {
    let i = contador;
    let j = 0;
    if (exercicio === 207) {
      const interval = setInterval(() => {
        setContagem(true);
        setOpcao(cor[j]);

        if (j === max) {
          if (isMountedRef.current) loadResposta();
          setContagem(false);
          isMountedRef.current = false;
          return clearInterval(interval);
        }

        i += 1;
        if (i > 1) j += 1;
        setContador(i);

        if (!isMountedRef.current) return clearInterval(interval);
      }, 400);
    }
    if (exercicio === 241) {
      const interval = setInterval(() => {
        setContagem(true);
        setOpcao(cor[j]);

        if (j === max) {
          if (isMountedRef.current) loadResposta();
          // setContagem(false);
          isMountedRef.current = false;
          return clearInterval(interval);
        }

        i += 1;
        if (i > 1) j += 1;
        setContador(i);

        if (!isMountedRef.current) return clearInterval(interval);
      }, 250);
    }
  }

  useEffect(() => {
    isMountedRef.current = true;

    if (exercicio_id === 207) setApresentacao(true);

    if (exercicio_id === 207) setTimeout(() => setApresentacao(false), 2000);

    setConcluido(false);
    setContador(0);

    if (isMountedRef.current) loadProva();

    if (exercicio_id === 241) loadContador(cor.length);

    return () => {
      isMountedRef.current = false;
    };
  }, [exercicio]);

  return (
    <>
      <Barra
        categoria="Leitura Dinâmica"
        modulo="Exercícios de percepção visual"
        exercicio={exercicio_id}
        nota={prova && prova.nota}
      />
      <Prod>
        <div>
          <h3>{ex}</h3>
        </div>
        {exercicio_id === 207 && apresentacao && (
          <div>
            <h2>{pergunta}</h2>
          </div>
        )}
        {!apresentacao && (
          <div>
            {contagem && contador > 1 && (
              <ListaCores>
                <li>
                  {opcao && <Strong2 cor={opcao.cor}>{opcao.palavra}</Strong2>}
                </li>
              </ListaCores>
            )}
            {exercicio_id === 207 && contador === 0 && (
              <button onClick={() => loadContador(cor.length)}>Iniciar</button>
            )}
            {/* {concluido && (
              <Strong>
                Concluído <img src={icoConcluido} alt="Exercício concluído" />
              </Strong>
            )}

            {!concluido && (
              <small>
                *A nota será contabilizada após a conclusão do exercício. <br />
                ** Ao clicar em próximo sem responder, a questão será
                contabilizada como errada.
              </small>
            )}
            {concluido && (
              <small>*A nota deste exercício já foi contabilizada.</small>
            )} */}
            {isMountedRef.current === false &&
              (exercicio === 207 || exercicio === 241) && (
                <div>
                  {exercicio === 207 && (
                    <Link
                      onClick={() => loadProximo()}
                      to="/percepcaovisual/241"
                    >
                      Próximo &raquo;
                    </Link>
                  )}
                  {contagem && !contador && exercicio === 241 && (
                    <Link onClick={() => loadProximo()} to="/dashboard">
                      &laquo; Voltar para Home
                    </Link>
                  )}
                </div>
              )}
          </div>
        )}
        <div> </div>
      </Prod>
    </>
  );
}
