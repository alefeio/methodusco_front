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

const titulo = 'Nada será como Antes';

const cred1 = 'Por David Cohen';

const cred2 = 'Você S.A.';

const textos = [
  'Que o mundo corporativo mudou, isso não é novidade. A questão é em que ele mudou, e o quanto isso vai afetar a sua vida.',
  'É o que mais se fala: a globalização, a revolução tecnológica, a ansiosa busca da competitividade mudaram para sempre o mundo dos negócios e, por consequência direta, as nossas vidas profissionais.',
  'O problema, quando um discurso se torna assim tão generalizado, é que tendemos a repeti-lo mecanicamente, sem realmente prestar atenção no seu real significado. Tendemos a tratar o assunto como se fosse alheio a nós mesmos: "É o mundo que está mudando, e a economia que está começando a funcionar de outra forma"...',
  'Curiosamente, repetir à exaustão que tudo está mudando é uma forma de preservar a rotina. A observação fica relegada ao campo do discurso, continua-se a agir como se foi ensinado a agir e, quando isso não dá os mesmos resultados que costumava dar, passa-se ao terreno das queixas.',
  'Pense na expressão "nada será como antes". Na maioria das vezes, ela é usada com um tom de ameaça ou de nostalgia. Como se "antes" fosse o certo, o natural.',
  'Pois bem: nada será como antes. Mas isso não quer dizer que será pior. Nem melhor. Quer dizer que será diferente. Quem vai fazer seu futuro ser melhor ou pior - eis uma das coisas que não mudam nunca - será você. Para isso, é bom saber em que aspectos cruciais, críticos, o mundo está mudando- e como isso pode afetar a sua carreira, a sua empresa, as suas escolhas. Vamos lá.',
  '1 . O mudo está mais instável - dê uma volta no seu quarteirão. Quantas lojas estão funcionando á mais de dez anos? Quantas mudaram de nome, de dono, de ramo? Isso não acontece apenas no seu quarteirão. O consultor americano Richard Foster, da McKinsey, fez um estudo de 208 empresas durante 18 anos. Apenas três sobreviverem por todo esse tempo. Das 500 maiores empresas dos Estados Unidos em 1970, um terço já não existia em 1983, segundo uma pesquisa da Shell. O tempo de vida médio de uma empresa de qualquer tamanho, no Japão e na Europa, é de 12,5 anos, segundo um estudo do Stratix Grou, da Holanda.',
  'Por que o mundo dos negócios é assim tão instável? Porque o mundo é assim. Ou, pelo menos, ficou assim nos últimos tempos. Metade dos casamentos termina em divórcio na Inglaterra e nos Estados Unidos (no Brasil, um em cada quatro casais se divorcia). Na Suécia, 25% das crianças nascem de mães solteiras. Nos Estados Unidos, 42 milhões de pessoas mudam de casa a cada ano.',
  'Por que tanta instabilidade, justamente agora? Uma forma de responder à questão é a do paleontólogo Stephen J. Gould, um estudioso da evolução. Para ele, a história da vida é uma série de situações estáveis, pontuadas por eventos, raros que transformam tudo e ajudam a estabelecer a próxima era estável, num novo patamar. Foi assim, por exemplo, com a extinção dos dinossauros.',
  'Segundo Gould, o final do século 20 é um desses raros eventos que tudo transformará. A revolução da informática e a revolução da biotecnologia, que está vindo em seguida, devem provocar muito mais mudanças do que a Revolução Industrial causou no século passado. Só para ter uma ideia, a Revolução Industrial fez o preço do algodão cair 85% entre 1780 e 1850. Com a revolução atual, essa mesma redução de 85% aconteceu no preço dos semicondutores em apenas três anos, entre 1959 e 1962.',
  'Há pelo menos três bons motivos para a aceleração das mudanças. O primeiro é a evolução tecnológica. Os outros dois são a globalização e a desregulamentação (no Brasil, caracterizada pela privatização e pela descentralização). O diálogo entre setores diferentes e países diferentes faz com que muito mais experiências sejam compartilhadas.',
  'Enfim, o mundo está ficando menor, mais misturado e mais eficiente. O maior exemplo desse processo é a Internet, um espaço virtual em que a tecnologia se encontra com a globalização de forma quase absoluta.',
  '2. A maior riqueza é o conhecimento - tecnologia, globalização e desregulamentação está fazendo a economia acelerar de forma espetacular. Ainda não alcançamos os ganhos de produtividade obtidos na Revolução Industrial, mas há que lembrar que esses ganhos decorreram em um período de mais de 100 anos. Há fortes indícios de que a revolução atual vai repetir e até ultrapassar o sucesso o século passado. Em 1979, um operário da Fiat produzia nove carros no mesmo tempo em que hoje são produzidos 69. Um prédio moderno, projetado com auxílio do computador, pode passar do planejamento às obras em dois ou três meses, um terço do tempo do começo da década.',
  'Evoluções assim tão rápidas não ocorrem pelo ganho de eficiência. Elas ocorrem principalmente pela mudança de processos, por inventar novos modos de fazer as coisas. Isso quer dizer que o maior prêmio da Nova Economia está nas ideias, no conhecimento, na inteligência.',
  '"Se tivéssemos sabido onde olhar, mesmo nos anos 50 poderíamos ter visto a mudança de valor do capital para o conhecimento", diz o ex-executivo da Shell Arie de Geus, no livro A Empresa Viva. Já naquela época as empresas pobres de bens e ricas de cérebros começaram a ser valorizadas: as agências de publicidade, as consultorias, as firmas de auditoria. Hoje, isso pode ser visto com muito mais força pela cotação em bolsa de empresas como a Microsoft ou a Amazon.com.',
  'Nesse mundo em que a nova riqueza é o conhecimento, capital e trabalho passam a ser menos antagônicos e mais parecidos em seu funcionamento. Capital é cada vez mais o capital intelectual, capital de relacionamentos, capital de marca. E trabalho e cada vez mais a capacidade de gerar e gerir ideias, de conectar-se a outros profissionais e a clientes.',
  '3 . Empregos somem, empregos surgem - com todo esse ganho de produtividade, é natural que surja o medo do desemprego. Se um operário produz dez vezes mais, o que acontece com os outros nove? Esse raciocínio não é novo. Muita gente dizia que a Revolução Industrial causaria miséria porque a mão-de-obra da agricultura estava sendo dispensada. O que se viu foi a criação de muito mais empregos na indústria do que os que havia na agricultura, ao longo do século, em todo o mundo.',
  'Os pessimistas de plantão dizem que desta vez não haverá nova indústria para substituir os empregos perdidos. Essa opinião só faz sentido se pensarmos que a humanidade tem uma quantidade finita de necessidades. Nesse caso, cada vez menos gente poderia satisfazer esse bolo de necessidades, e os outros estariam fora do mercado de trabalho.',
  'Mas não é preciso ser muito perspicaz para saber que as necessidades humanas são infinitas. Quanto mais se tem, mas se quer, e não vai ser por falta de demanda que a economia vai murchar. Também não será por falta de oferta, porque no mundo do conhecimento a produção nem mesmo depende de bens materiais - e pode, portanto, ser multiplicada indefinidamente. A matéria-prima para o principal produto da Nova Economia são as ideias e essa matéria-prima não acaba e não polui.',
  'Então não existe problema? Infelizmente, existe. O problema não é a falta de empregos, mas o descompasso entre a oferta de novos empregos e a capacitação das pessoas para eles. Um mestre-de-obras demitido não pode preencher a vaga de construtor de sites na Internet.',
  'Esse descompasso não vai desaparecer por mágica. A nova economia oferece milhões de oportunidades, mas a maioria delas não serve para as pessoas desalojadas de seus antigos postos. O único modo de atenuar o problema é a educação. Uma educação arrojada, ininterrupta, abrangente. Esse o principal investimento para as empresas, porque sua maior riqueza são as pessoas que trabalham nela, e para os funcionários, porque é sua única garantia no mercado de trabalho.',
  'Quase todo mundo encara essa nova situação como um desgaste maior para o trabalhador, que tem de se preocupar com usa empregabilidade muito mais do que no passado. Pois estranho é justamente o contrário: que as pessoas não queiram se preocupar com isso. Como diz Charles Handy, ex-professor de negócios da London School of Economics: "Se a inteligência é a nova base da propriedade e da riqueza, é estranho que nós nem sempre pareçamos ávidos por obter mais para nós mesmos".',
  '4 . Um mundo de riscos - quando falamos em instabilidade, estamos nos referindo a duas coisas muito distintas; um mundo ameaçador para aqueles que não enxergam as mudanças, um mundo cheio de oportunidades para os que se dispõem a se mover. A escolha parece óbvia, não é? Na teoria, sim. Mas, quando nos dispomos a nos mover, estamos automaticamente entrando no perigoso terreno da fuga das rotinas. A rotina pode ser asfixiante, mas ela é também aquilo que dá sentido à vida, até mesmo às aventuras.',
  '"Imaginar uma vida de impulsos momentâneos, de ações a curto prazo, livre de rotinas sustentadoras, uma vida sem hábitos, e imaginar na verdade uma vida inconsciente", diz o sociólogo britânico Anthony Gidens, formulador da proposta da "terceira via", apresentada com opção tanto ao neoliberalismo como à social-democracia.',
  'O necessário equilíbrio entre rotina, ideal, propósito, de um lado, e desejo, ambição, coragem, de outro, é a tônica do profissional bem-sucedido. Uma carreira não é mais uma carreira, no sentido de trilha a ser percorrida com determinação, esforço e cumprimento de metas. Ela é muito mais uma sucessão de apostas, a ser administrada com ousadia e cautela, talento e planejamento estratégico. A vida profissional, quem diria, ficou mais parecida com... a vida. Sim, porque a vida é uma grande sucessão de escolhas, todas arriscadas.',
  'Não se iluda com os gurus que louvam o risco. Todo risco é perturbador. Segundo o neurologista António Damásio, da Faculdade de Medicina da Universidade de Iowa, há mais variedades de emoção negativa do que de emoção positiva, e é natural que o cérebro privilegie a primeira. Você não é obrigado a gostar de arriscar. Mas deve saber que, num mundo instável, ficar parado é também uma espécie de risco. E dos grandes.',
  '. eles têm de pensar a longo prazo, mas devem mostrar resultados imediatos.',
  '. têm de inovar, mas sem perder eficiência',
  '. têm de colaborar, mas também competir.',
  '. devem trabalhar em equipe, mas são cobrados individualmente.',
  '. têm de ser flexíveis, mas sem romper com os padrões.',
  'Esses são os dilemas da vida moderna. Para lidar com eles, é necessário compreender os paradoxos da Nova Economia:',
  'a) o real é virtual - a força de uma empresa não é mais dada pelo tamanho de sua folha de pagamento ou pelo montante de bons que tenha. Uma empresa é forte pelo que consegue realizar, mesmo quando suas fronteiras já não são mais tão visíveis. A Xerox do Brasil tem, hoje, mais funcionários trabalhando em outras empresas do que na sua própria sede. A Nike não produz um único tênis. Ela contrata fábricas, escalona a distribuição, administra a produção e investe na marca. A fábrica de motocicletas italiana Aprilia não fabrica peças de moto, ela coordena uma rede de pequenas empresas familiares.',
  'Empresas são cada vez mais parecidas com caixas de contratos, um cruzamento de relações que inclui fornecedores, clientes, colegas e até concorrentes. Ganhar espaço é saber se mover nesse emaranhado de relacionamentos.',
  'b) a liberdade é conectada - na briga pela competitividade, as empresas estão expandindo suas preocupações por toda a cadeia de valor: desde o fornecedor até o cliente final. Isso cria uma economia em rede, na qual todos têm interesses variados em todos. Junte-se a isso a incerteza de qualquer investimento em um mundo instável e teremos o nascimento de algo que o consultor americano James Moore apelidou de competição (cooperação + competição). As empresas concorrem, mas precisam umas das outras para dividir riscos de inovar a produção ou para estabelecer novos padrões para a indústria. Estamos na era das alianças. Pensar a produção e o trabalho, hoje, é pensar em parcerias e descobrir formas de efetivá-las.',
  'c) a força é adaptável - se a realidade muda, é preciso estar preparado para mudar. Como a companhia sueca Stora, que em sete séculos já foi mina de cobre, explorou floretas, produziu aço, energia hidrelétrica e hoje faz papel. Para ter essa agilidade, é preciso fugir da armadilha do foco. É preciso estar atento ao máximo de opções. Isso significa ouvir opiniões discordantes, estar aberto a experiências diferentes, aguçar a curiosidade, ao mesmo tempo em que se aprofunda o conhecimento naquilo que é o seu caminho principal. Preparar-se para o futuro é preparar-se para o máximo de possibilidades.',
  'd) a perfeição é rápida - o americano Sam Walton, o homem que fundou a cadeia de lojas Wal-Mart, disse que o sucesso do seu negócio, com a maioria dos sucessos que acontecem da noite para o dia, demorou 20 anos para ser feito. A rapidez é essencial no mundo moderno, em que o ciclo de desenvolvimento dos produtos é acelerado, mas a rapidez com eficiência só é atingida quando fazemos aquilo que estamos sempre nos aperfeiçoando para fazer.',
  'e) o impulso é consciente - se você vai ser rápido, virtual e adaptável, o que garante a sua identidade? O fato de, em cada ação, você estar em contato com a sua verdade, obedecer a seus valores centrais. Como dizia o filósofo grego Heraclito de Éfeso: "Caráter é destino".',
  'f) o raciocínio é emotivo - na Nova Economia, o relacionamento faz parte do produto. Vende-se uma experiência, tanto quanto um objeto ou um serviço. Mais: ideias são o item mais importante da pauta, mas não existe avanço intelectual sem emoção. Sentimentos ajudam a guiar o raciocínio, como comprovam os depoimentos de vários cientistas sobre o senso estético presente em suas descobertas.',
  'g) a perenidade é inovadora - eis o mais complicado dos paradoxos. Só a mudança garante nossa permanência. Inovar é uma necessidade tão grande quanto arriscada: a maior parte das inovações dão errado. Mas pense só um minuto sobre o que significa não inovar. É fazer algo do jeito que outras pessoas fazem, fazer coisas que já foram feitas antes. Não há nada de errado com isso, principalmente porque é assim que uma pessoa aprende, vivencia o mundo, evolui. Mas parar o processo por aí é um desperdício. É não acrescentar nada, é nunca deixar sua marca no mundo. É ser dispensável.',
  '6. Dividir é multiplicar - o conhecimento tem uma peculiaridade em relação a qualquer outro tipo de riqueza: quando você o dá para alguém, não o perde. Se essa dinâmica for estabelecida, o conhecimento multiplicará o conhecimento. Outra peculiaridade: esse produto não é depreciado. Uma nova ideia não destrói a anterior, ela evolui a partir da outra.',
  'Uma terceira característica: o que é comum vale mais do que o que é raro. É o caso do telefone, ou do fax, ou do programa Windows? quanto mais gente tem, mais vale a penas ter. Parece uma utopia cristã, mas é uma tendência da economia moderna: rico é aquele que sabe dar.',
  '7 . Poder não é dado de presente - em ambientes caóticos, o poder não está no centro do sistema. Quem tem o poder é a pessoa que controla a variável mais instável. O ideal é ter pessoas capazes de tomar decisões em cada nível da empresa. O ideal é dar autonomia aos funcionários. Mas autonomia não é algo que se dê.',
  '"As pessoas têm esperanças, medos, aspirações, potencial para engajamento e resistência obstinada, mas nenhum líder pode lhes dar um senso de autonomia - para ser real, essa sensação tem de ser ganha, não pode ser doada. Não existem atalhos para desenvolver o talento humano", diz o professor de estratégia J. B. Kassarjian, do Instituto Internacional de Desenvolvimento de Gestão (IMD, com sede na Suíça).',
  '8 . Aprendizado é sobrevivência - não existe vida sem aprendizado. Se entendermos aprendizado como uma mudança de comportamento provoca do pelas informações colhidas com base na experiência, até uma bactéria aprende. A questão é: o que aprender? Num mundo instável, como saber as necessidades do futuro um pouco além do imediato?',
  'O sociólogo italiano Domenico De Masi sugere que a ênfase da educação seja na estética, na ética, na grande cultura. "O que se aprende para a vida nunca fica obsoleto", diz o ministro da Educação do Brasil.',
  'Isso não significa que não se deve prestar atenção aos estudos técnicos, à capacitação para as atividades presentes e do futuro imediato, ao treinamento para funções ambicionadas. A "grande educação" não substitui o aprendizado prático. Ao contrário. Ela dá sentido a ele. E aqui passamos ao último tópico.',
  '9 . Trabalhar para quê? - houve um tempo em que o trabalho era perfeitamente separável da vida pessoal. Trabalho era o que se fazia das 9 às 5, na maioria das vezes deixando o cérebro em casa. No mundo do conhecimento, isso não é mais possível. O ambiente corporativo agora exige que o funcionário - qualquer funcionário - agregue valor ao seu trabalho.',
  'Há um outro complicador. O enfraquecimento dos laços comunitários, familiares e religiosos da sociedade deu peso a uma faceta do trabalho. Mais do que nunca, ele é visto como uma atividade que dá sentido à vida das pessoas, supre necessidades emocionais que antes eram preenchidas por outros campos da experiência humana. Trabalho não é simplesmente algo que fazemos, é algo que nos forma.',
  'Isso prova um enorme conflito: o trabalho do conhecimento é mais prazeroso, mas ao mesmo tempo mais absorvente. Ele faz mais sentido, mas consome mais energia. Este é o grande dilema da busca de equilíbrio entre a vida pessoal e a carreira. É um dilema que só pode ser resolvido individualmente.',
  'A chave par sair desse paradoxo é a mesma chave do aprendizado. Todo conhecimento, para não ser simplesmente uma coleção de técnicas, deve se traduzir também em autoconhecimento. Da mesma forma, não é o trabalho que faz uma pessoa melhor. É uma pessoa melhor que faz o trabalho ser uma expressão de sua integridade.',
];

let perguntas = [
  {
    q: 1,
    p: 'Quais são os três motivos para a aceleração das mudanças?',
    a: 'globalização, economia instável, desburocratização.',
    b: 'evolução tecnológica, globalização e desregulamentação.',
    c:
      'mercado comum europeu, aumento no índice de alfabetização, ascensão do setor informal na economia.',
    d:
      'interferência dos EUA na economia mundial, globalização, desburocratização.',
    r: '',
  },
  {
    q: 2,
    p: 'Na Nova Economia o problema não é a falta de empregos, mas:',
    a: 'a desmotivação das pessoas para mudarem de área.',
    b: 'a falta de qualificação.',
    c: 'a instabilidade do mercado de trabalho.',
    d:
      'o descompasso entre a oferta de novos empregos e a capacitação das pessoas para eles..',
    r: '',
  },
  {
    q: 3,
    p:
      'Quando nos referimos à instabilidade no mercado de trabalho, estamos falando de coisas muito distintas, ou seja, um mundo:',
    a:
      'inquiridor onde testa sempre as nossas habilidades e um mundo criativo onde podemos desenvolver nossas potencialidades.',
    b:
      'desafiador porque o contexto põe a prova constantemente as nossas capacidades e compensador porque descobrimos nosso potencial.',
    c:
      'ameaçador para aqueles que não enxergam as mudanças e um mundo cheio de oportunidades para os que se dispõem a se mover.',
    d:
      'instável para aqueles que se veem como vítimas da situação e estimulante para aqueles que desejam buscar conhecimento.',
    r: '',
  },
  {
    q: 4,
    p: 'Hoje o critério para saber se uma empresa é forte significa:',
    a: 'o tamanho da folha de pagamento.',
    b: 'o montante de bens que possui.',
    c: 'o talento dos seus funcionários.',
    d: 'o que consegue realizar.',
    r: '',
  },
  {
    q: 5,
    p:
      'O consultor americano James Moore criou um neologismo competição, isto quer dizer:',
    a: 'cooperação + comunicação.',
    b: 'competição + operação de risco.',
    c: 'competição + obstinação.',
    d: 'cooperação + competição.',
    r: '',
  },
  {
    q: 6,
    p: 'Quais são as peculiaridades do conhecimento?',
    a:
      'quando passa o conhecimento a alguém não o perde, o produto não deprecia, o que é comum vale mais do que é raro.',
    b:
      'não pode ser roubado, produto se deprecia, evolui a partir de outras ideias.',
    c:
      'não se implementa rapidamente, constitui a riqueza de uma Nação, através dele alcançamos projeção social.',
    d:
      'alcançamos projeção profissional, uma fonte inesgotável, produto não deprecia.',
    r: '',
  },
  {
    q: 7,
    p: 'O sociólogo Domenico De Masi sugere que a ênfase da educação seja na:',
    a: 'arte, na história, nas relações humanas.',
    b: 'estética, na ética, na grande cultura.',
    c: 'história da arte, na ética, na informática.',
    d: 'informática, línguas, artes plásticas.',
    r: '',
  },
  {
    q: 8,
    p: 'O trabalho do conhecimento traduz um enorme conflito, qual seria ele?',
    a: 'a busca do equilíbrio da vida pessoal e a carreira.',
    b: 'segurança pessoal versus falta de estabilidade do cargo.',
    c: 'criação de cargos versus extinção de cargos.',
    d: 'segurança versus liderança.',
    r: '',
  },
  {
    q: 9,
    p:
      'Todo o conhecimento para não ser apenas uma coleção de técnicas, deve se traduzir em:',
    a: 'prática.',
    b: 'sabedoria.',
    c: 'técnicas de trabalho',
    d: 'autoconhecimento',
    r: '',
  },
  {
    q: 10,
    p: 'Esta matéria foi redigida por:',
    a: 'Richard Foster.',
    b: 'Stephen Gould.',
    c: 'David Gohen.',
    d: 'Domenico De Masi',
    r: '',
  },
];

export default function Teste14avaliacao() {
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

  const respCertas = ['b', 'd', 'c', 'd', 'd', 'a', 'b', 'a', 'd', 'c'];

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
      numero: 14,
      prova_id: prova,
    });

    if (response.data) {
      setTesteconcluido(true);
      history.push('/avancado/teste4/resultado');
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
        numero: 14,
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

      toast.success('Teste 14 concluído com sucesso!');
      setTimeout(() => {
        setTesteconcluido(true);
        history.push('/avancado/teste4/resultado');
      }, 3000);
    } catch (error) {
      toast.error('O Teste 14 já foi finalizado!');
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
    setTimeout(() => setPlm(1150), 158200);
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
            <small>Teste 14</small>
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
            <Titulo>TESTE 14 - AVALIAÇÃO</Titulo>
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
            <Titulo>TESTE 14 - AVALIAÇÃO</Titulo>
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
