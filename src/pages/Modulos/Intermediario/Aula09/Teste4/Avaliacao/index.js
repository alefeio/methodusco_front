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

const aula = 9;

const hrInicio = Date.now();

const titulo = 'Construção da Memória';

const cred1 = 'Por Carla Gullo';

const cred2 = 'Revista Isto É';

const textos = [
  'Pesquisas revelam como se formam as recordações e que é preciso exercitar o cérebro para mantê-lo afiado.',
  'Você se lembra da última reportagem que leu, antes de virar a página e chegar a esta? E do cardápio do café da manhã de hoje? Sabe também nomear os personagens de um livro que leu há algum tempo?',
  'Se respondeu afirmativamente a estas questões, parabéns. Sua memória está afiada. Ou melhor, não ela, mas o complexo sistema cerebral que a constitui. É que as lembranças não se processam de uma maneira unitária, isolada.',
  'Para se ter uma ideia, só para responder às perguntas acima, você ativou dois tipos de memória: de curta duração e de longa duração. Complicado? Nem tanto. Atualmente, a teoria das "várias memórias" é a mais aceita para se explicar um campo até há pouco totalmente ignorado. Só agora, no final da chamada década do cérebro, os cientistas começam a desvendar esse misterioso circuito da mente.',
  'As pesquisas, cada vez mais sofisticadas, está revelando facetas integrantes que prometem dar respostas sobre o funcionamento da memória. Um exemplo dessas novas descobertas pode ser constatado num artigo na revista Science, que poderá revolucionar ainda mais as que se sabe sobre as recordações e o cérebro.',
  'Biólogos da Universidade de Princeton, nos Estados Unidos, mostraram em macacos que os neurônios ou células cerebrais são capazes de se multiplicar. É uma informação preciosa. Até há pouco tempo, acreditava-se que os neurônios não tinham essa capacidade. Ou seja, uma vez danificados, eles não voltariam a cumprir suas importantes funções dentro do cérebro. Saber que eles podem se recuperar abre uma frente otimista no tratamento de doenças degenerativas como o mal de Alzheimer, já que poderá haver a possibilidade de substituir células danificadas por novas.',
  'Na memória, essa constatação é importante porque apresenta a possibilidade de se ter estoques de novas células capazes de reter mais informações. A experiência, no entanto, ainda não foi realizada em humanos.',
  'De qualquer maneira, é mais uma peça no quebra-cabeça da memória, que aos poucos está sendo completado. Já se sabe que existem pelo menos três tipos de memória: a de curtíssima duração, que leva apenas alguns segundos para fixar informações (você acessa para guardar um número de telefone somente enquanto está discando, por exemplo), a de curta duração, que armazena informações por período limitado.',
  'Por exemplo: você lê e guarda um dado que será preciso para a realização de um trabalho. Assim que finaliza a tarefa, logo a esquece, e não transfere a informação para a memória de longa duração. Este último tipo pode durar a vida inteira e se subdivide em duas categorias: a explícita (que inclui as memórias episódica e semântica) e a implícita.',
  'Na primeira registram-se os acontecimentos do dia-a-dia (memória episódica), como lembrar que tomou café da manhã, e também o conhecimento geral dos fatos e objetos (memória semântica). Já a memória implícita é aquela que não se explica conscientemente. É o nosso "automático", acessado quando temos de amarar um sapato ou dirigir, por exemplo.',
  'Essas subdivisões começaram a ser classificadas a partir da década de 50, com o célebre caso do paciente HM. Ele tinha epilepsia e teve o hipocampo (estrutura cerebral fundamental para o processamento da memória de longa e curta duração) retirado. Em minutos, uma informação era esquecida. No entanto, de alguma maneira a memória continuava funcionando. "Ele fazia um quebra-cabeça. Em seguida, esquecia que havia feito, mas, a cada nova tentativa, fazia melhor", conta o neurologista Paulo Caramelli, do Hospital das Clínicas de São Paulo.',
  'Isso mostrou que mesmo com uma estrutura lesionada, ele mantinha a memória implícita. Pesquisas realizadas pelo neurologista Iván Izquierdo, da Universidade Federal do Rio Grande do Sul, confirmam a existência de uma rede no cérebro responsável pelo processamento das recordações. Os estudos indicam que as memórias de curta e de longa duração, por exemplo, usam as mesmas células, mas enzimas diferentes. Por isso são independentes. "Um fato pode ser lembrado anos depois mesmo sem ter sido registrado pela memória de curta duração", aponta.',
  'Informação - Argentino naturalizado brasileiro, Izquierdo é nosso pesquisador mais respeitado no Exterior. Ele se dedica a desvendar os mecanismos da memória e é um dos principais estudiosos do tema no mundo. Segundo ele, ainda não se sabe ao certo o que define se a informação será preservada ou esquecida.',
  'Provavelmente, o destino da lembrança está associado a fatores com o interesse individual, a emoção do momento, a necessidade de determinada informação e a quantidade de vezes em que se foi exposto a ela.',
  'Agora, o maior desafio para os pesquisadores e descobrir de que forma as recordações, depois de selecionadas, ficam armazenadas no cérebro. Acredita-se que elas não ocupem espaço físico ou então tomem uma área muito pequena, pois o acúmulo de informação não provoca o crescimento cerebral.',
  'Sabe-se que a informação é armazenada em áreas do cérebro correspondentes a seu tipo de função. Ou seja, uma imagem ficaria na área visual, um som na auditiva. E existe um sistema centralizado responsável pelas conexões. "Na hora de buscar uma informação, as características de um determinado objeto, por exemplo, vê das diferentes áreas cerebrais e se sintetizam no córtex frontal", explica o neuropsiquiatra Cláudio Guimarães, pesquisador da Universidade de São Paulo. Ou seja, ao lembrar do café da manhã, resgatam-se concomitantemente o cheiro do café, o formato da xícara, o gosto do pão com manteiga, formando uma imagem única.',
  'Desafio - Iván Izquierdo busca agora descobrir os passos bioquímicos da evocação da memória. Como explicar que um simples cheiro remete diretamente para a infância ou a um acontecimento marcante? O neurologista Paulo Bertolucci, da Universidade Federal de São Paulo, diz que quando há uma carga emocional em determinada lembrança, ela se fixa mais na memória. A psicóloga Denise Ramos, da PUC de São Paulo, afirma ainda que as boas e más lembranças ficam guardadas numa memória inconsciente. "Passamos a vida buscando em outras pessoas o cheiro do pai e da mãe. E, muitas vezes, não vamos com a cara de uma pessoa porque, inconscientemente, ela nos lembra alguém que nos fez mal", afirma.',
  'As descobertas conquistadas  até agora ajudam a explicar e mesmo a tratar problemas relacionados à memória. Acredita-se que ela seja limitada e regulada também por emoções como o medo, a ansiedade e alegria. Stress, falta de sono, ansiedade em excesso, álcool e drogas podem provocar lapso de memória porque desequilibram as substâncias químicas que regulam as células nervosas.',
  'Por isso, os famosos "brancos" são tão comuns em executivos estressados e em vestibulandos. É o caso da estudante Ana Calixto, 17 anos. Neste ano ela vai prestar vestibular par Medicina e estuda 14 horas por dia. Nos simulados, seu desempenho é bom (costuma fazer 65 de 80 testes). Mas quando está triste ou muito ansiosa tende a ir pior. "Uma vez estava com problemas pessoais e só consegui fazer 42 testes", confessa.',
  'Um outro problema que causa falhas de memória é a depressão. Isso porque, além de os processos bioquímicos do cérebro estarem alterados, o paciente perde a capacidade de concentração - item fundamental para que a memória seja ativada. A professora gaúcha Tânia Cunha, 48 anos, sabe bem o que é isso. Ela ensina História há 21 anos e sempre teve facilidade para guardar datas, nomes e acontecimentos. Mas por sofrer de uma depressão desde julho, no mês passado foi surpreendida por uma amnésia no minuto em que estrava na sala de aula. "Fui embora porque não lembrava o conteúdo da aula", conta. Atualmente Tânia está em licença médica e se submete a um  tratamento para combater a depressão. "Aos poucos, os fatos e as datas estão voltando, mas ainda não estou preparada para enfrentar a sala de aula", lamenta.',
  'Amnésias causadas por stress ou depressão são mais fáceis de ser tratadas do que aquelas provocadas por problemas mais graves, como mal de Alzheimer, doença que em geral atinge pessoas com mais de 50 anos e que ataca cerca de 500 mil brasileiros. Ela se caracteriza pela perda gradativa de memória até chegar à demência. O mal é provocado pelo acúmulo de duas substâncias no cérebro, a meta-amiloide e a tau, que levam a uma degeneração cerebral. "Até agora não existe nenhum medicamento que combata totalmente a doença, mas as pesquisas avançam e em alguns anos deve haver uma droga mais eficiente", afirma Paulo Caramelli.',
  'Esse é um dos objetivos da pesquisa coordenada pelo psiquiatra Wagner Gattaz, do Laboratório de Investigações Médicas em Neurociência, recém-inaugurado no Departamento de Psiquiatria da Universidade de São Paulo. Ao investigar causas da degeneração cerebral, Gattaz descobriu que uma enzima chamada fosfolipase A2 e a principal responsável pelo acúmulo de beta-amiloides no cérebro. "Com essa descoberta esperamos não apenas desenvolver novas formas de diagnosticar o Alzheimer mas também possíveis remédios para tratá-lo", explica o neurologista. É nisso também que a descoberta dos biólogos de Princeton podem ajudar, já que as células doentes poderão ser repostas.',
  'Atenção - enquanto isso não acontece, uma maneira de amenizar os males provocados pelo mal de Alzheimer é tentar diagnosticá-lo logo no início. Aquela antiga ideias de que o velho só se lembra de fatos remotos e se esquece dos acontecimentos recentes pode ser sinal de que algo não vai bem. "Se isso ocorrer, é importante procurar um profissional", afirma o neurologista Ricardo Nitrini, do Hospital das Clínicas de São Paulo.',
  'Mas, mesmo que não se esteja sofrendo de nenhuma doença, muitos especialistas afirmam que, com a idade, a memória tende a sofrer um decréscimo. Até porque os idosos em geral não costumam estar atentos a fatos do dia-a-dia. E a atenção é um item importante para a fixação de novas informações. "A falta de memória nos idosos esconde problemas como desmotivação e perda de autoconfiança. Eles só têm expectativas pessimistas e não gravam novos acontecimentos", aponta a geriatra carioca Tânia Guerreiro, da Oficina da Memória do Rio de Janeiro. Há oito anos ela criou essa oficina, onde desenvolve um trabalho com idosos para estimular a capacidade de memorização e concentração.',
  'Mas, como a memória é limitada, o melhor a fazer, portanto, é não "gastá-la", armazenando fatos irrelevantes. "Não é saudável saber tudo de cor, ensina a neurologista Márcia Chaves, da Faculdade de Medicina da Universidade do Rio Grande do Sul. "Organizar uma agenda, escrever  uma lista do supermercado e selecionar o que realmente precisa ser lembrado são uma boa maneira de poupar a memória", afirma.',
  'Estímulos - se informações inúteis sobrecarregam a memória, o mesmo não se pode dizer sobre atividades que são verdadeiros estímulos para o cérebro. "Ler, conversar, exercitar e estimular a criatividade são fundamentais", ensina o psiquiatra gaúcho Marcelo Leite.',
  'Pode parecer simples, mas essas atividades aumentam o número de conexões entre os neurônios (sinapses). "Quanto maior o número de sinapses, melhor a memória e a capacidade intelectual", afirma o neurofisiologista Avelino da Silva, da Universidade Estadual Paulista (Unesp). Para provar que os estímulos são fundamentais para a memória, Silva coordenou uma pesquisa em que foram analisados jovens entre 12 e 18 anos que cursavam respectivamente a sexta série ginasial e a terceira série colegial. Analisou também dois grupos de idosos. O primeiro tinha no máximo até a quarta série do ensino fundamental e o segundo possuía curso superior. O resultado mostrou que o idoso com curso superior tinha a mesma capacidade de memorização do que um jovem que cursava o colegial. Em outras palavras, para manter a memória viva o melhor a fazer é usá-la. E bem.',
  'É o que acontece com a estudante Ida Ferraz Costa, 53 anos. Após 32 anos sem pisar numa sala de aula, Ida entrou na faculdade de Direito apenas com leitura de jornais, livros e revistas. "Eu sempre li muito e mantive a mente ativa", conta ela. "Além disso, no meu tempo de colégio não existia esse negócio de teste. As provas eram dissertativas e tínhamos de fazer redações sobre vários temas. Tudo isso ficou armazenado em minha mente", completa. Para ela, uma das melhores coisas que fez na vida foi voltar a estudar depois dos 40 anos. "Não sou nenhum prodígio. Memória é treino", ensina.',
  'A atriz Nicete Bruno, 65 anos, concorda com Ida. A seu ver, o segredo para fixar informações é estar sempre se exercitando. E, para decorar os textos - sempre um grande desafio para os atores -, Nicete tem um truque: "Faço amarrações. Fixo sempre a última frase ou palavra que antecede a minha entrada. Quando o outro ator falar amanhã à noite, por exemplo, eu engato no meu texto. Sai automaticamente", conta a atriz.',
  'Além de exercícios, o interesse e a paixão por aquilo que se faz são condições sine qua non para se fixar novas informações. "Sem isso não há atenção. E sem atenção praticamente não existe memória", diz o neuropsiquiatra Cláudio Guimarães. É justamente por ser apaixonado pelo que faz que o professor de Literatura Pedro Bilatto, 45 anos, tem boa memória para ensinar a seus alunos longos trechos de livros e poemas. "Sempre fui apaixonado por literatura. Herdei da minha avó, que lia muito. A memória é proustiana. Ela é um misto de gosto, cores e sensações que não são plenamente racionais".',
];

let perguntas = [
  {
    q: 1,
    p:
      'Biólogos da Universidade de Princeton nos EUA, constataram que os neurônios possuem qual capacidade?',
    a: 'de interagir com várias células cerebrais.',
    b: 'de se multiplicar.',
    c: 'de se conectar com o hemisfério direito e o esquerdo.',
    d: 'de desempenhar funções multitarefas.',
    r: '',
  },
  {
    q: 2,
    p: 'Existem três "tipos" de memória, quais são?',
    a: 'de curtíssima duração, curta duração e longa duração.',
    b: 'de curta, média e longa duração.',
    c: 'explícita, mista e implícita.',
    d: 'implícita, intermediária e explícita.',
    r: '',
  },
  {
    q: 3,
    p: 'As memórias de curta e longa duração se utilizam de:',
    a: 'células diferentes.',
    b: 'códigos diferentes.',
    c: 'enzimas diferentes.',
    d: 'neurotransmissores iguais.',
    r: '',
  },
  {
    q: 4,
    p: 'Segundo o texto a lembrança de fatos está ligada a que fatores?',
    a: 'interesse, emoção, necessidade e repetição da informação.',
    b: 'hereditariedade, interesse, codificação, concentração.',
    c: 'associações, emoção, aprendizagem contínua, interesse.',
    d: 'capacidade mental, interesse, concentração, hereditariedade.',
    r: '',
  },
  {
    q: 5,
    p:
      'O estresse, a falta de sono, a ansiedade em excesso, álcool e drogas podem provocar lapsos de memória por que:',
    a: 'induzem ao cérebro uma dinâmica diferente.',
    b: 'desenvolvem distúrbios psicóticos.',
    c: 'causam a curto prazo danos irreversíveis à mente.',
    d: 'desiquilibram substâncias químicas que regulam os neurônios.',
    r: '',
  },
  {
    q: 6,
    p: 'A memória nos idosos esconde problemas, tais como:',
    a: 'desmotivação e perda de autoconfiança.',
    b: 'desiquilíbrio mental.',
    c: 'instabilidade emocional.',
    d: 'depressão, insatisfação.',
    r: '',
  },
  {
    q: 7,
    p:
      '"Quanto maior o número de sinapses, melhor a memória e a capacidade intelectual". Quem fez esta afirmação foi:',
    a: 'Dr Iván Izquierdo.',
    b: 'Dr. Avelino da Silva.',
    c: 'Dr. Marcelo Leite.',
    d: 'Dr. Claúdio Guimarães.',
    r: '',
  },
  {
    q: 8,
    p: 'Quais as atividades que aumentam as conexões cerebrais?',
    a: 'não sobrecarregar a memória, esportes, motivação.',
    b: 'perseverança, dieta, resolução de problemas.',
    c: 'ler, conversar, exercitar e estimular a criatividade.',
    d: 'ritmo de trabalho intenso, atividades lúdicas, meditação.',
    r: '',
  },
  {
    q: 9,
    p: 'Qual o título deste texto?',
    a: 'A construção da memória.',
    b: 'As funções da memória.',
    c: 'Desvendando a memória',
    d: 'A memória em evolução',
    r: '',
  },
  {
    q: 10,
    p: 'A memória de longa duração se divide em:',
    a: 'explícita e implícita.',
    b: 'memória episódica e semântica.',
    c: 'concreta e abstrata.',
    d: 'simultânea e sequencial',
    r: '',
  },
];

export default function Teste4avaliacao() {
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

  const respCertas = ['b', 'a', 'c', 'a', 'd', 'a', 'b', 'c', 'a', 'b'];

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
      numero: 4,
      prova_id: prova,
    });

    if (response.data) {
      setTesteconcluido(true);
      history.push('/intermediario/teste4/resultado');
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
        numero: 4,
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

      toast.success('Teste 4 concluído com sucesso!');
      setTimeout(() => {
        setTesteconcluido(true);
        history.push('/intermediario/teste4/resultado');
      }, 3000);
    } catch (error) {
      toast.error('O Teste 4 já foi finalizado!');
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
    setTimeout(() => setPlm(650), 202300);
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
            <small>Teste 4</small>
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
            <Titulo>TESTE 4 - AVALIAÇÃO</Titulo>
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
            <Titulo>TESTE 4 - AVALIAÇÃO</Titulo>
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
