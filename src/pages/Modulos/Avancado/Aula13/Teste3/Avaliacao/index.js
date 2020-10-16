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

const hrInicio = Date.now();

const titulo = 'Lições de Empresas à Prova de Tempo';

const cred1 = 'Por James Collins';

const cred2 = 'Revista Exame';

const textos = [
  'Líderes morrem. Produtos ficam obsoletos. Existe receita para construir empresas visionárias? O caminho por elas trilhado pode dar boas pistas..',
  'O que faz de uma companhia um paradigma a ser seguido? Por que algumas conseguem ser tão admiradas a ponto de poderem ser consideradas quase como instituições? Quais as práticas e os princípios que norteiam as empresas visionárias e duradouras?.',
  'Assim como as empresas às quais se referem, tais questões também parecem ser à prova do tempo: quanto mais se tenta respondê-las, mais o assunto fascina. Talvez a abordagem mais bem-sucedida desse tema tenha sido o livro Feitas para Durar - Práticas Bem Sucedidas de Empresas Visionárias, dos professores James Collins e Jerry Porras, da Universidade de Stanford. Durante seis anos, eles estudaram minuciosamente a história de dezoito empresas de primeira linha, como 3M, General Electric e Procter & Gamble, entre outras..',
  'Sua importância? Veja a opinião do guru Tom Peters: "Feitas para Durar transformou-se num marco que nos revela os processos que levam as empresas a obter sucesso duradouro num ambiente caótico". Agora, o que diz o mercado: desde seu lançamento nos Estados Unidos, há dois anos, o livro de Porras e Collins não sai da lista dos mais vendidos da revista Business Week. Já foi traduzido para doze idiomas, entre eles o português. O assunto também já rendeu mais de 150 palestras de Collins, o mais falante da dupla, para públicos de vários lugares do mundo - do Canadá á Austrália, de Israel à Holanda.',
  'Collins e seu trabalho apareceram pela primeira vez nas páginas de EXAME em agosto de 1994, sob a forma de uma entrevista exclusiva. Mais tarde, essa entrevista foi selecionada como uma das melhores já publicadas pela revista. Desta vez, trazemos uma condensação do livro, feita pelo próprio Collins para os leitores de Exame. Leia-a. Releia-a. Guarde-a. Consulte-a. As reflexões sobre as práticas que tornam uma empresa permanentemente vitoriosa são como as companhias que as adotam: feitas para durar..',
  'Tente pensar em cinco a dez empresas que satisfaçam os seguintes critérios:.',
  '. ser a líder em sua área.',
  '. ser objeto de admiração ampla e irrestrita de empresários do ramo.',
  'ter passado por vários ciclos de vida de seus produtos ou serviços.',
  'Examine a lista de empresas que você redigiu. Observou algum ponto que elas têm em comum? Como elas diferem de outras empresas que tiveram as mesmas oportunidades, mas não atingiram a mesma estatura? As companhias visionárias, como eu chamo as empresas do meu estudo, são mais do que bem-sucedidas. Na maioria dos casos, são o melhor do melhor de suas indústrias, e já o são há décadas. Muitas delas funcionam como ícones na prática da administração de empresas, em nível mundial.',
  'No entanto, apesar de serem tão extraordinárias, as empresas visionárias não possuem históricos perfeitos, totalmente livres de falhas. A Boeing enfrentou sérias dificuldades em meados da década de 30, outra vez no final dos anos 40 e mais uma vez no início da década de 70, quando demitiu mais de 60.000 funcionários. A 3M começou como mina fracassada e quase afundou no início do século. A Sony amargou o fracasso de vários de seus produtos em seus primeiros cinco anos de vida. A Ford sofreu uma das maiores perdas na história comercial americana antes de dar início a uma impressionante volta por cima e à revitalização que se fazia necessária havia muito tempo. A IBM quase faliu em 1914 e outra vez em 1921. Agora, na década de 90, enfrenta problemas de novo. As empresas visionárias demonstram notável capacidade de dar a volta por cima das adversidades - e esse é um ponto crucial.',
  'As empresas visionárias se entremearam à própria textura da sociedade. Tente imaginar o mundo sem fita adesiva Scotch nem papeizinhos adesivos 3M Post-It para colar recados em qualquer lugar, sem o Boeing 747, sem cartões American Express, sem Band-Aids da Johnson & Johnson, sem lâmpadas GE. Pense em quantos adultos cresceram ao lado de Mickey e Pato Donald.',
  'O mais instigante, porém, é entender por que essas empresas se distinguiram. Por onde começaram? E, depois de grandes, quais características possuíam em comum que as distinguissem de outras grandes empresas? O que seu desenvolvimento pode ensinar de útil para pessoas interessadas em criar, erguer e manter empresas do mesmo tipo? As respostas a essas perguntas são sugeridas por uma dúzia de mitos muito comuns, que nossa pesquisa acabou jogando por terra.',
  '1º Mito: Para fundar uma grande empresa é necessária uma grande ideia.',
  'Realidade: começar uma empresa a partir de uma grande ideia pode não ser boa ideia.',
  'Na verdade, algumas das empresas visionárias começaram sem nenhuma ideia específica, e algumas poucas começaram como fracassos declarados. Apenas três das empresas visionárias que estudamos começaram contando com a vantagem de um produto ou serviço inicial que fosse especifico, inovador e muito bem-sucedido: a Johnson & Johnson, a General Electric e a Ford.',
  'E mesmo nos casos da Ford e da GE encontramos alguns poréns na teoria da grande ideia. No caso da GE, a grande ideia de Edison revelou ser inferior à grande ideia da Westinghouse. Edson criou o sistema de corrente direta, enquanto a Westinghouse promoveu o sistema muito superior da corrente alternada, que acabou prevalecendo no mercado americano. No caso da Ford, contrariamente à lenda que acabou por se espalhar. Henry Ford não teve a ideia do Model T primeiro para depois fundar uma empresa em torno da ideia.',
  'O que aconteceu, na realidade, foi o contrário. Ele pôde  aproveitar o conceito do Model T ao máximo porque já contava com uma empresa instalada.',
  '2º Mito: As empresas visionárias requerem líderes carismáticos.',
  'Realidade: um líder desse tipo pode acabar até sendo prejudicial às perspectivas de longo prazo da empresa. Alguns dos executivos mais importantes na história das empresas visionárias evitaram explicitamente seguir esse perfil. Eles centraram suas atenções mais em construir uma instituição duradoura do que em ser grandes líderes individuais. Se você é um líder carismático, ótimo. Mas, se não é, então também é ótimo, pois nesse caso você se encontra em muito boa companhia, ao lado dos dirigentes que ergueram empresas como 3M, Procter & Gamble, Sony, Boeing, Hewlett-Packard, Merck.',
  '3º Mito: O intuito primordial das empresas mais bem-sucedidas e maximizar seus lucros.',
  'Realidade: contrariamente à doutrina pregada nas escolas de administração de empresas, "maximizar os lucros" não tem sido, historicamente, o principal objetivo das empresas visionárias. As companhias visionárias buscam alcançar um conjunto de metas, das quais ganhar dinheiro é apenas uma e nem sempre a primeira. Sim, elas buscam lucros, mas são igualmente guiadas por sua ideologia central: seus valores centrais e um sentido de meta que ultrapassa a ideia de meramente ganhar dinheiro.',
  'Paradoxalmente, entretanto, nosso estudo revelou que as empresas visionárias ganham mais dinheiro do que as empresas que são movidas puramente pela busca do lucro.',
  '4º Mito: As empresas visionárias têm os mesmos valores centrais.',
  'Realidade: não existe nenhum conjunto de valores fundamentais necessário para uma empresa ser visionária. Na verdade, duas empresas podem ter ideologias radicalmente diferentes, e mesmo assim ambas podem ser visionárias. A variável crucial não é o conteúdo da ideologia da empresa, mas quão profundamente ela acredita em sua ideologia e quão consistentemente a vive e expressa em tudo que faz. As empresas visionárias não perguntam: "O que devemos valorizar?" Elas perguntam: "O que valorizamos realmente, totalmente, ao máximo?".',
  '. A Johnson & Johnson e a Wal-Mart fizeram dos clientes a parte fundamental de sua ideologia. Outras, como a Sony e a Ford, não o fizeram.',
  '. Algumas empresas, como a Hewlett-Packard e a Marriott, fizeram da preocupação com os funcionários parte fundamental de suas ideologias. Outras, como a Disney, não.',
  '. Para algumas empresas, tais como a Ford e a Disney, seus produtos ou serviços constituem parte básica de sua ideologia fundamental. Para outras, como o Citicorp, não o são.',
  '. No caso de algumas empresas, tais como a Sony e a Boeing, assumir riscos ousados faz parte central de sua ideologia de base; para outras, como a Hewlett-Packard e a Nordstrom, não.',
  'Na maioria dos casos, o valor mais fundamental pode ser reduzido a uma afirmação de simplicidade penetrante, que funciona como orientação substancial. Observe como Sam Walton captou a essência do valor número 1 da Wal-Mart: "Colocamos o cliente à frente de qualquer outra coisa. Se você não está atendendo ao cliente ou dando apoio a quem lhe está atendendo, então não precisamos de você". Observe como John Young, da Hewlett-Packard, captou a simplicidade do "caminho HP": "O "caminho HP" significa, basicamente, respeito e preocupação com o indivíduo. Faça com os outros como você gostaria que fizessem com você". O valor fundamental pode ser expresso de várias maneiras diferentes, mas continua sendo simples, claro, direto e forte.',
  '5º Mito: A única constante é a  transformação.',
  'Realidade: uma companhia visionária conserva sua ideologia fundamental de maneira quase religiosa e praticamente nunca a modifica, se é que alguma vez o faz. Os valores fundamentais de uma companhia visionária formam um alicerce totalmente firme e não acompanham as tendências ou modas passageiras. Em alguns casos, os valores fundamentais continuam inalterados há bem mais de 100 anos. E o objetivo fundamental de uma empresa visionária, sua razão de ser, pode ser o farol que a guia durante séculos.',
  'A Walt Disney não relegou sua ideologia fundamental à obra do acaso. Ela criou a Universidade Disney e exigiu que cada funcionário participasse de seminários sobre as "tradições Disney". A Hewlett-Packard não se limitou a ficar falando sobre o "caminho HP". Ela instituiu uma política de promoções dos funcionários que obedecia a princípios muito claros.',
  'Isso tornou quase impossível a qualquer funcionário ascender a um cargo de responsabilidade executiva se não se encaixasse totalmente no "caminho HP". A Marriott não ficou apenas falando em seus valores fundamentais. Ela instituiu mecanismos rigorosos de avaliação dos funcionários, processos de doutrinação elaboradas brechas para obter o feedback dos clientes.',
  '6º Mito: As empresas de primeira linha são conservadoras.',
  'Realidade: as empresas visionárias podem transmitir, a quem está de fora, a impressão de serem conservadoras e avessas a assumir riscos, mas elas não têm medo de comprometer-se com metas grandes, audaciosas e difíceis de atingir. Pode ser uma meta assustadora e arriscada, mas seu componente de aventura, desafio e emoção deixa as pessoas instigadas e cria imenso impulso para a frente. As empresas visionárias costumam fazer uso bem pensado dessas metas para estimular seu próprio avanço em momentos cruciais de suas histórias.',
  '7º Mito: As empresas visionárias são ótimos lugares para trabalhar.',
  'Realidade: só quem se ajusta muito bem à ideologia básica e às exigências de uma empresa visionária achará que ela é um ótimo lugar para trabalhar. Se você vai trabalhar numa empresa visionária, ou você se encaixa e começa a avançar (e possivelmente trabalhar muito feliz), ou provavelmente será eliminado, como se fosse um vírus.',
  'É uma proposição binária. Não existe meio-termo possível. As empresas visionárias têm tanta clareza sobre o que representam e o que estão tentando alcançar que simplesmente não têm espaço para quem não consegue ou não se dispõe a adequar-se a seus padrões de exigência.',
  'Esse tipo de cultura pode, na realidade, aumentar a capacidade que a empresa tem de atingir suas grandes metas, principalmente porque cria entre os funcionários a sensação de que fazem parte de uma organização de elite que é capaz de realizar praticamente qualquer coisa a que se propõe. A crença quase religiosa que a Disney tinha no papel especial que ela desempenhou no mundo fortaleceu sua capacidade de concretizar metas radicais, tais como a Disneylândia e o Epcot Center.',
  'Sem a dedicação da Boeing ao fato de ser uma organização feita de pessoas que "vivem, respiram, comem e dormem o que fazem", como reza sua filosofia, ela não poderia ter lançado com sucesso os projetos 707 e 747. A dedicação da Merck à sua própria ideologia conferia a seus funcionários a sensação de que integravam algo que ultrapassava os limites de uma simples empresa - e em grande média devido a esse sentimento eles se inspiraram a empreender o esforço necessário para estabelecer a Merck como a mais importante empresa farmacêutica do mundo.',
  '8º Mito: Um planejamento estratégico brilhante é vital.',
  'Realidade: algumas das melhores iniciativas das empresas visionárias decorrem de tentativa e erro, oportunismo e do acaso - literalmente. Coisas que, vistas em retrospectiva, parecem fruto de previsão brilhante e planejamento prévio muito bem-feito muitas vezes resultam de decisões como "vamos experimentar um monte de coisas e ficar com o que der mais certo". Nesse sentido, as empresas visionárias parecem imitar a evolução biológica das espécies. Para nós, os conceitos apresentados em A Origem as Espécies, de Charles Darwin, são mais aplicáveis ao sucesso de certas empresas visionárias do que os ensinamentos de qualquer livro sobre planeamento estratégico de empresa.',
  'O conceito central da teoria da evolução é que as espécies evoluem por um processo de mutação genética aleatória e seleção natural. Por meio da variação genética, uma espécie atinge boas chances de que alguns de seus integrantes se adaptarão às exigências do meio ambiente.',
  'À medida que o ambiente se modifica, as variações que se adaptam melhor tendem a sobreviver, e as que não se adaptam tendem a morrer. É isso que Darwin quis dizer com "a sobrevivência dos mais fortes". Nas palavras do próprio Darwin: "Multipliquem-se, variem, deixem os mais fortes viver e os mais fracos morrer". Muitas das empresas visionárias parecem seguir essa orientação.',
  '9º Mito: Mudanças fundamentais são feitas por forasteiros.',
  'Realidade: nos 1.700 anos somados de vida das várias empresas visionárias que estudamos, começando no ano 1.900, encontramos apenas dois casos em que esse mito se verificou: a Philip Morris e a Disney. As empresas visionárias rechaçaram repetidas vezes a ideia convencional de que transformações significativas e ideias novas só podem vir de fora da empresa. Companhias como GE, Motorola, P&G, Boeing, 3M e Hewlett-Packard já provaram repetidas vezes que uma empresa visionária não precisa, de maneira alguma, contratar seus executivos de mais alto escalão de fora da companhia para garantir transformações e ideias novas.',
  '10º Mito: A meta é derrotar a concorrência.',
  'Realidade: as empresas visionárias centram suas atenções principalmente na meta de superar a elas mesmas. O sucesso e a derrota dos concorrentes acontecem para as empresas visionárias não tanto como sua meta final, mas como resultado residual delas se colocarem sempre a mesma pergunta: "Como podemos melhorar a nós mesmas, para fazermos melhor amanhã do que fizemos hoje?" E, em alguns casos, elas vêm se fazendo essa pergunta diariamente, como disciplina que já faz parte de seu modo de vida há mais de 150 anos.',
  'A tranquilidade não é o objetivo de uma empresa visionária. Na realidade, as empresas visionárias instalam mecanismos fortes para criar desconforto e acabar com a complacência, estimulando dessa maneira sua própria transformação e seu próprio aperfeiçoamento, antes mesmo do mundo externo começar a exigir isso delas.',
  'A General Electric institucionalizou o desconforto interno com um processo que chamou de work out. Grupos de funcionários se reúnem para discutir oportunidades de melhora e fazer propostas culturas que enaltecem a empresa ou a autonomia individual, entre executivos vindos de dentro da própria empresa ou mudanças fundamentais, entre práticas conservadoras ou grandes metas, entre ganhar dinheiro ou viver segundo seus valores e metas. Em lugar disso, são partidárias do e: a visão paradoxal que lhes permite buscar A e B ao mesmo tempo.',
  'Será que essa posição é irracional? Possivelmente. Raramente encontrada? Sim. Difícil? Sem dúvida. Mas, como observou o escritor F. Scott Fitzgerald, "o teste da inteligência de primeira linha é a capacidade de reter duas ideias opostas na cabeça ao mesmo tempo, e mesmo assim conservar a capacidade de funcionar". É exatamente isso que as empresas visionárias conseguem fazer.',
  '12º Mito: É necessária uma declaração de metas.',
  'Realidade: as empresas visionárias alcançaram a estatura que têm não tanto por terem feito declarações de princípios, embora em muitos casos as tenham feito. Tampouco ascenderam à condição de grandes por terem escrito uma das afirmações de visão, valores, metas, missão ou aspirações  popularizadas entre as esferas de direção das empresas nos dias de hoje, embora tenham escrito tais afirmações décadas antes disso entrar na moda. Criar uma afirmação pode constituir um passo útil na construção de uma empresa visionária, mas é apenas um entre os milhares de passos que compõem o processo infindável de expressão das características fundamentais que são comuns a todas as empresas visionárias.',
  'Conclusão: Uma empresa visionária é como uma grande obra de arte. Pense nas cenas da criação do mundo que Michelangelo pintou no teto da Capela Sistina, ou em sua estátua de Davi. Pense num romance grandioso e clássico, como Crime e Castigo. Pense na Nona Sinfonia de Beethoven ou na peça Henrique V, de Shakespeare. Pense em algum edifício que é um projeto arquitetônico maravilhoso, como as obras-primas de Frank Lloyd Wright ou de Mies van der Rohe.',
  'Não dá para apontar uma característica única que faz o conjunto todo funcionar. É a obra como um todo, todas suas partes juntas, trabalhando para criar um efeito global, que criam a grandeza duradoura. E não são apenas as partes grandes, mas também os detalhes aparentemente sem importância - em que palavras se expressa uma ideia, a mudança de ritmo no momento exato, a colocação perfeita de uma janela, uma expressão sutil esculpida nos olhos da estátua. Como disse o grande Mies van der Rohe, "Deus está nos detalhes".',
];

let perguntas = [
  {
    q: 1,
    p: 'Qual a conclusão dos autores sobre os líderes carismáticos?',
    a:
      'devem ser eliminados pois inibem a iniciativa dos demais profissionais da equipe.',
    b: 'a liderança deve ser fomentada sempre, mormente, dos carismáticos.',
    c:
      'os grandes líderes devem transferir à organização suas qualidades, ao contrário de cultivar um sucesso solitário.',
    d: 'a organização deve prontamente identificá-los e explorá-los ao máximo.',
    r: '',
  },
  {
    q: 2,
    p:
      'Qual a grande pergunta que as empresas que duram fazem referente aos seus valores centrais?',
    a: '"o que devemos valorizar?"',
    b: '"como humanizar o nosso negócio?"',
    c: '"o que valorizamos realmente ao máximo?"',
    d: '"onde está o nosso cliente?"',
    r: '',
  },
  {
    q: 3,
    p:
      'Para a Johnson  Johnson e a Walt-Mart, o centro de sua ideologia empresarial é:',
    a: 'coragem de assumir riscos.',
    b: 'qualidade em seus produtos e serviços.',
    c: 'preocupação com o bem-estar dos funcionários.',
    d: 'atenção total aos clientes.',
    r: '',
  },
  {
    q: 4,
    p:
      'As empresas visionárias são um excelente lugar para trabalhar, desde que:',
    a: 'o profissional seja criativo e inovador.',
    b: 'manifesta um elevado grau e liderança.',
    c: 'ajuste-se à ideologia básica da organização.',
    d: 'tenha sólidos conhecimentos de uma segunda língua.',
    r: '',
  },
  {
    q: 5,
    p:
      'A quem cabe o mérito das mudanças fundamentais em quase todas as empresas visionárias:',
    a: 'ao quadro de executivos da própria organização.',
    b:
      'a uma equipe de consultores contratados especialmente para reorganizar a Companhia.',
    c: 'ao trabalho intenso de benchmarking.',
    d: 'à liderança carismática de um de seus executivos.',
    r: '',
  },
  {
    q: 6,
    p:
      'O principal objetivo das organizações duradouras e visionárias é aniquilar os concorrentes, esta afirmação é:',
    a: 'verdadeira.',
    b: 'falsa.',
    r: '',
  },
  {
    q: 7,
    p:
      'O texto lido é uma condensação do livro Feitas para Durar - Práticas Bem Sucedidas de Empresas Visionárias, cujos autores são:',
    a: 'Karl E. Wei, e Michael Porter.',
    b: 'Peter F.Drucker e Tracy Kidder.',
    c: 'James Collins e Jerry Porras.',
    d: 'W. Edward Deming e Tom Peters.',
    r: '',
  },
  {
    q: 8,
    p:
      'Assinale abaixo a opção que expressa um dos pontos cruciais das empresas visionárias:',
    a: 'estrutura hierárquica enxuta.',
    b: 'super valorizam a criatividade de todos os seus executivos.',
    c: 'capacidade de dar a volta por cima das adversidades.',
    d: 'tem por principal objetivo derrotar a concorrência.',
    r: '',
  },
  {
    q: 9,
    p:
      'Qual a varável crucial que caracteriza uma empresa visionária e duradoura:',
    a: 'o caráter conservador de sua marca.',
    b:
      'oferecem um ambiente de trabalho claramente voltado para os valores humanos.',
    c:
      'a intensidade com que vive e expressa sua ideologia e seus produtos e serviços.',
    d: 'as estratégias de que fazem uso para aniquilar seus concorrentes.',
    r: '',
  },
  {
    q: 10,
    p:
      'Sobre as organizações duradouras e visionárias, assinale a alternativa incorreta:',
    a: 'nem sempre surgem de uma grande ideia.',
    b: 'não, necessariamente, possuem líderes carismáticos.',
    c: 'a maximização dos lucros nem sempre impõe-se como objetivo primordial.',
    d:
      'todas as organizações duradouras e visionárias têm os mesmos valores centrais.',
    r: '',
  },
];

export default function Teste13avaliacao() {
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

  const respCertas = ['c', 'c', 'd', 'c', 'a', 'c', 'c', 'c', 'c', 'c'];

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
      numero: 13,
      prova_id: prova,
    });

    if (response.data) {
      setTesteconcluido(true);
      history.push('/avancado/teste3/resultado');
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
        numero: 13,
        plm,
        pcr: notaPcr,
        pcm: calcPcm,
        horas: calcHoras,
        nivel_id: 5,
        prova_id: prova.id,
      });

      const response = await api.get(`provas`);

      setProva(response.data);
      dispatch(updateProvaRequest(response.data));

      toast.success('Teste 3 concluído com sucesso!');
      setTimeout(() => {
        setTesteconcluido(true);
        history.push('/avancado/teste3/resultado');
      }, 3000);
    } catch (error) {
      toast.error('O Teste 3 já foi finalizado!');
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
    setTimeout(() => setPlm(1100), 159000);
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
            <small>Teste 3</small>
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
            <Titulo>TESTE 3 - AVALIAÇÃO</Titulo>
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
            <Titulo>TESTE 3 - AVALIAÇÃO</Titulo>
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
