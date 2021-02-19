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

import { Prod, ListaProdutos, Strong, Voltar } from './styles';

import api from '~/services/api';

import icoConcluido from '~/assets/ico-concluido.jpg';

export default function Sortidas(props) {
  const [contador, setContador] = useState(0);
  const [contagem, setContagem] = useState(true);
  const [prova, setProva] = useState();
  const [concluido, setConcluido] = useState(false);
  const [opcao, setOpcao] = useState();
  const [apresentacao, setApresentacao] = useState(true);
  const [resultado, setResultado] = useState(false);
  const [resultadoparcial, setResultadoparcial] = useState(false);

  const isMountedRef = useRef(null);

  const { ex, exercicio, pergunta, palavra, opcoes, aula } = props;

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
    const response = await api.get(`provas2/${aula}`);

    setProva(response.data);
    dispatch(updateProvaRequest(response.data));

    if (exercicio_id === 1) setResultadoparcial(response.data.monitor01);
    if (exercicio_id === 2) setResultadoparcial(response.data.monitor02);
    if (exercicio_id === 332 || (exercicio_id >= 3 && exercicio_id <= 36))
      setResultadoparcial(response.data.monitor03);
    if (exercicio_id === 333 || (exercicio_id >= 37 && exercicio_id <= 59))
      setResultadoparcial(response.data.monitor04);
    if (exercicio_id >= 60 && exercicio_id <= 90)
      setResultadoparcial(response.data.monitor05);
    if (exercicio_id >= 91 && exercicio_id <= 119)
      setResultadoparcial(response.data.monitor06);
    if (exercicio_id >= 120 && exercicio_id <= 150)
      setResultadoparcial(response.data.monitor07);
    if (exercicio_id >= 151 && exercicio_id <= 177)
      setResultadoparcial(response.data.monitor08);

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

      const response = await api.get(`provas2/${aula}`);

      setProva(response.data);
      dispatch(updateProvaRequest(response.data));
      dispatch(updateRespostaRequest(exercicio_id));

      setContagem(true);
      setContador(null);
      setConcluido(true);

      loadProva();

      if (exercicio_id === 177) return setResultado(true);

      if (exercicio_id < 177) {
        setTimeout(() => {
          history.push(`/apostila/${exercicio + 1}/aula/${aula}`);
        }, 300);
      }

      // toast.success('Exercício concluído com sucesso!');
    } catch (error) {
      setContagem(true);
      setContador(null);

      if (exercicio_id === 177) return setResultado(true);

      if (exercicio_id < 177) {
        setTimeout(() => {
          history.push(`/apostila/${exercicio + 1}/aula/${aula}`);
        }, 300);
      }
    }
  }

  async function loadProximo() {
    try {
      // await api.post('resposta', {
      //   resposta: 100,
      //   prova_id: prova.id,
      //   exercicio_id,
      // });

      // const response = await api.get(`provas2/${aula}`);

      // setProva(response.data);
      // dispatch(updateProvaRequest(response.data));
      // dispatch(updateRespostaRequest(exercicio_id));

      setContagem(true);

      loadProva();
    } catch (error) {
      setContagem(true);
    }
  }

  useEffect(() => {
    isMountedRef.current = true;

    setTimeout(() => setApresentacao(false), 2000);

    setConcluido(false);
    setContador(0);
    setContagem(true);

    if (isMountedRef.current) loadProva();

    if (exercicio_id >= 175 && exercicio_id <= 177) loadContador(opcoes.length);

    return () => {
      isMountedRef.current = false;
    };
  }, [exercicio, opcoes]);

  return (
    <>
      <Voltar>
        <ul>
          <li>
            <Link to="/dashboard">
              <small>Home</small>
            </Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/basico">
              <small>Módulo Básico</small>
            </Link>
          </li>
          <li>|</li>
          <li>
            <Link to={`/basico/aula0${aula}`}>
              <small>Aula 0{aula}</small>
            </Link>
          </li>
        </ul>
      </Voltar>
      {/* <Barra exercicio={exercicio_id} nota={prova && prova.nota} /> */}
      <Prod>
        <div>
          <h3>{ex}</h3>
        </div>
        {apresentacao && (
          <div>
            <h2>{pergunta}</h2>
          </div>
        )}
        {resultado && (
          <div>
            <h2>Resultado: {resultadoparcial.toFixed(1)}%</h2>
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
                <span>{palavra}</span>
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
                <span>*</span>
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
            {exercicio_id === 174 && contador === 0 && (
              <div>
                <button onClick={() => loadContador(opcoes.length)}>
                  Iniciar
                </button>
              </div>
            )}
            {/* {!contagem && concluido && (
              <Strong>
                Concluído <img src={icoConcluido} alt="Exercício concluído" />
              </Strong>
            )}

            {!contagem && !concluido && (
              <small>
                *A nota será contabilizada após a conclusão do exercício. <br />
                ** Ao clicar em próximo sem responder, a questão será
                contabilizada como errada.
              </small>
            )}
            {!contagem && concluido && (
              <small>*A nota deste exercício já foi contabilizada.</small>
            )} */}

            <div>
              {resultado && !contador && exercicio_id === 177 && (
                <Strong>
                  Exercício Concluído{' '}
                  <img src={icoConcluido} alt="Exercício concluído" />
                </Strong>
              )}
            </div>
          </div>
        )}
        <div> </div>
      </Prod>
    </>
  );
}
