import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import api from '~/services/api';

import Testerealizado from '~/components/Testerealizado';

import {
  updateProvaRequest,
  // updateEmProvaRequest,
  updateFimProvaRequest,
} from '~/store/modules/usuario/actions';

import icoConcluido from '~/assets/ico-concluido.jpg';

import {
  Container,
  Prod,
  ModUl,
  ModUl2,
  Titulo,
  Titulo2,
  Titulo3,
  Default,
  Danger,
  Ladodireito,
  Box1,
  Voltar,
} from './styles';

export default function Teste6() {
  const [perfil, setPerfil] = useState();
  const [prova, setProva] = useState();
  const [provafinalizada, setProvafinalizada] = useState();
  const [testeconcluido, setTesteconcluido] = useState(false);

  const dispatch = useDispatch();

  // const dadosProva = useSelector((state) => state.usuario.prova);

  const perf = useSelector((state) => state.usuario);

  const aula = 11;

  async function verificarTeste(prova) {
    const response = await api.put('teste', {
      numero: 6,
      prova_id: prova,
    });

    if (response.data) setTesteconcluido(true);
  }

  async function finalizarProva() {
    try {
      await api.delete(`provasaluno/${prova.id}`);

      const response = await api.get(`provasfinalizadas`);

      setProva(null);
      dispatch(updateFimProvaRequest());
      setProvafinalizada(response.data);

      toast.success('Prova finalizada com sucesso!');
    } catch (error) {
      toast.error('Erro ao finalizar a prova. Tente novamente!');
    }
  }

  async function loadProvas() {
    const response = await api.get(`provas`);

    // console.log('Prova: ', response.data);

    setProva(response.data);
    dispatch(updateProvaRequest(response.data));

    const prova_id = response.data ? response.data.id : null;

    verificarTeste(prova_id);
  }

  // function fazerProva() {
  //   dispatch(updateEmProvaRequest());

  //   loadProvas();
  // }

  useEffect(() => {
    async function loadPerfil() {
      setPerfil(perf.perfil);
    }

    loadPerfil();
  }, []);

  useEffect(() => {
    loadProvas();
  }, []);

  useEffect(() => {
    async function loadProvasFinalizadas() {
      const response2 = await api.get(`provasfinalizadas`);

      setProvafinalizada(response2.data);
    }

    loadProvasFinalizadas();
  }, []);

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
            <Link to="/intermediario">
              <small>Intermediário</small>
            </Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/intermediario/aula11">
              <small>Aula 11</small>
            </Link>
          </li>
        </ul>

        <a href="javascript:history.back()">
          <small>&laquo; Voltar</small>
        </a>
      </Voltar>
      <Prod>
        <div>
          <Titulo>TESTE 6</Titulo>
          <br />
          {testeconcluido ? (
            <Testerealizado />
          ) : (
            <>
              <p>
                Agora você irá fazer o <strong>Teste 6</strong> para avaliar o seu progresso ao
                longo do curso.
              </p>
              <br />
              <p>Os testes têm por objetivos:</p>
              <ul>
                <li>medir a velocidade <strong>(Palavras Lidas por Minuto - PLM)</strong></li>
                <li>
                  o quanto compreende <strong>(Percentual de Compreensão e Retenção -
                  PCR)</strong>
                </li>
                <li>e quantas <strong>(Palavras Compreende por Minuto - PCM)</strong></li>
              </ul>
              <br />
              <p>
                Leia o texto como você sempre leu. Demore o tempo que precisar. Em
            seguida, clique em <strong>Responder as Perguntas</strong> sobre o conteúdo do texto.
              </p>
            </>
          )}
          <br />
          <div>
            <Default>
              {!testeconcluido ? (
                <Link to="/intermediario/teste6/avaliacao">INICIAR</Link>
              ) : (
                <Link to="/intermediario/teste6/resultado">VER RESULTADO</Link>
              )}
            </Default>
          </div>
        </div>
      </Prod>
    </Container>
  );
}
