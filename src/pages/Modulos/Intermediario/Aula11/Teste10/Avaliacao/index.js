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

const titulo = 'Santíssima Trindade que Leva ao Sucesso';

const cred1 = 'Por Claus Möller';

const cred2 = 'Revista Exame';

const textos = [
  'Responsabilidade, lealdade e iniciativa. Eis os elementos fundamentais que formam o conceito de empregabilidade.  Sua carreira depende disso.',
  'Empregabilidade é a maneira mais clara de enxergar as três áreas de êxito de uma organização: produtividade, relações e qualidade. Também é uma palavra nova.',
  'A empregabilidade pode ser comparada a outras formas de "ade", "ança" ou "ia". Da mesma forma que a palavra cidadania define aquilo que é preciso para ser um bom cidadão e liderança o que é preciso para ser um bom líder, a empregabilidade define o que é preciso para ser um bom funcionário.',
  'Quando o indivíduo faz um esforço sincero e orientado às metas para fazer o melhor possível dentro das três áreas de êxito da organização demostra um tipo especial de engajamento pessoal. Esse tipo de engajamento é o que eu chamo de empregabilidade.',
  'Qual a importância de se ter claro esse conceito em mente? Quem pensa que as hierarquias das empresas não podem se achatar ainda mais do que já se achataram será forçado a rever suas ideias. No futuro haverá muito poucas camadas de direção e não haverá espaço para processos ou pessoas que não ajudem a criar um valor adicionado mensurável em relação à lógica da organização.',
  'Em lugar de organizar seu produto em torno de funções, as organizações vão organizá-lo em torno de processos.',
  'Processos exigem equipes. Para que possam trabalhar em equipes em benefício da organização e deles mesmos, grandes exigências são impostas aos funcionários. Essas exigências dizem respeito à melhora das relações para assegurar a cooperação nas equipes que são necessárias ao funcionamento dos processos.',
  'O conceito de empregabilidade expressa o que é preciso para a pessoa ser um bom funcionário ou um bom membro de uma equipe. Para que ela se transforme num funcionário melhor e para que uma organização lance as bases para a manutenção ou o desenvolvimento de uma cultura da empregabilidade, é preciso especificar melhor o que é um bom funcionário.',
  'Pedimos, numa pesquisa, a vários diretores de primeiro escalão, gerentes de escalão médio e funcionários de diferentes organizações pelo mundo afora que dessem suas próprias sugestões e definições do que significa ser um bom funcionário.',
  'Algumas das respostas mais frequentes: ser pontual, flexível, prestativo e se dispor a cooperar com todos na organização. Ter consciência dos custos e não desperdiçar os materiais e recursos da organização. Ter em mente o interesse do cliente. Defender seus colegas e a organização contra críticas, possuir competência profissional, ser sincero e honesto. Ter a coragem necessária para defender suas próprias convicções, aprender com seus erros e não tornar a repeti-los, ser organizado em seu trabalho e cuidadoso com sua aparência pessoal, sentir orgulho em fazer parte da organização.',
  'A meu ver, a empregabilidade é composta por três elementos básicos: responsabilidade, lealdade e iniciativa. Esses três conceitos globais são característicos da atitude e do comportamento das pessoas que são boas funcionárias.',
  'Responsabilidade - o senso de responsabilidade é o elemento fundamental da empregabilidade. Sem responsabilidade a pessoa não pode demonstrar lealdade nem espírito de iniciativa. Dificilmente alguém vai se engajar e esforçar-se ao máximo, a não ser que se sinta responsável.',
  'Uma pessoa que se sinta responsável pelos resultados da equipe terá maior probabilidade de agir da maneira mais favorável aos interesses da equipe e de seus clientes, dentro e fora da organização. Ela tende a demonstrar lealdade para com as pessoas e metas da equipe e contribuir para a manutenção de um espírito de equipe, tomando a iniciativa para fazer com que as coisas funcionem no trabalho cotidiano e para melhorar e desenvolver a equipe.',
  'Muitos empresários e executivos sonham em criar uma organização em que todos os funcionários vivam felizes e se esforcem ao máximo. Na maioria dos casos, esse sonho não se concretiza. Existe, em muitas empresas, uma falta de engajamento que dificulta a concretização desse sonho. Essa ausência cria uma diferença muito grande entre o nível de desempenho realmente obtido pelos funcionários e o nível de desempenho que eles poderiam alcançar caso se esforçassem ao máximo.',
  'Para que o sonho de bem-estar e bom desempenho dos funcionários possa vir a tornar-se realidade, é preciso eliminar essa falta de engajamento.',
  'As pessoas podem sentir-se responsáveis e agir com responsabilidade quando estão cientes das metas a cumprir, têm algo pelo que podem assumir responsabilidade e sentem que podem influir sobre a situação, de maneira a ajudar a alcançar as metas. Essa capacidade de influir também pode ser chamada de poder. A experiência de poder influir sobre uma situação, um processo da equipe ou um acontecimento faz a pessoa se sentir importante e cria nela a esperança e expectativa de progresso.',
  'A consciência de que se possuir uma influência real constitui uma experiência pessoal muito importante. É algo que fortalece a autoestima de cada pessoa. Só pessoas que tenham autoestima e um sentimento de poder próprio são capazes de assumir responsabilidade. Elas sentem e criam um sentido na vida, alcançando metas sobre as quais concordam previamente e pelas quais assumiram responsabilidade real, de maneira consciente.',
  'As pessoas que optam por não assumir responsabilidades podem ter dificuldade em encontrar significado em suas vidas. Seu comportamento é regido pelas recompensas e sanções de outras pessoas - chefes e pares. Elas só veem sentido em fazer o que, para elas, é visto como sendo um esforço adicional se, com isso, puderem obter uma vantagem ou evitar uma desvantagem. Pessoas desse tipo jamais serão boas integrantes de equipes.',
  'Antes que uma organização consiga atingir uma cultura de empregabilidade, em que todos assumam responsabilidade, é preciso cumprir pelo menos dois requisitos prévios: a direção precisa delegar responsabilidade e autoridade reais aos funcionários e os funcionários precisam estar dispostos a assumir responsabilidades.',
  'Muitas organizações em diferentes partes do mundo já reconheceram a importância de romper as hierarquias e conceder poder aos funcionários. Essa, pelo menos, é sobre delegação de poderes e concessão de poder aos funcionários, tão abundante na literatura sobre administração de empresas.',
  'Mas as tentativas feitas pelas organizações de delegar responsabilidade e autoridade nem sempre produz os resultados esperados.',
  'Não basta a direção da organização se dispor a conceder essa responsabilidade. Ela precisa de alguém a quem entregar essa responsabilidade. Alguém que veja a responsabilidade como oportunidade para incrementar seu desenvolvimento pessoal.',
  'Lealdade - a lealdade é o segundo dos três principais elementos que compõem a empregabilidade. Um funcionário leal se alegra quando sua organização ou seu departamento é bem-sucedido, defende a organização, tomando medidas concretas quando ela é ameaçada, tem orgulho de fazer parte da organização, fala positivamente sobre ela e a defende contra críticas.',
  'Lealdade não quer dizer necessariamente fazer o que a pessoa ou organização à qual você quer ser fiel quer que você faça. Lealdade não é sinônimo de obediência cega.',
  'Lealdade significa fazer críticas construtivas, mas as mantem dentro do âmbito da organização. Significa agir com a convicção de que seu comportamento vai promover os legítimos interesses da organização.',
  'Assim ser leal às vezes pode significar fazer alguma coisa que se opõe ao que as outras pessoas querem que você faça ou ao que lhe mandaram fazer. Em algumas situações, lealdade pode significar a recusa em fazer algo que você acha que poderá prejudicar a organização, a equipe ou os funcionários.',
  'No Reino Unido, por exemplo, essa ideia é expressa pelo termo "a Oposição Leal a Sua Majestade". Em outras palavras, é perfeitamente possível ser leal a Sua Majestade - e mesmo assim fazer parte da oposição. Do mesmo modo, é possível ser leal a uma organização ou a uma equipe mesmo que você discorde dos métodos usados para se alcançar determinados objetivos. Na verdade, seria desleal deixar de expressar o sentimento de que algo está errado, se é isso que você sente.',
  'Lealdade não significa aceitar trabalho e tarefas de todos na organização. Lealdade é aprender a dizer um não inequívoco, especialmente nos casos em que dizer sim implicaria comprometer uma parte grande demais de seu tempo e seus recursos.',
  'Ser leal sem precisar ser obediente é empregabilidade. Lembre:',
  '. empregabilidade não significa ser simpático e dizer sim toda vez que outras pessoas lhe pedem para fazer alguma coisa. Empregabilidade significa dizer não quando você sabe que não poderá desempenhar a tarefa com o nível desejado de qualidade.',
  '. empregabilidade não significa fazer tudo para agradar a seu superior.',
  '. empregabilidade significa tomar a iniciativa de lançar uma discussão construtiva sobre prioridades, quando faltam tempo e outros recursos.',
  '. empregabilidade significa desempenhar todas as tarefas para as quais você disse sim, mesmo que lhe exijam um esforço tremendo.',
  '. empregabilidade significa encontrar um equilíbrio entre o que é possível fazer, com um esforço razoável, e o que é realístico e necessário, sem precisar fazer sacrifícios exagerados.',
  '. empregabilidade significa informar a quem é de direito quando você tem capacidade para assumir novas tarefas.',
  '. empregabilidade significa informar-se sobre a carga de trabalho e a situação de trabalho das outras pessoas antes de impor mais tarefas a elas.',
  '. empregabilidade significa ajudar as outras pessoas a fixar prioridades, para que as coisas certas sejam feitas da maneira certa, no momento certo. Também significa ajudá-las a recusar outras tarefas, se não houver capacidade suficiente para assumi-las.',
  'Iniciativa - tomar a iniciativa de fazer algo no interesse da organização significa, ao mesmo tempo, demonstrar lealdade pela organização. Em um contexto de empregabilidade, tomar iniciativas não quer dizer apenas iniciar um projeto no interesse da organização ou da equipe, mas também assumir responsabilidade por sua complementação e implementação.',
  'Para que possamos usar todo nosso espírito de iniciativa, precisamos de um certo grau de liberdade.',
  'A direção da organização pode ajudar a criar uma estrutura em que os funcionários têm liberdade de agir com base em suas próprias iniciativas e são incentivados a fazê-lo.',
  'A cultura empresarial deve ser uma cultura que acolhe o espírito de iniciativa de braços abertos, e não o vê como ingerência excessiva. Normalmente, é preciso que existam os seguintes requisitos prévios para que as iniciativas de todos deem em bons resultados:',
  '. as metas da organização são conhecidas e aceitas por aqueles que usam seu espírito de iniciativa. E as metas dos próprios funcionários se alinham com aquelas da organização. Quando as metas da organização estão alinhadas com as metas da equipe o e as dos funcionários, cria-se uma organização também alinhada, em que todos puxam a corda no mesmo sentido.',
  '. tanto a direção quanto aqueles que tomam iniciativa devem estar dispostos a assumir riscos calculados.',
  '. todos na organização devem aceitar os erros criativos, que ocorrem quando você faz experiências e testa coisas novas.',
  '. guiar-se mais pela razão do que pelas regras: todos na organização devem pensar em se deixar orientar pela consideração de qual seria a atitude razoável a tomar numa situação dada, em lugar de se deixar controlar por princípios burocráticos, com regras e manuais rígidos.',
  '. força de vontade e coragem: todos na organização devem ajudar uns aos outros a querer e a ousar usar sua iniciativa e maneira inteligente e alinhada.',
  '. desenvolvimento de competências: deve-se criar programas destinados a desenvolver o nível de competência de todos os funcionários, para assegurar que as iniciativas sejam tomadas com conhecimento e habilidade. Não basta ter disposição. Também é preciso ter conhecimento.',
  'Ainda existe, em muitas organizações, a ideia de que só os executivos devem tomar iniciativas. Em uma organização caracterizada pela empregabilidade, todos tomam iniciativas.',
  'Conclusão - a meu ver jamais poderemos concretizar as promessas douradas de equipes de funcionários autodirigidas e com poder próprio, a não ser que trabalhemos conscientemente com vistas à criação de uma cultura de empregabilidade.',
  'O objetivo de trabalhar com novas abordagens na organização atual deve ser dissolver problemas, não apenas resolvê-los. A reengenharia dos processos empresariais, o trabalho em equipe, a delegação de poderes, a eliminação da burocracia e da hierarquia são todos bons meios de resolver problemas sérios. Mas para dissolver esse problema precisamos de uma cultura de empregabilidade.',
];

let perguntas = [
  {
    q: 1,
    p: 'Quais são as áreas de êxito de uma organização?',
    a: 'produtividade, relações e qualidade.',
    b: 'qualidade, treinamento e lucratividade.',
    c: 'qualidade, produtividade lucratividade.',
    d: 'produtividade, organização e qualidade.',
    r: '',
  },
  {
    q: 2,
    p:
      'Responsabilidade, lealdade e iniciativa são elementos que formam o conceito de:',
    a: 'competência.',
    b: 'sucesso.',
    c: 'empregabilidade.',
    d: 'segurança profissional.',
    r: '',
  },
  {
    q: 3,
    p:
      'Para que os funcionários considerem-se responsáveis é necessário que estejam cientes:',
    a:
      'das metas a cumprir e possam influir sobre a situação para alcançá-las.',
    b: 'das dificuldades para que possam transpô-las.',
    c: 'dos prazos estipulados pelo chefe.',
    d: 'dos benefícios que irão alcançar.',
    r: '',
  },
  {
    q: 4,
    p:
      'A responsabilidade, a lealdade e a iniciativa são valores essenciais ao montar equipes de trabalho em organizações modernas voltadas para:',
    a: 'as funções.',
    b: 'os processos.',
    c: 'os concorrentes.',
    d: 'os funcionários.',
    r: '',
  },
  {
    q: 5,
    p:
      'A literatura sobre administração de empresas não aborda de forma positiva a concessão de:',
    a: 'poder aos funcionários.',
    b: 'força para romper a hierarquia.',
    c: 'centralização de poder.',
    d: 'desempenho pessoal.',
    r: '',
  },
  {
    q: 6,
    p:
      'Qual é o segundo dos principais elementos que constituem o conceito de empregabilidade?',
    a: 'responsabilidade.',
    b: 'inciativa.',
    c: 'lealdade.',
    d: 'diferencial competitivo.',
    r: '',
  },
  {
    q: 7,
    p: 'Empregabilidade não se refere a:',
    a: 'sajudar as outras pessoas a fixar prioridade.',
    b: 'desempenhar todas as tarefas que você disse sim.',
    c: 'dizer sim toda vez que as pessoas pedem para realizar alguma tarefa.',
    d:
      'encontrar um equilíbrio entre o que é possível fazer, sem precisar realizar esforços exagerados.',
    r: '',
  },
  {
    q: 8,
    p:
      'Para o desempenho de competências é preciso assegurar que as iniciativas sejam baseadas em:',
    a: 'habilidade e discernimento.',
    b: 'conhecimento e direção.',
    c: 'aprendizado e consciência.',
    d: 'conhecimento e habilidade.',
    r: '',
  },
  {
    q: 9,
    p: 'O texto conclui que as organizações deveriam:',
    a: 'centralizar a responsabilidade.',
    b: 'abolir as hierarquias inicialmente.',
    c: 'viabilizar o completo engajamento dos funcionários.',
    d: 'premiar os funcionários mais eficazes.',
    r: '',
  },
  {
    q: 10,
    p:
      'equipes de funcionários autodirigidas e com poder próprio, é possível concretizar se trabalharmos com vistas na criação de uma cultura de:',
    a: 'competência.',
    b: 'empregabilidade.',
    c: 'interatividade.',
    d: 'negociações do tipo ganha-ganha.',
    r: '',
  },
];

export default function Teste10avaliacao() {
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

  const respCertas = ['a', 'c', 'a', 'b', 'a', 'c', 'c', 'd', 'c', 'b'];

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
      numero: 10,
      prova_id: prova,
    });

    if (response.data) {
      setTesteconcluido(true);
      history.push('/intermediario/10/resultado');
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
        numero: 10,
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

      toast.success('Teste 10 concluído com sucesso!');
      setTimeout(() => {
        setTesteconcluido(true);
        history.push('/intermediario/teste10/resultado');
      }, 3000);
    } catch (error) {
      toast.error('O Teste 10 já foi finalizado!');
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
    setTimeout(() => setPlm(950), 126000);
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
            <small>Teste 10</small>
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
            <Titulo>TESTE 10 - AVALIAÇÃO</Titulo>
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
            <Titulo>TESTE 10 - AVALIAÇÃO</Titulo>
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
                <Default>
                  <Link onClick={() => enviarTeste()}>Enviar Respostas</Link>
                </Default>
              </div>
          </div>
        )}
      </Prod>
    </Container>
  );
}
