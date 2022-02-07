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
  TituloVermelho,
  Default,
  Default2,
  Danger,
  Ladodireito,
  Box1,
  Voltar,
} from './styles';

export default function Basico() {
  const [perfil, setPerfil] = useState();
  const [prova, setProva] = useState();
  const [provafinalizada, setProvafinalizada] = useState([]);
  const [aula1, setAula1] = useState(false);
  const [aula2, setAula2] = useState(false);
  const [aula3, setAula3] = useState(false);
  const [aula4, setAula4] = useState(false);
  const [aula5, setAula5] = useState(false);

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

    // console.log('Prova: ', response.data);

    const dataAtual = new Date();
    let tempoa1 = response.data.inicioa1;
    if (tempoa1) tempoa1 = new Date(tempoa1).setHours(new Date(tempoa1).getHours() + 120);
    let tempoa2 = response.data.inicioa2;
    if (tempoa2) tempoa2 = new Date(tempoa2).setHours(new Date(tempoa2).getHours() + 120);
    let tempoa3 = response.data.inicioa3;
    if (tempoa3) tempoa3 = new Date(tempoa3).setHours(new Date(tempoa3).getHours() + 120);
    let tempoa4 = response.data.inicioa4;
    if (tempoa4) tempoa4 = new Date(tempoa4).setHours(new Date(tempoa4).getHours() + 120);
    let tempoa5 = response.data.inicioa5;
    if (tempoa5) tempoa5 = new Date(tempoa5).setHours(new Date(tempoa5).getHours() + 120);

    if (tempoa1 && dataAtual > tempoa1) {
      await api.put(`provasaluno/${response.data.id}`, {
        aula01: true,
      });
      setAula1(true);
    }

    if (tempoa2 && dataAtual > tempoa2) {
      await api.put(`provasaluno/${response.data.id}`, {
        aula02: true,
      });
      setAula2(true);
    }

    if (tempoa3 && dataAtual > tempoa3) {
      await api.put(`provasaluno/${response.data.id}`, {
        aula03: true,
      });
      setAula3(true);
    }

    if (tempoa4 && dataAtual > tempoa4) {
      await api.put(`provasaluno/${response.data.id}`, {
        aula04: true,
      });
      setAula4(true);
    }

    if (tempoa5 && dataAtual > tempoa5) {
      await api.put(`provasaluno/${response.data.id}`, {
        aula05: true,
      });
      setAula5(true);
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

      // console.log('response2: ', response2.data)

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
            <small>Módulo Básico</small>
          </li>
        </ul>

        <a href="javascript:history.back()">
          <small>&laquo; Voltar</small>
        </a>
      </Voltar>
      <Prod>
        <div>
          <Titulo>MÓDULO BÁSICO</Titulo>
          <Titulo2>
            Mudando Paradigmas da Leitura
            <br />
            <small>(duração recomendada: 1 mês)</small>
          </Titulo2>

          <Titulo2>
            {prova && !prova.avaliacao && <span>Atenção: Para acessar o Módulo Básico, você precisa realizar o seu Teste Inicial</span>}
            {prova 
            && prova.avaliacao 
            && !aula1 
            && <span>Atenção: Para acessar a Aula 02, você precisa finalizar a Aula 01</span>}
            {prova 
            && prova.avaliacao 
            && aula1 
            && !aula2 
            && <span>Atenção: Para acessar a Aula 03, você precisa finalizar a Aula 02</span>}
            {prova 
            && prova.avaliacao 
            && aula1 
            && aula2 
            && !aula3 
            && <span>Atenção: Para acessar a Aula 04, você precisa finalizar a Aula 03</span>}
            {prova 
            && prova.avaliacao 
            && aula1 
            && aula2 
            && aula3 
            && !aula4
            && <span>Atenção: Para acessar a Aula 05, você precisa finalizar a Aula 04</span>}
            {prova 
            && prova.avaliacao 
            && aula1 
            && aula2 
            && aula3 
            && aula4
            && !aula5
            && <span>Atenção: Para acessar a Aula 06, você precisa finalizar a Aula 05</span>}
          </Titulo2>

          <br />
          {!provafinalizada.length ? <div>
            <Default>
              {prova && prova.avaliacao ? <Link to="/basico/aula01">
                Aula <span>01</span>
              </Link> : <p>Aula <span>01</span></p>}
            </Default>
            <Default>
              {prova && aula1 ? <Link to="/basico/aula02">
                Aula <span>02</span>
              </Link> : <p>Aula <span>02</span></p>}
            </Default>
            <Default>
              {prova && aula2 ? <Link to="/basico/aula03">
                Aula <span>03</span>
              </Link> : <p>Aula <span>03</span></p>}
            </Default>
            <Default>
              {prova && aula3 ? <Link to="/basico/aula04">
                Aula <span>04</span>
              </Link> : <p>Aula <span>04</span></p>}
            </Default>
            <Default>
              {prova && aula4 ? <Link to="/basico/aula05">
                Aula <span>05</span>
              </Link> : <p>Aula <span>05</span></p>}
            </Default>
            <Default>
              {prova && aula5 ? <Link to="/basico/aula06">
                Aula <span>06</span>
              </Link> : <p>Aula <span>06</span></p>}
            </Default>
          </div> : <div>
            <Default>
              <Link to="/basico/aula01">
                Aula <span>01</span>
              </Link>
            </Default>
            <Default>
              <Link to="/basico/aula02">
                Aula <span>02</span>
              </Link>
            </Default>
            <Default>
              <Link to="/basico/aula03">
                Aula <span>03</span>
              </Link>
            </Default>
            <Default>
              <Link to="/basico/aula04">
                Aula <span>04</span>
              </Link>
            </Default>
            <Default>
              <Link to="/basico/aula05">
                Aula <span>05</span>
              </Link>
            </Default>
            <Default>
              <Link to="/basico/aula06">
                Aula <span>06</span>
              </Link>
            </Default>
          </div>}
        </div>
      </Prod>
    </Container>
  );
}
