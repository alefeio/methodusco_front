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

const titulo = 'Não Confunda Sucesso com Riqueza';

const cred1 = 'Por Anna Muoio';

const cred2 = 'Revista Você S.A.';

const textos = [
  'A História está repleta de pessoas que atingem o topo e depois desabam. Esse é um drama que acontece desde o início dos tempos.',
  'O mercado de ações nos Estados Unidos atinge altos recordes - e provoca ansiedade generalizada em torno das consequências de um possível crash. Com a ajuda da Internet, as empresas atingem milhões de clientes - e depois se esgotam tentando acompanhar as exigências dos negócios em tempo real.',
  'As pessoas chefiam equipes virtuais e dirigem projetos globais - e ficam exaustas de tanto viajar e responder a e-mails. Não é surpresa o fato de tantas pessoas se preocuparem com o rumo tomado por suas vidas. Mesmo aquelas que realmente se sentem instigados com o novo mundo dos negócios sentem que perderam o controle sobre o seu destino. Não surpreende, tampouco, que muitas dessas pessoas pensem que são as primeiras a encarar dilemas ligados ao dinheiro e ao poder, à velocidade e à pressão do trabalho.',
  'Tom Morris sabe que isso não é verdade. Ele ganhou amplo prestígio na comunidade de negócios americana aplicando os conhecimentos dos grandes pensadores da História - Sêneca, Sócrates, Platão, Aristóteles - às demandas do mundo contemporâneo das empresas.',
  'Morris tem 47 anos de idade e passou 15 anos lecionando filosofia na Universidade Notre Dame, nas Filipinas. Suas aulas eram tão procuradas que chegou a ter 1 2000 alunos por ano. Em 1996, ele deixou a Notre Dame para fundar o Instituto Morris de Valores Humanos, em Wilmington, Carolina do Norte.',
  'O instituto, na definição de Morris, é um "pool de pensamento" que aplica a sabedoria dos pensadores da história da humanidade à vida contemporânea e aos negócios nos dias de hoje. Já trabalhou com organizações como Coca-Cola, IBM, Merrill Lynch, Motorola e Força Aérea dos Estados Unidos. Além disso, já escreveu 13 livros, entre eles True Success: a New Philosophy of excellence (O Verdadeiro Sucesso: uma Nova Filosofia da Excelência), Putnam, 1994; e If Aristotle Ran General Motors: the New Soul of Business (Se Aristóteles Dirigisse a General Motors: a Nova Alma dos Negócios), Henry Holt, 1997.',
  'O que os pensadores da Antiguidade têm a nos dizer sobre as promessas e os perigos da nova economia? "A História está repleta de casos de pessoas que atingem o sucesso, ultrapassando de longe suas próprias expectativas, e depois desabam", diz Morris. "Esse é um drama que se vem desenrolando em todas as áreas de empreendimento humano, desde a aurora dos tempos". Nesta entrevista, Morris ofereceu algumas respostas que vêm da Antiguidade a uma pergunta urgente nos dias de hoje: quanto é o bastante?',
  'Por que tantas pessoas sentem que suas vidas fogem de seu controle?',
  'O maior caso de confusão de identidade na sociedade moderna diz respeito aos quatro marcos de sucesso público: dinheiro, poder, fama e status. Não tenho nada contra o dinheiro, o poder, a fama ou o status - desde que sejam vistos como recursos, armas, e não como metas a alcançar.',
  'Mas é exatamente esse o problema da maioria das pessoas, e é por isso que elas têm tanta dificuldade em responder à pergunta sobre "quanto é o bastante". Se sua meta é ganhar dinheiro ou fama, quando você pode saber se já conseguiu o suficiente? Todo mundo que conheço que tem um pouco quer mais. Mas todas as pessoas que conheço que têm muito também querem mais.',
  'A maioria das pessoas só reconhece seus limites quando os ultrapassa. Ou seja, quando faz tanto e vai tão longe para buscar dinheiro ou status que acaba percebendo que se excedeu. Aristóteles já dizia que o problema do desejo é que ele se alimenta dele mesmo. Essa máxima continua sendo válida hoje. Quando você consegue seu primeiro milhão de dólares, o impulso natural é querer 10 milhões. Como diria o filósofo da Antiguidade, o desejo é um bom criado, mas um péssimo senhor.',
  'Como podemos nos proteger contra o impulso de querer sempre mais?',
  'As pessoas que conheço que estão satisfeitas com sua renda sabem quanto é o bastante porque, para elas, o dinheiro e o poder têm valor instrumental. Será que você possui dinheiro suficiente? Para responder à pergunta, é preciso pensar: suficiente para quê? Para conservar determinado estilo de vida? Para lhe garantir segurança e a certeza de não precisar preocupar-se com o futuro? Esses objetivos na vida têm preços, mas os preços variam segundo as pessoas.',
  'O orador, advogado e filósofo romano Sêneca viveu durante um dos períodos da história humana mais marcados pelos excessos. Sêneca ganhou uma fortuna e tornou-se famoso em Roma por ser conselheiro do jovem imperador Nero. Sêneca aconselhava a quem o ouvisse a passar um dia por Mês à base de pão e água e dormindo no chão duro. Por quê? Porque, quando faz essas coisas, a pessoa percebe de quão pouco ela necessita para sobreviver.',
  'A maioria das pessoas é impelida ao excesso por seus medos. "Como eu poderia sobreviver se parasse de trabalhar para esse cliente, se deixasse de fazer essa viagem, se recusasse esse projeto?" Esses medos são comuns. Sêneca queria que as pessoas distinguissem suas necessidades e seus desejos. Essa distinção é crucial para definir o que é "o bastante", mesmo que para isso você não chegue ao ponto de dormir no chão uma vez por mês.',
  'Muitos profissionais possuem mais do que precisam. Apesar disso, continuam insatisfeitos porque suas vidas fogem de seu controle e porque gostariam de ter ainda mais. Como compreender essa tendência?',
  'Há na vida dois tipos de insatisfação. Uma eu chamo de "insatisfação de possuir". A outra é a "insatisfação da aspiração". A insatisfação do possuir gera em torno do sujeito de possuir mais. Vivemos numa cultura competitiva, uma cultura do mais. Numa cultura desse tipo, é difícil estabelecer limites. Conheço pessoas que têm tanta roupa que tiveram que construir closets extras para guardar tudo que compram. A insatisfação do possuir é uma insatisfação que não é saudável. É provocada por um vazio que jamais será preenchido.',
  'Já a insatisfação da aspiração é uma insatisfação saudável. Ela não diz respeito ao que você quer adquirir, mas ao que você quer se tornar. Quanto sabedoria é o bastante? Quantas ideias e experiências interessantes são o bastante? Diferentemente da pergunta "quanto dinheiro é o bastante?", essas são perguntas que não admitem respostas absolutas.',
  'Esse tipo de insatisfação empurra você a crescer, a expandir seus horizontes, a ser mais amoroso, a ser mais eficaz nas coisas que faz. Não conheço muitas pessoas que possam afirmar: "Já fiz o bastante de coisas interessantes. Já aprendi o suficiente". Ninguém nunca tem sabedoria suficiente. É muito diferente de trocar seus tacos de golfe Big Bertha por um conjunto de tacos maiores e, a seguir, pelos maiores tacos que existem. A grande chave para a satisfação é algo que quase sempre nos escapa. Não é conseguir o que queremos, e sim querer aquilo que conseguimos.',
  'Como encontrar aquela chave "que sempre nos escapa"?',
  'Uma maneira de compreender quais são as coisas pelas quais vale a pena lutar (para obtê-las no futuro) consiste em avaliar seu grau de satisfação com o presente. Uma técnica que costumo utilizar é um exercício simples que chamo de "auditoria da satisfação". Peço às pessoas que escrevam num papel a lista das coisas de que não gosta em sua vida. A seguir, fazem uma segunda lista com as coisas de que gostam. Nessa lista, podem incluir seus amigos, sua relação com os filhos, o trabalho etc. A seguir, vem uma terceira lista, "Coisas de que não gosto no meu trabalho atual", e uma quarta, "Coisas de que gosto no meu trabalho atual". Você pode redigir listas desse tipo para qualquer aspecto de sua vida. Elas realçam em sua cabeça a ideia de que, para melhorar, sempre é preciso conservar e fortalecer o que há de bom, ao mesmo tempo em que você se livra do que há de negativo ou procura transformá-lo.',
  'Por que muitos de nós criamos definições de sucesso que nos conduzem ao excesso?',
  'O sucesso nunca deve ser confundido com riqueza ou poder. Deve, sim, ser ligado à excelência e ao sentimento de realização. O sucesso é algo que diz respeito a quem você é, e não ao que você possui. As pessoas bem-sucedidas se esforçam para descobrir seus dons, desenvolvê-los e utilizá-los não apenas em benefício próprio, mas também para beneficiar os outros.',
  'Cícero, Sócrates e Sófocles teriam muito a criticar na atual literatura sobre sucesso. Esse tipo de literatura sempre trata de como se pode conseguir o que se deseja. Você quer uma casa grande, um carro fantástico, uma promoção? Então decore o nome de todo mundo que fica conhecendo. Quando cumprimentar uma pessoa, aperte sua mão com firmeza e a chame pelo nome.',
  'O objetivo é criar uma boa imagem. Acontece que as pessoas precisam realmente de ajuda não para inventar uma aparência para elas mesmas, mas para compreender a realidade. Foi Heráclito quem disse que "caráter é destino". Não precisamos de ajuda para desenvolver nossa personalidade. O que precisamos e cultivar nosso caráter.',
  'Por que essa definição equivocada do sucesso esta presente por toda parte?',
  'Os modelos culturais de sucesso que tendemos a seguir são modelos de excesso: pessoas como Bill Gates ou Donald Trump, que se dedicam de maneira maníaca a uma só coisa. No lugar deles, deveríamos tomar como modelos pessoas que buscam a excelência em várias coisas. Costuma mostrar a pessoa que se destaca: ela corre um pouco mais rápido, salta mais alto ou trabalha mais duro do que todo mundo. E admiramos essas pessoas, dizendo a nós mesmos: "Quero ser como ele". Como o patinho que imita o andar da mãe, gravamos esses modelos em nossa memória. Imitamos formas de sucesso que aparentam ser obras sem parar para fazer uma pergunta de suma importância: "O que essas pessoas sacrificaram em suas vidas para poderem ser excelentes nessa única área? E eu, será que estou disposto a fazer o mesmo sacrifício?"',
  'Um dos mais interessantes filósofos da Antiguidade foi o pensador grego Diógenes, que ficou conhecido como "O Cínico". Diógenes cunhou algumas pérolas de sabedoria como "possui mais aquele que se contenta com menos" e "cães e filósofos são aqueles que fazem o maior bem e ganham menos recompensas".',
  'Certo dia, Alexandre, o Grande, foi fazer uma visita a Diógenes, de quem era grande fã. No final da visita, Diógenes perguntou a Alexandre quais eram seus planos para o futuro. Alexandre respondeu que pretendia conquistar e subjugar a Grécia. "E depois disso?", indagou Diógenes. Alexandre respondeu que depois disso pretendia conquistar e subjugar Ásia Menor. E depois disso? Pretendia conquistar e subjugar o mundo.',
  'Diógenes, que não conseguia desviar-se de uma linha de pensamento, voltou a fazer a mesma pergunta: "E depois disso?" Alexandre disse que depois de conquistar e subjugar o mundo pretendia descansar e se divertir. Diógenes respondeu: "Por que você não se poupa desse trabalho tolo e começa a descansar e curtir a vida agora mesmo?" Alexandre não entendeu a mensagem. Vivemos para alcançar o sucesso: não apenas para desfrutá-lo, mas também para buscá-lo. Na verdade, as pessoas que tiram mais prazer do sucesso são aquelas que tiram mais prazer da busca do sucesso. São as pessoas que conseguem encontrar satisfação na viagem, não apenas na chegada ao destino.',
];

let perguntas = [
  {
    q: 1,
    p:
      'O entrevistado relata que não tem nada contra o dinheiro, poder, fama e status, desde que sejam vistos como:',
    a: 'uma finalidade para a sobrevivência.',
    b: 'recursos, armas.',
    c: 'realização voltadas para o coletivo.',
    d: 'implementação da realização pessoal.',
    r: '',
  },
  {
    q: 2,
    p:
      'Quem disse esta frase: "O desejo é um bom criado, mas um péssimo senhor"?',
    a: 'um filósofo.',
    b: 'Aristóteles.',
    c: 'Arquimedes.',
    d: 'Sófocles.',
    r: '',
  },
  {
    q: 3,
    p: 'Qual o nome do conselheiro de Nero?',
    a: 'Sêneca.',
    b: 'Platão.',
    c: 'Heráclito.',
    d: 'Sófocles.',
    r: '',
  },
  {
    q: 4,
    p: 'Quais são os dois tipos de insatisfação?',
    a: 'de aquisição e remuneração.',
    b: 'de possuir e da aspiração.',
    c: 'de construir e indefinição.',
    d: 'de realização e contribuição.',
    r: '',
  },
  {
    q: 5,
    p: 'Aristóteles dizia que o problema do desejo era que:',
    a: 'enfatiza o ter e não o ser.',
    b: 'ele se alimenta dele mesmo.',
    c: 'revela o poder e não o saber.',
    d: 'indica a superficialidade da busca, não a essência.',
    r: '',
  },
  {
    q: 6,
    p:
      'Segundo o autor a grande chave para a satisfação é algo que sempre nos escapa. Não é conseguir o que queremos, e sim:',
    a: 'almejar sempre mais, isso nos leva ao crescimento',
    b: 'realizar efetivamente o nosso sonho, lutar por um objetivo grandioso.',
    c: 'planejar o que é possível para não se frustrar.',
    d: 'querer aquilo que conseguimos.',
    r: '',
  },
  {
    q: 7,
    p:
      'A técnica chamada "auditoria da satisfação" consiste em que exatamente:',
    a:
      'fazer uma lista mental do que pode acontecer para me tornar uma pessoa realizada.',
    b: 'viver intensamente o presente, sem ansiedade.',
    c:
      'escrever uma lista das coisas que não gosto e outra lista das coisas que gosto, isto vale para qualquer aspecto da vida.',
    d: 'fazer um diário para posterior avaliação do que gosto.',
    r: '',
  },
  {
    q: 8,
    p: 'O que a técnica da "auditoria da satisfação pode trazer de benefício?',
    a:
      'reforçar as ideias que para melhorar é preciso fortalecer o que há de bom e livrar-se do negativo.',
    b: 'permitir uma reflexão imediata.',
    c: 'adquirir um direcionamento mental, no entanto isto é  temporário.',
    d: 'o autor afirma que equivale a uma psicoterapia.',
    r: '',
  },
  {
    q: 9,
    p:
      'O sucesso não deve ser confundido com riqueza ou poder. Deve ser ligado com:',
    a: 'o prazer e disciplina de buscar o que queremos.',
    b: 'a excelência e ao sentimento de realização.',
    c: 'a determinação e o estilo de vida.',
    d: 'satisfação e a personalidade.',
    r: '',
  },
  {
    q: 10,
    p:
      'Pessoas bem-sucedidas se esforçam para descobrir seus dons, desenvolvê-los e procuram utilizá-los:',
    a:
      'em benefício próprio, pois não desperdiçam tempo se dedicando aos outros.',
    b: 'para beneficiar os outros também.',
    c: 'determinando objetivos grandiosos.',
    d: 'principalmente como aprendizado contínuo.',
    r: '',
  },
];

export default function Teste6avaliacao() {
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

  const respCertas = ['b', 'a', 'a', 'b', 'b', 'd', 'c', 'a', 'b', 'b'];

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
      numero: 6,
      prova_id: prova,
    });

    if (response.data) {
      setTesteconcluido(true);
      history.push('/intermediario/teste6/resultado');
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
        numero: 6,
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

      toast.success('Teste 6 concluído com sucesso!');
      setTimeout(() => {
        setTesteconcluido(true);
        history.push('/intermediario/teste6/resultado');
      }, 3000);
    } catch (error) {
      toast.error('O Teste 6 já foi finalizado!');
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
    setTimeout(() => setPlm(750), 150900);
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
            <small>Teste 6</small>
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
            <Titulo>TESTE 6 - AVALIAÇÃO</Titulo>
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
            <Titulo>TESTE 6 - AVALIAÇÃO</Titulo>
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
