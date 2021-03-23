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

const titulo = 'Quebre as Regras!';

const cred1 = 'Laura Somoggi';

const cred2 = 'Você S.A.';

const textos = [
  'As empresas valorizam cada vez mais os funcionários empreendedores - aqueles que fogem dos padrões, criam, inovam. Você pode se tornar um deles. Veja como.',
  'Até cerca de dois anos atrás, os clientes da Carlson Wagonlit Travel, uma das principais agências de viagens de negócios do mundo, eram atendidos por telefone. Todas as transações entre a empresa e sua clientela eram feitas assim, sem problema algum para nenhum dos lados. Mas eis que um jovem analista de marketing da filial da empresa em São Paulo, Augusto Teruo Mori, hoje com 23 anos, teve a ideia de fazer as coisas de forma diferente: por que não substituir o telefone pela Internet?',
  'Ele lutou, convenceu todo mundo a aceitar a mudança e conseguiu implantar sua ideia na Carlson Wagonlit brasileira. Foi fácil? Claro que não. Qual foi o resultado? Mais facilidade para os clientes e maior produtividade para a agência. O que Mori ganhou com isso? Prestígio e promoção - virou gerente de marketing.',
  'No início ninguém acreditava que poderia dar certo. Os clientes estavam acostumados a ser atendidos por telefone - e substitui-lo pela Internet exigiria uma grande mudança na cultura da empresa e na forma de trabalhar do pessoal. Mas Mori acreditava que tanto a agência quanto os clientes ganhariam muito com a criação de um sistema de atendimento pela Internet.',
  'Então, apesar de todas as resistências, foi em frente. Quando ouviu do diretor da empresa que ele só compraria a ideia se Mori conseguisse provar o que estava dizendo, pôs mãos à obra. Conseguiu o apoio do pessoal técnico e de um gerente de contas para fazer um protótipo do sistema. Passou três meses trabalhando nele e fazendo simulações - isso tudo fora do seu horário normal de trabalho. Quando achou que estava pronto, procurou novamente o diretor e expôs um plano de negócios que provava a sua viabilidade. Obteve, assim, o o.k. para implantá-lo.',
  'Em seu projeto, Mori criou soluções de atendimento para as Intranets das companhias que eram clientes da Carlson Wagonlit. Cada uma delas tinha em sua rede interna uma forma de contato com a agência para agilizar as compras de passagens, reservas de hotéis, aluguel de carros e por aí afora. Os clientes ganharam, a partir do novo sistema, a possibilidade de acessar a Wagonlit diretamente de seus computadores, ficando a sua disposição todos os serviços necessários para quando saíssem em viagem de negócios.',
  'Isso tudo passou a significar um claro diferencial competitivo em relação à concorrência. "Hoje parece que era uma mudança simples de ser feita, mesmo porque já existem no mercado diversas agências de viagens virtuais", diz Mori. "Mas há quase dois anos foi difícil convencer as pessoas de que aquela era a melhor solução".',
  'Segundo ele, o ganho de produtividade com o novo sistema chegou a 20%, porque os funcionários não passam mais horas pendurados no telefone. Hoje Mori gasta 60% de seu tempo cuidando da expansão do projeto - com o objetivo, no fim da linha, de gerar mais vendas para a agência.',
  'Funcionários com o estilo de Mori costuma causar um certo incômodo nas empresas, principalmente quando têm pouco mais de 20 anos, como é seu caso. Gostam de inovar, quebrar regras, investigar novos caminhos. Indagam por que isto ou aquilo não poderia ser feito de outra forma. Pensam, planejam e sugerem negócios diferentes ou fontes de receitas alternativas.',
  'Em geral, resistem a pressões e insistem em suas ideias. Tudo isso, naturalmente, encontra resistência da parte de quem prefere fazer hoje o que vem dando certo até agora. Mas é gente assim que ajuda um negócio a inovar. É gente assim que permite a uma empresa desenvolver novos produtos, multiplicar seus canais de venda, criar receitas novas. Lucrar, melhorar sua produtividade, atrair e reter clientes - todo um conjunto de coisas que, no fim, vai se traduzir em mais lucros. Eles são, numa palavra, verdadeiros empreendedores dentro das empresas onde trabalham.',
  'Estamos falando, aqui, de um conceito diferente daquele que se aplica aos empreendedores no sentido comum pessoas que abrem negócios próprios e não fazem parte do mundo corporativo.(Nestas páginas, quando usarmos a palavra "empreendedor", estaremos nos referindo somente àqueles que recebem salário no final do mês).',
  'Apesar de subverter as regras - e também por isso -, eles são cada vez mais valorizados profissionalmente dentro das empresas. "Estamos vivendo um momento em que as organizações estão preocupadas com novos negócios, novos produtos", diz o consultor americano Gifford Pinchot, um dos primeiros estudiosos e autores a falar em empreendedorismo dentro das empresas. "Hoje está ficando claro que só as empresas inovadoras vão sobreviver neste período de rápida globalização".',
  'O assunto empreendedorismo não é novo. Pinchot, por exemplo, lançou um best-seller sobre o assunto já em 1985: Intrapreneuring - Por que Você não Precisa Deixar a Empresa para Tonar-se um empreendedor. Mas desde então passaram-se anos e pouco foi feito de verdade, no mundo corporativo, no sentido de dar espaço para os empreendedores inovarem. A explicação: nos anos 80 e 90 as empresas estavam mais preocupadas em cortar custos por meio de restauração de processos e diminuição de pessoal. Os downsizings e reengenharias estavam em alta.',
  'Depois de feitos os cortes e com um mundo cada vez mais competitivo, elas perceberam que, para aumentar suas receitas, conquistar clientes e posição no mercado, precisam de novidade o tempo todo.',
  'Segundo uma pesquisa anual realizada pela empresa americana Industrial Research Institute, publicada recentemente pela revista inglesa The Economist, a necessidade de inovar foi considera o maior problema da indústria tecnológica nos Estados Unidos em 1998. Alguns anos antes, esse era considerado o quinto maior problema. E quem e que pode resolver isso? "As pessoas", diz o headhunter Simon Franco, presidente da Simon Franco Recursos Humanos, de São Paulo. "Elas é que são responsáveis pelos diferenciais. Não são as máquinas nem o capital".',
  'A maior parte das empresas gosta de funcionários empreendedores só que, infelizmente, mais no discurso do que na prática. Ou, colocando as coisas de outra forma: gostam de profissionais que empreendam, mas não gostam das tensões, conflitos e instabilidades que sua ação acaba causando no dia-a-dia.',
  'São raros os casos como o da 3M, que permite que seus funcionários usem 15% de seu tempo apenas para ter ideias. Aos poucos, entretanto, parece que o cenário está mudando. As empresas do grupo Inepar, de Curitiba, por exemplo, começaram a avaliar o perfil empreendedor dos candidatos antes de contratá-los. "Precisamos de gente que arrisca, que não tem medo de errar", diz Renato Requião, responsável pela área de recursos humanos do grupo. Mas, afinal, qual é o perfil desse profissional? O que fazer para se tornar um deles?',
  '1 . São ousados, gostam de quebrar regras e de correr riscos. Mas também são moderados - nunca põem tudo a perder.',
  'Eles podem até ser chamados de subversivos. Se acreditam na ideia, fazem o que for necessário para colocá-la em prática. Nem que para isso tenham que trabalhar na surdina por um tempo até seu projeto virar realidade. Vladimir Ranevsky, que hoje é presidente da gráfica Donnelley Cochrane, é um bom exemplo desse perfil. Em 1994, ele era diretor de uma divisão da Clariant (empresa que surgiu da fusão das indústrias químicas Hoechst e Sandoz).',
  'Sua área tinha alguns fornecedores, mas Ranevsky acreditava que era mais vantajoso fazer uma aliança estratégica com um único fabricante - o que não faria parte da política da empresa. Ele faz todas as negociações e só depois comunicou a seus superiores. "Fiz porque sabia que era o melhor negócio para a empresa", diz ele. "Se eu pedisse permissão, correria dois riscos: o de ter que esperar muito tempo pela decisão ou de simplesmente ouvir um não". Ranevsky seguiu um dos mandamentos dos empreendedores, o que diz que é melhor pedir perdão do que permissão. Sua iniciativa, segundo afirma, gerou uma economia de 4% na divisão, o que era muito na época.',
  '2 . Não têm medo de errar e planejam formas de ultrapassar os possíveis obstáculos.',
  'Os empreendedores procuram enxergar o lado positivo das adversidades. "Esses profissionais têm um perfil progressista, otimista", diz Pedro Mandelli, sócio-diretor da Mandelli  Consultores Associados, de São Paulo.',
  'Augusto César Tosin, gerente industrial da Lucent Inepar Sistemas de Energia, é um ótimo exemplo disso. Quando era gerente de produção da Inepar Eletro Eletrônica, sugeriu que alguns funcionários da linha de montagem de relógios medidores de energia trabalhassem em casa. Uns moravam longe, outros trabalhavam sem nenhum entusiasmo, as mulheres faltavam muito; enfim, era preciso fazer alguma coisa. Tosin acreditava que em casa as pessoas ficariam mais motivadas e produziriam mais. Mas, para que isso se tornasse realidade, ele naturalmente enfrentou uma série de problemas.',
  'O mais imediato foi a resistência dentro da empresa. "Tinha gente que falava que as peças viriam com arroz ou maionese", diz Tosin.  "Outros diziam que haveria roubos ou ainda que teríamos problemas trabalhistas". Além das pressões contrárias, Tosin precisou resolver problemas práticos para que sua ideia desse certo.',
  'Muita gente teve que mudar de casa para ter espaço para trabalhar. Tosin foi fiador de sete funcionários, providenciou alvará da prefeitura e até ajudou a fazer a mudança. "Se você deixar de fazer algo porque há a possiblidade de dar errado, você nunca faz nada". O lado bom da história|: antes dessa medida, 100 funcionários montavam 1 milhão de relógios medidores de consumo de energia por ano. Com a ideia de Tosin, metade dos funcionários passou a produzir 1,5 milhão de peças. Eles começaram a receber de acordo com o volume produzido, e muitos funcionários treinavam familiares para ajudá-los.',
  '3 . São autoconfiantes e transmitem credibilidade.',
  'Eles acreditam muito em suas ideias e sabem que são capazes de colocá-la em prática. Senão, como ter coragem para quebrar os padrões?',
  '4 . São muito persistentes.',
  'Os empreendedores não desistem facilmente, sempre procuram encontrar uma forma de continuar apesar das eventuais dificuldades. A história de Pedro Diniz, diretor de operações da Teletec, mostra bem o que isso significa. Em 1992, quando era gerente de controladoria do Grupo Ticket, propôs a seu chefe que fosse criado um sistema e informações gerenciais. O sistema reuniria todos os bancos de dados da empresa e forneceria subsídios para análises administrativas e tomadas de decisão. A ideia foi vetada na hora. Segundo Diniz, seu chefe usava muitas das informações como instrumento de poder e não queria vê-las democraticamente distribuídas pela empresa. Pior: pediu a demissão de Diniz.',
  'Ele decidiu, então, dar sua última cartada. Expôs sua ideia ao diretor executivo, que permitiu que ficasse por mais seis meses desenvolvendo se projeto. Só que trabalhando sozinho. Diniz afirma ter lido mais de 500 livros nos três primeiros meses - ele domina a técnica de leitura dinâmica - e visitado diversas empresas que usavam o sistema.',
  'Fez um plano de negócios e mostrou ao diretor. Deu certo. Recebeu 25.000 dólares e permissão para montar uma equipe. Mas só três meses depois, quando o projeto começou a dar resultados, é que conseguiu reverter sua situação de demissionário: foi promovido a gerente administrativo e vendas. Ao final de três anos, Diniz e sua equipe haviam criado um sistema que, se fosse encomendado a uma empresa especializada, custaria cerca de 500.000 reais. Mais: o sistema foi transferido para filiais da empresa em outros países.',
  '5 . Inspiram os outros, criam uma rede de colaboradores.',
  'Os profissionais empreendedores mostram aos outros que todos podem ganhar com sua ideia. Foi isso que fez Cynthia Black, governanta do Hotel Rio Palace, da rede Sofitel, no Rio de Janeiro. Ser governanta de um grande hotel significa gerenciar dezenas de pessoas responsáveis pela limpeza, manutenção e bom atendimento dos hóspedes.',
  'Quando Cynthia era assistente da gerência, cobriu férias da governanta na época. Durante 20 dias, sem que ninguém tivesse pedido, observou tudo o que poderia ser mudado para melhorar a vida dos funcionários e aumentar a produtividade do hotel.',
  'Algum tempo depois, foi chamada para assumir o cargo. Ouviu os funcionários para saber o que eles faziam, em vez de apenas impor procedimentos. "Eu venci todo tipo de resistência mostrando às pessoas o que elas faziam de bom e no que elas poderiam melhorar", diz Cynthia. "Sem melindrar, sem derrubar a autoestima delas". Resultados: a produtividade aumentou muito; o índice e faltas caiu e 30% para 3%; os custos da lavandeira do hotel diminuíram 11,5% e os gasto com material de limpeza caíram 18%. "As pessoas passaram a se comprometer com os resultados das empresas".',
  '6 . Têm iniciativa, não esperam ninguém mandar para fazer algo.',
  'É a atitude oposta daqueles que têm a chamada "síndrome do empregado". "Eles não seguem apenas o que é estabelecido ou não resolvem só os problemas identificados", diz Fernando Dolabela, professor de empreendedorismo da Universidade',
  'Federal de Minas Gerais. "Elas sabem que o mais importante é o que não existe". As empresas não contam só com a área de pesquisa e desenvolvimento para criar novos produtos. "Nós queremos "micro-empreendedores" em todos os departamentos e níveis da organização", afirma Luiz Edmundo Rosa, diretor corporativo de recursos humanos do grupo Accor.',
  '7 . Eles não se sentem dentro de uma empresa ou de uma area específica - eles se sentem dentro do mercado.',
  'Só essa percepção explica a habilidade que os empreendedores têm de enxergar oportunidades de negócio. Explica também a preocupação com os resultados da empresa como se ela fosse deles.',
  '8 . Adoram o que fazem.',
  'Os empreendedores se realizam durante o trabalho - e por causa dele. Nisso, eles também são o oposto dos que têm a "síndrome do empregado" - que só se realizam depois das 6 da tarde. " Eles são movidos por uma visão", diz Pinchot. "Isso não quer dizer que não querem ganhar dinheiro. Mas o que conta mais é fazer algo que os entusiasme".',
  '9 . São intuitivos e analíticos.',
  'Sabem ser puramente racionais em alguns momentos, mas têm capacidade de usar a intuição sempre que necessário.',
  '10 . Sabem vender sua ideia a um "padrinho".',
  'Para que o sonho vire realidade, tudo o que foi descrito aqui é importante. Mas, se ninguém na empresa acreditar na ideia do empreendedor, dificilmente ele conseguirá colocá-la em prática. É preciso encontrar um "padrinho", como os americanos costumam dizer. Alguém dos escalões superiores que possa ajudar e até proteger a pessoa, se necessário.',
  'Fazer um plano de negócios é a forma mais eficiente de conseguir apoio. E não se deve esquecer que o melhor a pedir primeiro são conselhos e apoio. Só depois o dinheiro.',
];

let perguntas = [
  {
    q: 1,
    p: 'Em geral, funcionários inovadores possuem duas características:',
    a: 'intransigentes e confiantes.',
    b: 'resistem às pressões e insistem em suas ideias.',
    c: 'desconsideram o trabalho dos colegas e são autosuficientes.',
    d: 'são viciados em trabalho e preferem trabalhar sozinhos.',
    r: '',
  },
  {
    q: 2,
    p: 'Qual o título do best-seller do consultor americano Gifford Penchot?',
    a: 'Torne-se um empreendedor.',
    b: 'Como tornar-se um empreendedor.',
    c: 'O empreendedor no mercado globalizado.',
    d:
      'Por que você não precisa deixar a empresa para tornar-se um empreendedor.',
    r: '',
  },
  {
    q: 3,
    p:
      'Nas décadas de 80 e 90 as empresas estavam voltadas para quais processos?',
    a: 'inovação de produtos e avaliação de desempenho.',
    b: 'treinamento e ISO 9000.',
    c: 'downsizings e reengenharia.',
    d: 'qualidade total e liderança.',
    r: '',
  },
  {
    q: 4,
    p: 'As empresas, normalmente gostam de profissionais que:',
    a:
      'empreendam, mas não gostam das tensões das ações que por consequência causam.',
    b: 'arriscam, no entanto não querem assumir eventuais prejuízos.',
    c: 'realizam negociações e assumem os erros.',
    d: 'lideram equipe de trabalho, mas que não sejam subversivos.',
    r: '',
  },
  {
    q: 5,
    p:
      'O que explica a habilidade que os empreendedores têm de enxergar oportunidades de negócios?',
    a: 'visão estratégica e networking.',
    b:
      'eles se sentem dentro do mercado e não apenas de uma empresa ou área específica.',
    c: 'poder de persuasão e inteligência interpessoal.',
    d: 'capacidade de comunicação e liderança.',
    r: '',
  },
  {
    q: 6,
    p:
      'Os empreendedores, além de ganhar dinheiro, consideram que o que conta é realizar algo que os:',
    a: 'desafie.',
    b: 'entusiasme.',
    c: 'incentive.',
    d: 'reconheça publicamente.',
    r: '',
  },
  {
    q: 7,
    p:
      'Para um sonho se transformar em realidade os americanos consideram que além de saber vender a ideia o empreendedor precisa de:',
    a: 'um "padrinho".',
    b: 'alavancar o potencial interior.',
    c: 'realizar muitas tarefas paralelas dentro da empresa.',
    d: 'determinar metas específicas.',
    r: '',
  },
  {
    q: 8,
    p:
      'Segundo uma pesquisa realizada pela empresa Research Institute qual foi o maior problema da indústria tecnológica nos Estados Unidos em 1998?',
    a: 'necessidade de inovar.',
    b: 'necessidade de formar líderes.',
    c: 'selecionar funcionários para a área gerencial.',
    d: 'selecionar funcionários para a área operacional.',
    r: '',
  },
  {
    q: 9,
    p: 'O autor(a) desta matéria é:',
    a: 'Cynthia Black.',
    b: 'Laura Somoggi.',
    c: 'Augusto Mori.',
    d: 'Pedro Mandelli.',
    r: '',
  },
  {
    q: 10,
    p: 'Qual o título do texto?',
    a: 'As regras existem para que?.',
    b: 'Questione as regras!.',
    c: 'Ultrapasse as regras!.',
    d: 'Quebre as regras!.',
    r: '',
  },
];

export default function Teste17avaliacao() {
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

  const respCertas = ['b', 'd', 'c', 'a', 'b', 'b', 'a', 'a', 'b', 'd'];

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
      numero: 17,
      prova_id: prova,
    });

    if (response.data) {
      setTesteconcluido(true);
      history.push('/avancado/teste7/resultado');
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
        numero: 17,
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

      toast.success('Teste 17 concluído com sucesso!');
      setTimeout(() => {
        setTesteconcluido(true);
        history.push('/avancado/teste7/resultado');
      }, 3000);
    } catch (error) {
      toast.error('O Teste 17 já foi finalizado!');
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
    setTimeout(() => setPlm(1300), 111400);
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
            <small>Teste 17</small>
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
            <Titulo>TESTE 17 - AVALIAÇÃO</Titulo>
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
            <Titulo>TESTE 17 - AVALIAÇÃO</Titulo>
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
