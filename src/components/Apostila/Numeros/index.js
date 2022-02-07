import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import {
  updateProvaRequest,
  updateRespostaRequest,
} from '~/store/modules/usuario/actions';

import Barra from '~/components/Barra';

import { Prod, ListaProdutos, Strong, Voltar } from './styles';

import api from '~/services/api';

import icoConcluido from '~/assets/ico-concluido.jpg';

export default function Numeros(props) {
  const [contador, setContador] = useState(0);
  const [contagem, setContagem] = useState(true);
  const [prova, setProva] = useState();
  const [concluido, setConcluido] = useState(false);
  const [apresentacao, setApresentacao] = useState(true);

  const isMountedRef = useRef(null);

  const { ex, exercicio, pergunta, palavra, aula } = props;

  const exercicio_id = parseInt(exercicio);

  const dispatch = useDispatch();

  const resp = useSelector((state) => state.usuario);

  async function loadProva() {
    const response = await api.get(`provas2/${aula}`);

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

      const response = await api.get(`provas2/${aula}`);

      setProva(response.data);
      dispatch(updateProvaRequest(response.data));
      dispatch(updateRespostaRequest(exercicio_id));

      setContador(null);
      setConcluido(true);

      loadProva();

      // toast.success('Exercício concluído com sucesso!');
    } catch (error) {
      setContador(null);
    }
  }

  function loadContador(num) {
    let i = num;
    setContagem(true);
    if (i <= 30) {
      const c1 = setInterval(() => {
        setContador(i);
        i += 1;

        if (i === 41) {
          clearInterval(c1);
          return loadContador(i);
        }
      }, 210);
    }

    if (i >= 31 && i <= 60) {
      const c2 = setInterval(() => {
        setContador(i);
        i += 1;

        if (i === 81) {
          clearInterval(c2);
          return loadContador(i);
        }
      }, 170);
    }

    if (i >= 61 && i <= 80) {
      const c3 = setInterval(() => {
        setContador(i);
        i += 1;

        if (i === 111) {
          clearInterval(c3);
          return loadContador(i);
        }
      }, 190);
    }

    if (i >= 81) {
      const c4 = setInterval(() => {
        if (i === palavra.length + 1) {
          // console.log('cheguei aqui.');
          if (isMountedRef.current) {
            // loadResposta();
            setContador(null);
            setConcluido(true);
          }
          setContagem(false);
          isMountedRef.current = false;
          return clearInterval(c4);
        }

        setContador(i);
        i += 1;

        if (!isMountedRef.current) return clearInterval(c4);
      }, 150);
    }
  }

  async function loadProximo() {
    try {
      await api.post('resposta', {
        resposta: 100,
        prova_id: prova.id,
        exercicio_id,
      });

      const response = await api.get(`provas2/${aula}`);

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

    setTimeout(() => setApresentacao(false), 2000);

    setConcluido(false);
    setContador(0);
    setContagem(true);

    if (isMountedRef.current) loadProva();

    return () => {
      isMountedRef.current = false;
    };
  }, []);

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

        <a href="javascript:history.back()">
          <small>&laquo; Voltar</small>
        </a>
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
        {!apresentacao && (
          <div>
            {contagem && contador >= 1 && (
              <ListaProdutos>
                {contador >= 1 && contador <= 8 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 1 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 2 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 4 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 3 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 5 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 6 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 8 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 7 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 9 && contador <= 16 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 9 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 10 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 12 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 11 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 13 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 14 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 16 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 15 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 17 && contador <= 24 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 17 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 18 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 20 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 19 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 21 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 22 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 24 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 23 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 25 && contador <= 32 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 25 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 26 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 28 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 27 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 29 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 30 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 32 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 31 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 33 && contador <= 40 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 33 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 34 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 36 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 35 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 37 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 38 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 40 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 39 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 41 && contador <= 48 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 41 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 42 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 44 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 43 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 45 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 46 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 48 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 47 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 49 && contador <= 56 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 49 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 50 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 52 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 51 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 53 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 54 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 56 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 55 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 57 && contador <= 64 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 57 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 58 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 60 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 59 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 61 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 62 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 63 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 64 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 65 && contador <= 72 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 65 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 66 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 68 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 67 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 69 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 70 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 72 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 71 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 73 && contador <= 80 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 73 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 74 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 76 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 75 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 77 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 78 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 80 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 79 && palavra[contador - 1]}
                    </li>
                  </>
                )}

                {contador >= 81 && contador <= 88 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 81 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 82 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 84 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 83 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 85 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 86 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 88 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 87 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 89 && contador <= 96 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 89 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 90 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 92 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 91 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 93 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 94 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 96 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 95 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 97 && contador <= 104 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 97 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 98 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 100 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 99 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 101 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 102 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 104 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 103 && palavra[contador - 1]}
                    </li>
                  </>
                )}
              </ListaProdutos>
            )}
            {contador === 0 && (
              <button onClick={() => loadContador(1)}>Iniciar</button>
            )}
            {/* {concluido && (
              <Strong>
                Concluído <img src={icoConcluido} alt="Exercício concluído" />
              </Strong>
            )} */}

            {/* {!concluido && (
              <small>
                *A nota será contabilizada após a conclusão do exercício. <br />
                ** Ao clicar em próximo sem responder, a questão será
                contabilizada como errada.
              </small>
            )}
            {concluido && (
              <small>*A nota deste exercício já foi contabilizada.</small>
            )} */}

            {!contador && !contagem && exercicio === 332 && (
              <div>
                <Link
                  onClick={() => loadProximo()}
                  to={`/apostila/3/aula/${aula}`}
                >
                  Próximo &raquo;
                </Link>
              </div>
            )}
            {!contador && !contagem && exercicio === 334 && (
              <div>
                <Link
                  onClick={() => loadProximo()}
                  to={`/apostila/60/aula/${aula}`}
                >
                  Próximo &raquo;
                </Link>
              </div>
            )}
          </div>
        )}
        <div> </div>
      </Prod>
    </>
  );
}
