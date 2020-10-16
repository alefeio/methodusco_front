import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import api from '~/services/api';

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
  Red,
} from './styles';

export default function Teste5resultado() {
  const [perfil, setPerfil] = useState();
  const [prova, setProva] = useState();
  const [provafinalizada, setProvafinalizada] = useState();
  const [plm, setPlm] = useState();
  const [pcr, setPcr] = useState(0);
  const [pcm, setPcm] = useState();
  const [horas, setHoras] = useState(0);

  const dispatch = useDispatch();

  // const dadosProva = useSelector((state) => state.usuario.prova);

  const perf = useSelector((state) => state.usuario);

  async function pegarResultado(prova) {
    const response = await api.put('teste', {
      numero: 5,
      prova_id: prova,
    });

    console.log(response.data);

    if (response.data) {
      setPlm(response.data.plm);
      setPcr(response.data.pcr);
      setPcm(response.data.pcm);
      setHoras(response.data.horas);
    }
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

    console.log('Prova: ', response.data);

    setProva(response.data);
    dispatch(updateProvaRequest(response.data));

    const prova_id = response.data ? response.data.id : null;

    pegarResultado(prova_id);
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
            <Link to="/intermediario/aula09">
              <small>Aula 9</small>
            </Link>
          </li>
        </ul>

        <a href="javascript:history.back()">
          <small>&laquo; Voltar</small>
        </a>
      </Voltar>
      <Prod>
        <div>
          <Titulo>TESTE 5 - RESULTADO</Titulo>
          <br />
          <p>
            <strong>
              - PLM (Palavras Lidas por Minuto) = <Red>{plm}</Red>
            </strong>
          </p>
          <p>
            <strong>
              - PCR (Percentual de Compreensão e Retenção) = <Red>{pcr}%</Red>
            </strong>
          </p>
          <p>
            <strong>
              - PCM (Palavras Compreendidas por Minuto) = <Red>{pcm}</Red>
            </strong>
          </p>
          <br />
          <p>
            Você acertou <Red>{pcr}%</Red>. Esse é o seu{' '}
            <strong>Percentual de Compreensão e Retenção (PCR)</strong> quando
            lê a uma velocidade de <Red>{plm}</Red>{' '}
            <strong>palavras por minuto (PLM)</strong>. Isso significa que o seu
            <strong> PCM (Palavras Compreendidas por Minuto)</strong> hoje é{' '}
            <Red>{pcm}</Red>.
          </p>
          <br />
          <p>
            Um livro de 300 páginas, você demoraria <Red>{horas}</Red> horas
            para ler, leria em uma velocidade de
            <Red> {plm}</Red> palavras por minuto, compreenderia e reteria
            <Red> {pcr}%</Red>.
          </p>
        </div>
      </Prod>
    </Container>
  );
}
