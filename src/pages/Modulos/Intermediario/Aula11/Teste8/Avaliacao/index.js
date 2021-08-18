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

const aula = 11;

const hrInicio = Date.now();

const titulo = 'Vá para Casa mais Cedo';

const cred1 = 'Por Célia Chaim';

const cred2 = 'Você S.A.';

const textos = [
  'Trabalhar bem é melhor do que trabalhar muito. Adote esse lema e descubra que encurtar em 1 hora sua jornada de trabalho pode  torná-lo ainda mais competente.',
  'Pobres workaholics! Estão descobrindo que todo o seu esforço pode ser superado pelo empenho mais moderado e não menos eficiente daqueles que também adoram trabalhar, mas são capazes de desenvolver e curtir outros interesses na vida - inclusive a própria família. Um estudo realizado por professores da Warton School, uma das melhores faculdades de Administração dos Estados Unidos, constatou que os profissionais preocupados em manter uma boa vida familiar acabam ganhando mais dinheiro que aqueles que sacrificam a vida pessoal em função da carreira.',
  'Difícil de acreditar? Então conheça o lema recentemente adotado pela United Techonologics, empresa americana de tecnologias de ponta: trabalhar bem é melhor do que trabalhar muito. Isso é modismo de americano? Vamos estão bisbilhotar a agenda do médico e consultor brasileiro Ricardo de Marchi, da CPH Sistemas de Qualidade de Vida e Promoção da Saúde, especialistas na implantação de programas de qualidade de vida em empresas.',
  'Dez anos atrás, ele recebia uma consulta por mês de empresas interessadas em seus serviços. A média agora é de dez consultas por semana. "As empresas querem mais produtividade, e isso - por mais contraditório que pareça à primeira vista - passa necessariamente pelo equilíbrio entre a vida profissional e a pessoa de seus funcionários", diz o consultor. Algumas empresas começam a acreditar que há pessoas que trabalham horas e mais horas e nem por isso são mais produtivas. Por trás dessa avaliação está a constatação de que a maioria delas mergulha no trabalho não por necessidade real mas porque não tem outra coisa a fazer na vida.',
  'Embora as empresas brasileiras ainda estejam despertando para o conceito de qualidade de vida - descoberta feita nos Estados Unidos na virada de década de 70 -, a motivação dos clientes da CPH não é muito diferente daquela que levou a United Technologies a repensar sua atitude em relação aos profissionais que, por amor ao trabalho ou medo de perdê-lo, precisam ser empurrados para casa. O conceito mais moderno é que, enquanto a qualidade de vida faz bem para a produtividade, o trabalho levado à condição de vício pode ser fatal à criatividade.',
  'Pensar sobre isso já é o primeiro passo para aliviar a rotina daqueles que optaram por abolir qualquer possibilidade de prazer fora do trabalho. Um segundo passo importante é responder a si mesmo algumas questões essenciais. Por exemplo: Você dá atenção à sua vida social? Você tem uma vida equilibrada? Seu tempo disponível para lazer é satisfatório? Se para cada uma dessas perguntas a resposta for não, comece a ficar (ainda Mais) preocupado... ou experimente o prazer de deixar o trabalho 1 hora mais cedo. "Há empresas que ainda valorizam as jornadas prolongadas, mas a tendência que prevalece hoje é de avaliar a carreira do executivo pelos resultados que ele traz", diz a gerente-geral de recursos humanos do McDonalds, Rosa Paulino.',
  'O trabalho sem limites tem muitas contra-indicações, inclusive profissionais. Uma delas é levar o workaholic a se desligar de tudo o que é novo - o que, ninguém duvida, é um passaporte para a obsolescência, algo fatal em qualquer área de atuação.',
  '"Tenho muitos outros interesses que me dão energia para o trabalho", diz o engenheiro e administrador Luiz Antonio Viana, 48 anos, diretor-superintendente do Pão de Açúcar e braço direito do empresário Abílio Diniz no comando da terceira maior empresa privada nacional, um negócio de 2,2 bilhões de dólares e 20 000 funcionários. Viana consegue administrar esse transatlântico sem abdicar de sua paixão pelo teatro, pelo cinema, pela leitura e pelo esporte. "Fujo das pessoas que falam em business o tempo todo e dos intermináveis almoços de negócios", diz Viana.',
  'A propósito, experimente fazer a conta das horas que passou sentado à mesa de um restaurante para falar de negócios nos últimos trinta dias. Agora, avalie os resultados práticos dessa maratona. Muito provavelmente, você chegará à conclusão de que só a balança registrou o resultado de tantos almoços.',
  'A dica é preciosa para quem quer ganhar tempo e ir mais cedo para casa. "Em benefício da minha qualidade de vida, comecei a cortar esses almoços, não atendo ligações de negócios em casa, não dou o número do celular para ninguém", diz um empresário.',
  'Disciplina e organização pessoal são aliadas importantes nessa conquista. "Uma secretária eficiente também ajuda muito", diz Luiz Antonio Viana. Às 7 e meia da manhã, ele já está na sede do Pão de Açúcar, na Zona Sul de São Paulo. Ao meio-dia, troca o terno por calção e camiseta e vai se dedicar à corrida, à ginástica e à massagem. É hora de descansar a cabeça e colocar o corpo em dia. Na volta ao escritório, Viana come algo leve e retoma o trabalho até 6 e meia. Lição de casa? Isso é coisa do tempo em que ele fazia pós-gradução na Londom Business School. "O trabalho é um meio de vida que me gratifica muito", diz Viana. "Adoro o que faço, não pretendo me aposentar nunca, mas acho que o workaholic, como qualquer viciado, é um infeliz".',
  'Tão infeliz que, numa viagem de negócios, é capaz de se trancafiar num hotel no centro da cidade - seja ela Paris, seja Bangcoc - e jamais se dar o prazer de apreciar uma paisagem sem pressa. "Isso não passa pela cabeça de um workaholic, mas quem viaja muito deveria ter a preocupação de se hospedar, por exemplo, num hotel diante de um parque", diz o médico Ricardo de Marchi. Viana sabe que isso não é pecado. Como tem o hábito de se exercitar diariamente, ele aproveita suas caminhadas para conhecer os lugares. Na mesma linha, quando é possível Viana aproveita uma viagem de negócios para esticar alguns dias e passear com a família.',
  'Uns dias a mais numa viagem, 1 hora a menos no dia de trabalho... Quem experimentou sabe que o retorno é dos mais positivos. Antoninho Marmo Trevisan, da Trevisan Auditores e Consultores, aprendeu essa lição com um bebê de 2 anos, seu filho Vítor. Todos os dias, até a chegada de Vítor, Trevisan já estava a caminho do trabalho às 7 horas da manhã, numa jornada que se prologaria por     pelo menos 12 horas. O garoto, então, começou a solicitá-lo para brincadeiras logo cedo, quando Trevisan já estava com a chave do carro na mão. Vítor não precisou insistir muito para conquistar 1 hora da rotina de trabalho do pai. "Não consigo mais sair de casa às 7 horas, e acho isso ótimo", diz. "Saio às 8 e chego no trabalho feliz da vida". E nem por isso passou a ter algum prejuízo.',
  'Então, o que você está esperando?',
];

let perguntas = [
  {
    q: 1,
    p: 'O que são workaholics?',
    a: 'profissionais extremamente requisitados.',
    b: 'profissionais super eficientes.',
    c: 'profissionais viciados no trabalho.',
    d: 'profissionais extremamente estressados.',
    r: '',
  },
  {
    q: 2,
    p:
      'Estudo realizado em uma das melhores faculdades dos EUA, constaram que profissionais preocupados com uma boa vida familiar:',
    a: 'ganham menos dinheiro, mas são mais felizes.',
    b: 'não são profissionais ambiciosos.',
    c: 'possuem maior discernimento.',
    d:
      'ganham mais dinheiro do que aqueles que sacrificam sua vida pessoal em função da carreira.',
    r: '',
  },
  {
    q: 3,
    p:
      'Algumas empresas acreditam que há pessoas que trabalham horas e horas e nem por isso são mais produtivas. Por trás dessa avaliação está a constatação de que:',
    a: 'são pessoas automotivadas, só que necessitam ter mais equilíbrio.',
    b: 'são pessoas altamente inseguras.',
    c:
      'a maioria mergulha no trabalho, não por necessidade real, mas porque não tem outra coisa a fazer na vida.',
    d:
      'a maioria considera que é o melhor que se pode fazer na vida, para conseguir uma promoção.',
    r: '',
  },
  {
    q: 4,
    p:
      'As empresas brasileiras ainda estão despertando para o conceito de qualidade de vida - este conceito foi descoberto em que país:',
    a: 'Inglaterra.',
    b: 'Suécia.',
    c: 'Escócia.',
    d: 'EUA.',
    r: '',
  },
  {
    q: 5,
    p: 'No país supracitado, este conceito ocorreu na virada de que década:',
    a: '80.',
    b: '70.',
    c: '60.',
    d: '50.',
    r: '',
  },
  {
    q: 6,
    p: 'O artigo não aborda:',
    a: 'trabalhar bem é melhor que trabalhar muito.',
    b: 'trabalhar muito é condição sine qua non para o stress.',
    c: 'qualidade de vida faz bem para a produtividade.',
    d: 'o trabalho levado à condição de vício pode ser fatal à criatividade.',
    r: '',
  },
  {
    q: 7,
    p:
      'As empresas ainda valorizam jornadas longas de trabalho, mas a tendência é:',
    a: 'proporcionar ao executivo participação nas ações da empresa.',
    b: 'remunerar o executivo pelas horas trabalhadas.',
    c: 'avaliar a carreira do executivo pelos resultados que ele traz.',
    d: 'proporcionar mais uma folga semanal.',
    r: '',
  },
  {
    q: 8,
    p:
      'O trabalho sem limites tem muitas contra-indicações, inclusive profissionais, porque:',
    a: 'leva o workaholic a avaliar seu próprio desempenho.',
    b: 'proporciona desinteresse pelo trabalho menos elaborado.',
    c: 'leva o workaholic a desligar-se de tudo o que é novo.',
    d: 'reflete sua dedicação acurada pelo trabalho.',
    r: '',
  },
  {
    q: 9,
    p:
      'O texto cita uma dica preciosa para quem quer ganhar mais tempo e ir mais cedo para casa, a dica é:',
    a: 'ser organizado.',
    b: 'possuir agenda.',
    c: 'cortar almoços de negócios.',
    d: 'manter as correspondências em dia.',
    r: '',
  },
  {
    q: 10,
    p:
      'Analise os itens citados, qual contribui para uma melhor qualidade de vida do executivo?',
    a: 'disciplina.',
    b: 'organização pessoal.',
    c: 'delegar poderes.',
    d: 'todos os itens estão corretos.',
    r: '',
  },
];

export default function Teste8avaliacao() {
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

  const respCertas = ['c', 'd', 'c', 'd', 'b', 'b', 'c', 'c', 'c', 'd'];

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
      numero: 8,
      prova_id: prova,
    });

    if (response.data) {
      setTesteconcluido(true);
      history.push('/intermediario/teste8/resultado');
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

      const calcPcm = ((plm * notaPcr) / 100).toFixed(1);

      const calcHoras = (116000 / calcPcm / 60).toFixed(1);

      await api.post('testes', {
        numero: 8,
        plm,
        pcr: notaPcr,
        pcm: calcPcm,
        horas: calcHoras,
        nivel_id: 4,
        prova_id: prova.id,
      });

      const response = await api.get(`provas`);

      setProva(response.data);
      dispatch(updateProvaRequest(response.data));

      toast.success('Teste 8 concluído com sucesso!');
      setTimeout(() => {
        setTesteconcluido(true);
        history.push('/intermediario/teste8/resultado');
      }, 3000);
    } catch (error) {
      toast.error('O Teste 8 já foi finalizado!');
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

  // async function calcPlm() {
  //   const dif = ((Date.now() - hrInicio) / 1000).toFixed(1);

  //   const calculo = ((559 * 60) / dif).toFixed(1);

  //   setPlm(calculo);
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
    setTimeout(() => setPlm(850), 80000);
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
            <small>Teste 8</small>
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

        <a href="javascript:history.back()">
          <small>&laquo; Voltar</small>
        </a>
      </Voltar>
      <Prod visivel={visiv}>
        {!plm && !testeconcluido && (
          <div>
            <Titulo>TESTE 8 - AVALIAÇÃO</Titulo>
            <br />
            <h2>
              {titulo && titulo}
              <small>
                {cred1 && <>{cred1} </>}
                {cred2 && <> - {cred2}</>}
              </small>
            </h2>
            {textos.map((t, i) => t && <p key={i}>{t}</p>)}
            {/* <br />
            <div>
              <Default>
                <Link onClick={() => calcPlm()}>Responder às Perguntas</Link>
              </Default>
            </div> */}
          </div>
        )}
        {plm && !testeconcluido && (
          <div>
            <Titulo>TESTE 8 - AVALIAÇÃO</Titulo>
            <br />
            <h2>Avaliando a Compreensão e a Retenção</h2>
            <br />
            <Slider {...settings}>
              {perguntas.map((p, i) => (
                <div key={i}>
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
              <p className="questoes">
                Questões respondidas:
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
              <div>
                {q1 && q2 && q3 && q4 && q5 && q6 && q7 && q8 && q9 && q10 && <Default>
                <Link onClick={() => enviarTeste()}>Enviar Respostas</Link>
              </Default>}
              </div>
          </div>
        )}
      </Prod>
    </Container>
  );
}
