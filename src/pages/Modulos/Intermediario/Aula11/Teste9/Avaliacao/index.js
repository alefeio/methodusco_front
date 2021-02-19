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

const titulo = 'Prevenir é Melhor que Remediar';

const cred1 = 'Por Leonardo Attuch';

const cred2 = 'Revista Exame';

const textos = [
  'Inteligência competitiva é o nome do jogo. Nele, as empresas montam salas de guerra onde procuram antecipar os passos da concorrência.',
  'Antes de colocar um produto nas prateleiras de lojas e supermercados, as empresas se cercam de uma montanha de pesquisas e estudos. Todos os aspectos são pensados repensados. Uma dúvida, porém, persiste: e se a concorrência agir rápida e agressivamente e matar o produto ainda no berço?',
  'Num ambiente de intensa competição, esse risco pode comprometer profundamente os resultados. Por isso, um novo método de análise está ganhando adeptos entre empresas dos mais variados tamanhos e setores. São os centros de inteligência competitiva. Sua missão, num primeiro momento, é coletar o máximo de informações sobre os concorrentes, sejam públicas ou confidenciais.',
  'A seguir, vem a montagem de salas de guerra, ou, para usar uma expressão típica dos consultores, salas virtuais de análise competitiva. São trincheiras. Isso mesmo: trata-se de um espaço físico onde os próprios funcionários assumem a personalidade dos concorrentes e tentam agir como se fossem um deles. "Aqui no meu bunker, eu sou Compaq, Hewlett-Packard, Digital", diz Alexandre Mattos, responsável pelos serviços de inteligência da IBM no Brasil na área de computadores pessoais. "Enfim, qualquer coisa, menos IBM".',
  'Nos Estados Unidos, a IBM radicaliza essa experiência. Lá, nas salas de guerra ficam expostas bandeiras e símbolos das milícias inimigas. No Brasil, embora não se faça esse teatro, o princípio é idêntico: incorporar a visão e a cultura do concorrente, não da própria empresa.',
  'Mattos é um sujeito discreto. Até o nome utilizado nesta reportagem é fictício. Mattos não faz campanas, não usa grampos telefônicos nem dá caneladas na ética. Muitas vezes, ele tem de circular incógnito entre os concorrentes. Poucos meses atrás, Mattos esteve frente a frente com Eckhard Pfeiffer, chefão mundial da Compaq. Numa visita recente de Pfeiffer ao Brasil, Mattos participou de um encontro do americano com fornecedores e clientes e, no final, conversou pessoalmente com ele. Nessa ocasião, obteve informações importantes e chegou até a ser convidado para uma visita à fábrica da Compaq nos Estados Unidos.',
  'É evidente que Pfeiffer acreditava que Mattos era um de seus clientes ou fornecedores. "Isso é uma exceção", diz Mattos. "A maior parte dos dados sobre o concorrente está no mercado ou dentro de nossa própria empresa". Quando não é esse o caso, bem, aí o jeito é procurar saídas não ortodoxas. Uma das táticas é a do mstery customer, na qual o interessado se faz passar por um cliente em potencial do concorrente. Mattos também utiliza esse método.',
  'Vácuo Experimental - a função dos serviços de inteligência, ou das salas de guerra, é justamente poupar energias e evitar que as empresas assumam riscos desnecessários.',
  'Em vez de tomar uma iniciativa e esperar para ver o que acontece, a empresa tenta limitar os graus de incerteza. Em Santa Catarina, a Cremer foi mais longe do que a própria IBM. Depois de recolher informações mercadológicas e financeiras de seus concorrentes, como York e Johnson & Johnson, a empresa tem feito verdadeiras simulações de guerra. Foram montados cinco grupos na Cremer, cada um simbolizando um adversário. A empresa empregou um software, o Value War, desenvolvido pelo professor e consultor David Reibstein, da Wharton School, nos Estados Unidos.',
  'Depois de ser alimentado com os balanços de todas as empresas, suas participações no mercado, assim como as estruturas de custos e margens, o programa projetou situações para os três anos seguintes. Em cada uma delas, foi testada uma estratégia diferente da Cremer. Depois, as reações dos concorrentes eram simuladas. Exemplo: se a Cremer investisse em ampliação de capacidade, qual seria a reação da Johnson?',
  '"Não há nada mais estimulante e nossas decisões estratégicas saem daí", diz Sammy Roger Ewald, responsável pela área de controle e planejamento da Cremer.',
  '"É como criar um ambiente de vácuo para testes empresariais, sem os rescos da vida real", afirma o consultor Orfeu Trivelli, da Strategia, consultoria paulista especializada em inteligência competitiva.',
  'Uma das regras elementares nesse jogo é jamais subestimar seus adversários, por mais inofensivos que pareçam. A própria IBM, por não ter sondado a estratégia de um rival no começo dos anos 80, foi surpreendida. Tratava-se da Apple, que lançou seus computadores pessoais dois anos antes da Big Blue.',
  'Em parte, o conceito de inteligência competitiva foi responsável pelo crescimento da Fama, uma tecelagem com sede em Americana, interior de São Paulo. A empesa multiplicou por vinte seu faturamento, que hoje é próximo a 80 milhões de dólares, em menos de uma década de vida. O grupo já é o segundo maior produtor de linho do país.',
  '"Um dos requisitos para se trabalhar aqui é trazer o máximo de informações dos concorrentes", diz Lúcio Pinheiro, diretor-superintendente da empresa. Entre os principais adversários da Fama estão nomes robustos como Braspérola e Vicunha, mas a empresa já conquistou cerca de 20% do mercado nacional de linho. O principal salto competitivo da empresa foi ter percebido um erro estratégico de seus rivais. A Fama, em vez de possuir fiações no Brasil, como fazem as outras empresas, produz o fio na França, em associação com a Française du Lin. A razão é simples. É lá que está a matéria-prima. O Brasil não tem produção da planta que dá origem ao tecido. Assim, a Fama ganha por estar próxima dos insumos e também em razão das baixas alíquotas de importação para o setor: "Felizmente, evitamos o erro de investir em  grandes projetos de fiação no Brasil", diz Luciano Paiva, diretor internacional da empresa.',
  'Processos de inteligência - sempre que um concorrente lança ou pretende lançar um novo tecido, a Fama tenta obtê-lo antecipadamente. Depois, esse mesmo tecido é decomposto nos laboratórios da empresa, onde, pela composição das fibras, tenta-se chegar à política possível de preços dos concorrentes.',
  'Embora sejam raras as companhias que já adotam salas de guerra ou processos de inteligência competitiva no Brasil, a idéia ganha adeptos. Na Escola Superior de Propaganda e Marketing, em São Paulo, vem sendo desenvolvido um programa de pós-graduação voltado exclusivamente a esse método. "A intenção é levar os projetos da universidade para as empresas", diz o engenheiro Railton de Carvalho, coordenador de produtos da Cimento Portland Eldorado. Na ESPM, ele montou um esboço de sala de guerra com seus principais concorrentes. Como em qualquer jogo, o importante é ganhar. Desde que não se trapaceie.',
  'O rol de empresas já esboçando salas de guerra na ESPM é dos mais variados: da Gatorade, uma divisão da Quaker, até a Malinkrodt, fabricante de vacina para febre aftosa, passando pela Lion, representante da americana Caterpillar para a venda de motores náuticos.',
  'Por isso, se você ainda não tiver se dado conta da importância de conhecer a fundo seus concorrentes, cuidado! Eles podem estar fazendo isso no seu lugar.',
];

let perguntas = [
  {
    q: 1,
    p: 'Qual o nome do jogo mencionado no texto?',
    a: 'inteligência competitiva.',
    b: 'impacto competitivo.',
    c: 'realidade competitiva.',
    d: 'competição inteligente.',
    r: '',
  },
  {
    q: 2,
    p: 'Qual o objetivo central das salas virtuais de análise competitiva?',
    a: 'levantar informações sobre os procedimentos dos concorrentes.',
    b:
      'simular estratégias e não ser surpreendido pelo lançamento antecipado da concorrência.',
    c: 'estratégia agressiva de atualização profissional.',
    d: 'não obsolescência dos produtos.',
    r: '',
  },
  {
    q: 3,
    p: 'Cite uma das regras básicas do jogo no tocante ao adversário:',
    a: 'superestimá-lo.',
    b: 'jamais subestimá-lo.',
    c: 'realizar pesquisa de mercado.',
    d: 'interagir com estratégia.',
    r: '',
  },
  {
    q: 4,
    p:
      'Que empresa, com sede no Sul do país, usa a estratégias das salas de guerra?',
    a: 'Johnson & Johnson.',
    b: 'Cremer.',
    c: 'Hering.',
    d: 'Krünner.',
    r: '',
  },
  {
    q: 5,
    p: 'A estratégia usada em uma sala virtual empresarial consiste em:',
    a:
      'convidar os principais concorrentes e travar uma acirrada polêmica sobre as estratégias do mercado.',
    b:
      'várias equipes de uma mesma empresa personifica as principais empresas concorrentes e simulam possíveis estratégias.',
    c:
      'equipes de consultores externos apresentam estratégias de vanguarda do mercado.',
    d:
      'diferentes empresas e de diferentes setores são representadas por várias equipes que simulam suas estratégias.',
    r: '',
  },
  {
    q: 6,
    p:
      'Que empresa surpreendeu a IBM na década de 80 lançando seus computadores pessoais?',
    a: 'Microsoft.',
    b: 'Compaq.',
    c: 'Apple.',
    d: 'Digital.',
    r: '',
  },
  {
    q: 7,
    p:
      'Qual o principal erro estratégico que a Fama, empresa de tecelagem, evitou ao adotar as salas virtuais?',
    a: 'renegociar a matéria prima "in locu".',
    b: 'produzir o fio na Inglaterra, lugar da matéria-prima.',
    c: 'menosprezar o custo benefício da tecnologia.',
    d: 'produzir o fio na França, lugar da matéria-prima.',
    r: '',
  },
  {
    q: 8,
    p:
      'Em que escola vem sendo desenvolvido um programa de pós-graduação voltado para  este método',
    a: 'ESPM.',
    b: 'USP.',
    c: 'PUC.',
    d: 'UNESP.',
    r: '',
  },
  {
    q: 9,
    p: 'Qual o significado da expressão myster customer?',
    a: 'passar por um cliente em potencial do concorrente.',
    b: 'impor no mercado o seu diferencial.',
    c: 'empresa estratégica.',
    d: 'desenvolvimento do potencial interno.',
    r: '',
  },
  {
    q: 10,
    p: 'O texto lido foi publicado em qual revista ou jornal?',
    a: 'Exame.',
    b: 'Veja.',
    c: 'Isto É.',
    d: 'Época.',
    r: '',
  },
];

export default function Teste9avaliacao() {
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

  const respCertas = ['a', 'b', 'b', 'b', 'b', 'c', 'd', 'a', 'a', 'a'];

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
      numero: 9,
      prova_id: prova,
    });

    if (response.data) {
      setTesteconcluido(true);
      history.push('/intermediario/teste9/resultado');
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
        numero: 9,
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

      toast.success('Teste 9 concluído com sucesso!');
      setTimeout(() => {
        setTesteconcluido(true);
        history.push('/intermediario/teste9/resultado');
      }, 3000);
    } catch (error) {
      toast.error('O Teste 9 já foi finalizado!');
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
    setTimeout(() => setPlm(900), 75500);
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
            <small>Teste 9</small>
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
            <Titulo>TESTE 9 - AVALIAÇÃO</Titulo>
            <br />
            <h2>
              {titulo && titulo}
              <small>
                {cred1 && <>{cred1} </>}
                {cred2 && <> - {cred2}</>}
              </small>
            </h2>
            {textos.map((t, i) => t && <p>{t}</p>)}
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
            <Titulo>TESTE 9 - AVALIAÇÃO</Titulo>
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
