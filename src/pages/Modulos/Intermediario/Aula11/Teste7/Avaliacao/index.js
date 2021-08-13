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

const titulo = 'Faça a Guerra, não o Amor';

const cred1 = 'Por Adriano Silva';

const cred2 = 'Revista Exame';

const textos = [
  'Em vez de se queixarem dos competidores estrangeiros, os empresários brasileiros precisam reagir - e ganhar mercados.',
  'O déficit comercial é assustador. É um problema de duas faces, nenhuma delas bonita.',
  'A face mais aparente e a drenagem das divisas nacionais. Um vermelho de 8 bilhões de dólares em 1997 equivalente a subtrair à economia do país os faturamentos da Volkswagen, maior empresa privada do Brasil, e de uma companhia do porte da Philips, considerando números de 1995. Evidentemente, as reversas em moeda estrangeira, na casa dos 60 bilhões de dólares, e os investimentos estrangeiros, que podem chegar a 12 bilhões este ano, têm sido suficientes para calçar o pé da mesa e não deixá-la virar.',
  'Só que, por um lado, a economia brasileira não deveria mais conviver com calços, tramelas ou remendos de qualquer ordem. Por outro, ao taparem o buraco da balança comercial, os investimentos estrangeiros têm seu efeito contábil amortecido. Você já imaginou que bela fotografia do Brasil seria um superávit comercial, mínimo que fosse, ao lado desses vários bilhões de dólares entrando como investimento direto?',
  'A face menos aparente do problema do déficit não tem relação direta com ações do governo ou com os números da macroeconomia. É um problema de visão e estratégia, que acontece amiúde dentro das companhias: o empresário brasileiro, salvo poucas exceções, ainda não descobriu o manancial de oportunidades e lucros disponível no comércio internacional. Enquanto ele estica essa soneca que vem tirando desde sempre, excelentes negócios que poderiam ser brasileiros vão sendo carimbados com cores de outros países.',
  'No estudo dos negócios, há sempre um ponto a partir do qual o mercado e suas forças deixam de ser suficientes para explicar o sucesso ou o fracasso dessa ou daquela companhia, desse ou daquele país. Condições históricas, políticas e econômicas exercem, é claro, papel preponderante nos rumos de uma empreitada. São a mão invisível do mercado, pedra fundamental da ideologia liberal. Mas há também enorme fatia de responsabilidade repousando na definição das estratégias, na tomada de decisões, na condução das ações. Isto é, na mão visível do mercado: o gerenciamento.',
  'Nos Estados Unidos, onde os fatores macro são estáveis e sólidos há décadas, o manegement assumiu há pelo menos meio século um papel fundamental no que toca ao destino das companhias e, de modo mais amplo, do próprio país.',
  'Os gerentes, e em especial a alta gerência, são os senhores da guerra. Se não souberem jogar, são eles as primeiras baixas: estão na linha de frente, como os bons generais. Se forem jogadores exímios, são pagos regiamente e podem virar sócios das companhias em poucos anos. Um jogo de regras simples e claras, bem ao estilo americano de eficiência. As condições estão dadas da mesma forma para todos os jogadores e o que define o sucesso de uma companhia ou o fracasso de outra são os movimentos que cada uma decide fazer e a maneira como os fazem, ou seja, o tipo de gerenciamento que implementam.',
  'Gerentes Burocráticos - no Brasil, o quadro tem sido outro. Primeiro, é difícil falar em mão invisível do mercado numa economia historicamente dividida em feudos, que com o tempo conseguiu a façanha de traduzir-se pelo lado ruim do capitalismo e do livre mercado somado ao que havia de pior nas economias planejadas e de estado grande. É uma proeza nacional termos podido montar ao longo deste século um sistema de um lado rapinesco, no qual poucas leis fazem tanto sentido quanto a lei do mais forte, e de outro lado caracterizado por um centralismo estatal que é ineficiente à raiz.',
  'Nesse contexto, o gerente no Brasil sempre foi um funcionário burocrático, pago para administrar os entraves do dia-a-dia. A ele não era requerida nem dada a busca de novas oportunidades, o aperfeiçoamento dos processos, o desenvolvimento de estratégias. Afinal, a exemplo das grandes propriedades rurais, boa parte dos mercados no Brasil chegaram às empresas como lotes cercados de arame. A alta gerência decidida quanto daquele lote usaria e o tamanho da margem de lucro que queria ter. Os consumidores, à guisa de vassalos, não tinham muita alternativa senão pagar o que lhes era exigido e resignar-se com o que recebiam em troca.',
  'Todo esse cenário começou a mudar na década de 90, especialmente com o Plano Real e a nova economia brasileira. A competição está lentamente se tornando um ingrediente efetivo do mundo dos negócios no Brasil. A maior estabilidade macroeconômica está trazendo o foco das ações para onde ele deve de fato estar: no gerenciamento.',
  'Ainda estamos longe de uma situação na qual quem não sabe fazer dá lugar para quem faz melhor. O mundo dos negócios brasileiro ainda está repleto de amigos e filhos ocupando funções que em muitos casos seriam melhor desempenhadas por executivos profissionais.',
  'Há no Brasil um número muito grande de companhias familiares em que esse tipo de situação é lugar-comum. Mas elas não são as únicas a continuarem tolerando ineficiências internas. É possível dizer que a maioria das empresas nacionais, mesmo as nominalmente não-familiares, ainda relutam em profissionalizar o gerenciamento de maneira ampla, instaurando sistemas efetivos de avaliação que premiem o êxito e aparem as arestas menos eficazes.',
  'Como consequência de não operarem da maneira mais funcional, várias dessas empresas acabam não tomando as melhores decisões. Enxerga perigo em situações que, vistas por lentes mais argutas, apareceriam como oportunidade. O problema da balança comercial, e num sentido mais largo, da inserção do Brasil no contexto da economia internacional, tem uma de suas raízes mais profundas enterrada nessa miopia gerencial.',
  'Brios tocados - um discurso tem sido comum aos industriais brasileiros ultimamente: é impossível para as empresas nacionais disputar a corrida global por mercados e clientes - especialmente quando ela ocorre dentro do Brasil. Ou seja, chineses, tailandeses, argentinos e toda sorte de cores nacionais estariam entrando incólumes com seus produtos no mercado brasileiro e realizando estragos entre os competidores nacionais. A reação generalizada do empresariado reflete precisamente o passado que nos trouxe à presente situação de vulnerabilidade do país: vão bater às portas do Palácio do Planalto, em sobressalto.',
  'Poucos realizam o movimento na direção oposta, o que se esperaria de empreendedores, que é analisar a concorrência, reorganizar a produção, reduzir os custos, repensar o marketing e declarar guerra. Numa palavra: retaliar os importados, revidar, competir. A cerca que protegia os lotes desses empresários ainda não foi eliminada, apenas perdeu um pouco da altura. Cairá por completo em breve, seja por força do desenvolvimento da nova economia brasileira, seja porque tomar parte no presente desenhado para o mundo pela década de 90, ou no futuro próximo que nos é sugerido pelo próximo século, tem seu preço. Nenhuma economia que não seja genuína e agressivamente liberal terá condições de sobreviver.',
  'O mesmo se dará ao nível das empresas. Quem não tiver condições de caminhar pelas próprias pernas - e continuar atrelando seu passo ao protecionismo, seja ele fruto de uma estrutura feudal como a nossa ou de um sistema centralizador como o de alguns países europeus e asiáticos - simplesmente não caminhará. Assistirá ás próximas décadas desde uma posição retardatária.',
  'Portanto, o medo em relação aos estrangeiros, acalentado em quase toda empresa nacional, precisa transformar-se em sede, em desagravo, em brios tocados. O medo é fruto desse útero à prova de ameaças que o estado brasileiro tem provido às empresas desde há muito. Vir á luz é sempre uma experiência traumática - e necessária. Do lado de fora há o risco e a competição. Mas há também enormes recompensas. Sobretudo há o jogo, que ao lado de ser o palco inescapável de qualquer empresa é também elemento gerador de satisfação, lucro e realizações pessoais e corporativas.',
  'O primeiro passo é transformar o medo em energia para dar combate aos competidores internacionais no mercado doméstico. Cauterizar os arranhões que lhes permitimos nos causar. Teoricamente, as companhias nacionais estão em vantagem: jogam em casa, conhecem o terreno, estão ambientadas ao clima. Talvez seja preciso mudar a tática do time e trocar um ou dois jogadores.',
  'É como se as empresas nacionais tivessem sempre sido as campeãs da série B e agora estivessem jogando na divisão principal. Haverá momentos em que a saudade da várzea e dos jogos sonolentos apertará. Mas aí bastará olhar para os lados e ver que a divisão principal acontece em estádios de porte, com torcida atenta, juiz imparcial, gramado impecável e que, sobretudo, a taça e os prêmios aos vencedores são muito, muito maiores.',
  'No início estávamos nervosos, nossa defesa bateu cabeça e muitos de nós tiveram vontade de correr de volta ao vestiário. O adversário, que já jogava na divisão principal havia anos, aproveitou e  inaugurou o placar. Há agora que fazer as substituições - que podem incluir o próprio técnico e sua velha ordem tática -, polir as chuteiras e partir para o ataque. Não apenas porque essa é a melhor opção mas também porque não há escolha. Nesse campeonato não há  rebaixamento possível: a série B não existe mais. Os últimos desaparecem.',
  'Duas frentes - o próximo passo é utilizar a experiência de combater os competidores internacionais no mercado doméstico como munição para enfrentá-los em seu próprio terreno. Vencê-los apenas no Brasil é utópico e insuficiente. Utópico porque será impossível varrê-los do país. A única coisa que afastará por completo uma marca estrangeira do mercado nacional é o desinteresse. Ou seja, a menos que a inflação brasileira volte a gerar em um trimestre índices que os países do G 7 somados demoram uma década para criar, as companhias e os produtos que entraram no mercado brasileiro nos últimos anos vão continuar presentes, desafiando os competidores nacionais.',
  'É preciso combater os competidores internacionais em duas frentes - no nosso quintal e no quintal deles. Ao competirmos internacionalmente - e se formos espertos chegamos lá num par de anos -, o produto interno e o produto nacional, na esfera macroeconômica, bem como o faturamento global das empresas brasileiras, terão atingido níveis formidáveis. O Brasil terá se transformado em um trader relevante no mercado internacional e nosso comércio exterior não estará mais na modesta faixa dos 100 bilhões de dólares anuais. (Em 1994, com exportações de 43,6 bilhões de dólares, detínhamos apenas 1% das vendas mundiais de mercadorias e ocupávamos a tímida 24ª posição entre os países exportadores).',
  'Chegaremos á relevância internacional basicamente através do gerenciamento. Do talento de executivos em tomar as melhores decisões, criar e ocupar espaços, competir. A única coisa que se deve esperar do governo brasileiro e que atue de modo firme e eficaz junto aos parceiros comerciais, gerando acordos bilaterais que não prejudiquem os competidores nacionais: é impensável abrir o Brasil ao mundo se o mundo continua fechado ao Brasil.',
  'O governo precisa estudar a relação comercial com seus parceiros caso a caso e negociar os termos da abertura. O enorme mercado brasileiro - ainda que em grande parte potencial, devido ao poder aquisitivo baixo de larga fatia da população - pesa, e muito, a nosso favor em uma mesa de negociações. Poucos países têm mais a oferecer ao Brasil do que o contrário. Uma vez aberta a porta e garantida a justeza do processo, o governo sai de cena, assume sua posição de fiscal, e será a vez dos empreendedores.',
  'A expansão brasileira no âmbito da economia mundial virá como resultado de ações da iniciativa privada, embasadas no gerenciamento. Um dos grandes obstáculos que precisamos vencer para chegar lá é o sentimento de inferioridade de que o brasileiro, como latino-americano e terceiro-mundista, costuma ter em relação a outros povos e países. Há pouco mais de 50 anos a Coréia não guardava muita diferença do que é hoje o Sri Lanka. Tanto que no estádio Beira-Rio, em Porto Alegre, o lugar de ingressos mais baratos, onde as pessoas assistem à partida de pé, junto ao fosso, é ainda hoje chamado de "coréia".',
  'O nome do país havia virado adjetivo de coisas de pouco valor - uma situação humilhante. Com uma série de medidas que não nos serviriam, mas balizados em um orgulho e em uma fé em si mesmos dos quais muito precisamos, a Coréia transfigurou-se. Hoje, o país tem o dobro da renda per capita brasileira e competir com produtos coreanos causa arrepios em qualquer empresário ao redor do mundo.',
  'Sem autoconfiança pouco se faz. Seja uma pessoa, uma empresa ou um país. O brasileiro costuma pensar que não pode competir com americanos porque não é tão esperto e tão prático quanto eles, nem com alemães ou japoneses porque não é tão organizado e não trabalha tão duro, nem com chineses ou malaios porque não lhes alcança os preços.',
  'O fato é que, enquanto o brasileiro não resolve seus problemas com o espelho, milhões de japoneses comem carne e consomem chocolates que poderiam ser brasileiros. Milhões de alemães bebem suco de laranja e compram sapatos que poderiam vir do Brasil. Centenas de milhões de chineses fumam cigarros e compram toneladas de alimentos que poderiam ser nossos. Várias vezes os produtos têm de fato origem no Brasil. Só que chegam ao varejo dos países de destino com marcas e margens americanas, suíças, francesas. É hora de recusarmos a carne de pescoço e reclamarmos nossa parte no filé mignon.',
  'Para tanto precisamos menos de deliberações governamentais do que de estratégias corporativas, menos de loby em Brasília do que de investimentos em produtividade, menos do manto estatal do que de companhias gerenciadas de modo agressivo, competitivo, vencedor. Este é o Brasil da próxima década. Basta querermos.',
];

let perguntas = [
  {
    q: 1,
    p: 'Historicamente, qual a função dos gerentes das empresas nacionais?',
    a: 'principal responsável pelo treinamento do quadro de pessoal.',
    b: 'administrador dos entraves burocráticos do dia-a-dia da empresa.',
    c: 'identificar novas oportunidades de investimento ou novas tendências.',
    d: 'desenvolver novas estratégias e aprimorar os processos.',
    r: '',
  },
  {
    q: 2,
    p: 'Qual o teor dos discursos dos empresários brasileiros em sua maioria?',
    a: 'estamos prontos para a globalização da economia.',
    b:
      'é impossível competir com os produtos estrangeiros e manter os clientes internos num mercado globalizado.',
    c:
      'o mercado consumidor brasileiro não tem critérios para avaliar os produtos nacionais em relação aos estrangeiros.',
    d:
      'ainda não estamos prontos para a globalização, porém somos favoráveis à abertura econômica.',
    r: '',
  },
  {
    q: 3,
    p:
      'Quais as vantagens das empresas nacionais em relação às estrangeiras no tocante a competitividade interna?',
    a: 'melhor tecnologia e melhor adaptação.',
    b: 'conhecem o mercado interno e os produtos mais adaptados.',
    c: 'melhor tecnologia e conhecem o mercado interno.',
    d: 'estrutura flexível e produtos mais adaptados.',
    r: '',
  },
  {
    q: 4,
    p:
      'Qual dos fatores abaixo e mais decisivo para afugentar os concorrentes estrangeiros do mercado nacional?',
    a: 'excesso de burocracia.',
    b: 'tarifas alfandegárias acima da média internacional.',
    c: 'inflação de dois dígitos.',
    d: 'competitividade interna.',
    r: '',
  },
  {
    q: 5,
    p:
      'Os empresários brasileiros têm receio de competir com os chineses porque acreditam que perdem para eles:',
    a: 'nos preços.',
    b: 'na disciplina de produção.',
    c: 'na tecnologia.',
    d: 'na estrutura empresarial.',
    r: '',
  },
  {
    q: 6,
    p: 'Do que mais precisamos para a competitividade internacional?',
    a: 'maior participação do Estado na economia.',
    b: 'visão estratégica, maior qualidade.',
    c: 'melhor poder aquisitivo do mercado consumidor interno.',
    d: 'melhorar os acordos bilaterais no mercosul.',
    r: '',
  },
  {
    q: 7,
    p:
      'Segundo o autor do texto, a mão invisível de um mercado ideologicamente liberal é composta pelas condições históricas, políticas e econômicas, ao passo que a mão visível do mercado é constituída:',
    a: 'pelos planos econômicos do governo.',
    b: 'pelo gerenciamento empresarial.',
    c: 'pela massa crítica dos consumidores.',
    d: 'pela revolução tecnológica.',
    r: '',
  },
  {
    q: 8,
    p:
      'O fator determinante do sucesso das grandes empresas americanas não está diretamente ligado:',
    a: 'às decisões governamentais.',
    b: 'à incessante preocupação com a qualidade de seus produtos e serviços.',
    c: 'à visão estratégica de seus executivos.',
    d: 'ao estilo gerencial de seus executivos.',
    r: '',
  },
  {
    q: 9,
    p:
      'Em que década tornou-se mais sensível as mudanças no cenário empresarial brasileiro?',
    a: 'década de 80.',
    b: 'década de 50.',
    c: 'década de 90.',
    d: 'década de 70.',
    r: '',
  },
  {
    q: 10,
    p:
      'A postura predominante das empresas nacionais mediante a eminente globalização da economia tem sido de:',
    a: 'negligência.',
    b: 'inferioridade.',
    c: 'superioridade.',
    d: 'imposição.',
    r: '',
  },
];

export default function Teste7avaliacao() {
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

  const respCertas = ['b', 'b', 'b', 'c', 'a', 'd', 'b', 'a', 'c', 'b'];

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
      numero: 7,
      prova_id: prova,
    });

    if (response.data) {
      setTesteconcluido(true);
      history.push('/intermediario/teste7/resultado');
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
        numero: 7,
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

      toast.success('Teste 7 concluído com sucesso!');
      setTimeout(() => {
        setTesteconcluido(true);
        history.push('/intermediario/teste7/resultado');
      }, 3000);
    } catch (error) {
      toast.error('O Teste 7 já foi finalizado!');
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
    setTimeout(() => setPlm(800), 168800);
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
            <small>Teste 7</small>
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
            <Titulo>TESTE 7 - AVALIAÇÃO</Titulo>
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
            <Titulo>TESTE 7 - AVALIAÇÃO</Titulo>
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
