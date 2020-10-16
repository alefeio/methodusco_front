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

export default function Exercicio07(props) {
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
    if (i <= 20) {
      const c1 = setInterval(() => {
        setContador(i);
        i += 1;

        if (i === 21) {
          clearInterval(c1);
          return loadContador(i);
        }
      }, 210);
    }

    if (i >= 21 && i <= 35) {
      const c2 = setInterval(() => {
        setContador(i);
        i += 1;

        if (i === 36) {
          clearInterval(c2);
          return loadContador(i);
        }
      }, 170);
    }

    if (i >= 36 && i <= 50) {
      const c3 = setInterval(() => {
        setContador(i);
        i += 1;

        if (i === 51) {
          clearInterval(c3);
          return loadContador(i);
        }
      }, 190);
    }

    if (i >= 51) {
      const c4 = setInterval(() => {
        if (i === palavra.length / 2 + 1) {
          if (isMountedRef.current) loadResposta();
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
      </Voltar>
      <Prod>
        <div>
          <h3>{ex}</h3>
        </div>
        {/* {apresentacao && (
          <div>
            <h2>{pergunta}</h2>
          </div>
        )} */}
        {!apresentacao && (
          <div>
            {contagem && contador >= 1 && (
              <ListaProdutos>
                {contador >= 1 && contador <= 4 && (
                  <>
                    <li>
                      {contador === 1 ? palavra[0] : <span>{palavra[0]}</span>}
                      <strong>*</strong>
                      {contador === 1 ? palavra[1] : <span>{palavra[1]}</span>}
                    </li>
                    <li>
                      {contador === 2 ? palavra[2] : <span>{palavra[2]}</span>}
                      <strong>*</strong>
                      {contador === 2 ? palavra[3] : <span>{palavra[3]}</span>}
                    </li>
                    <li>
                      {contador === 4 ? palavra[6] : <span>{palavra[6]}</span>}
                      <strong>*</strong>
                      {contador === 4 ? palavra[7] : <span>{palavra[7]}</span>}
                    </li>
                    <li>
                      {contador === 3 ? palavra[4] : <span>{palavra[4]}</span>}
                      <strong>*</strong>
                      {contador === 3 ? palavra[5] : <span>{palavra[5]}</span>}
                    </li>
                  </>
                )}
                {contador >= 5 && contador <= 8 && (
                  <>
                    <li>
                      {contador === 5 ? palavra[8] : <span>{palavra[8]}</span>}
                      <strong>*</strong>
                      {contador === 5 ? palavra[9] : <span>{palavra[9]}</span>}
                    </li>
                    <li>
                      {contador === 6 ? (
                        palavra[10]
                      ) : (
                        <span>{palavra[10]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 6 ? (
                        palavra[11]
                      ) : (
                        <span>{palavra[11]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 8 ? (
                        palavra[14]
                      ) : (
                        <span>{palavra[14]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 8 ? (
                        palavra[15]
                      ) : (
                        <span>{palavra[15]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 7 ? (
                        palavra[12]
                      ) : (
                        <span>{palavra[12]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 7 ? (
                        palavra[13]
                      ) : (
                        <span>{palavra[13]}</span>
                      )}
                    </li>
                  </>
                )}
                {contador >= 9 && contador <= 12 && (
                  <>
                    <li>
                      {contador === 9 ? (
                        palavra[16]
                      ) : (
                        <span>{palavra[16]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 9 ? (
                        palavra[17]
                      ) : (
                        <span>{palavra[17]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 10 ? (
                        palavra[18]
                      ) : (
                        <span>{palavra[18]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 10 ? (
                        palavra[19]
                      ) : (
                        <span>{palavra[19]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 12 ? (
                        palavra[22]
                      ) : (
                        <span>{palavra[22]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 12 ? (
                        palavra[23]
                      ) : (
                        <span>{palavra[23]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 11 ? (
                        palavra[20]
                      ) : (
                        <span>{palavra[20]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 11 ? (
                        palavra[21]
                      ) : (
                        <span>{palavra[21]}</span>
                      )}
                    </li>
                  </>
                )}
                {contador >= 13 && contador <= 16 && (
                  <>
                    <li>
                      {contador === 13 ? (
                        palavra[24]
                      ) : (
                        <span>{palavra[24]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 13 ? (
                        palavra[25]
                      ) : (
                        <span>{palavra[25]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 14 ? (
                        palavra[26]
                      ) : (
                        <span>{palavra[26]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 14 ? (
                        palavra[27]
                      ) : (
                        <span>{palavra[27]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 16 ? (
                        palavra[30]
                      ) : (
                        <span>{palavra[30]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 16 ? (
                        palavra[31]
                      ) : (
                        <span>{palavra[31]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 15 ? (
                        palavra[28]
                      ) : (
                        <span>{palavra[28]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 15 ? (
                        palavra[29]
                      ) : (
                        <span>{palavra[29]}</span>
                      )}
                    </li>
                  </>
                )}
                {contador >= 17 && contador <= 20 && (
                  <>
                    <li>
                      {contador === 17 ? (
                        palavra[32]
                      ) : (
                        <span>{palavra[32]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 17 ? (
                        palavra[33]
                      ) : (
                        <span>{palavra[33]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 18 ? (
                        palavra[34]
                      ) : (
                        <span>{palavra[34]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 18 ? (
                        palavra[35]
                      ) : (
                        <span>{palavra[35]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 20 ? (
                        palavra[38]
                      ) : (
                        <span>{palavra[38]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 20 ? (
                        palavra[39]
                      ) : (
                        <span>{palavra[39]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 19 ? (
                        palavra[36]
                      ) : (
                        <span>{palavra[36]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 19 ? (
                        palavra[37]
                      ) : (
                        <span>{palavra[37]}</span>
                      )}
                    </li>
                  </>
                )}
                {contador >= 21 && contador <= 24 && (
                  <>
                    <li>
                      {contador === 21 ? (
                        palavra[40]
                      ) : (
                        <span>{palavra[40]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 21 ? (
                        palavra[41]
                      ) : (
                        <span>{palavra[41]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 22 ? (
                        palavra[42]
                      ) : (
                        <span>{palavra[42]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 22 ? (
                        palavra[43]
                      ) : (
                        <span>{palavra[43]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 24 ? (
                        palavra[46]
                      ) : (
                        <span>{palavra[46]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 24 ? (
                        palavra[47]
                      ) : (
                        <span>{palavra[47]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 23 ? (
                        palavra[44]
                      ) : (
                        <span>{palavra[44]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 23 ? (
                        palavra[45]
                      ) : (
                        <span>{palavra[45]}</span>
                      )}
                    </li>
                  </>
                )}
                {contador >= 25 && contador <= 28 && (
                  <>
                    <li>
                      {contador === 25 ? (
                        palavra[48]
                      ) : (
                        <span>{palavra[48]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 25 ? (
                        palavra[49]
                      ) : (
                        <span>{palavra[49]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 26 ? (
                        palavra[50]
                      ) : (
                        <span>{palavra[50]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 26 ? (
                        palavra[51]
                      ) : (
                        <span>{palavra[51]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 28 ? (
                        palavra[54]
                      ) : (
                        <span>{palavra[54]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 28 ? (
                        palavra[55]
                      ) : (
                        <span>{palavra[55]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 27 ? (
                        palavra[52]
                      ) : (
                        <span>{palavra[52]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 27 ? (
                        palavra[53]
                      ) : (
                        <span>{palavra[53]}</span>
                      )}
                    </li>
                  </>
                )}
                {contador >= 29 && contador <= 32 && (
                  <>
                    <li>
                      {contador === 29 ? (
                        palavra[56]
                      ) : (
                        <span>{palavra[56]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 29 ? (
                        palavra[57]
                      ) : (
                        <span>{palavra[57]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 30 ? (
                        palavra[58]
                      ) : (
                        <span>{palavra[58]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 30 ? (
                        palavra[59]
                      ) : (
                        <span>{palavra[59]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 32 ? (
                        palavra[62]
                      ) : (
                        <span>{palavra[62]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 32 ? (
                        palavra[63]
                      ) : (
                        <span>{palavra[63]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 31 ? (
                        palavra[60]
                      ) : (
                        <span>{palavra[60]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 31 ? (
                        palavra[61]
                      ) : (
                        <span>{palavra[61]}</span>
                      )}
                    </li>
                  </>
                )}
                {contador >= 33 && contador <= 36 && (
                  <>
                    <li>
                      {contador === 33 ? (
                        palavra[64]
                      ) : (
                        <span>{palavra[64]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 33 ? (
                        palavra[65]
                      ) : (
                        <span>{palavra[65]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 34 ? (
                        palavra[66]
                      ) : (
                        <span>{palavra[66]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 34 ? (
                        palavra[67]
                      ) : (
                        <span>{palavra[67]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 36 ? (
                        palavra[70]
                      ) : (
                        <span>{palavra[70]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 36 ? (
                        palavra[71]
                      ) : (
                        <span>{palavra[71]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 35 ? (
                        palavra[68]
                      ) : (
                        <span>{palavra[68]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 35 ? (
                        palavra[69]
                      ) : (
                        <span>{palavra[69]}</span>
                      )}
                    </li>
                  </>
                )}
                {contador >= 37 && contador <= 40 && (
                  <>
                    <li>
                      {contador === 37 ? (
                        palavra[72]
                      ) : (
                        <span>{palavra[72]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 37 ? (
                        palavra[73]
                      ) : (
                        <span>{palavra[73]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 38 ? (
                        palavra[74]
                      ) : (
                        <span>{palavra[74]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 38 ? (
                        palavra[75]
                      ) : (
                        <span>{palavra[75]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 40 ? (
                        palavra[78]
                      ) : (
                        <span>{palavra[78]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 40 ? (
                        palavra[79]
                      ) : (
                        <span>{palavra[79]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 39 ? (
                        palavra[76]
                      ) : (
                        <span>{palavra[76]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 39 ? (
                        palavra[77]
                      ) : (
                        <span>{palavra[77]}</span>
                      )}
                    </li>
                  </>
                )}

                {contador >= 41 && contador <= 44 && (
                  <>
                    <li>
                      {contador === 41 ? (
                        palavra[80]
                      ) : (
                        <span>{palavra[80]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 41 ? (
                        palavra[81]
                      ) : (
                        <span>{palavra[81]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 42 ? (
                        palavra[82]
                      ) : (
                        <span>{palavra[82]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 42 ? (
                        palavra[83]
                      ) : (
                        <span>{palavra[83]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 44 ? (
                        palavra[86]
                      ) : (
                        <span>{palavra[86]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 44 ? (
                        palavra[87]
                      ) : (
                        <span>{palavra[87]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 43 ? (
                        palavra[84]
                      ) : (
                        <span>{palavra[84]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 43 ? (
                        palavra[85]
                      ) : (
                        <span>{palavra[85]}</span>
                      )}
                    </li>
                  </>
                )}
                {contador >= 45 && contador <= 48 && (
                  <>
                    <li>
                      {contador === 45 ? (
                        palavra[88]
                      ) : (
                        <span>{palavra[88]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 45 ? (
                        palavra[89]
                      ) : (
                        <span>{palavra[89]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 46 ? (
                        palavra[90]
                      ) : (
                        <span>{palavra[90]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 46 ? (
                        palavra[91]
                      ) : (
                        <span>{palavra[91]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 48 ? (
                        palavra[94]
                      ) : (
                        <span>{palavra[94]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 48 ? (
                        palavra[95]
                      ) : (
                        <span>{palavra[95]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 47 ? (
                        palavra[92]
                      ) : (
                        <span>{palavra[92]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 47 ? (
                        palavra[93]
                      ) : (
                        <span>{palavra[93]}</span>
                      )}
                    </li>
                  </>
                )}
                {contador >= 49 && contador <= 52 && (
                  <>
                    <li>
                      {contador === 49 ? (
                        palavra[96]
                      ) : (
                        <span>{palavra[96]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 49 ? (
                        palavra[97]
                      ) : (
                        <span>{palavra[97]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 50 ? (
                        palavra[98]
                      ) : (
                        <span>{palavra[98]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 50 ? (
                        palavra[99]
                      ) : (
                        <span>{palavra[99]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 52 ? (
                        palavra[102]
                      ) : (
                        <span>{palavra[102]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 52 ? (
                        palavra[103]
                      ) : (
                        <span>{palavra[103]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 51 ? (
                        palavra[100]
                      ) : (
                        <span>{palavra[100]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 51 ? (
                        palavra[101]
                      ) : (
                        <span>{palavra[101]}</span>
                      )}
                    </li>
                  </>
                )}
                {contador >= 53 && contador <= 56 && (
                  <>
                    <li>
                      {contador === 53 ? (
                        palavra[104]
                      ) : (
                        <span>{palavra[104]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 53 ? (
                        palavra[105]
                      ) : (
                        <span>{palavra[105]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 54 ? (
                        palavra[106]
                      ) : (
                        <span>{palavra[106]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 54 ? (
                        palavra[107]
                      ) : (
                        <span>{palavra[107]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 56 ? (
                        palavra[110]
                      ) : (
                        <span>{palavra[110]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 56 ? (
                        palavra[111]
                      ) : (
                        <span>{palavra[111]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 55 ? (
                        palavra[108]
                      ) : (
                        <span>{palavra[108]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 55 ? (
                        palavra[109]
                      ) : (
                        <span>{palavra[109]}</span>
                      )}
                    </li>
                  </>
                )}
                {contador >= 57 && contador <= 60 && (
                  <>
                    <li>
                      {contador === 57 ? (
                        palavra[112]
                      ) : (
                        <span>{palavra[112]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 57 ? (
                        palavra[113]
                      ) : (
                        <span>{palavra[113]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 58 ? (
                        palavra[114]
                      ) : (
                        <span>{palavra[114]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 58 ? (
                        palavra[115]
                      ) : (
                        <span>{palavra[115]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 60 ? (
                        palavra[118]
                      ) : (
                        <span>{palavra[118]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 60 ? (
                        palavra[119]
                      ) : (
                        <span>{palavra[119]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 59 ? (
                        palavra[116]
                      ) : (
                        <span>{palavra[116]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 59 ? (
                        palavra[117]
                      ) : (
                        <span>{palavra[117]}</span>
                      )}
                    </li>
                  </>
                )}
                {contador >= 61 && contador <= 64 && (
                  <>
                    <li>
                      {contador === 61 ? (
                        palavra[120]
                      ) : (
                        <span>{palavra[120]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 61 ? (
                        palavra[121]
                      ) : (
                        <span>{palavra[121]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 62 ? (
                        palavra[122]
                      ) : (
                        <span>{palavra[122]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 62 ? (
                        palavra[123]
                      ) : (
                        <span>{palavra[123]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 64 ? (
                        palavra[126]
                      ) : (
                        <span>{palavra[126]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 64 ? (
                        palavra[127]
                      ) : (
                        <span>{palavra[127]}</span>
                      )}
                    </li>
                    <li>
                      {contador === 63 ? (
                        palavra[124]
                      ) : (
                        <span>{palavra[124]}</span>
                      )}
                      <strong>*</strong>
                      {contador === 63 ? (
                        palavra[125]
                      ) : (
                        <span>{palavra[125]}</span>
                      )}
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

            {concluido && !contagem && (
              <div>
                <Link onClick={() => loadProximo()} to="/apostila/120">
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
