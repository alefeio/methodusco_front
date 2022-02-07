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
} from './styles';

export default function Intermediario() {
  const [perfil, setPerfil] = useState();
  const [prova, setProva] = useState();
  const [provafinalizada, setProvafinalizada] = useState([]);
  const [aula6, setAula6] = useState(false);
  const [aula7, setAula7] = useState(false);
  const [aula8, setAula8] = useState(false);
  const [aula9, setAula9] = useState(false);
  const [aula10, setAula10] = useState(false);
  const [teste1, setTeste1] = useState(false);
  const [teste2, setTeste2] = useState(false);
  const [teste3, setTeste3] = useState(false);
  const [teste4, setTeste4] = useState(false);
  const [teste5, setTeste5] = useState(false);

  const dispatch = useDispatch();

  // const dadosProva = useSelector((state) => state.usuario.prova);

  const perf = useSelector((state) => state.usuario);

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

    const testes = await api.put(`testealuno/${response.data.id}`);

    testes.data.map(t => {
      // console.log(`t: `, t);

      if (t.numero === 1) setTeste1(true);
      if (t.numero === 2) setTeste2(true);
      if (t.numero === 3) setTeste3(true);
      if (t.numero === 4) setTeste4(true);
      if (t.numero === 5) setTeste5(true);
    });

    // console.log('Prova: ', response.data);

    const dataAtual = new Date();
    let tempoa6 = response.data.inicioa6;
    if (tempoa6) tempoa6 = new Date(tempoa6).setHours(new Date(tempoa6).getHours() + 120);
    let tempoa7 = response.data.inicioa7;
    if (tempoa7) tempoa7 = new Date(tempoa7).setHours(new Date(tempoa7).getHours() + 240);
    let tempoa8 = response.data.inicioa8;
    if (tempoa8) tempoa8 = new Date(tempoa8).setHours(new Date(tempoa8).getHours() + 480);
    let tempoa9 = response.data.inicioa9;
    if (tempoa9) tempoa9 = new Date(tempoa9).setHours(new Date(tempoa9).getHours() + 10);
    let tempoa10 = response.data.inicioa10;
    if (tempoa10) tempoa10 = new Date(tempoa10).setHours(new Date(tempoa10).getHours() + 720);

    if (tempoa6 && dataAtual > tempoa6) {
      await api.put(`provasaluno/${response.data.id}`, {
        aula06: true,
      });
      setAula6(true);
    }

    if (tempoa7 && dataAtual > tempoa7) {
      await api.put(`provasaluno/${response.data.id}`, {
        aula07: true,
      });
      setAula7(true);
    }

    if (tempoa8 && dataAtual > tempoa8) {
      await api.put(`provasaluno/${response.data.id}`, {
        aula08: true,
      });
      setAula8(true);
    }

    if (tempoa9 && dataAtual > tempoa9) {
      await api.put(`provasaluno/${response.data.id}`, {
        aula09: true,
      });
      setAula9(true);
    }

    if (tempoa10 && dataAtual > tempoa10) {
      await api.put(`provasaluno/${response.data.id}`, {
        aula10: true,
      });
      setAula10(true);
    }

    setProva(response.data);
    dispatch(updateProvaRequest(response.data));

    const prova_id = response.data ? response.data.id : null;
  }

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
            <small>Módulo Intermediário</small>
          </li>
        </ul>

        <a href="javascript:history.back()">
          <small>&laquo; Voltar</small>
        </a>
      </Voltar>
      <Prod>
        <div>
          <Titulo>MÓDULO INTERMEDIÁRIO</Titulo>
          <Titulo2>
            Sedimentando Paradigmas da Leitura
            <br />
            <small>(duração recomendada: 2 meses)</small>
          </Titulo2>

          <br />
          {!provafinalizada.length ? <div>
            <Default>
              {provafinalizada && prova && aula6 ? <Link to="/intermediario/aula07">
                Aula <span>07</span>
              </Link> : <p>Aula <span>07</span></p>}
            </Default>
            <Default>
              {provafinalizada && prova && aula7 ? <Link to="/intermediario/aula08">
                Aula <span>08</span>
              </Link> : <p>Aula <span>08</span></p>}
            </Default>
            <Default>
              {provafinalizada && prova && aula8 ? <Link to="/intermediario/aula09">
                Aula <span>09</span>
              </Link> : <p>Aula <span>09</span></p>}
            </Default>
            <Default>
              {provafinalizada && prova && teste1 && teste2 && teste3 && teste4 && teste5 ? <Link to="/intermediario/aula10">
                Aula <span>10</span>
              </Link> : <p>Aula <span>10</span></p>}
            </Default>
            <Default>
              {provafinalizada && prova && aula10 ? <Link to="/intermediario/aula11">
                Aula <span>11</span>
              </Link> : <p>Aula <span>11</span></p>}
            </Default>
          </div> : <div>
            <Default>
              <Link to="/intermediario/aula07">
                Aula <span>07</span>
              </Link>
            </Default>
            <Default>
              <Link to="/intermediario/aula08">
                Aula <span>08</span>
              </Link>
            </Default>
            <Default>
              <Link to="/intermediario/aula09">
                Aula <span>09</span>
              </Link>
            </Default>
            <Default>
              <Link to="/intermediario/aula10">
                Aula <span>10</span>
              </Link>
            </Default>
            <Default>
              <Link to="/intermediario/aula11">
                Aula <span>11</span>
              </Link>
            </Default>
          </div>}
        </div>
      </Prod>
    </Container>
  );
}
