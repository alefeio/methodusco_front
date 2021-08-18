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

const titulo = 'Tire seu Diploma em Liderança';

const cred1 = 'Robert J. Thomas';

const cred2 = 'Revista Exame';

const textos = [
  'Ser líder não é uma herança genética nem determinação do destino. Aprenda os 5 componentes que aumentam o seu poder de influência.',
  'Tente imaginar-se lendo o seguinte anúncio de emprego no Wall Street Journal: "Procura-se: indivíduo com habilidades de treinador, professor, líder de torcida, herói, visionário, administrador, artista, ser humano sensível e atento para com as pessoas que o cercam, segundo o que as circunstâncias(financeiras e interpessoais) exigem. Precisa ter facilidade para vivenciar mudanças culturais. Uma qualidade essencial e o compromisso profundo com nossa missão e nosso pessoal, mas o candidato também deve conseguir distanciar-se, para não perder sua visão objetiva da realidade".',
  'Não admira que ouvimos falar tanto na falta de líderes empresariais. Recentemente passei 5 anos estudando a natureza da liderança efetiva por meio de uma cooperação prática intensiva entre um grupo de executivos de indústrias, o corpo docente do Massachusetts Institute of Technology e alunos dos cursos de graduação, a maioria dos quais com vários anos de experiência no trabalho. Juntos, identificamos as habilidades básicas necessárias para ser líder e criamos um processo pelo qual elas podem ser aprendidas.',
  'Constatamos que os líderes eficientes usam um conjunto surpreendentemente pequeno de habilidades básicas. A seguir, os 5 passos básicos da liderança:',
  'Enxergar - os líderes eficientes enxergam possibilidades que outras pessoas não veem. Como? Eles enxergam a realidade não só da sua própria perspectiva, mas também da perspectiva daqueles que pretendem liderar.',
  'Max De Pree, ex-presidente do conselho de administração da Herman Miller, que tem lugar cativo na lista de empresas mais admiradas da revista Fortune, diz: "O líder precisa ter a capacidade de olhar através da lente de um seguidor". De Pree demonstrou essa habilidade com sua prática de convidar os funcionários a participar da criação de uma visão da empresa, em lugar de impor essa visão de cima para baixo.',
  'Essa percepção mais ampla do que a comum se origina, em grande medida, de uma consciência da parcialidade que colore sua própria visão e a das outras pessoas. A capacidade de enxergar significa poder assumir o papel do outro e de identificar o que Peter Senge, mais recentemente, descreveu como a capacidade de distinguir o que é daquilo que nós desejamos que seja.',
  'Monitorar-se - os líderes assumem, negociam ou são obrigados a desempenhar uma série de papéis diferentes. Para poder avaliar essas situações e dispor da gama mais ampla possível de opções, os líderes eficientes são ao mesmo tempo insiders (participantes sinceros e comprometidos) e outsiders(capazes de distanciar-se de uma situação ou papel para avaliar a gama de ações possíveis à sua disposição). Em outras palavras, o líder efetivo aprende a monitorar-se em ação e a rever, criticar e modificar seu comportamento.',
  'Nas palavras de um alto executivo: "Alguém me disse, certa vez, que exerço um efeito tremendo sobre as pessoas, simplesmente por minha maneira de falar. Então, comecei a me distanciar, conscientemente, e tentar me enxergar como as outras pessoas me enxergam. Percebi que, às vezes, exerço um efeito um pouco deprimente e que, em outras vezes, sou um chato. Quando eu comecei a prestar atenção em mim mesmo, percebi as consequências do meu comportamento. Hoje em dia estou sempre me olhando de fora para checar como estou me comportando e qual o efeito que estou exercendo sobre as pessoas".',
  'Trabalhar com valores - os líderes efetivos vivenciam seus próprios valores, ajudam as outras pessoas a formular os seus, lidam com conflitos de valores de maneira direta e tomam decisões com base em valores. Reconhecem o fato de que os valores de uma organização fornecem estabilidade e rumo a ela.',
  'Um executivo muito bem-sucedido de uma empresa de especialidades químicas observou: "Quando assumi este cargo, percebi que os valores eram a cola que unia esta empresa. Temos muitas maneiras de gerar e avaliar fatos, mas, em última análise, temos de nos preocupar tanto em fazer a coisa apropriada quanto em fazer a coisa certa. As 2 posturas nem sempre são a mesma coisa, e parte do meu trabalho é poder diferenciá-las".',
  'Seus estudos de engenharia e sua carreira técnica especializada anterior não haviam preparado esse executivo para trabalhar com valores. Na verdade, ele atribuía boa parte de seu sucesso anterior à administração que fizera, com base em fatos. Mas quando sua tarefa de liderança passou a dizer respeito à integração, mais do que aos aperfeiçoamentos técnicos, ele descobriu que a capacidade de trabalhar com valores passara a ser crucial.',
  'Confiar - os líderes efetivos sabem confiar e inspirar confiança. Ademais, como demonstrou Robert Levering em sua pesquisa - As 100 Melhores Empresas para se Trabalhar nos Estados Unidos, os líderes efetivos criam um clima de confiança que permeia a empresa inteira. Mas confiança não é apenas um ambiente ou um sentimento caloroso. É também algo que cria condições para muitas outras coisas.',
  'Um alto executivo, defensor convicto da administração baseada em fatos, deixou muito claro que é impossível reportar os fatos com fidelidade sem contar com alto nível de confiança: "Pela primeira vez, as pessoas constatam que não têm opção senão confiar nos números que lhes são dados. No passado, elas ignoravam os números recebidos de outra pessoa porque não podiam ou não queriam confiar neles. A administração baseada em tatos só funciona se você confia nos dados que outra pessoa lhe deu".',
  'Em outras palavras, a confiança não é apenas uma palavra. É, ao mesmo tempo, uma atividade e um resultado, uma condição prévia e uma consequência.',
  'Desafiar - os líderes efetivos perseguem a criação de metas e objetivos como parte de um processo por meio do qual as possibilidades são, mais do que impostas, reveladas. Eles questionam continuamente as normas e os pressupostos, visando a acabar com as restrições desnecessárias e irreais impostas às pessoas e às organizações que lideram.',
  'Mas o desafio não precisa assumir a forma de confronto. Na verdade, os líderes altamente efetivos muitas vezes extraem novas ideias das pessoas que lideram, em lugar de inventá-las eles próprios. Os líderes efetivos encontram meios de convidar as pessoas a escapar das circunstâncias e dos modos de pensar que impõem limites a elas.',
  'Refletindo sobre as qualidades do líder que mais admirava, um ex-executivo de uma empresa constante da lista das 500 maiores dos Estados Unidos lembrou que o líder em questão "raramente elevava a voz ou batia na mesa. Ele fazia perguntas. Muitas vezes, não sabia as respostas. Mas, ao formular as perguntas, nos ajudava a encontrar as respostas".',
  'Quando se entende a liderança em termos de um número finito de lances, ela passa a ser algo que se pode aprender e aperfeiçoar pela prática. Nem todos possuem a habilidade e a motivação de ser grandes líderes. Já está claro que, para dominar os passos subjacentes, é preciso possuir um certo tanto de cada uma dessas qualidades. Muito mais importante, porém, é treinar os passos subjacentes de maneira constante.',
  'O método consiste em identificar onde existem, ou podem ser criadas, oportunidades no contexto do desempenho cotidiano e fazer delas seu campo de treinamento. Ofereço alguns exemplos a seguir, mas são apenas uma pequena fração das maneiras que os homens e mulheres com quem trabalhei encontraram para treinar seus passos de liderança. Em cada caso, o mais importante é treinar e prestar atenção ao que você faz.',
  'Enxergar - vá a uma reunião (o treino funcionará melhor se for uma reunião que você não está presidindo) e observe como as pessoas se comportam. Não se limite aos tópicos da pauta: procure recriar as palavras, os gestos, o ambiente, as intimações, a linguagem corporal.',
  'Monitorar-se - peça a alguém que você conhece razoavelmente bem que o filme numa reunião, de forma que você se veja da maneira como as outras pessoas o veem e observe o impacto do seu comportamento sobre os outros. Observe-se em ação. O que o surpreende? Do que você gosta e do que não gosta? Treine a auto-observação.',
  'Trabalhar com valores - comece a falar com um amigo sobre alguma coisa que o apaixona e incentive seu interlocutor a fazer o mesmo. Ouça o que a pessoa diz e, mais importante ainda, ouça como ela o diz. O que acontece quando as pessoas começam a falar sobre alguma coisa que lhes desperta sentimentos profundos? Depois, em outras situações, fique atento para detectar sinais de paixão, ou seja, indicativos de que alguém se preocupa profundamente com alguma coisa.',
  'Confiar - no final do dia, pare por um instante e reflita sobre todos os acordos, compromissos, obrigações e promessas que você fez e assumiu nesse dia. Faça uma lista de tudo num papel. A lista deve incluir não   apenas os itens que poderiam constar de sua lista de coisas a fazer, mas também os acordos mais sutis que você sela. Quantos compromissos você assume num dia qualquer? Quantos deles pretende honrar? Qual será o custo de não honrá-los?',
  'Desafiar - treine sua capacidade de encontrar soluções. Medite sobre algumas das características de um problema que está tentando resolver. Olhe à sua volta para ver que pessoas ou organizações podem estar enfrentando o mesmo problema. Quais serão as soluções que já encontraram? Utilize essa abordagem com o grupo que você lidera para atacar um problema que você acha difícil de resolver.',
  'Os engenheiros do departamento de pesquisas de uma empresa com a qual trabalhei recentemente se queixaram de que enfrentavam grande dificuldade para despertar o interesse dos gerentes de suas fábricas por novas tecnologias produtivas. Eles faziam seminários e escreviam relatórios técnicos, Mas não conseguiam gerar entusiasmo. Eu incentivei o gerente do departamento de pesquisas e desenvolvimento a examinar o problema de uma certa distância, juntamente com sua equipe. Quem mais tinha possivelmente enfrentado um problema semelhante, e como o resolveu?',
  'Numa discussão animada a equipe se comparou a uma empresa de vinhos que, para atrair clientes, promove sessões de degustação para que experimentem o vinho e conheçam as pessoas e o processo responsáveis por ele. Em pouco tempo o departamento de pesquisas e desenvolvimento começou a organizar uma feira tecnológica, com exposições e amostras grátis para seus clientes internos. A feira foi um sucesso e o interesse pela novas tecnologias cresceu.',
  'Conclusão - precisamos aprender os vários elementos do treino que levam ao êxito, o possibilitam e aumentam suas chances de acontecer. Esses elementos, que descrevi como passos ou lances da liderança, normalmente não são percebidos no momento da vitória. E, a não ser que sejamos disciplinados, é pouco provável que procuremos esses elementos, ou a ausência deles, depois de um fracasso. Os passos de liderança aqui esboçados constituem exercícios que podem melhorar o desempenho de um líder. Com a prática, podem até transformar a liderança em um modo de vida.',
];

let perguntas = [
  {
    q: 1,
    p:
      'Ser líder não se refere a uma herança genética, nem determinação do destino, porque:',
    a: 'a liderança pode ser desenvolvida.',
    b: 'a liderança requer conhecimento da profissão.',
    c: 'liderança, a genética não conseguiu identificá-la.',
    d: 'a liderança pode ser fonte de controle empresarial.',
    r: '',
  },
  {
    q: 2,
    p: 'Quais são as habilidades necessárias para ser um líder eficiente?',
    a:
      'ser estratégico, trabalhar em sintonia, confiar, desafiar, integrar-se.',
    b:
      'questionar-se, empatia, confiar, trabalhar com valores, ser estratégico.',
    c: 'enxergar, monitorar-se, trabalhar com valores, confiar, desafiar.',
    d: 'ser tático, monitorar-se, confiar, desafiar, trabalhar com valores.',
    r: '',
  },
  {
    q: 3,
    p:
      '"O líder precisa ter a capacidade de olhar através da lente de um seguidor". Max de Pree, com esta afirmação ele sugeriu:',
    a:
      'o líder geralmente se empenha, no entanto comete equívocos, não enxerga oportunidades como deveria.',
    b:
      'o líder geralmente convida os funcionários a participar da criação de uma visão na empresa.',
    c: 'o líder necessita centralizar suas ações, para depois delegá-las.',
    d:
      'o líder sempre tem que ser o responsável pelas decisões dos seus seguidores.',
    r: '',
  },
  {
    q: 4,
    p:
      'A capacidade de enxergar significa assumir o papel do outro, e identificar o que Peter Senge definiu como a capacidade de distinguir _______________.',
    a: 'os prós e os contras.',
    b: 'o que queremos daquilo que não queremos.',
    c: 'e de percebermos os objetivos.',
    d: 'o que é, daquilo que nós desejamos que seja.',
    r: '',
  },
  {
    q: 5,
    p: 'Os líderes eficientes não são:',
    a: 'insiders (participantes sinceros e comprometidos).',
    b: 'outsiders (avaliam à distância a gama de ações possíveis).',
    c: 'perceptivos em grande escala.',
    d: 'centralizadores, em suas funções.',
    r: '',
  },
  {
    q: 6,
    p:
      'Os líderes efetivos vivenciam seus próprios valores, ajudam as outras pessoas a formularem os seus, lidam com conflitos de maneira direta e tomam decisões com base em _______________.',
    a: 'crenças.',
    b: 'experiências.',
    c: 'estatísticas.',
    d: 'valores.',
    r: '',
  },
  {
    q: 7,
    p: 'Qual afirmativa é correta:',
    a: 'os líderes, muitas vezes, não sabem as respostas.',
    b: 'os líderes precisam sempre saber as respostas para liderarem.',
    c: 'os líderes querem sempre saber as respostas.',
    d: 'os líderes geralmente impõem a sua opinião.',
    r: '',
  },
  {
    q: 8,
    p: 'Um dos principais fatores para tornar-se um líder é:',
    a: 'treinar as habilidades subjacentes.',
    b: 'adquirir confiança.',
    c: 'sentir afinidade com o grupo.',
    d: 'ter feeling.',
    r: '',
  },
  {
    q: 9,
    p: 'O título da matéria é:',
    a: 'Liderança, a solução para o sucesso.',
    b: 'Liderança, este é o seu caminho.',
    c: 'Tire o seu diploma em liderança.',
    d: 'Tire o seu diploma para desenvolver liderança.',
    r: '',
  },
  {
    q: 10,
    p: 'Este artigo foi escrito por:',
    a: 'Peter Senge.',
    b: 'Stephen Covey.',
    c: 'Peter Drucker.',
    d: 'Robert J. Thomas.',
    r: '',
  },
];

export default function Teste19avaliacao() {
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

  const respCertas = ['a', 'c', 'b', 'd', 'd', 'd', 'a', 'b', 'c', 'd'];

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
      numero: 19,
      prova_id: prova,
    });

    if (response.data) {
      setTesteconcluido(true);
      history.push('/avancado/teste9/resultado');
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
        numero: 19,
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

      toast.success('Teste 19 concluído com sucesso!');
      setTimeout(() => {
        setTesteconcluido(true);
        history.push('/avancado/teste9/resultado');
      }, 3000);
    } catch (error) {
      toast.error('O Teste 19 já foi finalizado!');
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
    setTimeout(() => setPlm(1400), 76300);
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
            <small>Teste 19</small>
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
            <Titulo>TESTE 19 - AVALIAÇÃO</Titulo>
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
            <Titulo>TESTE 19 - AVALIAÇÃO</Titulo>
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
