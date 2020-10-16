import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import history from '~/services/history';

import {
  updateProvaRequest,
  updateRespostaRequest,
} from '~/store/modules/usuario/actions';

import Barra from '~/components/Barra';

import { Prod, ListaProdutos, Strong } from './styles';

import api from '~/services/api';

import icoConcluido from '~/assets/ico-concluido.jpg';

export default function Opcoes02(props) {
  const [contador, setContador] = useState(0);
  const [contagem, setContagem] = useState(true);
  const [prova, setProva] = useState();
  const [concluido, setConcluido] = useState(false);
  const [opcao, setOpcao] = useState();
  const [apresentacao, setApresentacao] = useState(true);
  const [resultado, setResultado] = useState(false);
  const [resultadoparcial, setResultadoparcial] = useState(false);

  const isMountedRef = useRef(null);

  const { ex, exercicio, pergunta, palavra, opcoes } = props;

  const exercicio_id = parseInt(exercicio);

  const dispatch = useDispatch();

  const resp = useSelector((state) => state.usuario);

  let left = 'center';
  let top = 50;

  if (contador === 2) {
    left = 'right';
    top = 80;
  }
  if (contador === 3) {
    left = 'center';
    top = 10;
  }
  if (contador === 4) {
    left = 'center';
    top = 90;
  }
  if (contador === 5) {
    left = 'right';
    top = 50;
  }
  if (contador === 6) {
    left = 'left';
    top = 10;
  }
  if (contador === 7) {
    left = 'center';
    top = 10;
  }
  if (contador === 8) {
    left = 'right';
    top = 80;
  }
  if (contador === 9) {
    left = 'left';
    top = 55;
  }
  if (contador === 10) {
    left = 'left';
    top = 85;
  }
  if (contador === 11) {
    left = 'center';
    top = 15;
  }
  if (contador === 12) {
    left = 'right';
    top = 65;
  }
  if (contador === 13) {
    left = 'left';
    top = 30;
  }
  if (contador === 14) {
    left = 'right';
    top = 30;
  }
  if (contador === 15) {
    left = 'left';
    top = 80;
  }
  if (contador === 16) {
    left = 'right';
    top = 70;
  }
  if (contador === 17) {
    left = 'left';
    top = 20;
  }
  if (contador === 18) {
    left = 'center';
    top = 80;
  }
  if (contador === 19) {
    left = 'right';
    top = 5;
  }
  if (contador === 20) {
    left = 'right';
    top = 80;
  }
  if (contador === 21) {
    left = 'center';
    top = 10;
  }
  if (contador === 22) {
    left = 'center';
    top = 90;
  }
  if (contador === 23) {
    left = 'right';
    top = 50;
  }
  if (contador === 24) {
    left = 'left';
    top = 10;
  }
  if (contador === 25) {
    left = 'center';
    top = 10;
  }

  function loadContador(max) {
    let i = contador;
    let j = 0;
    const interval = setInterval(() => {
      setContagem(true);
      setOpcao(opcoes[j]);

      if (j === max) {
        setContagem(false);
        isMountedRef.current = false;
        return clearInterval(interval);
      }

      i += 1;
      if (i > 1) j += 1;
      setContador(i);

      if (!isMountedRef.current) return clearInterval(interval);
    }, 250);
  }

  async function loadProva() {
    const response = await api.get(`provas`);

    setProva(response.data);
    dispatch(updateProvaRequest(response.data));

    setResultadoparcial(response.data.percepcao01);

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

  async function loadResposta(res) {
    try {
      await api.post('resposta', {
        resposta: res,
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

      setTimeout(() => {
        history.push(`/percepcaovisual/${exercicio + 1}`);
      }, 300);

      // toast.success('Exercício concluído com sucesso!');
    } catch (error) {
      setContagem(true);
      setContador(null);

      setTimeout(() => {
        history.push(`/percepcaovisual/${exercicio + 1}`);
      }, 300);
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

  useEffect(() => {
    isMountedRef.current = true;

    if (exercicio_id === 203) setApresentacao(true);

    setTimeout(() => setApresentacao(false), 2000);

    setConcluido(false);
    setContador(0);
    setContagem(true);

    if (isMountedRef.current) loadProva();

    if (exercicio_id !== 203) loadContador(opcoes.length);

    return () => {
      isMountedRef.current = false;
    };
  }, [exercicio, opcoes]);

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
        {apresentacao && (
          <div>
            <h2>{pergunta}</h2>
          </div>
        )}
        {!apresentacao && (
          <div>
            {contagem && contador === 1 && (
              <ListaProdutos>
                <li> </li>
                <li> </li>
                <li> </li>
                <li> </li>
                <li>
                  <span>{palavra}</span>
                </li>
                <li> </li>
                <li> </li>
                <li> </li>
                <li> </li>
              </ListaProdutos>
            )}
            {contagem && contador > 1 && (
              <ListaProdutos left={left} top={top}>
                <strong>{opcao}</strong>
                <li> </li>
                <li> </li>
                <li> </li>
                <li> </li>
                <li>
                  <span>*</span>
                </li>
                <li> </li>
                <li> </li>
                <li> </li>
                <li> </li>
              </ListaProdutos>
            )}
            {!contagem && (
              <div>
                <button onClick={() => loadResposta(1)}>Sim</button>
                <button onClick={() => loadResposta(0)}>Não</button>
              </div>
            )}
            {contador === 0 && exercicio_id === 203 && (
              <>
                <button onClick={() => loadContador(opcoes.length)}>
                  Iniciar
                </button>
              </>
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

            {exercicio === 206 && (
              <div>
                <Strong>
                  Exercício Concluído{' '}
                  <img src={icoConcluido} alt="Exercício concluído" />
                </Strong>
              </div>
            )}
          </div>
        )}
        <div> </div>
      </Prod>
    </>
  );
}
