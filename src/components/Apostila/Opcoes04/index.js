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

import { Prod, ListaProdutos, Strong, Palavra, Voltar } from './styles';

import api from '~/services/api';

import icoConcluido from '~/assets/ico-concluido.jpg';

export default function Opcoes04(props) {
  const [contador, setContador] = useState(0);
  const [contagem, setContagem] = useState(true);
  const [prova, setProva] = useState();
  const [concluido, setConcluido] = useState(false);
  const [exe, setExe] = useState();
  const [subexe, setSubexe] = useState();
  const [apresentacao, setApresentacao] = useState(true);
  const [resultado, setResultado] = useState(false);
  const [resultadoparcial, setResultadoparcial] = useState(false);

  const isMountedRef = useRef(null);

  const { ex, exercicio, pergunta, palavra, opcoes, aula } = props;

  const exercicio_id = parseInt(exercicio);

  const dispatch = useDispatch();

  const resp = useSelector((state) => state.usuario);

  async function loadExe() {
    const response = await api.get(`exercicios/${exercicio_id}`);

    setExe(response.data.questao);
    setSubexe(response.data.subquestao);
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

      setContador(null);

      loadProva();

      if (exercicio_id === 36 || exercicio_id === 119)
      return setResultado(true);

      if (exercicio_id !== 36 && exercicio_id < 119) {
        setTimeout(() => {
          history.push(`/apostila/${exercicio + 1}/aula/${aula}`);
        }, 300);
      }

      // toast.success('Exercício concluído com sucesso!');
    } catch (error) {
      setContador(null);

      if (exercicio_id === 36 || exercicio_id === 119)
        return setResultado(true);

      if (exercicio_id !== 36 && exercicio_id < 119) {
        setTimeout(() => {
          history.push(`/apostila/${exercicio + 1}/aula/${aula}`);
        }, 300);
      }
    }
  }

  function loadContador(num) {
    let i = num;
    setContagem(true);
    const c16 = setInterval(() => {
      if (i > opcoes.length + 1) {
        setContagem(false);
        isMountedRef.current = false;
        return clearInterval(c16);
      }

      setContador(i);
      i += 1;

      if (!isMountedRef.current) return clearInterval(c16);
    }, 200);
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

      loadProva();
    } catch (error) {
      console.tron.log(error);
    }
  }

  useEffect(() => {
    isMountedRef.current = true;

    setTimeout(() => setApresentacao(false), 2000);

    setConcluido(false);
    setContador(0);
    setContagem(true);

    if (isMountedRef.current) loadProva();

    loadExe();

    if (
      (exercicio_id >= 20 && exercicio_id <= 36) ||
      (exercicio_id >= 73 && exercicio_id <= 90) ||
      (exercicio_id >= 111 && exercicio_id <= 119)
    )
      loadContador(1);

    return () => {
      isMountedRef.current = false;
    };
  }, [exercicio]);

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
            {contador === 1 && <Palavra>{palavra}</Palavra>}

            {exercicio_id <= 71 && contagem && contador > 1 && contador < 6 && (
              <ListaProdutos>
                <>
                  <li>
                    <strong>*</strong>
                    {contador === 2 && opcoes[contador - 2]}
                  </li>
                  <li>
                    <strong>*</strong>
                    {contador === 3 && opcoes[contador - 2]}
                  </li>
                  <li>
                    <strong>*</strong>
                    {contador === 5 && opcoes[contador - 2]}
                  </li>
                  <li>
                    <strong>*</strong>
                    {contador === 4 && opcoes[contador - 2]}
                  </li>
                </>
              </ListaProdutos>
            )}

            {exercicio_id >= 72 && contagem && contador > 1 && contador < 6 && (
              <ListaProdutos>
                <>
                  <li>
                    <strong>*</strong>
                    {contador === 4 && opcoes[contador - 2]}
                  </li>
                  <li>
                    <strong>*</strong>
                    {contador === 5 && opcoes[contador - 2]}
                  </li>
                  <li>
                    <strong>*</strong>
                    {contador === 3 && opcoes[contador - 2]}
                  </li>
                  <li>
                    <strong>*</strong>
                    {contador === 2 && opcoes[contador - 2]}
                  </li>
                </>
              </ListaProdutos>
            )}

            {/* {exercicio_id <= 71 && contagem && contador === null && (
              <ListaProdutos>
                <>
                  <li>
                    <strong>*</strong>
                    {opcoes[0] === palavra && (
                      <span>
                        {opcoes[0]}
                        <img src={icoConcluido} alt="Exercício concluído" />
                      </span>
                    )}
                  </li>
                  <li>
                    <strong>*</strong>
                    {opcoes[1] === palavra && (
                      <span>
                        {opcoes[1]}
                        <img src={icoConcluido} alt="Exercício concluído" />
                      </span>
                    )}
                  </li>
                  <li>
                    <strong>*</strong>
                    {opcoes[3] === palavra && (
                      <span>
                        {opcoes[3]}
                        <img src={icoConcluido} alt="Exercício concluído" />
                      </span>
                    )}
                  </li>
                  <li>
                    <strong>*</strong>
                    {opcoes[2] === palavra && (
                      <span>
                        {opcoes[2]}
                        <img src={icoConcluido} alt="Exercício concluído" />
                      </span>
                    )}
                  </li>
                </>
              </ListaProdutos>
            )} */}

            {/* {exercicio_id >= 72 && contagem && contador === null && (
              <ListaProdutos>
                <>
                  <li>
                    <strong>*</strong>
                    {opcoes[2] === palavra && (
                      <span>
                        {opcoes[2]}
                        <img src={icoConcluido} alt="Exercício concluído" />
                      </span>
                    )}
                  </li>
                  <li>
                    <strong>*</strong>
                    {opcoes[3] === palavra && (
                      <span>
                        {opcoes[3]}
                        <img src={icoConcluido} alt="Exercício concluído" />
                      </span>
                    )}
                  </li>
                  <li>
                    <strong>*</strong>
                    {opcoes[1] === palavra && (
                      <span>
                        {opcoes[1]}
                        <img src={icoConcluido} alt="Exercício concluído" />
                      </span>
                    )}
                  </li>
                  <li>
                    <strong>*</strong>
                    {opcoes[0] === palavra && (
                      <span>
                        {opcoes[0]}
                        <img src={icoConcluido} alt="Exercício concluído" />
                      </span>
                    )}
                  </li>
                </>
              </ListaProdutos>
            )} */}

            {!contagem && contador && (
              <ListaProdutos>
                <li>
                  <button onClick={() => loadResposta(1)}>1</button>
                </li>
                <li>
                  <button onClick={() => loadResposta(3)}>3</button>
                </li>
                <li>
                  <button onClick={() => loadResposta(2)}>2</button>
                </li>
                <li>
                  <button onClick={() => loadResposta(4)}>4</button>
                </li>
              </ListaProdutos>
            )}
            {contador === 0 &&
              (exercicio_id === 19 ||
                exercicio_id === 72 ||
                exercicio_id === 110) && (
                <button onClick={() => loadContador(1)}>Iniciar</button>
              )}
            {/* {concluido && (
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
              {resultado && !contador && !contagem && exercicio_id === 36 && (
                <Strong>
                  Exercício Concluído{' '}
                  <img src={icoConcluido} alt="Exercício concluído" />
                </Strong>
              )}
              {resultado && !contador && !contagem && exercicio_id === 90 && (
                <Strong>
                  Exercício Concluído{' '}
                  <img src={icoConcluido} alt="Exercício concluído" />
                </Strong>
              )}
              {resultado && !contador && !contagem && exercicio_id === 119 && (
                <Strong>
                  Exercício Concluído{' '}
                  <img src={icoConcluido} alt="Exercício concluído" />
                </Strong>
              )}
              {/* {!contagem &&
                exercicio_id !== 36 &&
                exercicio_id !== 90 &&
                exercicio_id !== 119 && (
                  <Link
                    onClick={() => loadProximo()}
                    to={`/apostila/${exercicio + 1}`}
                  >
                    Próximo &raquo;
                  </Link>
                )} */}
            </div>
          </div>
        )}
        <div> </div>
      </Prod>
    </>
  );
}
