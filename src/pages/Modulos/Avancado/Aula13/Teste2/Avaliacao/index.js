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

const titulo = 'As Dez Chaves para uma Era de Mudanças';

const cred1 = 'Por Stephen Covey';

const cred2 = 'Revista Exame';

const textos = [
  'O.k., sua empresa precisa se mexer. Passo a passo, como envolver as pessoas nesse processo.',
  'Se você pudesse transformar uma cultura baseada em antagonismo, jurisdicismo e política numa cultura baseada em leis ou princípios naturais, a recompensa seria enorme. Seria possível economizar muito dinheiro aproveitando melhor as energias e os talentos das pessoas.',
  'O mundo está passando por transformações revolucionárias que vão mudar para sempre o modo pelo qual muitas empresas operam. Pessoas, produtos e empresas que não estiverem antenados nessas transformações vão ficar obsoletas em pouco tempo.',
  'Não podemos falar seriamente sobre transformar organizações sem primeiro falar seriamente sobre transformar a nós mesmos, individualmente. A chave para influenciar as massas é atingir cada um, pois aquilo que é mais pessoal é também, em última análise, o mais universal. Pense nisso. Não e ridículo imaginar que seria possível transformar uma cultura sem que os indivíduos que a compõem se transformassem primeiro? Para mim isso é evidente e, no entanto, este tipo de pensamento é comum e corriqueiro: tudo nesta organização precisa mudar, menos eu. Se você fizer de você mesmo a exceção, esqueça a transformação - ela não vai acontecer.',
  'A transformação tem início no momento em que você se compromete a mudar. É quase axiomático dizer que a transformação pessoa precisa acompanhar a transformação organizacional, senão a duplicidade vai gerar cinismo e instabilidade.',
  'Primeiro os Músculos, depois o Tênis - tentar transformar sua cultura ou estilo de direção sem primeiro transformar seus próprios padrões de hábito é como tentar melhorar seu tênis sem primeiro desenvolver os músculos que permite jogar melhor. Algumas coisas necessariamente precedem outras. Não se pode aprender a correr sem antes ter aprendido a andar, e não se aprende a andar sem antes ter aprendido a engatinhar.',
  'O que acontece quando as pessoas entram num ambiente político e sentem que estão sendo injustiçadas? Elas organizam manifestações e procuram atribuir a culpa pelas injustiças que estão sofrendo a pessoas e condições que estão fora de seu controle direto. Desse modo, alimentam sentimentos de opressão, de serem "vítimas do sistema". Elas reclamam a correção de injustiças percebidas como tais. Talvez formem um sindicato, procurem criar uma legislação social ou ofereçam resistência coletiva.',
  'Essas medidas satisfazem a necessidade social de fazer parte de um todo maior a necessidade psicológica de fazer uso de energias e talentos criativos e a necessidade espiritual de ter uma meta. Mas muitas vezes a organização se torna um lugar onde quem manda é a política. Culturas desse tipo geram dependência, e não se pode conferir poder a pessoas dependentes. É por isso que a maioria das iniciativas no sentido de conferir poder às pessoas não funciona.',
  'Nada vai mudar do jeito que gostaríamos que mudasse em nossas famílias, organizações e nações até que nós mesmos mudemos e nos tornemos parte da solução que buscamos. A verdadeira transformação começa comigo mesmo, com minha própria família, na minha própria casa. Na organização, ela começa quando eu reconheço que, se tiver de acontecer, isso depende de mim: "Meu círculo de influência não apenas precisa ser muito maior e expandir-se constantemente, mas a própria natureza das minhas atividades precisa mudar para que eu esteja alinhado com natureza das atividades que funcionam no mercado".',
  'Imagine-se tentando criar uma cultura que seja veloz, flexível, centrada e amistosa sem que os indivíduos que a compõem sejam mais velozes, amigáveis, flexíveis e centrados. O psicólogo William James disse que, para mudar nossos hábitos, primeiro assumimos um compromisso profundo de pagar o preço que for preciso para mudar o hábito. Em segundo lugar, aproveitamos a primeira oportunidade que aparece para fazer uso da nova prática ou habilidade. Depois, não permitimos quaisquer exceções até que o novo hábito esteja firmemente enraizado em nossa natureza.',
  'Dez Chaves Mestras - são estas as dez chaves para a transformação, que funcionam em qualquer lugar, a qualquer momento:',
  '1. A transformação começa com a consciência da necessidade de mudar. Precisamos ter consciência cada vez maior de onde estamos em relação aonde queremos estar. Não podemos negara necessidade de transformação ou o tipo de engajamento e esforço que ela exigirá.',
  '2. O passo seguinte é entrar num processo de "missões conjuntas", alinhando sua missão pessoal com a missão de sua organização. Esse processo de "juntar as missões" pode ser melhor realizado por meio do envolvimento e a participação. As pessoas têm de decidir por si só que impacto as transformações exercerão sobre elas e sua esfera de influência. Quando seu pessoal compartilhar a mesma missão você terá um reforço natural na cultura para ajudar a perpetuar as transformações.',
  '3. Construa um senso de segurança interior. Quanto menos segurança interior as pessoas têm, menos elas conseguem adaptar-se à realidade externa. Elas precisam ter algum sentimento de que a terra não irá se mover sob seus pés. As pessoas não irão mudar por conta própria a não ser que tenham segurança interior. Se aquilo que lhes dá segurança é algo que está fora delas, elas enxergarão as mudanças como ameaças. Precisamos de um sentimento de permanência e segurança. Viver sobre um chão sempre instável é como vivenciar um terremoto todos os dias.',
  '4. A seguir você precisa legitimar as transformações a nível pessoal. Se você oferecer às pessoas uma experiência de aprendizado profundo sobre ouvir com empatia, por exemplo, no dia seguinte elas poderão fazer algo a respeito. Sem isso, elas se revoltarão. Podem dizer por exemplo:',
  '"O que você está tentando fazer? O que há de errado com o nosso jeito?". As pessoas precisam reconhecer. "Preciso de uma coisa que ainda não tenho". E elas sabem que não vão conseguir essa coisa se apenas ficarem esperando por ela e imaginando-a. É preciso proceder a uma mudança de mentalidade e de conjunto de habilidades. Para conseguir o que querem elas precisam pagar o preço em termos de processo de desenvolvimento.',
  '5. Assuma responsabilidade pessoal pelos resultados. Executivos e funcionários muitas vezes discutem a questão de "até que ponto esse desenvolvimento deve caber à organização e até onde deve ir o papel e a responsabilidade do indivíduo". Acho que, em última análise, cabe ao indivíduo ser competente. O indivíduo deve dizer: "Para mim, a organização é um recurso. Posso lançar mão desse recurso ou buscar outros. Se a organização mostrar não ser um recurso para mim, então terei de adquirir o conhecimento, as habilidades e o treinamento por contra própria".',
  'Mas se olharmos o treinamento do ponto de vista da direção da empresa, eu diria: "Sim, em última instância o responsável é o indivíduo, mas precisamos criar um ambiente que dá apoio a ele e fornecer alguns recursos que ajudem as pessoas a desenvolver as competências de que precisamos para sermos competitivos".',
  '6. Enterre o velho. Frequentemente é necessário haver um "batismo" - um enterro simbólico do corpo antigo para assumir um novo corpo, nome, posição, lugar, linguagem e espírito. Isso simboliza não apenas a rejeição do que é velho, mas o fato de que você está construindo com base no velho e avançando em direção ao novo. Já vi isso ser realizado de maneira muito bem-sucedida quando as pessoas se reúnem e enterram as práticas antigas e toda a carga de culpa associada a elas. O processo se transforma num momento de transição. Em seu livro Passagens, Gail Sheeley escreve: "Como a lagosta, nós também precisamos nos libertar de uma estrutura protetora a cada passagem de uma etapa do crescimento para outra. Isso nos deixa expostos e vulneráveis, mas também nos devolve a condição de embrião, que possibilita o crescimento e nos capacita a nos esticar de maneiras antes desconhecidas".',
  '7. Abrace o novo caminho com espírito de aventura. O próprio processo de transformação precisa se transformar. Em primeiro lugar, a organização precisa ser centrada em leis naturais e princípios duradouros. Não se pode transformar um local de trabalho politizado numa cultura de qualidade, a não ser com base em princípios. Caso contrário não se terá o fundamento necessário para dar suporte às iniciativas de reforma.',
  'Os líderes centrados em princípios criam uma visão comum e procuram reduzir as forças limitadoras. Os líderes centrados nos lucros frequentemente tentam aumentar as forças motrizes. Eles podem conseguir implementar melhorias temporais, mas elas criam tensões - e essas tensões se transformam em novos problemas, que por sua vez requerem novas forças motrizes. À medida que as pessoas ficam cansadas e se tornam cínicas, o desempenho cai. O gerenciamento por impulsos leva ao gerenciamento de crises.',
  '8. Esteja aberto a novas opções. As grandes transformações requerem um espírito de aventura, já que você pisa em território desconhecido. Vamos começar tendo em mente a meta final. O objetivo é que encontremos uma solução melhor do que a que qualquer um de nós está propondo agora. Não sabemos qual será essa meta final. É algo que precisamos encontrar juntos. O que buscamos é a sinergia. O fato de mantermos um espírito aberto nos dará mais imunidade ao pensamento à base de dicotomias, o pensamento ou-isso-ou-aquilo. Assim, da próxima vez que surgir um problema entre nós, poderemos buscar algo melhor - uma terceira alternativa.',
  '9 . Busque sinergia com outros interessados no processo. Outro dia eu estava fazendo uma visita ao principal executivo de uma empresa, ajudando-o a preparar um discurso importante no qual ele queria tratar dos "relacionamentos deteriorantes" no interior de sua organização. Sugeri a ele que relacionamentos tensos muitas vezes são sintomáticos de males maiores no interior da cultura - males tais como o espírito de contenção e o espírito de antagonismo na maneira com que as pessoas resolvem os problemas.',
  'Mostrei ao executivo como os hábitos e interdependência, empatia e sinergia representam uma forma de lidar com questões difíceis e continuar mantendo bons relacionamentos de trabalho. Ele disse: "Outro dia me encontrei com um adversário e disse a ele: "Vamos deixar que o espírito de sinergia seja o espírito de nossa interação mútua". Ele concordou, e nosso encontro teve bons resultados! Fiquei muito satisfeito, mas agora já voltamos a nossas posições antagônicas anteriores". Quando não existe confiança suficiente para uma sinergia, pelo menos se pode chegar a um meio-termo respeitoso. Quando a diversidade é apreciada surge lugar para a sinergia, e a sinergia cria transformações. Quando as pessoas se sentem compreendidas e valorizadas, elas podem transformar-se em vez de mudar segundo alguma norma, algum clone ou algum mandado.',
  '10 . O fator-chave é o propósito transcendental. Hoje em dia vivemos tão soterrados debaixo de interesses particulares e especiais que não compartilhamos um propósito transcendental. Outro dia, quando me reuni com um grupo de generais, observei que era muito mais difícil para eles afirmar sua missão em tempos de paz do que em tempos de guerra. Eles são muito mais centrados quando têm um inimigo a combater. Mas a maioria das batalhas territoriais bloqueia as transformações, porque você fica preocupado demais em proteger seus interesses especiais para poder ter o incentivo e a motivação para se transformar. Quando você enxerga o mundo em termos de "nós contra eles", você entra num processo de transações, não de transformações.',
  'Os líderes efetivos "transformam" pessoas e organizações. Promovem transformações em suas mentes e seus corações, ampliam sua visão e sua compreensão, esclarecem as metas, tornam os comportamentos congruentes com as crenças, os princípios e os valores e implementam transformações permanentes, que se autoperpetuam e cujo ímpeto é cada vez maior.',
];

let perguntas = [
  {
    q: 1,
    p: 'Quem é o autor do texto lido?',
    a: 'Michael Hammer.',
    b: 'Peter Drucker.',
    c: 'Stephen Covey.',
    d: 'Michael E. Porter.',
    r: '',
  },
  {
    q: 2,
    p: 'Quanto à afirmação - "missões conjuntas", o autor entende:',
    a: 'indivíduo e família bem alinhados.',
    b: 'entrosamento entre membros da equipe.',
    c: 'integração entre missão individual e missão da organização.',
    d: 'alinhamento entre missão da organização e missão pessoal.',
    r: '',
  },
  {
    q: 3,
    p:
      'Como a direção da empresa deveria ver o treinamento dos seus executivos?',
    a: 'delegar a uma equipe de consultores.',
    b: 'criar condições para os funcionários desenvolver a competência.',
    c: 'cabe ao funcionário providenciar sua atualização.',
    d: 'o mercado é o grande centro de treinamento.',
    r: '',
  },
  {
    q: 4,
    p:
      'O texto aborda 10 chaves mestras para a mudança. Como o autor intitula a referida metáfora: "Como a lagosta, nós também precisamos nos libertar de uma estrutura protetora a cada passagem de uma etapa do crescimento para outra. Isto nos deixa expostos e vulneráveis, mas também nos devolve a condição de embrião, que possibilita o crescimento e nos capacita a nos esticar de maneiras antes desconhecidas":',
    a: 'momento de interação profunda com nossas crenças e valores.',
    b: 'momento de transição.',
    c: 'momento de alavancagem.',
    d: 'momento de inspiração.',
    r: '',
  },
  {
    q: 5,
    p:
      'Na afirmação: "o gerenciamento por impulsos leva ao gerenciamento de crises" - o autor sugere que:',
    a:
      'a organização deve providenciar um conjunto de ferramentas eficientes em caso de problemas cíclicos.',
    b:
      'a organização necessita de princípios orientadores comuns e duradouros.',
    c: 'a obtenção dos lucros é fator indicador da estratégia adequada.',
    d:
      'a ausência de princípios dá liberdade para atender à dinâmica do mercado.',
    r: '',
  },
  {
    q: 6,
    p:
      'Segundo o psicólogo William James, para mudarmos nossos hábitos em primeiro lugar devemos:',
    a:
      'assumir um compromisso profundo de pagar o preço que for preciso par mudar o hábito.',
    b:
      'aproveitar a primeira oportunidade que aparece para fazer uso da nova prática ou habilidade.',
    c:
      'não permitir quaisquer exceções até que o novo hábito esteja firmemente enraizado em nossa natureza.',
    d:
      'interagir com o    meio, com a finalidade de analisar se estaremos dentro do contexto com a referida mudança de hábitos..',
    r: '',
  },
  {
    q: 7,
    p: 'Principal características dos líderes efetivos:',
    a: 'determinam as regras com clareza.',
    b: 'propiciam condições para a transformação.',
    c: 'exigem transformação a todo custo.',
    d: 'transformam os seus subordinados.',
    r: '',
  },
  {
    q: 8,
    p: 'Os novos profissionais devem ver a organização como:',
    a: 'um recurso, onde também deve buscar autoaprimoramento.',
    b: 'a principal responsável pela sua atualização profissional.',
    c: 'um espaço para autoafirmação profissional.',
    d: 'uma excelente oportunidade para autopromoção.',
    r: '',
  },
  {
    q: 9,
    p: 'De que setor da revista foi extraído este texto?',
    a: 'recursos humanos.',
    b: 'marketing profissional.',
    c: 'ideias e soluções.',
    d: 'administração renovada.',
    r: '',
  },
  {
    q: 10,
    p:
      'Quais os hábitos que representam uma boa forma de lidar com questões difíceis e continuar mantendo bons relacionamentos no trabalho:',
    a: 'segurança, aprendizado contínuo e empatia.',
    b: 'empatia, segurança e sinergia.',
    c: 'sinergia, empatia e interdependência.',
    d: 'interdependência, sinergia e segurança.',
    r: '',
  },
];

export default function Teste12avaliacao() {
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

  const respCertas = ['c', 'c', 'b', 'b', 'b', 'a', 'c', 'a', 'c', 'c'];

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
      numero: 12,
      prova_id: prova,
    });

    if (response.data) {
      setTesteconcluido(true);
      history.push('/avancado/teste2/resultado');
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
        numero: 12,
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

      toast.success('Teste 12 concluído com sucesso!');
      setTimeout(() => {
        setTesteconcluido(true);
        history.push('/avancado/teste2/resultado');
      }, 3000);
    } catch (error) {
      toast.error('O Teste 12 já foi finalizado!');
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
    setTimeout(() => setPlm(1050), 108700);
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
            <small>Teste 12</small>
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
            <Titulo>TESTE 12 - AVALIAÇÃO</Titulo>
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
            <Titulo>TESTE 12 - AVALIAÇÃO</Titulo>
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
