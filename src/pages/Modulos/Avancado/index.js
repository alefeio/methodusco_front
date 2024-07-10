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
  const [aula11, setAula11] = useState(false);
  const [aula12, setAula12] = useState(false);
  const [aula13, setAula13] = useState(false);
  const [aula14, setAula14] = useState(false);
  const [aula15, setAula15] = useState(false);
  const [aula16, setAula16] = useState(false);
  const [teste6, setTeste6] = useState(false);
  const [teste7, setTeste7] = useState(false);
  const [teste8, setTeste8] = useState(false);
  const [teste9, setTeste9] = useState(false);
  const [teste10, setTeste10] = useState(false);
  const [teste11, setTeste11] = useState(false);
  const [teste12, setTeste12] = useState(false);
  const [teste13, setTeste13] = useState(false);
  const [teste14, setTeste14] = useState(false);
  const [teste15, setTeste15] = useState(false);
  const [teste16, setTeste16] = useState(false);
  const [teste17, setTeste17] = useState(false);
  const [teste18, setTeste18] = useState(false);
  const [teste19, setTeste19] = useState(false);
  const [teste20, setTeste20] = useState(false);

  const dispatch = useDispatch();

  // const dadosProva = useSelector((state) => state.usuario.prova);

  const perf = useSelector((state) => state.usuario);

  const aula = 0;

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

      if (t.numero === 6) setTeste6(true);
      if (t.numero === 7) setTeste7(true);
      if (t.numero === 8) setTeste8(true);
      if (t.numero === 9) setTeste9(true);
      if (t.numero === 10) setTeste10(true);
      if (t.numero === 11) setTeste11(true);
      if (t.numero === 12) setTeste12(true);
      if (t.numero === 13) setTeste13(true);
      if (t.numero === 14) setTeste14(true);
      if (t.numero === 15) setTeste15(true);
      if (t.numero === 16) setTeste16(true);
      if (t.numero === 17) setTeste17(true);
      if (t.numero === 18) setTeste18(true);
      if (t.numero === 19) setTeste19(true);
      if (t.numero === 20) setTeste20(true);
    })

    // console.log('Prova: ', response.data);

    const dataAtual = new Date();
    let tempoa11 = response.data.inicioa11;
    if (tempoa11) tempoa11 = new Date(tempoa11).setHours(new Date(tempoa11).getHours() + 10);
    let tempoa12 = response.data.inicioa12;
    if (tempoa12) tempoa12 = new Date(tempoa12).setHours(new Date(tempoa12).getHours() + 720);
    let tempoa13 = response.data.inicioa13;
    if (tempoa13) tempoa13 = new Date(tempoa13).setHours(new Date(tempoa13).getHours() + 10);
    let tempoa14 = response.data.inicioa14;
    if (tempoa14) tempoa14 = new Date(tempoa14).setHours(new Date(tempoa14).getHours() + 720);
    let tempoa15 = response.data.inicioa15;
    if (tempoa15) tempoa15 = new Date(tempoa15).setHours(new Date(tempoa15).getHours() + 10);
    let tempoa16 = response.data.inicioa16;
    if (tempoa16) tempoa16 = new Date(tempoa16).setHours(new Date(tempoa16).getHours() + 10);

    if (tempoa11 && dataAtual > tempoa11) {
      await api.put(`provasaluno/${response.data.id}`, {
        aula11: true,
      });
      setAula11(true);
    }

    if (tempoa12 && dataAtual > tempoa12) {
      await api.put(`provasaluno/${response.data.id}`, {
        aula12: true,
      });
      setAula12(true);
    }

    if (tempoa13 && dataAtual > tempoa13) {
      await api.put(`provasaluno/${response.data.id}`, {
        aula13: true,
      });
      setAula13(true);
    }

    if (tempoa14 && dataAtual > tempoa14) {
      await api.put(`provasaluno/${response.data.id}`, {
        aula14: true,
      });
      setAula14(true);
    }

    if (tempoa15 && dataAtual > tempoa15) {
      await api.put(`provasaluno/${response.data.id}`, {
        aula15: true,
      });
      setAula15(true);
    }

    if (tempoa16 && dataAtual > tempoa16) {
      await api.put(`provasaluno/${response.data.id}`, {
        aula16: true,
      });
      setAula16(true);
    }

    setProva(response.data);
    dispatch(updateProvaRequest(response.data));

    const prova_id = response.data ? response.data.id : null;
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
            <small>Módulo Avançado</small>
          </li>
        </ul>

        <a href="javascript:history.back()">
          <small>&laquo; Voltar</small>
        </a>
      </Voltar>
      <Prod>
        <div>
          <Titulo>MÓDULO AVANÇADO</Titulo>
          <Titulo2>
            Automatizando Paradigmas da Leitura
            <br />
            <small>(duração recomendada: 2 meses)</small>
          </Titulo2>

          <br />
          {!provafinalizada.length ? <div>
            <Default>
              {/* {provafinalizada && prova && teste6 && teste7 && teste8 && teste9 && teste10 ? */}
                <Link to="/avancado/aula12">
                  Aula <span>12</span>
                </Link>
                {/* : <p>Aula <span>12</span></p>} */}
            </Default>
            <Default>
              {/* {provafinalizada && prova && aula12 ? */}
                <Link to="/avancado/aula13">
                  Aula <span>13</span>
                </Link>
                {/* : <p>Aula <span>13</span></p>} */}
            </Default>
            <Default>
              {/* {provafinalizada && prova && teste11 && teste12 && teste13 && teste14 && teste15 ? */}
                <Link to="/avancado/aula14">
                  Aula <span>14</span>
                </Link>
                {/* : <p>Aula <span>14</span></p>} */}
            </Default>
            <Default>
              {/* {provafinalizada && prova && aula14 ? */}
                <Link to="/avancado/aula15">
                  Aula <span>15</span>
                </Link>
                {/* : <p>Aula <span>15</span></p>} */}
            </Default>
            <Default>
              {/* {provafinalizada && prova && teste16 && teste17 && teste18 && teste19 && teste20 ? */}
                <Link to="/avancado/aula16">
                  Aula <span>16</span>
                </Link>
                {/* : <p>Aula <span>16</span></p>} */}
            </Default>
          </div> : <div>
            <Default>
              <Link to="/avancado/aula12">
                Aula <span>12</span>
              </Link>
            </Default>
            <Default>
              <Link to="/avancado/aula13">
                Aula <span>13</span>
              </Link>
            </Default>
            <Default>
              <Link to="/avancado/aula14">
                Aula <span>14</span>
              </Link>
            </Default>
            <Default>
              <Link to="/avancado/aula15">
                Aula <span>15</span>
              </Link>
            </Default>
            <Default>
              <Link to="/avancado/aula16">
                Aula <span>16</span>
              </Link>
            </Default>
          </div>}
        </div>
      </Prod>
    </Container>
  );
}
