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

const aula = 13;

const hrInicio = Date.now();

const titulo = 'É Possível Forjar um Líder?';

const cred1 = 'Revista Exame';

const cred2 = '';

const textos = [
  'Até que ponto os cursos podem ajudar sua empresa nessa tarefa.',
  'Quando recentemente a AT&T divulgou que estava oferecendo pacotes de aposentadoria antecipada a 72.000 gerentes, metade de sua equipe total, o consultor americano Michael Hammer ficou agitado. "É o fim da era gerencial", disse Hammer, guru da reengenharia. Se a AT&T não consequisse voluntários suficientes, começaria a demitir. A notícia deixou Hammer excitadíssimo. "O conceito de gerente já morreu", disse ele. "Precisamos é de líderes, treinadores, dos de processos".',
  'O que Hammer, cujos trabalhos sobre reengenharia desencadearam a reestruturação mais maciça na história empresarial americana do início dos anos 90, vem fazendo ultimamente? A nova cruzada na qual ele está engajado é a educação de executivos.',
  'Hammer afirma que não trabalha mais com consultoria, e sim com educação. Gerentes de empresas podem obter seu "mestrado em administração de empresas" particular por até 2.200 dólares cada um, em um dos seminários de treinamento de executivos ministrados por Hammer todos os meses. Com até 250 alunos em cada sessão, ele ganha tranquilamente 550.000 dólares mensais.',
  'Hammer não é o único a realizar esse trabalho. Treinamento de executivos em liderança é um dos temas quentes do momento. Depois da recessão do início dos anos 90, que a tingiu em cheio os orçamentos de treinamento da maioria das empresas, essa área vive um ressurgimento importante.',
  'Centros de treinamento profissional, consultores, escolas de administração de empresas, programas executivos, programas educacionais e de treinamento nas próprias empresas, todos competem pelos estimados 15 bilhões de dólares gastos anualmente com treinamento para executivos, segundo um relatório para executivos, segundo um relatório da Penn State University. Na corrida para encontrar o Santo Graal da liderança, as empresas talvez deparem com mais perguntas do que respostas:',
  '. com as transformações ainda em pleno andamento, quem já acumulou sabedoria suficiente para ensinar executivos a se  tornarem líderes no novo ambiente empresarial?',
  '. será que as escolas de administração de empresas, que se apressaram a oferecer cursos de educação para executivos, não estarão simplesmente proporcionando o mesmo material de sempre em cursos mais caros?',
  '. será que os executivos conseguem aprender tudo de que precisam em dois ou três dias de treinamento? E será que seu treinamento exerce algum impacto em seus locais de trabalho, quando eles voltam?',
  '. a perspectiva que se tinha antigamente, de uma carreira vitalícia em uma única empresa, praticamente deixou de existir. Será que é possível treinar líderes para trabalhar num ambiente de tensão e desconfiança?',
  '. a tecnologia remodelou o escritório tradicional. Mas quanto atenção já dedicamos à tarefa de ensinar as pessoas a ser líderes em equipes virtuais, organizações achatadas e equipes de colaboradores trabalhando com instrumentos próprios para grupos?',
  'Leite verde - é final de tarde no Center for Creative Leadership, o CCL. Quase todas as salas de aula na sede do centro estão repletas de gerentes candidatos a líderes. O CCL, uma entidade sem fins lucrativos da Fundação Smith Richardson, já teve pelo menos dois dos seus programas nos primeiros lugares de uma pesquisa dos melhores cursos de treinamento de líderes, feita pelo Wall Street Journal. Com 408 funcionários em tempo integral e 103 professores adjuntos, o centro tem um faturamento de 35,95 melhões de dólares e mal consegue suprir a demanda por seus cursos.',
  'Em uma aula, cujo título é Fazendo Transformações, um grupo de altos executivos está sendo coagido a beber leitelho verde (leitelho é o leite pobre em gorduras que sobra depois da retirada da nata para a fabricação da manteiga). Os 10 alunos, gerentes de empresas como Nabisco, Giant Food, Toyota e American West Airlines, estão sentados em confortáveis cadeiras giratórias, diante de quatro mesas grandes. Robert Golderg, psicólogo organizacional e coordenador de programa do grupo de liderança de equipes do centro, lidera a aula.',
  'O exercício do leitelho mostra como superar a resistência no interior de um grupo de trabalho. Cada mesa designou uma pessoa para ser agente das mudanças, uma ou duas outras para apoiar as mudanças e duas outras para opor resistência a elas.',
  'Em cima da mesma há uma caixa fechada de leitelho. Os participantes não sabem, mas o leitelho recebeu uma injeção de colorante verde para alimentos. O agente das mudanças precisa convencer os outros presentes à mesa a experimentar o leitelho, e sua tarefa se complica quando eles despejam o líquido em copos e veem sua cor.',
  'A discussão, em alguns momentos acirrada, se estende por 20 minutos. Os agentes das mudanças experimentam vários métodos de persuasão, sem muitos resultados. Apenas um deles consegue coagir todas as pessoas de sua mesa a tomar um gole de leitelho, inventando uma história fictícia segundo a qual o leite enviado às crianças na Bósnia é previamente testado por freiras. Golberg não aprova esse procedimento e interrompe. "Não se pode manipular as pessoas com uma visão falsa", diz ele.',
  'Será que os participantes do exercício do leitelho verde chegaram ao CCL gerentes e saíram de la líderes: É uma pergunta difícil de responder, se não impossível. Mas para muitas pessoas ela simplesmente não vem ao caso. "Ensinar liderança é impossível", disse Warren Bennis. É uma afirmação surpreendente, considerando-se que Bennis é autor de cinco livros sobre liderança, incluindo dois que foram altamente elogiados (Leaders, de 1986 e On Becoming a Leader, de 1989). Nas suas palavras, "Liderança é caráter e capacidade de avaliação. E duas coisas que ninguém pode ensinar são caráter e capacidade de avaliação".',
  'Orçamentos revitalizados - Paul Severino, presidente do conselho da Bay Networks, uma empresa de tecnologia de 1,3 bilhão de dólares na Califórnia, já fundou três empresas bem-sucedidas e define a liderança em termos simples: "Ter uma visão de como será o futuro e executar com vistas a essa visão". Pode ser. Mas, na busca dos líderes de amanhã, a maioria das empresas está simplesmente revitalizando seus orçamentos de treinamento e esperando pelo melhor.',
  'A demanda pelos cursos de liderança é enorme. O CCL, por exemplo, se expandiu tão rapidamente que foi obrigado a realizar sessões em hotéis e outros locais. O programa de educação de executivos da renomada Wharton School da Universidade da Pensilvãnia triplicou de tamanho em menos de cinco anos. Trata-se de uma atividade que tem proporcionado à Wharton School um faturamento de mais de 25 milhões de dólares anuais, com cursos que atraem cerca de 9.000 executivos por ano.',
  'Os professores titulares das escolas de administração de empresas, com salário-base mais pagamento adicional por lecionar nos cursos de educação para executivos e prestar consultoria, ganham hoje 200.000 dólares ou mais por ano, tanto quanto altos executivos de grandes empresas.',
  'Os professores das principais escolas de administração americanas podem facilmente ganhar 5.000 dólares por dia em seminários de t rês dias, ministrados no local de trabalho das empresas clientes. Vários professores de renomadas escolas de administração americanas, como a Anderson Graduate School of Management, da UCLA, por exemplo, abriram empresas próprias. Um punhado de outros professores está ganhando 1 milhão de dólares ou mais por ano com um misto de atividades acadêmicas e empresariais.',
  'As empresas não se importam em pagar 25.000 dólares ou mais por dia a personalidades dos esportes, com os  treinadores de basquete Pat Riley ou Rick Pitino, para que venham apregoar a liderança. Consultores de liderança que são também celebridades, como Tom Peters, podem cobrar 80.000 dólares por dia por seus serviços.',
  'Apesar das fortes pressões no sentido da contenção de despesas, as grandes empresas estão repensando o treinamento de líderes e recomprometendo-se a fundo com o tema. Em 1995, a Motorola gastou mais de 150 milhões de dólares com educação empresarial, oferecendo pelo menos 40 horas de treinamento a cada um de seus 132.000 funcionários. A General Electric, que mantém o seu próprio Centro de Desenvolvimento de Líderança em Crotonville, Nova York, gasta mais de 500 milhões de dólares anuais com treinamento.',
  'De Clark Kent a Superman? - Quer dizer então que, com tudo isso deveríamos estar produzindo uma geração inteira de grandes líderes, certo? Devagar com o andor. "A maioria das organizações não conseguiu ensinar seus executivos a ser estratégicos. Elas fizeram um trabalho terrível", diz Jay Conger, do Instituto de Liderança da University of Southern California. "Os executivos estão presos na armadilha das responsabilidades funcionais e das tarefas específicas".',
  'E apesar do sucesso da nata dessa safra, como a Wharton ou a Stanford, as escolas de administração de empresas, de modo geral, ganham nota baixa por relevância e impacto. Com uma população cada vez menor de jovens entre 18 e 24 anos para encher as salas de aula, as escolas de administração de empresas optaram pela educação de executivos. Mas o currículo da maioria das escolas nem sempre acompanha as mudanças que vêm ocorrendo nas empresas.',
  '"Talvez só 20% dos programas das maiores escolas satisfaçam as necessidades", diz Frank Morgan, diretor de programas para executivos da Kenan-Flagler Business School, da University of North Carolina. Morgan, veterano de 20 anos da General Foods e outros cargos em empresas, costuma falar com franqueza e afirma que os próprios fundamentos do ensino de administração de empresas são frágeis.',
  '"As pessoas analisaram a história, extraíram princípios e ensinam esses princípios até hoje, como se fosse certo que eles se aplicaram aos executivos que lidam com o amanhã. Hoje em dia é preciso dotar as pessoas de um conjunto de habilidades que lhes permita analisar as situações e tomar decisões, mesmo quando nunca antes tenham vivido essas situações. Isso é muito mais difícil de ser feito por docentes de uma escola".',
  'O problema é que ninguém ainda conseguiu encontrar a fórmula mágica - o programa perfeito, totalmente abrangente, para iluminar e remodelar a direção das empresas. Os  treinamentos de liderança assumem uma miríade de formas, desde exercícios de subir cordas até grupos de promoção de autoconsciência. Em outros casos, os participantes escrevem e leem poemas, desenham suas próprias mãos e ouvem música, tudo isso numa tentativa de injetar um aspecto criativo na administração.',
  'Embora nenhum deles garanta o sucesso dos alunos e apesar, também, da atual mentalidade favorável à redução de despesas, as empresas ainda gastam milhões de dólares com treinamento de liderança sem muito questionamento. "Elas fariam bem em começar a questionar", diz Conger.',
  'Na edição de janeiro de 1996 do Journal of Strategy & Business, Conger escreve: "Apesar de tudo que se propagandeia, as empresas que fazem parte do clube o-programa-do-mês estão vendo resultados limitados. A maioria dos programas de liderança tem uma meia-vida de poucos dias ou semanas após o término das sessões. Poucos deles criaram mecanismos adequados de transferência para garantir que as habilidades de liderança retornem ao escritório, e a maioria é prisioneira de uma única abordagem pedagógica que reflete o treinamento de seus próprios instrutores".',
  'O que as empresas podem fazer? Os analistas da indústria afirmam que as empresas estão começando a refletir mais antes de partir para a educação de seus executivos. Elas continuam gastando, mas de uma forma diferente do que acontecia nos anos 80, mais liberados. Agora elas mostram maior preocupação em obter um retorno de seu investimentos. Hoje, os executivos já não têm carta branca para se candidatar a seminários vagamente definidos, cujos resultados normalmente não passavam de tirá-los do escritório por duas semanas.',
  'Como se ensina liderança em tempos de turbulência? Em meio às mudanças organizacionais maciças que atingem as empresas, quem acumula conhecimento e tecnologia suficientes para ensinar outras pessoas a liderar? Para encontrar resposta a essas questões, a tendência atual está sendo a de trazer acadêmicos ou treinadores profissionais para dentro da própria empresa, para criar cursos designados a satisfazer necessidades específicas, ou então a de recorrer à informática para a promoção de cursos via videoconferência ou satélite.',
  'Mais da metade dos cursos de educação para executivos preparados pela Wharton, por exemplo, é hoje criada sob encomenda para empresas específicas. A Wharton trabalhou com a Bell Atlantic, por exemplo, num programa visando reorientar funcionários para que deixassem de enxergar a empresa como monopólio regulamentado e passem a vê-la como uma empresa competitiva de comunicações, funcionando em nível global.',
  '"Embora sejamos uma universidade, acreditamos que precisamos, agora, agir como empresa multinacional", diz Robert Mittelstaedt, diretor do programa de educação de executivos da Wharton School. "Isso representa uma mudança fundamental na educação de executivos. Antes, enviar um executivo a um curso de duas semanas representava uma recompensa por um trabalho bem-feito. Hoje os clientes nos perguntam: Em que esse curso nos ajuda a cumprir nossos objetivos?"',
  'A Digital Equipmment reformulou seu programa de treinamento de funcionários, antes maciço, e a ênfase passou a ser o treinamento interno, em lugar de enviar os executivos a cursos externos. A Digital ainda reembolsa os funcionários pelos cursos que fazem, mas reduziu a oferta de cursos externos. A Digital, que já chegou a enviar até 50 executivos por ano a esses programas, agora exige que cada exercício de treinamento seja vinculado às metas da empresa.',
  'Velho Refrão - as empresas concordam em um ponto: no ambiente empresarial mudado de hoje, os velhos estilos de comando não funcionam. Orit Gadiesh, presidente do conselho da Bain, empresa de consultoria em gerenciamento, diz que o líder empresarial bem-sucedido dos anos 90 adotou um estilo muito mais motivacional, baseado mais em ouvir e inspirar confiança do que em gritar ordens.',
  'A tecnologia exerceu um impacto direto sobre esse novo e instável cenário empresarial. "A tecnologia tem forte relação com a autoestima desses sobreviventes de demissões", explica David M. Noer, vice-presidente sênior de treinamento e educação do Centro de Liderança Criativa, que também se propõe a desenvolver as habilidades de liderança dos executivos. "Os funcionários jovens, tecnicamente qualificados, estão se dando bem e são muito procurados pelas organizações. Mas o computador pessoal ajudou a eliminar uma camada de gerentes de nível médio, que transmitia informações da direção da empresa ao escalão inferior, e vice-versa. Com o PC, eles deixam de ser necessários".',
  'No final das contas, mesmo um ambiente radicalmente novo, num novo conjunto de regras e papéis, ainda há lugar para o velho refrão: na da substitui a experiencia. O velho ditado de que "quem não consegue fazer ensina" não se aplica nessa batalha. "Você da às pessoas os conceitos de que elas precisam e, a partir disso, elas mesmas têm de inventar o resto, em campo", diz Hammer. "Na realidade, a única forma de aprender tudo isso é fazendo". Os líderes emergentes serão identificados pelo fato de terem sobrevivido a provas de fogo. É imperativo, portanto, ostentar cicatrizes ganhas na batalha.',
];

let perguntas = [
  {
    q: 1,
    p:
      'Warren Bennis, autor muito elogiado por ter escrito 5 obras sobre Liderança, conclui que:',
    a:
      'a liderança é uma característica da personalidade, por isso mesmo passível de aprendizagem.',
    b:
      'liderança é caráter e capacidade de avaliação e, portanto, impossível de ser ensinada.',
    c:
      'qualquer executivo aprende a ser líder, se tiver motivação suficiente para tal.',
    d:
      'aprende-se a ser líder somente por experiência, jamais através da leitura de livros.',
    r: '',
  },
  {
    q: 2,
    p:
      'Segundo o texto, como estão as escolas de administração de empresa em época de formação de lideranças?',
    a:
      'apresentam, em sua maioria, um currículo arrojado e estão acima das expectativas do mercado.',
    b:
      'normalmente, limitam-se a repetir conceitos aprendidos ao longo dos anos e que já provaram ser sucesso.',
    c:
      'não tocam no assunto liderança, pois consideram assunto de foro íntimo.',
    d:
      'quase todas estão aparelhadas com laboratório próprio para criatividade e treinamento de liderança.',
    r: '',
  },
  {
    q: 3,
    p: 'Qual o maior desafio dos líderes empresariais de hoje?',
    a:
      'capacidade de identificar, analisar situações e habilidade em tomar decisões totalmente inéditas.',
    b:
      'repensar o seu setor dentro da organização, sob o ponto de vista tático.',
    c: 'encontrar estratégias para maximizar os lucros, principalmente.',
    d:
      'sexpressar-se facilmente em uma segunda língua e o domínio das novas tecnologia.',
    r: '',
  },
  {
    q: 4,
    p:
      'Qual a postura das empresas atuais mediante a necessidade de treinar a liderança:',
    a:
      'dão liberdade aos seus executivos de procurar os cursos que consideram viáveis e que suprem suas necessidades.',
    b:
      'contratam cursos que estão em condições de realizar treinamento segundo as necessidades da empresa ou recorrem a informática fazendo cursos em CD-ROM e videoconferências.',
    c:
      'capacita a equipe de recursos humanos e esta treina os demais executivos.',
    d:
      'contratam cursos com um perfil que satisfaça as necessidades da empresa e dão  carta branca para treinar seus executivos em caráter permanente.',
    r: '',
  },
  {
    q: 5,
    p:
      'Qual a principal exigência das empresas feita aos executivos quando consultados sobre o consentimento de participar de cursos externos a empresas?',
    a: 'que o treinamento esteja vinculado às metas da empresa.',
    b:
      'que o executivo apresente um relatório minucioso ao concluir seu  treinamento.',
    c:
      'que a equipe de recursos humanos da empresa aprove por considerar relevante à formação do profissional.',
    d:
      'que a solicitação do executivo venha acompanhada de manifestação forte de entusiasmo e determinação para liderar.',
    r: '',
  },
  {
    q: 6,
    p: 'Qual o assunto central do texto?',
    a: 'vantagem competitiva.',
    b: 'formação da liderança.',
    c: 'liderança gerencial.',
    d: 'liderança tecnológica.',
    r: '',
  },
  {
    q: 7,
    p:
      'Qual o objetivo central do exercício do leitelho realizado no Center for Creative Leadership?',
    a: 'treinar o hábito da persuasão.',
    b: 'aprender a quebrar as resistências encontradas em equipes de trabalho.',
    c:
      'desenvolver estratégias subliminares para criar necessidade em consumidores potenciais.',
    d:
      'identificar estratégias sutis de coagir os demais membros de um grupo de trabalho.',
    r: '',
  },
  {
    q: 8,
    p:
      'Segundo o consultor Conger, "a maioria das organizações não conseguiu ensinar seus executivos a ser estratégicos", pois:',
    a:
      'a pressão exercida pela hierarquia da organização tende a desestimular inciativas.',
    b:
      'os executivos estão atulhados de responsabilidades e funções específicas.',
    c:
      'é função do presidente-executivo pensar estrategicamente e dos demais, pensar taticamente.',
    d:
      'a velocidade de obsolescência das informações dificulta a visão estratégica.',
    r: '',
  },
  {
    q: 9,
    p:
      'Qual a relação que o texto faz entre os PCs e a gerência de médio escalão?',
    a: 'estes gerentes precisam familiarizar-se urgentemente com a informática',
    b:
      'os gerentes médios foram substituídos, pois os PCs fazem a comunicações da direção da organização com os demais funcionários',
    c: 'os PCs tornaram a função do médio escolão mais ágil',
    d:
      'os gerentes médios fizeram dos PCs seus principais aliados em seu trabalho diário.',
    r: '',
  },
  {
    q: 10,
    p: 'A manchete do texto é:',
    a: 'como forjar um líder.',
    b: 'liderança, é possível ser forjada?',
    c: 'é possível forjar um líder?',
    d: 'liderança hoje, somente forjando.',
    r: '',
  },
];

export default function Teste11avaliacao() {
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

  const respCertas = ['b', 'c', 'a', 'b', 'a', 'b', 'a', 'b', 'b', 'c'];

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
      numero: 11,
      prova_id: prova,
    });

    if (response.data) {
      setTesteconcluido(true);
      history.push('/avancado/teste1/resultado');
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
        numero: 11,
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

      toast.success('Teste 11 concluído com sucesso!');
      setTimeout(() => {
        setTesteconcluido(true);
        history.push('/avancado/teste1/resultado');
      }, 3000);
    } catch (error) {
      toast.error('Erro ao concluir o Teste 11. Tente novamente!');
    }
  }

  async function loadProvas() {
    const response = await api.get(`provas`);

    // console.log('Prova: ', response.data);

    setProva(response.data);
    dispatch(updateProvaRequest(response.data));

    const prova_id = response.data ? response.data.id : null;

    verificarTeste(prova_id);

    // console.log('testeconcluido: ', testeconcluido);
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
    setTimeout(() => setPlm(1000), 144300);
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
            <small>Teste 11</small>
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
            <Titulo>TESTE 11 - AVALIAÇÃO</Titulo>
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
            <Titulo>TESTE 11 - AVALIAÇÃO</Titulo>
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
                {q3 === 'b' && (
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
