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

const titulo = 'Aprenda a se Concentrar';

const cred1 = 'Gisela Blanco';

const cred2 = 'Superinteressante';

const textos = [
  'Edison não conseguia se concentrar de jeito nenhum. Tinha sempre dois ou três empregos e passava o dia indo de uma para outro. Adorava trocar mensagens, e se acostumou a escrever recados curtos e constantes, às vezes para mais de uma pessoa ao mesmo tempo. Apesar de ser um cara mais inteligente do que a média, sofria quando precisava ler um livro inteiro. Para completar, comia rápido e dormia pouco – e não conseguia se dedicar ao casamento conturbado, por falta de tempo. Se identificou? Claro, quem não tem estes problemas? Passar horas no Twitter ou no celular, correr de um lado para o outro e ter pouco tempo disponível para tantas coisas que você tem de fazer são dramas que todo mundo enfrenta. Mas esse não é um mal do nosso tempo. O rapaz da história aí em cima era ninguém menos que Thomas Edison, o inventor da lâmpada. A década era a de 1870 e o aparelho que ele usava para mandar e receber mensagens, um telégrafo. O relato, que está em uma edição do jornal New York Times, conta que quando Edison finalmente percebeu que seu problema era falta de concentração, parou tudo. Se fechou em seu escritório e se focou em um problema de cada vez. A partir daí, produziu muitos inventos.',
  'É verdade que tudo ao nosso redor serve para nos distrair. Que as ferramentas criadas para roubar o seu tempo estão cada vez mais interessantes. E que todos aqueles links na internet são muito mais legais do que o seu trabalho. Homens do tempo de Edison não tinham um celular que tocava ou recebia e-mails enquanto eles tentavam ler um livro - mas a luta humana pela concentração está longe de ser um problema moderno. Na verdade é bem mais antigo do que você imagina. ',
  'Respire fundo. Então vamos lá. Concentre-se. Você está conseguindo ler esse texto? Ótimo! Só podemos acreditar em você. Afinal, é difícil medir exatamente o quanto você está prestando atenção aqui. Não há nenhuma maneira científica de medir essa forma prolongada de atenção que nós chamamos de concentração. Isso porque ela não é tarefa de uma área específica, mas de um conjunto de sistemas que envolve o cérebro inteiro. O que a neurociência já sabe é que se trata de um processo de escolha do que é importante. Vamos entender na prática.',
  'Você está uma festa barulhenta, lotada de pessoas. Alguém interessante se aproxima e puxa assunto. Nesse momento, seu cérebro a elege como o foco mais importante e ignora todos os outros estímulos ao redor. Quase todas suas habilidades cognitivas estão na conversa. "O lobo frontal, responsável pelo comportamento e pela tomada de decisões, é especialmente importante na concentração, mas praticamente todo o sistema sensorial está envolvido", afirma o neurologista Ivan Hideyo Okamoto, da Universidade Federal de São Paulo. Emoções e memória, por exemplo, têm grande influência no que e no quanto você vai se concentrar. A origem disso está no sistema límbico, que comanda as emoções - ele sempre vai favorecer os elementos que despertam sensações intensas.',
  'Por isso é tão fácil se concentrar na pessoa interessante que puxa papo. Com todos os seus sentidos voltados para algo tão importante (conseguir um telefone no fim da conversa, por exemplo), fica difícil não se concentrar.',
  'Mas o verdadeiro desafio é focar naquilo que não é tão fascinante assim. Você sabe do que estamos falando: certamente já tentou estudar para uma prova ou prestar atenção no seu chefe, mas simplesmente não conseguiu. A culpa para a sua mente avoada está nos nossos ancestrais. Seu cérebro simplesmente não foi moldado pela evolução para passar muito tempo focado no mesmo assunto. Nossos parentes evolutivos - outros mamíferos, aves e répteis - precisavam sempre tomar decisões rápidas. Fugir de um predador, caçar, procurar abrigo. Para todos os outros animais, reparar em tudo o que se passa ao redor significa sobreviver. "Para nossos ancestrais, o tipo de concentração que queremos ter agora não era necessária", diz o psicólogo Gary Marcus, da Universidade de Nova York. Por isso, nosso cérebro foi moldado para ser rápido demais e atento a tudo o que acontece à volta. Passou milhares de anos se aprimorando para prestar atenção nos perigos das savanas, e não em um ponto estático, como esta revista. Só agora, que temos a vida fácil, em que compramos nossa comida no supermercado, é que se tornou necessário concentrar.',
  'Para nossa sorte, e ao contrário de outros animais, somos capazes de acionar nosso neocórtex - a parte mais evoluída do cérebro - para tomar decisões a longo prazo. Como a de estudar para uma prova, por exemplo. Mas, para cumpri-las, precisamos lutar contra a parte mais primitiva que carregamos - nosso cérebro reptiliano. Ele foi programado ao longo de milhares de anos para buscar recompensas imediatas. "É por isso que é tão difícil resistir àquelas batatas fritas quando você está de dieta. O prazer de comê-las é uma recompensa muito mais rápida do que os quilos a menos que você veria na balança daqui a alguns meses", diz Gary Marcus.',
  'Da mesma forma, por que ler um livro inteiro se comentar as fotos dos seus amigos no Facebook é muito mais divertido? Abrir várias abas no seu navegador e descobrir rapidamente tudo o que está acontecendo são coisas instintivamente prazerosas. Aliás, pesquisas recentes mostram que esse prazer pode ser tão viciante quanto o álcool. É que receber seus e-mails ou ver aquelas atualizações dos seus amigos libera dopamina, um importante neurotransmissor ligado ao prazer e à motivação. "Ela está por trás do nosso comportamento de busca, da vontade de procurar por algo novo. É ela que nos faz curiosos por novas ideias e informações", afirma em seu blog a psicóloga Susan Weinschenk, autora do livro Neuro Web Design: What makes them click? (Neuro Web Design: O Que Os Faz Clicar?). É isso que faz com que seja impossível ignorar a caixa de mensagens quando você sabe que tem mensagens novas: nosso cérebro as entende como uma tentação irresistível. "Com twitter e e-mail, nós agora temos uma gratificação instantânea e constante para o nosso desejo de buscar", diz. Ou seja, não é a internet que nos distrai, nós é que construímos a internet da forma que ela mais nos agrada: distraindo-nos. Por isso, ela é cheia de janelas clicáveis, abas que se abrem e avisos visuais e sonoros.',
  'Opa, mas então como é que você conseguiu se concentrar para ler esse texto até aqui? (Quer dizer, você ainda está aí, né?) É que se concentrar pode ser uma tarefa difícil por natureza, mas está longe de ser impossível. "Felizmente nosso cérebro se adapta facilmente ao que aprendemos. Por isso é possível treinar a capacidade de concentração", diz David Schlesinger, neurocientista do Hospital Albert Einstein. Ele se refere à plasticidade do cérebro, aquela capacidade dos seus neurônios de se redistribuir de acordo com a necessidade e o treino. Aliás, talvez você não saiba, mas ao ler essa revista já está treinando a concentração.',
  'Concentre-se quem puder. Assim como outros traços de personalidade, a habilidade de se concentrar varia de uma pessoa para outra. Isso acontece porque alguns têm um controle melhor sobre a parte reptiliana do cérebro. "Assim como algumas pessoas se viciam com mais facilidade em álcool do que outras, alguns cérebros são calibrados para gostar mais de se desconcentrar. Outros já têm mais facilidade de atenção", afirma Gary Marcus.',
  'Para os neurologistas, boa parte da capacidade de se concentrar vem marcada no seu DNA. O que não quer dizer que ela esteja sendo usada a pleno vapor. O neurocientista americano Michael Posner, da Universidade de Oregon, desenvolveu um modelo de 3 partes para estudar como funciona a atenção no cérebro. A primeira função é a de alerta, que nos mantêm atentos, básica para qualquer pessoa que esteja acordada. Depois, vem a função de orientação, que nos permite focar na informação que escolhemos no momento - como você agora escolheu ler esse texto. E a atenção executiva, a mais complexa de todas, é a que regula a habilidade de prestar atenção em algo que definimos a longo prazo, ignorando emoções e estímulos imediatos.',
  'Agora, Posner estuda como diferenças fisiológicas nesses circuitos podem moldar a personalidade das crianças e influenciar na capacidade de controlar emoções e pensamentos (que costumam tirar a concentração). Crianças que têm como ponto forte o sistema de orientação, por exemplo, podem virar adultos com facilidade para observar detalhes que a maioria das pessoas costuma deixar passar, como uma boa oportunidade de negócio. Já quem tem as redes executivas fortes tem facilidade para driblar distrações e se concentrar a longo prazo no que é realmente importante. É aquele cara da sua turma da escola que conseguia prestar atenção na aula mesmo com toda a gritaria e bolinhas de papel voando pelo ar. Para você, ele podia ser apenas um übernerd. Para o professor Michael Posner, ele tem uma característica que faz parte da personalidade de pessoas bem-sucedidas, aquelas que conseguem facilmente expulsar pensamentos inconvenientes e focar nos objetivos.',
  'Mas não vale culpar a natureza: distrair-se com facilidade não é uma sentença de fracasso. Boa parte dos psicólogos, por exemplo, acredita que a concentração não é inata, mas algo que pode ser ensinado ao longo da vida. "É uma característica cultural, construída com o aprendizado", diz a psicóloga Marilene Proença, professora da Universidade de São Paulo. E uma das melhores formas de se concentrar é meditando. Para Marilena, a única coisa que difere você dos monges budistas, que conseguem ficar 5 horas em posição de lótus visualizando o nada, é que eles treinaram o foco desde cedo. Ou seja, meditação - e concentração - é questão de treino.',
  'Meditar é um exercício de concentração tão bom para o seu cérebro quanto levantar pesos na academia é para seu bíceps. Um estudo da Universidade da Califórnia mostrou que a meditação intensa pode ajudar a manter e sustentar o foco até mesmo durante as tarefas mais chatas. Os pesquisadores aplicaram testes de concentração em 60 voluntários e depois os dividiram em dois grupos. O primeiro foi mandado para um retiro de 3 meses em um centro de meditação. Passavam pelo menos 5 horas por dia meditando. O segundo continuou com a rotina de sempre. Ao fim dos 3 meses, foram aplicados novos testes. Os participantes precisavam se concentrar em uma tela de computador em que apareciam linhas retas. Quando uma delas fosse levemente mais curta, deveriam clicar com o mouse. Um teste bem chato - mas aqueles participantes que passaram pela temporada de meditação se saíram muito melhor.',
  'Fazer coisas que você gosta, aliás, é a forma mais simples de se concentrar. Da mesma forma como um filme bom faz o tempo passar rápido, uma tarefa monótona pode fazer cada minuto parecer uma eternidade. Para o psicólogo Nicholas Hobbs, um dos maiores especialistas em desenvolvimento cognitivo, a melhor forma de garantir a atenção é escolher atividades desafiadoras. Se a tarefa é tão difícil que você quase não é capaz de cumpri-la, certamente vai exigir que você se concentre mais. (Mas não exagere: tarefas impossíveis também distraem.)',
  'Mas é claro que nem sempre você gosta ou é desafiado por tudo o que precisa fazer. Às vezes o trabalho é simplesmente chato, mas mesmo assim precisa ser feito. "Nesses casos, o truque é transformá-lo em um tipo de jogo, focando em uma fase de cada vez", diz a escritora americana Winifred Gallagher. Ultrapassar etapas, uma a uma, pode deixar o processo todo mais interessante. Algo parecido com as estratégias de gamification, aqueles pontos e títulos que alguns programas ou aplicativos conferem a cada tarefa cumprida (como no Farmville, por exemplo). Para encarar um dia de escrever relatórios, você pode primeiro fazer uma lista com tudo o que precisa cumprir.',
  'A cada tarefa riscada da lista, você ganha um ponto - e, se o trabalho for grande, dois pontos. Com 5 pontos, você pode se conceder algo como um chocolate ou um cafezinho. Com 10, ganha meia hora de vídeos no YouTube ou outra rede social. Parece besteira - mas realmente ajuda.',
  'Outra dica é alternar esses afazeres com outros mais relaxantes, como dar uma volta em um parque ou tomar uma água com um colega. Ou ainda com outros mais intelectualmente estimulantes para você, como aprender a tocar violão ou estudar um novo idioma. É que a nossa concentração funciona em ciclos: "De 45 minutos a uma hora é o máximo de tempo que a maioria das pessoas consegue se concentrar em um só assunto. Por isso precisamos de intervalos entre as aulas, por exemplo", afirma David Schlesinger. Um estudo recente mostra que até mesmo aqueles minutos que você gasta assistindo vídeos no Youtube ou comprando cupons de descontos podem ser bons para a sua produtividade. Pesquisadores da Universidade de Melbourne, na Austrália, analisaram a rotina de 300 trabalhadores e perceberam que aqueles que faziam breves pausas durante o dia para ler ou assistir coisas pessoais na internet tinham uma produtividade quase 10% maior.',
  'Tudo pode depender ainda do grau de exigência que você se impõe. É fato: todos temos cada vez mais informações para absorver. O que pressupõe também mais dificuldade para nos concentrar e reter cada uma delas. O psicólogo Mihály Csíkszentmihályi (ele é húngaro, daí o nome) tentou entender o fenômeno calculando a quantidade de informações que nossas redes neurais são capazes de absorver. E ele chegou a um número: apenas 110 bits por segundo. Ouvir alguém falar, por exemplo, requer o processamento de 40 bps. Ou seja: tem 70 bits sobrando aí para você usar em distrações ao redor. Por isso é possível rabiscar num papel ou pensar na conta que você tem de pagar enquanto ouve a conversa. Utilizar os 110 bps em uma atividade seria o equivalente ao que Csíkszentmihályi chama de "flow", aquele estado de concentração absoluto que faz com que você nem perceba o tempo passar. Como quando você assiste seu filme preferido, lê um livro tão bom ou conversa com alguém tão interessante que não consegue parar. Alguns especialistas acreditam que a explicação para a sua falta de concentração não é que o seu cérebro seja lento, mas, na verdade, veloz demais. "Somos mais rápidos para pensar do que para ler. Por isso temos dificuldades para focar em ler um livro, por exemplo. Nossa mente busca preencher o espaço vazio com várias informações", afirma Ivan Okamoto.',
  'Para quem quer começar a se concentrar mais, vale imitar os monges. Visualize um ponto ou imagine a chama de uma vela e tente não pensar em mais nada por alguns minutos. Toda vez que a sua mente for parar longe, traga de volta. Você vai ver que não é fácil. Outros conselhos básicos são: desligar o celular, a televisão, a internet - se precisar de um método radical, desligue o modem da tomada! - e qualquer outro aparelho que puder roubar sua atenção. Criar uma rotina, fazer listas com as prioridades do dia, aprender a se organizar e reservar horários para resolver cada coisa de uma vez também ajuda - principalmente na hora de afastar da sua cabeça aquelas preocupações com outras demandas que poderiam distrair. Afinal, uma boa forma de afastar as distrações é tirá-las da cabeça. "Você ficaria surpreso com o volume de coisas em que consegue pensar e resolver em apenas um dia", afirma David Allen, autor do livro A Arte de Fazer Acontecer.',
  'Seja qual for o método, em uma coisa todos os especialistas concordam: a concentração é uma capacidade que pode sempre ser aprimorada. Se você conseguiu se concentrar o bastante para ler essa matéria até aqui de uma vez só, provavelmente sabe disso. Se você começou, parou, voltou ou já pulou direto para esta parte, tudo bem também: nunca é tarde para retornar ao começo e tentar de novo. Da próxima vez, quem sabe, um pouco mais concentrado.s',
];

let perguntas = [
  {
    q: 1,
    p:
      'De acordo com o texto, qual a publicação relatou o comportamento de Thomas Edison?',
    a: 'A biografia de Thomas Edison.',
    b: 'O livro: Os maiores inventores de todos os tempos.',
    c: 'O jornal New York Times.',
    d: 'A revista Reader’s Digest.',
    r: '',
  },
  {
    q: 2,
    p: 'A neurociência já sabe que a concentração trata-se de qual fator?',
    a: 'De um processo de escolha do que é importante.',
    b: 'Da capacidade do cérebro selecionar os estímulos.',
    c: 'Do resultado da interação do funcionamento cerebral e do ambiente.',
    d:
      'Da produção de hormônios e neurotransmissores responsáveis pela atenção.',
    r: '',
  },
  {
    q: 3,
    p:
      'O neurologista Ivan Hideyo Okamoto afirma ser qual área do cérebro uma das principais responsáveis pelo comportamento e pela tomada de decisões?',
    a: 'O córtex pré-frontal.',
    b: 'O lobo frontal.',
    c: 'O sistema límbico.',
    d: 'O Hipocampo.',
    r: '',
  },
  {
    q: 4,
    p: 'O sistema límbico sempre vai favorecer quais elementos?',
    a: 'Os que despertam sensações intensas.',
    b: 'Aqueles que estimulam a imaginação.',
    c: 'Os que oferecem conclusões simples.',
    d: 'Aqueles que exigem raciocínio abstrato.',
    r: '',
  },
  {
    q: 5,
    p:
      'Conforme o texto, de onde vem a culpa por termos dificuldade para nos concentrarmos em conteúdos não tão fascinantes?',
    a: 'Do aumento de estímulos.',
    b: 'Dos nossos ancestrais.',
    c: 'Da velocidade da tecnologia.',
    d: 'Da deficiência na produção de neurotransmissores.',
    r: '',
  },
  {
    q: 6,
    p:
      'Para quê nosso cérebro reptiliano foi programado ao longo de milhares de anos?',
    a: 'Tomar decisões a longo prazo.',
    b: 'Avaliar informações espaciais.',
    c: 'Solucionar problemas.',
    d: 'Buscar o recompensas imediatas.',
    r: '',
  },
  {
    q: 7,
    p:
      'O comportamento de receber e-mails ou ver aquelas atualizações dos seus amigos libera qual neurotransmissor?',
    a: 'Adrenalina.',
    b: 'Dopamina.',
    c: 'Noradrenalina.',
    d: 'Serotonina.',
    r: '',
  },
  {
    q: 8,
    p:
      'Calculando a quantidade de informações que nossas redes neurais são capazes de absorver, o psicólogo Mihály Csíkszentmihályi constatou que conseguimos processar quantos bits por segundo?',
    a: '220 bps.',
    b: '180 bps.',
    c: '110 bps.',
    d: '70 bps.',
    r: '',
  },
  {
    q: 9,
    p:
      'Como se chama a capacidade dos seus neurônios de se redistribuir de acordo com a necessidade e o treino?',
    a: 'Neuromotricidade.',
    b: 'Neuroplasticidade.',
    c: 'Neurotransformação.',
    d: 'Neuroadaptabilidade.',
    r: '',
  },
  {
    q: 10,
    p:
      'Para o psicólogo Nicholas Hobbs, um dos maiores especialistas em desenvolvimento cognitivo, qual a melhor forma de garantir a atenção?',
    a: 'Praticando a meditação.',
    b: 'Eliminar elementos dispersores.',
    c: 'Estabelecer metas alcançáveis.',
    d: 'Escolher atividades desafiadoras.',
    r: '',
  },
];

export default function Teste15avaliacao() {
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

  const respCertas = ['c', 'a', 'b', 'a', 'b', 'd', 'b', 'c', 'b', 'd'];

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
      numero: 15,
      prova_id: prova,
    });

    if (response.data) {
      setTesteconcluido(true);
      history.push('/avancado/teste5/resultado');
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
        numero: 15,
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

      toast.success('Teste 15 concluído com sucesso!');
      setTimeout(() => {
        setTesteconcluido(true);
        history.push('/avancado/teste5/resultado');
      }, 3000);
    } catch (error) {
      toast.error('O Teste 15 já foi finalizado!');
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
    setTimeout(() => setPlm(1200), 132400);
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
            <small>Teste 15</small>
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
            <Titulo>TESTE 15 - AVALIAÇÃO</Titulo>
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
            <Titulo>TESTE 15 - AVALIAÇÃO</Titulo>
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
