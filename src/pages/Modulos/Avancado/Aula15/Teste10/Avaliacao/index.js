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

const aula = 15;

const hrInicio = Date.now();

const titulo = 'Tempos Modernos';

const cred1 = 'Aida Veiga';

const cred2 = 'Revista Veja';

const textos = [
  'O expediente das 8 às 5, grande conquista do sindicalismo, já era. Empurradas pela concorrência, as pessoas estão trabalhando cada vez mais.',
  'Com o avanço da mecanização e da computação nas empresas, somado às crescentes conquistas sindicais, imaginou-se, em meados do século XX, que no fim dele as pessoas trabalhariam cada vez menos e disporiam de um tempo maior para o lazer, as artes, a natureza e a família.',
  'Sonho futurista, como aquele segundo o qual os automóveis voariam. As pessoas estão trabalhando cada vez mais, dispõem de menos tempo para o lazer e ficaram mais estressadas. Isso acontece tanto em países desenvolvidos, como Estados Unidos, Austrália e Japão, como também - ou melhor, mais ainda - em nações em desenvolvimento que aspiram ao primeiro escalão, sobretudo Brasil, Chile e os chamados Tigres Asiáticos.',
  'O último levantamento do Bureau of Labor Statistics, o órgão do governo americano que coleta esse tipo de dado, mostra que em janeiro de 2000 a média nacional de horas trabalhadas nos Estados Unidos era de quarenta por semana, e no Vale do Silício, a capital do ultra-industrioso ramo da informática, ela bate em sessenta horas. No diligentíssimo Japão, trabalha-se, em média, 39 horas semanais (aí computado, lembre-se, todo tipo de trabalho, inclusive os de meio período ou menos).',
  'No Brasil, dados levantados pela pesquisa mensal de emprego do Instituto Brasileiro de Geografia e Estatística (IBGE) indicam que a média de horas trabalhadas bateu nas 41 por semana no final dos anos 90, contra 39 do começo da década. Parece pouco, mas não é. Duas horas por semana significam oito ou dez a mais por mês, cerca de 100 horas por ano. Um salto enorme para um prazo tão curto, que coloca o Brasil em oitavo lugar em horas trabalhadas por ano no mundo, segundo a Organização Internacional do Trabalho (atrás dos Estados Unidos no cômputo anual, porque tem mais férias e feriados).',
  'Outro levantamento nacional do IBGE revela dados ainda mais impressionantes. Eles mostram que 71% da população brasileira economicamente ativa trabalha mais de quarenta horas por semana, sendo que para 39% a jornada é de pelo menos 45 horas. Como é que um século chega à metade celebrando como conquista a luta de sindicatos no mundo inteiro para reduzir jornadas fatigantes e termina com boa parte da população trabalhando cada vez mais?',
  'O motor é o desemprego - a explicação dos especialistas, vejam só, é a diminuição crescente do emprego confortável do passado, aquele que durava por toda a vida útil e exigia pouco do funcionário. ',
  'Numa simplificação de um processo intrincado, a economia globalizada da última década, principalmente, pôs contra a parede empresas lotadas de mão-de-obra habituada ao padrão oito-às-cinco. Lançadas numa competição feroz, adotam a prática do melhor resultado ao menor custo possível. Instauraram-se o downsizing, a terceirização, a reengenharia - processos que levam à redução de pessoal. Quem ficou teve suas obrigações aumentadas e passou a trabalhar muito mais, não só para dar conta do recado como para não perder, ele também, a vaga. Quem saiu procurou alternativas menos rentáveis e mais cansativas, como ocorreu no Brasil na busca de brechas no mercado informal.',
  '"Em particular, o processo de enxugamento no país pôde ser visto com mais clareza no caso das empresas que foram privatizadas", diz Sérgio Mendonça, diretor técnico do Departamento Internacional de Estatística e Estudos Sócio-Econômicos (Dieese). "As ex-estatais deixaram de ser cabide de empregos e passaram a exigir muito mais de um quadro de funcionários menor", afirma Mendonça.',
  'Mais conforto, mais produção a taxa de desemprego brasileira gira hoje em torno dos 8%, (ano de 2000) e a  experiência de viver numa economia que sobe e desce deixa todo mundo com medo do futuro. Mas até nos Estados Unidos, onde a taxa de desemprego está em parcos 4%, o motor que impulsiona as longas jornadas é o mesmo.',
  '"Apesar de o índice de desemprego estar baixo nos últimos três anos, o americano morre de medo de ir para o olho da rua", explica Barry Bluestone, professor de política econômica da Universidade de Massachusetts e membro da equipe que assessora o todo-poderoso Alan Greenspan, presidente do banco central americano. "Na última década, mais de um quarto da população experimentou pelo menos um ano de desemprego, trabalhando menos de 35 horas semanais. A inflação está baixa, os economistas riem à toa, mas o americano não esquece o que passou e prefere se esforçar e trabalhar muitas horas, para não ser dispensado".',
  'Já se trabalhou muito mais é fato. Na Inglaterra pós-Revolução Industrial, o normal era o operário esfalfar-se no mínimo sessenta horas por semana, sem descanso remunerado. No começo do século XX, reduzir a jornada tornou-se o objetivo número 1 dos sindicatos. Em 1938, estabeleceu-se a jornada de quarenta horas nos Estados Unidos. Em seguida, foi a vez de a Inglaterra adotar o mesmo limite e batizá-lo, instituindo-se a "semana inglesa". No Brasil de Getúlio Vargas, os trabalhadores ganharam direito a férias, descanso semanal remunerado e jornada de 48 horas. O forte movimento sindical dos anos 80 conseguiu implantar na Constituição de 1988 o teto de 44 horas de trabalho por semana. Na época, ainda se pensava que o futuro era trabalhar cada vez menos e ganhar cada vez mais.',
  'Nada disso aconteceu. Os movimentos sindicais perderam força, a produtividade ideal aumentou vertiginosamente e a tecnologia, embora tenha de fato diminuído alguns afazeres, aumentou outros.',
  'De tanto ocupar a maior fatia da vida de seus funcionários, as empresas estão virando uma extensão de sua vida particular. Dentro do escritório, ou em áreas adjacentes, é possível aprender inglês, judô, artesanato e pintura, com patrocínio da firma. Namora-se nas cafeterias da empresa. Almoça-se na vizinhança para perder menos tempo. Há companhias que já oferecem serviços como dar assistência na compra de ingressos para o teatro. Agências bancárias internas são rotina nas grandes firmas. Algumas têm salão de beleza e academia de ginástica. Por mais surpreendente que pareça, já começam a aparecer aquelas que reservam um lugar para a soneca dos funcionários depois do almoço.',
  'O ânimo guerreiro dos velhos sindicatos de dar cada vez menos tempo e exigir cada vez mais salário da organização entrou em decadência vertiginosa. As pessoas querem carreira, salário ascendente, benefícios. Se for preciso trabalhar mais, por que não?',
  'Em um bom número de países desenvolvidos as longas jornadas não são toleradas. O aumento das horas trabalhadas, então, nem pensar. É o que acontece nos países europeus de tradição social-democrata. A França está tentando conter o desemprego pela diminuição, por força de lei, da jornada de 39 para 35 horas semanais. Os franceses esperam criar novos postos de trabalho com essa estratégia. Pelo visto, vão esperar sentados. "É uma ilusão", comenta o sociólogo Jean-Louis Laville, autor de Uma Terceira Via para o Trabalho. "Apesar de estar vivendo uma fase de crescimento econômico, a França não consegue criar empregos.',
  'No lugar de impor regras, o governo deveria deixar o próprio mercado absorver a mão-de-obra à medida que precisasse", argumenta. A própria França já deveria ter aprendido que essa tentativa não funciona. Em 1982, os franceses reduziram a jornada de 42 para 39 horas semanais para combater o desemprego, que batia em 8%. O índice saltou para 12%, um dos mais altos da Europa. Na última década, enquanto na França só 3% dos postos de trabalho podem ser considerados novos, em países campeões de jornada, como os Estados Unidos e a a Nova Zelândia, o porcentual de empregos novos e de 13% e 21%, respectivamente.',
  'Os alemães ainda tiram seis semanas de férias por ano, além de inúmeros feriados de folgas no Natal e no Ano-Novo. Em alguns países escandinavos, o dia útil termina na sexta-feira na hora do almoço. Mas os especialistas acreditam que a competição acirrada com americanos e asiáticos, principalmente, e com a própria Europa Oriental (a República Checa está em sexto lugar entre os países com jornadas mais longas) vai no mínimo abalar a ordem das coisas nas fábricas e nos escritórios europeus. "Os trabalhadores alemães e franceses estão se esquecendo da velha equação de que tempo é dinheiro", argumenta Richard Freeman, professor de economia na Universidade Harvard. "Eles podem querer manter as noites e os finais de semana livres. Mas, se quiserem manter também o emprego, terão de ser mais produtivos, ou aceitar um contracheque menor".',
  'Salários mais baixos - já na Inglaterra, a nação europeia ocidental mais varrida pelos ventos liberalizantes e globalizantes das últimas duas décadas, a coisa é diferente. Lá, a jornada média é de quarenta horas e o número de horas extras disparou: em 1988, pouco mais de 10% dos trabalhadores ficavam além do expediente tradicional até as 5 da tarde. Em 1998, eram quase metade do total os que ultrapassavam o expediente burocrático.',
  '"O que leva a esse comportamento é a falta de oportunidades de trabalho, em decorrência da reformulação geral das empresas", explica Susan Harkness, professora da London School of Economics (LSE). Segundo seus estudos, cerca de 60% dos ingleses dizem que trabalham mais do que deveriam porque não veem chance de encontrar outro emprego. "Muitos têm certeza de que seus chefes os exploram porque sabem desse temor", conta Harkness.',
  'O mesmo debate, que põe de um lado a turma do "menos horas, mais postos de trabalho" e de outro a do "quanto mais se regula, menos emprego se cria", ocorre neste momento no Brasil. Sindicatos de diversas categorias lutam para reduzir a jornada legal de 44 para quarenta horas e, dessa forma, intervir num sistema que, informalmente, predomina nas indústrias brasileiras: o chamado banco de horas.',
  'Quando o período é de vendas fracas, parte dos trabalhadores fica em casa, e essas horas de descanso vão para um "cofrinho". Quando a produção se acelera, todo mundo trabalha além da jornada, sem ganhar a mais porque as horas extras são descontadas da tal poupança. Resultado: evitam-se dispensas, mas também não há contratações. "Com um crescimento econômico anêmico, uma legislação trabalhista que não possibilita negociações e pessoal mal qualificado, o empresário não quer contratar gente nova", explica o economista José Pastore, professor da Universidade de São Paulo(USP).',
  '"Mesmo em recessão, quando precisa produzir mais, ele opta pela hora extra. Daí o Brasil ter uma jornada longa sem, necessariamente, estar vivenciando o crescimento econômico americano". Outro setor que mantém longas jornadas, sem que isso reflita pujança econômica, é o informal. "O taxista, o encanador, aquele sujeito que trabalha por conta própria, todos devem estar dedicando o dobro de tempo ao batente", analista José Paulo Chahad, também  economista e professor da USP. "Eles precisam ficar muito mais horas disponíveis, à espera de um cliente, para manter o nível de renda de antigamente. Se houvesse gente batendo à sua porta, eles poderiam ter um horário fixo, ter a mesma renda e só trabalhariam mais se quisessem um extra".',
  'Não e só o esforço para manter o emprego que faz com que brasileiros, americanos e asiáticos trabalhem tanto. Salário, como se sabe, conta muito. "Não é coincidência que dois campeões da desigualdade de renda, Brasil e Estados Unidos, tenham jornadas maiores", avalia o professor Bluestone. "Ganhar pouco força as famílias de baixa renda, que representam a maioria da população, a trabalhar mais, o que não acontece na Europa, onde a distribuição de renda é mais igual.',
  'Quanto maior a desigualdade, maior a jornada". De acordo com dados do IBGE, o rendimento médio mensal do trabalhador brasileiro era de 5,13 salários médios em 1991.',
  'Em 1999, havia baixado para 4,67. "A grande maioria dos trabalhadores brasileiros, que tem baixa qualificação, trabalha muito porque ganha e produz pouco", analisa o economista Marcio Pochmann, professor do Instituto de Economia da Universidade Estadual de Campinas. "Outros trabalham muito porque são qualificados e podem ganhar mais pelo tanto que produzem. O resultado é que todo mundo encontra motivo para trabalhar muito".',
  'Na ponta dos que são qualificado e ganham pelo resultado que apresentam, os executivos têm destaque. Segundo pesquisa feita pelo Grupo Catho, empresa de consultoria de São Paulo, no Brasil a jornada média dessa categoria é de 54 horas semanais (a americano é de cinquenta horas), sem contar o trabalho dos fins de semana e o que levam para casa todo dia, depois do expediente. Entre esses profissionais, ganhar muito dinheiro é motivação disseminada, mas não única.',
  'Também contam o desafio, o poder, o reconhecimento. Tanto que não adianta apenas passar horas na frente do computador; tem de saber usar bem o tempo de trabalho. "Antes, a pessoa ficava no escritório o suficiente para impressionar, já que os empregos eram quase vitalícios", comenta Winston Pegler, da Ray & Berndtson Consultores Gerenciais. "Hoje, o executivo trabalha muito porque sabe que, se fizer mais, vai sobressair e novas oportunidades irão aparecer".',
  'O padrão se repete inclusive em quem toca negócio próprio. Marcos Zylberstajn, 69 anos, que fez a vida como comerciante, sente orgulho do filho engenheiro, Rogério, que, aos 39, é dono de uma construtora. Mas não entende por que ele tem de ser tão ocupado. "Sempre trabalhei muito, mas viajava com a família nas férias e, nos finais de semana, o levava ao Maracanã", conta. Rogério, por sua vez, encara jornadas diárias de doze a catorze horas e nem família tem - é solteiro, por falta de tempo. "Minha vida pessoal se confunde com a profissional", diz.',
  'Nessa nova cultura de trabalhar muito, ganhar muito e subir muito na vida, o desejo de consumo é outro fator preponderante. As pessoas estão trabalhando mais, também, para poder comprar mais. Em 1991, a economista Juiet Schor, de Harvard, escreveu um livro que se tornou uma espécie de bíblia do assunto. Em The Overworked American: the Unexpected Decline of Leisure (Americanos Trabalham Demais: o Inesperado Declínio do Lazer), ela calculou que os americanos estavam trabalhando 163 horas a mais por ano do que em 1970.',
  "Intrigada com o tamanho da importância do consumo na vida daqueles trabalhadores superocupados, partiu para nova pesquisa, tentando esclarecer os motivos de tanto compra-compra. O resultado é outro livro, publicado em 1998, The Overspent American: Why We Want what We Don't Need (Americanos Compram Demais: por que Queremos o que Não Precisamos).",
  'Nele, Schor culpa a televisão, principalmente, por impor valores e vender símbolos de status que influenciam o americano a ser um povo que gosta de gastar, não de poupar - uma definição que cabe, sem tirar nem pôr, nas fronteiras do Brasil que tem dinheiro para ir às compras. Já o alucinado ritmo de trabalho dos chamados Tigres Asiáticos, campeões imbatíveis em horas trabalhadas no levantamento da Organização Internacional do Trabalho (OIT), tem explicação diversa. "O sucesso econômico de países como Coréia do Sul, Tailândia, Malásia e Cingapura é, em grande parte, atribuído à atuação do Estado, que estimulou o desenvolvimento e, ao mesmo tempo, manteve um sindicalismo fraco", explica o cientista político Alexandre Uchara, pesquisador visitante da Universidade de Sophia, em Tóquio. "Isso, aliado à disciplina oriental, legitimou a autoridade e o intervencionismo estatal e possibilitou a manutenção de uma carga horária de trabalho muito extensa".',
  'Escritório em qualquer lugar - seja lá qual for o motivo, trabalha-se muito hoje em dia. Mais: trabalha-se por princípio, por compulsão, porque "é assim e pronto". A mineira Terezinha Santos, 43 anos, dona da grife Patachou, passa doze horas por dia no escritório, bem mais que nos duros tempos em que começava seu negócio.',
  '"Coloco o dedo em tudo, da criação ao comercial, e me sinto realizada", diz ela, que mal tem tempo de tomar um cafezinho com o marido, Marcos, diretor financeiro da marca. Até os filhos, que, a princípio, teriam todos os motivos para reclamar das longas jornadas de trabalho dos pais, estão aderindo à nova atitude e passando a encará-la como coisa normal. Uma pesquisa feita pelo Families and Work Institute, de Nova York, com mais de 1 000 crianças e adolescentes americanos, mostra que apenas 10% gostariam de ficar mais tempo com a mãe e 15% com o pai, só 20% acham que os pais trabalham demais e 50% dizem que pai e mãe têm de trabalhar muito mesmo, para bancar as despesas da família.',
  'No entanto, 60% reclamam do fato de os pais chegarem estressados em casa. Stress, muito mais que excesso de trabalho, é a grande queixa de quem se dedica a longas jornadas. Na Inglaterra, seis em dez trabalhadores apontam o stress, e não a falta de tempo para a família ou para o lazer, como a pior consequência de trabalhar muito.',
  'No Brasil, pesquisa feita prela consultoria Deloitte Touxhe Tohmatsu mostra que 50% dos executivos brasileiros tem a mesma reclamação. Em 1997, 60% dos americanos disseram que nunca pareciam ter tempo suficiente para fazer tudo o que era preciso no trabalho. Vinte anos antes, apenas 40% tinham a mesma queixa.',
  'A bordo de seu notebook com acesso à rede da empresa, Luiz Alberto Marinho, 40 anos, diretor de marketing da Comapps, maior administradora de shopping centers no país, aprova campanhas publicitárias e autoriza novos projetos estando em um hotel em Manaus ou dentro de um avião. Como passa metade do mês viajando, ele montou um escritório móvel composto de notebook, celular, fax, máquina fotográfica digital e scanner. "Minha jornada diária chega facilmente a onze horas", constata.',
  'Melhor que em casa - isso quer dizer que está todo mundo infeliz e descontente? De jeito nenhum. Depois de um estudo de três anos com as 500 maiores empresas americanas, a socióloga Arlie Hochschild, da Universidade de Berkeley, descobriu que, mesmo quando a companhia oferece condições para seus funcionários irem embora mais cedo, a maioria prefere ficar. Eles gostam da camaradagem do escritório e do reconhecimento que lá recebem.',
  'Mais ainda: preferem trabalhar no escritório a enfrentar as obrigações domésticas. Nos Estados Unidos, o Viciados em Trabalho Anônimos, grupo que segue o padrão dos Alcoólicos Anônimos, registra o menor índice de frequentadores nos seus dezessete anos de existência. "Tem gente que gosta tanto de trabalhar que sofre de ansiedade quando sai de férias ou se aposenta", diz Wagner Gattaz, psiquiatra da USP.',
];

let perguntas = [
  {
    q: 1,
    p:
      'As pessoas estão trabalhando cada vez mais, dispõem de menos tempo para o lazer e ficaram mais estressadas. Principalmente em quais países?',
    a: 'Estados Unidos, Austrália e Japão.',
    b: 'Brasil, Chile, Tigres Asiáticos.',
    c: 'Espanha, Itália e Grécia.',
    d: 'África do Sul, Tigres Asiáticos e Japão.',
    r: '',
  },
  {
    q: 2,
    p:
      'Na Inglaterra, pós-Revolução Industrial, o operário trabalhava no mínimo quantas horas?',
    a: '35 horas.',
    b: '40 horas.',
    c: '50 horas.',
    d: '60 horas.',
    r: '',
  },
  {
    q: 3,
    p:
      'No Brasil, o movimento sindical nos anos 80 conseguiu implantar na Constituição de 1988 quantas horas de trabalho por semana?',
    a: '35 horas.',
    b: '42 horas.',
    c: '44 horas.',
    d: '48 horas.',
    r: '',
  },
  {
    q: 4,
    p:
      'Hoje o ânimo guerreiro dos velhos sindicatos de dar cada vez menos tempo e exigir cada vez mais salário da organização passou a:',
    a: 'entrar em decadência vertiginosa.',
    b: 'ter mais respaldo da classe operária.',
    c: 'gerar polêmica.',
    d: 'instigar posições ideológicas antagônicas dentro dos sindicatos.',
    r: '',
  },
  {
    q: 5,
    p:
      'As pessoas querem carreira, salário ascendente e benefícios. E, segundo o texto, qual é o posicionamento delas?',
    a: 'caso seja necessário trabalhar mais horas, relutam.',
    b:
      'o salário ascendente é importante, quanto à carreira não há reivindicações.',
    c:
      'os benefícios ainda despertam muito interesse, faz parte da cultura empresarial.',
    d: 'se for preciso trabalhar mais, aceitam.',
    r: '',
  },
  {
    q: 6,
    p:
      'A França adotou a estratégia da diminuição da jornada de 39 para 35 horas com a finalidade de conter o desemprego. Qual é a opinião do sociólogo Jean-Louis Laville?',
    a: 'é uma ilusão.',
    b: 'é uma alternativa viável.',
    c: 'a tendência do mercado não é favorável.',
    d: 'é necessário criar novos postos de trabalho.',
    r: '',
  },
  {
    q: 7,
    p:
      'Os trabalhadores alemães e franceses estão se esquecendo de uma velha equação:',
    a: 'tempo livre reverte em benefícios.',
    b: 'tempo é dinheiro.',
    c: 'trabalho dobrado resultados não satisfatórios.',
    d: 'desperdiçar tempo implica em falta de responsabilidade.',
    r: '',
  },
  {
    q: 8,
    p:
      'Quais são os dois países campeões de desigualdade de renda e possuem jornadas maiores?',
    a: 'República Checa e Brasil.',
    b: 'Japão e Brasil.',
    c: 'Brasil e Estados Unidos.',
    d: 'Inglaterra e França.',
    r: '',
  },
  {
    q: 9,
    p:
      'Para os executivos ganhar muito dinheiro é motivação disseminada, no entanto não é a única, o que conta também é:',
    a: 'status, poder, satisfação pessoal.',
    b: 'realização profissional, liderança, resultadose.',
    c: 'projeção social, desempenho profissional, desafio.',
    d: 'desafio, poder, reconhecimento.',
    r: '',
  },
  {
    q: 10,
    p:
      'Em que país 6 em 10 trabalhadores aponta o stress e não a falta de tempo para o lazer, como a pior consequência de trabalhar muito?',
    a: 'EUA.',
    b: 'Brasil.',
    c: 'França.',
    d: 'Inglaterra.',
    r: '',
  },
];

export default function Teste20avaliacao() {
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

  const respCertas = ['b', 'd', 'c', 'a', 'd', 'a', 'b', 'c', 'd', 'd'];

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
      numero: 20,
      prova_id: prova,
    });

    if (response.data) {
      setTesteconcluido(true);
      history.push('/avancado/teste10/resultado');
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
        numero: 20,
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

      toast.success('Teste 20 concluído com sucesso!');
      setTimeout(() => {
        setTesteconcluido(true);
        history.push('/avancado/teste10/resultado');
      }, 3000);
    } catch (error) {
      toast.error('O Teste 20 já foi finalizado!');
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
    setTimeout(() => setPlm(1450), 124000);
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
            <small>Teste 20</small>
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
            <Titulo>TESTE 20 - AVALIAÇÃO</Titulo>
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
            <Titulo>TESTE 20 - AVALIAÇÃO</Titulo>
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
