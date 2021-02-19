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

export default function Exercicio03(props) {
  const [contador, setContador] = useState(0);
  const [contagem, setContagem] = useState(true);
  const [prova, setProva] = useState();
  const [concluido, setConcluido] = useState(false);
  const [exe, setExe] = useState();
  const [subexe, setSubexe] = useState();
  const [apresentacao, setApresentacao] = useState(true);
  const [resultado, setResultado] = useState(false);

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

      // loadProva();

      history.push(`/apostila/${exercicio + 1}/aula/${aula}`);

      // toast.success('Exercício concluído com sucesso!');
    } catch (error) {
      setContagem(true);
      setContador(null);
      history.push(`/apostila/${exercicio + 1}/aula/${aula}`);
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
      (exercicio_id >= 4 && exercicio_id <= 36) ||
      (exercicio_id >= 61 && exercicio_id <= 90) ||
      (exercicio_id >= 92 && exercicio_id <= 109)
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
        {!apresentacao && (
          <div>
            {contador === 1 && <Palavra>{palavra}</Palavra>}
            {exercicio_id <= 71 && contagem && contador > 1 && (
              <ListaProdutos>
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
                <li>
                  <strong>*</strong>
                  {contador === 6 && opcoes[contador - 2]}
                </li>
                <li>
                  <strong>*</strong>
                  {contador === 7 && opcoes[contador - 2]}
                </li>
                <li>
                  <strong>*</strong>
                  {contador === 9 && opcoes[contador - 2]}
                </li>
                <li>
                  <strong>*</strong>
                  {contador === 8 && opcoes[contador - 2]}
                </li>
              </ListaProdutos>
            )}
            {exercicio_id >= 91 && contagem && contador > 1 && (
              <ListaProdutos>
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
                <li>
                  <strong>*</strong>
                  {contador === 6 && opcoes[contador - 2]}
                </li>
                <li>
                  <strong>*</strong>
                  {contador === 7 && opcoes[contador - 2]}
                </li>
              </ListaProdutos>
            )}
            {!contagem && (
              <div>
                <button onClick={() => loadResposta(1)}>Sim</button>
                <button onClick={() => loadResposta(0)}>Não</button>
              </div>
            )}
            {contador === 0 &&
              (exercicio_id === 3 ||
                exercicio_id === 60 ||
                exercicio_id === 91) && (
                <button onClick={() => loadContador(1)}>Iniciar</button>
              )}
            {/* {concluido && (
              <Strong>
                Concluído <img src={icoConcluido} alt="Exercício concluído" />
              </Strong>
            )}

            {!concluido && (
              <small>
                *A nota será contabilizada após a conclusão do exercício. <br />
              </small>
            )}
            {concluido && (
              <small>*A nota deste exercício já foi contabilizada.</small>
            )}
            <div>
              <Link
                onClick={() => loadProximo()}
                to={`/apostila/${exercicio + 1}`}
              >
                Próximo &raquo;
              </Link>
            </div> */}
          </div>
        )}
        <div> </div>
      </Prod>
    </>
  );
}
