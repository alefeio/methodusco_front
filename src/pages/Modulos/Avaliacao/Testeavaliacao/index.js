import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import history from '~/services/history';

import api from '~/services/api';

import {
  updateProvaRequest,
  // updateEmProvaRequest,
  updateFimProvaRequest,
} from '~/store/modules/usuario/actions';

import icoConcluido from '~/assets/ico-concluido.jpg';
import checked from '~/assets/checked.png';

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

const aula = 0;

const hrInicio = Date.now();

const titulo = 'Do Ventre para o Cérebro';

const cred1 = 'Scientific American. Charles Q. Choi';

const cred2 = '';

const textos = [
  'Pesquisa revela que células do feto penetram no sistema nervoso da mãe. Pode-se dizer que as mães, literalmente, nunca tiram os filhos da cabeça. Pesquisadores descobriram que, em camundongos, células do feto podem migrar para o cérebro materno e talvez desenvolver novas células do sistema nervoso.',
  'A descoberta foi feita por Gavin S. Dawe, da Universidade Nacional de Cingapura, e Zhi-Cheng Xiao, do Hospital Geral de Cingapura, com colegas da China e do Japão. Eles tentavam desenvolver terapias para derrame ou doenças como a de Alzheimer.',
  'Cientistas sabem há muito tempo que células fetais podem entrar no sangue da mãe. Em humanos, elas permanecem na circulação por até 27 anos após o nascimento. Assim como as células-tronco, conseguem se transformar em outros tipos e em teoria ajudar a reparar órgãos danificados.',
  'Os neurobiólogos cruzaram fêmeas de camundongo normais com machos geneticamente modificados para expressar uma proteína fluorescente verde. Depois, encontraram células fetais verdes no cérebro das mães. "Em algumas regiões do cérebro materno, uma em cada mil células, e às vezes dez em cada mil, eram de origem fetal", relatou Xiao.',
  'As células fetais se transformaram no que parecem ser neurônios, astrócitos (que ajudam a alimentar neurônios), oligodendrócitos (que isolam os neurônios) e macrófagos (que ingerem germes e células danificadas).',
  'Além disso, depois de os cientistas danificarem quimicamente o cérebro dos roedores, um número de células fetais seis vezes maior migrou para as áreas deterioradas, em comparação com outras. Isso sugere que essas células reagem a sinais moleculares de stress liberados pelo cérebro.',
  'Ainda não se sabe exatamente como as células fazem para atravessar os vasos capilares que separam o cérebro do sistema circulatório - as células dessas vias são densamente agrupadas, impedindo a maioria dos compostos de cruzar a barreira.',
  'Especula-se que biomoléculas como proteínas ou açúcares que recobrem a superfície das células fetais interajam com a barreira para abrir caminho. Os pesquisadores estão confiantes de que as células fetais também passem para o cérebro de fêmeas não-grávidas e de machos, já que há pouca diferença entre os vasos cerebrais desses indivíduos.',
  'Dawe afirma que pretende agora demonstrar que as células fetais se transformam em neurônio funcionais.',
  'A descoberta, publicada em 10 de agosto no periódico Stem Cells, renova a esperança de tratamento para distúrbios cerebrais. Devido à barreira entre sangue e cérebro, intervenções de transplante normalmente remetem à ideia de perfuração do crânio.',
  'Identificar as moléculas típicas das células fetais que entram no cérebro e se tornam neurônios poderia ajudar a encontrar células similares não fetais, como as do cordão umbilical. Pesquisas nessa linha ajudariam a criar técnicas não-invasivas de transplante para o cérebro, que dependam apenas de injeção intravenosa.',
  'As células usadas nessas terapias seriam selecionadas para evitar rejeição imune nos pacientes. Ainda não está claro se células injetadas e destinadas ao cérebro acabam em outro lugar qualquer, "mas também não sabemos ainda se isso chegaria a ser um problema", diz Dawe.',
  'Os pesquisadores tentam agora descobrir se a passagem de células fetais para o cérebro humano ocorre de forma tão comum quanto em camundongos.',
  'Eles planejam fazer autópsias em cérebro de mulheres que deram à luz meninos. Sinais do cromossomo Y confirmariam o efeito. E também levantariam a questão sobre se o fenômeno tem "implicações psicológicas e comportamentais", diz Xiao.',
];

let perguntas = [
  {
    q: 1,
    p:
      'Pesquisadores descobriram que, em camundongos, células do feto podem migrar para o corpo materno e talvez desenvolver novas células de qual sistema?',
    a: 'Nervoso.',
    b: 'Digestório.',
    c: 'Reprodutor.',
    d: 'Respiratório.',
    r: '',
  },
  {
    q: 2,
    p:
      'Os cientistas Gavin S. Dawe e Zhi-Cheng Xiao, tentavam desenvolver terapias para quais males quando descobriram que células fetais podem entrar no cérebro da mãe?',
    a: 'Diabetes e doenças cardíacas.',
    b: 'Derrame ou Alzheimer.',
    c: 'Gastrite e úlceras.',
    d: 'Asma e pneumonia',
    r: '',
  },
  {
    q: 3,
    p:
      'Em humanos, células fetais podem permanecer na circulação da mãe por quanto tempo após o nascimento?',
    a: 'Até 7 anos.',
    b: 'Até 17 anos.',
    c: 'Até 27 anos.',
    d: 'Até 31 anos.',
    r: '',
  },
  {
    q: 4,
    p:
      'Além das células fetais, quais outras células conseguem se transformar em outros tipos de célula e, em teoria, ajudar a reparar órgãos danificados',
    a: 'As células nervosas.',
    b: 'As células epiteliais.',
    c: 'As células sanguíneas.',
    d: 'As células-tronco.',
    r: '',
  },
  {
    q: 5,
    p:
      'Os neurobiólogos cruzaram fêmeas de camundongo normais com machos geneticamente modificados para expressar uma proteína fluorescente de qual cor?',
    a: 'Verde.',
    b: 'Azul.',
    c: 'Vermelha.',
    d: 'Amarela.',
    r: '',
  },
  {
    q: 6,
    p:
      'De acordo com Zhi-Cheng Xiao, em algumas regiões do cérebro materno, quantas células eram de origem fetal?',
    a: 'Uma em cada cem células e, às vezes, dez em cada cem.',
    b: 'Uma em cada quinhentas células e, às vezes, dez em cada quinhentas.',
    c: 'Uma em cada mil células e, às vezes, dez em cada mil.',
    d: 'Uma em cada dez mil células e, às vezes, dez em cada dez mil.',
    r: '',
  },
  {
    q: 7,
    p: 'Quais são as células que ajudam a alimentar os neurônios?',
    a: 'Oligodendrócitos.',
    b: 'Macrófagos.',
    c: 'Polidendrócitos.',
    d: 'Astrócitos.',
    r: '',
  },
  {
    q: 8,
    p: 'Qual é a função dos oligodendrócitos?',
    a: 'Isolar os neurônios.',
    b: 'Ingerir germes e células danificadas.',
    c: 'Alimentar os neurônios.',
    d: 'Hidratar os neurônios.',
    r: '',
  },
  {
    q: 9,
    p:
      'Devido à barreira entre sangue e cérebro, intervenções de transplante normalmente remetem à qual ideia?',
    a: 'Tratamento químico.',
    b: 'Perfuração do crânio.',
    c: 'Terapia genética.',
    d: 'Injeção intravenosa.',
    r: '',
  },
  {
    q: 10,
    p:
      'Depois de os cientistas danificarem quimicamente o cérebro dos roedores, um número de células fetais quantas vezes maiores migrou para as áreas deterioradas, em comparação com outras?',
    a: 'Nove vezes.',
    b: 'Oito vezes.',
    c: 'Sete vezes.',
    d: 'Seis vezes.',
    r: '',
  },
];

export default function Testeavaliacao() {
  const [perfil, setPerfil] = useState();
  const [prova, setProva] = useState();
  const [provafinalizada, setProvafinalizada] = useState();
  const [plm, setPlm] = useState();
  const [pcr, setPcr] = useState(0);
  const [pcm, setPcm] = useState();
  const [horas, setHoras] = useState(0);
  const [visiv, setVisiv] = useState('ruby');
  const [q1, setQ1] = useState();
  const [q2, setQ2] = useState();
  const [q3, setQ3] = useState();
  const [q4, setQ4] = useState();
  const [q5, setQ5] = useState();
  const [q6, setQ6] = useState();
  const [q7, setQ7] = useState();
  const [q8, setQ8] = useState();
  const [q9, setQ9] = useState();
  const [q10, setQ10] = useState();
  const [testeconcluido, setTesteconcluido] = useState(false);

  const dispatch = useDispatch();

  // const dadosProva = useSelector((state) => state.usuario.prova);

  const perf = useSelector((state) => state.usuario);

  const respCertas = ['a', 'b', 'c', 'd', 'a', 'c', 'd', 'a', 'b', 'd'];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    arrows: true,
    // autoplaySpeed: 5000,
    pauseOnHover: true,
    // className: 'slides',
  };

  async function envioResposta(opcao, resp) {
    perguntas[opcao].r = resp;

    if (opcao == 0) {
      setQ1(resp);
    }
    if (opcao == 1) setQ2(resp);
    if (opcao == 2) setQ3(resp);
    if (opcao == 3) setQ4(resp);
    if (opcao == 4) setQ5(resp);
    if (opcao == 5) setQ6(resp);
    if (opcao == 6) setQ7(resp);
    if (opcao == 7) setQ8(resp);
    if (opcao == 8) setQ9(resp);
    if (opcao == 9) setQ10(resp);
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

  async function verificarTeste(prova) {
    const response = await api.put('teste', {
      numero: 0,
      prova_id: prova,
    });

    if (response.data) {
      setTesteconcluido(true);
      history.push('/avaliacao/resultado');
    }
  }

  async function enviarTeste() {
    try {
      let notaPcr = 0;

      if (q1 === respCertas[0]) notaPcr += 10;
      if (q2 === respCertas[1]) notaPcr += 10;
      if (q3 === respCertas[2]) notaPcr += 10;
      if (q4 === respCertas[3]) notaPcr += 10;
      if (q5 === respCertas[4]) notaPcr += 10;
      if (q6 === respCertas[5]) notaPcr += 10;
      if (q7 === respCertas[6]) notaPcr += 10;
      if (q8 === respCertas[7]) notaPcr += 10;
      if (q9 === respCertas[8]) notaPcr += 10;
      if (q10 === respCertas[9]) notaPcr += 10;

      const calcPcm = ((plm * notaPcr) / 100).toFixed(0);

      const calcHoras = (116000 / calcPcm / 60).toFixed(0);

      await api.post('testes', {
        numero: 0,
        plm,
        pcr: notaPcr,
        pcm: calcPcm,
        horas: calcHoras,
        nivel_id: 2,
        prova_id: prova.id,
      });

      const response = await api.get(`provas`);

      setProva(response.data);
      dispatch(updateProvaRequest(response.data));

      toast.success('Avaliação Parcial concluída com sucesso!');
      setTimeout(() => {
        setTesteconcluido(true);
        history.push('/avaliacao/resultado');
      }, 3000);
    } catch (error) {
      toast.error('A Avaliação Parcial já foi concluída!');
    }
  }

  async function loadProvas() {
    const response = await api.get(`provas`);

    console.log('Prova: ', response.data);

    setProva(response.data);
    dispatch(updateProvaRequest(response.data));

    const prova_id = response.data ? response.data.id : null;

    verificarTeste(prova_id);

    console.log('testeconcluido: ', testeconcluido);
  }

  // function fazerProva() {
  //   dispatch(updateEmProvaRequest());

  //   loadProvas();
  // }

  async function calcPlm() {
    const dif = ((Date.now() - hrInicio) / 1000).toFixed(0);

    console.log('Tempo: ', dif);

    const calculo = ((559 * 60) / dif).toFixed(0);

    setPlm(calculo);
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

  return (
    <Container>
      <Voltar>
        <ul>
          {/* <li>
            <Link to="/dashboard">
              <small>Home</small>
            </Link>
          </li>
          <li>|</li> */}
          <li>
            <small>Avaliação Inicial</small>
          </li>
          {/* <li>|</li>
          <li>
            <small>PLM: {plm && plm}</small>
          </li>
          <li>|</li>
          <li>
            <small>PCR: {pcr && pcr}</small>
          </li>
          <li>|</li>
          <li>
            <small>PCM: {pcm && pcm}</small>
          </li>
          <li>|</li>
          <li>
            <small>Horas: {horas && horas}</small>
          </li>
          {testeconcluido && (
            <>
              <li>|</li>
              <li>
                <small>Teste concluído</small>
              </li>
            </>
          )} */}
        </ul>

        {/* <a href="javascript:history.back()">
          <small>&laquo; Voltar</small>
        </a> */}
      </Voltar>
      <Prod visivel={visiv}>
        {!plm && !testeconcluido && (
          <div>
            <br />
            <h2>
              {titulo && titulo}
              <small>
                {cred1 && (
                  <>
                    {cred1} <br />
                  </>
                )}

                {cred2 && cred2}
              </small>
            </h2>
            {textos.map((t, i) => t && <p>{t}</p>)}
            <br />
            <div>
              <Default>
                <Link onClick={() => calcPlm()}>Responder às Perguntas</Link>
              </Default>
            </div>
          </div>
        )}
        {plm && !testeconcluido && (
          <div>
            <Titulo>AVALIAÇÃO INICIAL</Titulo>
            <br />
            <h2>Avaliando a Compreensão e a Retenção</h2>
            <br />
            <Slider {...settings}>
              {perguntas.map((p, i) => (
                <div>
                  {p.p && (
                    <p>
                      {p.q}) {p.p}
                    </p>
                  )}
                  <br />{' '}
                  {p.a && (
                    <p>
                      {p.r === 'a' ? (
                        <img src={checked} />
                      ) : (
                        <input
                          type="radio"
                          name={`opcao${i}`}
                          id={`a${i}`}
                          onClick={() => envioResposta(i, 'a')}
                        />
                      )}
                      <label for={`a${i}`}>a) {p.a}</label>
                    </p>
                  )}{' '}
                  {p.b && (
                    <p>
                      {p.r === 'b' ? (
                        <img src={checked} />
                      ) : (
                        <input
                          type="radio"
                          name={`opcao${i}`}
                          id={`b${i}`}
                          onClick={() => envioResposta(i, 'b')}
                        />
                      )}
                      <label for={`b${i}`}>b) {p.b}</label>
                    </p>
                  )}{' '}
                  {p.c && (
                    <p>
                      {p.r === 'c' ? (
                        <img src={checked} />
                      ) : (
                        <input
                          type="radio"
                          name={`opcao${i}`}
                          id={`c${i}`}
                          onClick={() => envioResposta(i, 'c')}
                        />
                      )}
                      <label for={`c${i}`}>c) {p.c}</label>
                    </p>
                  )}{' '}
                  {p.d && (
                    <p>
                      {p.r === 'd' ? (
                        <img src={checked} />
                      ) : (
                        <input
                          type="radio"
                          name={`opcao${i}`}
                          id={`d${i}`}
                          onClick={() => envioResposta(i, 'd')}
                        />
                      )}
                      <label for={`d${i}`}>d) {p.d}</label>
                    </p>
                  )}
                  <div>
                    <small>
                      {i + 1} de {perguntas.length}
                    </small>
                  </div>
                </div>
              ))}
            </Slider>
            <>
              <p>
                Questões respondidas: {plm}
                {q1 && ` 1) ${q1}`}
                {q2 && ` - 2) ${q2}`}
                {q3 && ` - 3) ${q3}`}
                {q4 && ` - 4) ${q4}`}
                {q5 && ` - 5) ${q5}`}
                {q6 && ` - 6) ${q6}`}
                {q7 && ` - 7) ${q7}`}
                {q8 && ` - 8) ${q8}`}
                {q9 && ` - 9) ${q9}`}
                {q10 && ` - 10) ${q10}`}
              </p>
            </>
            <br />
            {visiv === 'none' && (
              <>
                <h2>Respostas:</h2>
                <br />
                <p>
                  {perguntas[0].q}) {perguntas[0].p}
                </p>
                {q1 === 'a' && (
                  <p>
                    <strong>a) {perguntas[0].a}</strong>
                  </p>
                )}
                {q1 === 'b' && (
                  <p>
                    <strong>b) {perguntas[0].b}</strong>
                  </p>
                )}
                {q1 === 'c' && (
                  <p>
                    <strong>c) {perguntas[0].c}</strong>
                  </p>
                )}
                {q1 === 'd' && (
                  <p>
                    <strong>d) {perguntas[0].d}</strong>
                  </p>
                )}
                <br />
                <p>
                  {perguntas[1].q}) {perguntas[1].p}
                </p>
                {q2 === 'a' && (
                  <p>
                    <strong>a) {perguntas[1].a}</strong>
                  </p>
                )}
                {q2 === 'b' && (
                  <p>
                    <strong>b) {perguntas[1].b}</strong>
                  </p>
                )}
                {q2 === 'c' && (
                  <p>
                    <strong>c) {perguntas[1].c}</strong>
                  </p>
                )}
                {q2 === 'd' && (
                  <p>
                    <strong>d) {perguntas[1].d}</strong>
                  </p>
                )}
                <br />
                <p>
                  {perguntas[2].q}) {perguntas[2].p}
                </p>
                {q3 === 'a' && (
                  <p>
                    <strong>a) {perguntas[2].a}</strong>
                  </p>
                )}
                {q1 === 'b' && (
                  <p>
                    <strong>b) {perguntas[2].b}</strong>
                  </p>
                )}
                {q3 === 'c' && (
                  <p>
                    <strong>c) {perguntas[2].c}</strong>
                  </p>
                )}
                {q3 === 'd' && (
                  <p>
                    <strong>d) {perguntas[2].d}</strong>
                  </p>
                )}
                <br />
                <p>
                  {perguntas[3].q}) {perguntas[3].p}
                </p>
                {q4 === 'a' && (
                  <p>
                    <strong>a) {perguntas[3].a}</strong>
                  </p>
                )}
                {q4 === 'b' && (
                  <p>
                    <strong>b) {perguntas[3].b}</strong>
                  </p>
                )}
                {q4 === 'c' && (
                  <p>
                    <strong>c) {perguntas[3].c}</strong>
                  </p>
                )}
                {q4 === 'd' && (
                  <p>
                    <strong>d) {perguntas[3].d}</strong>
                  </p>
                )}
                <br />
                <p>
                  {perguntas[4].q}) {perguntas[4].p}
                </p>
                {q5 === 'a' && (
                  <p>
                    <strong>a) {perguntas[4].a}</strong>
                  </p>
                )}
                {q5 === 'b' && (
                  <p>
                    <strong>b) {perguntas[4].b}</strong>
                  </p>
                )}
                {q5 === 'c' && (
                  <p>
                    <strong>c) {perguntas[4].c}</strong>
                  </p>
                )}
                {q5 === 'd' && (
                  <p>
                    <strong>d) {perguntas[4].d}</strong>
                  </p>
                )}
                <br />
                <p>
                  {perguntas[5].q}) {perguntas[5].p}
                </p>
                {q6 === 'a' && (
                  <p>
                    <strong>a) {perguntas[5].a}</strong>
                  </p>
                )}
                {q6 === 'b' && (
                  <p>
                    <strong>b) {perguntas[5].b}</strong>
                  </p>
                )}
                {q6 === 'c' && (
                  <p>
                    <strong>c) {perguntas[5].c}</strong>
                  </p>
                )}
                {q6 === 'd' && (
                  <p>
                    <strong>d) {perguntas[5].d}</strong>
                  </p>
                )}
                <br />
                <p>
                  {perguntas[6].q}) {perguntas[6].p}
                </p>
                {q7 === 'a' && (
                  <p>
                    <strong>a) {perguntas[6].a}</strong>
                  </p>
                )}
                {q7 === 'b' && (
                  <p>
                    <strong>b) {perguntas[6].b}</strong>
                  </p>
                )}
                {q7 === 'c' && (
                  <p>
                    <strong>c) {perguntas[6].c}</strong>
                  </p>
                )}
                {q7 === 'd' && (
                  <p>
                    <strong>d) {perguntas[6].d}</strong>
                  </p>
                )}
                <br />
                <p>
                  {perguntas[7].q}) {perguntas[7].p}
                </p>
                {q8 === 'a' && (
                  <p>
                    <strong>a) {perguntas[7].a}</strong>
                  </p>
                )}
                {q8 === 'b' && (
                  <p>
                    <strong>b) {perguntas[7].b}</strong>
                  </p>
                )}
                {q8 === 'c' && (
                  <p>
                    <strong>c) {perguntas[7].c}</strong>
                  </p>
                )}
                {q8 === 'd' && (
                  <p>
                    <strong>d) {perguntas[7].d}</strong>
                  </p>
                )}
                <br />
                <p>
                  {perguntas[8].q}) {perguntas[8].p}
                </p>
                {q9 === 'a' && (
                  <p>
                    <strong>a) {perguntas[8].a}</strong>
                  </p>
                )}
                {q9 === 'b' && (
                  <p>
                    <strong>b) {perguntas[8].b}</strong>
                  </p>
                )}
                {q9 === 'c' && (
                  <p>
                    <strong>c) {perguntas[8].c}</strong>
                  </p>
                )}
                {q9 === 'd' && (
                  <p>
                    <strong>d) {perguntas[8].d}</strong>
                  </p>
                )}
                <br />
                <p>
                  {perguntas[9].q}) {perguntas[9].p}
                </p>
                {q10 === 'a' && (
                  <p>
                    <strong>a) {perguntas[9].a}</strong>
                  </p>
                )}
                {q10 === 'b' && (
                  <p>
                    <strong>b) {perguntas[9].b}</strong>
                  </p>
                )}
                {q10 === 'c' && (
                  <p>
                    <strong>c) {perguntas[9].c}</strong>
                  </p>
                )}
                {q10 === 'd' && (
                  <p>
                    <strong>d) {perguntas[9].d}</strong>
                  </p>
                )}
              </>
            )}
            {q1 && q2 && q3 && q4 && q5 && q6 && q7 && q8 && q9 && q10 && (
              <div>
                <Default>
                  <Link onClick={() => enviarTeste()}>Enviar Respostas</Link>
                </Default>
              </div>
            )}
          </div>
        )}
      </Prod>
    </Container>
  );
}
