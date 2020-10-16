import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import {
  updateProvaRequest,
  updateRespostaRequest,
} from '~/store/modules/usuario/actions';

import Barra from '~/components/Barra';

import {
  Prod,
  ListaProdutos,
  Strong,
  Circulo,
  Direita,
  Cima,
  Baixo,
  Voltar,
} from './styles';

import api from '~/services/api';

import icoConcluido from '~/assets/ico-concluido.jpg';

export default function Exercicio04(props) {
  const [contador, setContador] = useState(0);
  const [contagem, setContagem] = useState(true);
  const [prova, setProva] = useState();
  const [concluido, setConcluido] = useState(false);
  const [apresentacao, setApresentacao] = useState(true);

  const isMountedRef = useRef(null);

  const { ex, exercicio, pergunta, palavra } = props;

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
      // await api.post('resposta', {
      //   resposta: 0,
      //   prova_id: prova.id,
      //   exercicio_id,
      // });

      // const response = await api.get(`provas`);

      // setProva(response.data);
      // dispatch(updateProvaRequest(response.data));
      // dispatch(updateRespostaRequest(exercicio_id));

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
    const c16 = setInterval(() => {
      if (i === palavra.length + 1) {
        if (isMountedRef.current) loadResposta();
        setContagem(false);
        isMountedRef.current = false;
        return clearInterval(c16);
      }

      setContador(i);
      i += 1;

      if (!isMountedRef.current) return clearInterval(c16);
    }, 180);
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
        </ul>

        <a href="javascript:history.back()">
          <small>&laquo; Voltar</small>
        </a>
      </Voltar>
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
                {contador >= 1 && contador <= 6 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 6 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 5 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 3 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 4 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 2 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 1 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 7 && contador <= 12 && (
                  <>
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
                      {contador === 9 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 10 && palavra[contador - 1]}
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
                {contador >= 13 && contador <= 18 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 18 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 17 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 15 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 16 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 14 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 13 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 19 && contador <= 24 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 24 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 23 && palavra[contador - 1]}
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
                      {contador === 20 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 19 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 25 && contador <= 30 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 30 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 29 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 27 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 28 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 26 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 25 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 31 && contador <= 36 && (
                  <>
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
                      {contador === 33 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 34 && palavra[contador - 1]}
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
                {contador >= 37 && contador <= 42 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 42 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 41 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 39 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 40 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 38 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 37 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 43 && contador <= 48 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 48 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 47 && palavra[contador - 1]}
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
                      {contador === 44 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 43 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 49 && contador <= 54 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 54 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 53 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 51 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 52 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 50 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 49 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 55 && contador <= 60 && (
                  <>
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
                      {contador === 57 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 58 && palavra[contador - 1]}
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

                {contador >= 61 && contador <= 66 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 66 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 65 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 63 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 64 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 62 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 61 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 67 && contador <= 72 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 72 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 71 && palavra[contador - 1]}
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
                      {contador === 68 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 67 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 73 && contador <= 78 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 78 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 77 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 75 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 76 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 74 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 73 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 79 && contador <= 84 && (
                  <>
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
                      {contador === 81 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 82 && palavra[contador - 1]}
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
                {contador >= 85 && contador <= 90 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 90 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 89 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 87 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 88 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 86 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 85 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 91 && contador <= 96 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 96 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 95 && palavra[contador - 1]}
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
                      {contador === 92 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 91 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 97 && contador <= 102 && (
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
                  </>
                )}
                {contador >= 103 && contador <= 108 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 103 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 104 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 106 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 105 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 107 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 108 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 109 && contador <= 114 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 109 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 110 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 112 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 111 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 113 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 114 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 115 && contador <= 120 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 115 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 116 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 118 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 117 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 119 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 120 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 121 && contador <= 126 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 121 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 122 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 124 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 123 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 125 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 126 && palavra[contador - 1]}
                    </li>
                  </>
                )}

                {contador >= 127 && contador <= 132 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 127 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 128 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 130 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 129 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 131 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 132 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 133 && contador <= 138 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 133 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 134 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 136 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 135 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 137 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 138 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 139 && contador <= 144 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 139 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 140 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 142 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 141 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 143 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 144 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 145 && contador <= 150 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 145 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 146 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 148 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 147 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 149 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 150 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 151 && contador <= 156 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 151 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 152 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 154 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 153 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 155 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 156 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 157 && contador <= 162 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 157 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 158 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 160 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 159 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 161 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 162 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 163 && contador <= 168 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 163 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 164 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 166 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 165 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 167 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 168 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 169 && contador <= 174 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 169 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 170 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 172 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 171 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 173 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 174 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 175 && contador <= 180 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 175 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 176 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 178 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 177 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 179 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 180 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 181 && contador <= 186 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 181 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 182 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 184 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 183 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 185 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 186 && palavra[contador - 1]}
                    </li>
                  </>
                )}
                {contador >= 187 && contador <= 192 && (
                  <>
                    <li>
                      <strong>*</strong>
                      {contador === 187 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 188 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 190 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 189 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 191 && palavra[contador - 1]}
                    </li>
                    <li>
                      <strong>*</strong>
                      {contador === 192 && palavra[contador - 1]}
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

            {concluido && !contador && !contagem && (
              <div>
                <Link onClick={() => loadProximo()} to="/apostila/37">
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
