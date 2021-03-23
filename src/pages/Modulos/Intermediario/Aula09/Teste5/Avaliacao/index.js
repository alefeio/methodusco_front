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

const titulo = 'A Ciência Pode Deter o Tempo';

const cred1 = 'Karen Weintraub';

const cred2 = 'Scientific American';

const textos = [
  'A maioria das pessoas mais idosas vive seus últimos anos com pelo menos uma ou duas doenças crônicas, como artrite, diabetes, cardiopatia e acidente vascular cerebral. Quanto mais o relógio corporal funciona, mais condições incapacitantes se revelam. Por tradição, patologias ligadas ao envelhecimento são tratadas conforme surgem, mas um pequeno grupo de cientistas tem apostado numa abordagem nova e ousada. Eles acreditam que é possível deter ou até mesmo retroceder o cronômetro interno para que todas essas doenças apareçam mais tarde ou nem mesmo cheguem ao organismo.',
  '"Estudos sobre centenários sugerem que a façanha é possível. A maioria dessas pessoas vive tanto tempo porque de alguma forma evitam a maior parte das doenças que sobrecarregam outras aos 70 e 80 anos", afirma Nir Barzilai, diretor do Instituto de Pesquisas sobre o Envelhecimento da Faculdade de Medicina Albert Einstein. Ele observa que a incomum longevidade de um centenário não resulta, necessariamente, em declínio mais longo que o de outras pessoas no fim da vida. Na verdade, pesquisas com centenas de "superidosos" sugerem exatamente o oposto. Para eles, a doença costuma aparecer mais tarde. "Eles vivem, vivem, vivem e depois, um dia, morrem. Simples assim", diz Barzilai.',
  'Pesquisadores já desenvolveram várias técnicas para aumentar o tempo de vida de leveduras, vermes, moscas, ratos e símios. Adaptar essas medidas para pessoas parece ser o próximo passo lógico. "A transposição para humanos é complexa, mas há um consenso emergente de que está na hora de levar o que aprendemos sobre o envelhecimento e começar a traduzir isso em auxílio para humanos", sugere Brian Kennedy, presidente do Instituto Buck de Pesquisas sobre o Envelhecimento, um grupo independente em Novato, Califórnia.',
  'Em todo o mundo, cerca de 44 milhões sofrem de demência. Esse número deverá chegar a 76 milhões em 2030 e a 135 milhões em 2050, com insuficiente quantidade de pessoas mais jovens para cuidar deles. Dentre os tratamentos estudados, três se destacam. Ainda não é claro se os potenciais benefícios superam seus riscos.',
  'Há dez anos, em um estudo, Thomas Rando, diretor do Centro Paul F. Glenn de Biologia do Envelhecimento, da Universidade Stanford, mostrou que um camundongo idoso cuja corrente sanguínea foi cirurgicamente ligada a outro, mais jovem, recuperou a capacidade de cicatrização que tinha na juventude. De alguma forma, ainda não completamente esclarecida, as células-tronco do roedor mais velho - responsáveis pela reposição de células velhas ou danificadas - tornaram-se mais eficazes em dar origem a um tecido novo.',
  'Com base nesse estudo, a bióloga Amy Wagers, pesquisadora da Universidade Harvard, descobriu uma proteína no sangue, a GDF11, que pode ter contribuído para a cicatrização mais rápida. Seus experimentos, publicados na Science, revelaram que a proteína é mais abundante em camundongos jovens que nos mais velhos; quando injetada em roedores idosos, a GDF11 restaura a estrutura dos músculos e proporciona mais força. Porém, um novo estudo publicado no periódico científico Cell Metabolism coloca essa descoberta em xeque, sugerindo que a GDF11 aumenta com a idade (e pode até inibir a restauração muscular). E, portanto, algum outro fator, ainda não identificado, deve fazer as células agirem como se fossem mais jovens.',
  'A segunda abordagem consistiu no exame de cerca de 20 fármacos e suplementos nutricionais atuais em um nível de detalhe que nunca havia sido possível antes. A proposta era investigar se eles realmente podem afetar o processo de envelhecimento. Pesquisadores da Universidade de Cardiff, no País de Gales, por exemplo, relataram em 2014 que pacientes com diabetes do tipo 2 que tomavam o medicamento metformina viviam em média 15% mais que um grupo de pessoas sadias que não tinham o transtorno metabólico, mas eram semelhantes em quase todos os outros aspectos. Cientistas especulam que a metformina interfere em um processo normal do envelhecimento, a glicação, no qual a glicose se combina com proteínas e outras moléculas importantes, o que causa a resinação (endurecimento e degradação dos tecidos). A constatação sobre a metformina é especialmente notável, pois diabéticos, mesmo com a doença controlada, normalmente vivem um pouco menos que pessoas sadias, nas mesmas condições.',
  'Enquanto isso, em um estudo com 218 adultos publicado no ano passado na Science Translational Medicine, pesquisadores da Novartis mostraram que o everolimus, semelhante à rapamicina (usada para prevenir rejeição em transplantes de rim), melhorou a eficácia da vacina contra gripe em pessoas com mais de 65 anos. Quando envelhecemos, nosso sistema imune não cria uma resposta de anticorpos tão forte para o vírus inativado na vacina como no passado; assim, ficamos mais propensos a adoecer caso nos deparemos com um vírus. Pacientes que no estudo receberam o everolimus mostraram uma concentração mais elevada de anticorpos de combate aos microrganismos no sangue que seus homólogos não tratados. A descoberta foi interpretada como sinal de que o fármaco, de alguma forma, rejuvenesceu o sistema imune dos participantes do estudo.',
  'Assim como acontece com qualquer fármaco, os efeitos colaterais revelam problemas. Membros do grupo tratado eram mais propensos ao desenvolvimento de aftas, o que pode limitar a utilidade geral do medicamento para o tratamento do envelhecimento. O custo pode ser outro fator; o everolimus, aprovado pela FDA (Administração de Alimentos e Medicamentos dos Estados Unidos) pelas propriedades anticancerígenas, custa mais de US$ 7 mil por mês em doses adequadas. Ainda não se sabe quanto ele custaria para o consumidor final e o tempo necessário de uso se fosse indicado como droga antienvelhecimento.',
  'No entanto, resultados sugerem que o envelhecimento pode ser retardado. Na verdade, o everolimus e outros medicamentos semelhantes à rapamicina mostraram estender drasticamente o tempo de vida de camundongos, prevenindo doenças como o câncer e revertendo alterações relacionadas à idade em relação ao sangue, fígado, metabolismo e sistema imune.',
  'Uma terceira abordagem envolve a alimentação. Há muito tempo se mostrou que a restrição de consumo de calorias ajuda camundongos a viver mais tempo, mas não está tão claro se a limitação de ingestão de alimentos (sem provocar desnutrição) também beneficia humanos. Por um lado, muito poucos podem ou querem manter essas dietas de baixa caloria pelas décadas necessárias para provar definitivamente se essa abordagem funciona - principalmente considerando que há probabilidade de essas medidas drásticas serem ineficientes. O pesquisador Valter Longo, diretor do Instituto de Longevidade da Universidade do Sul da Califórnia, mostrou que é possível estender o tempo de vida de camundongos simplesmente limitando sua comida em dias alternados, ou reduzindo a quantidade de proteína consumida pelos animais. Esse jejum intermitente pode vir a ser mais palatável para as pessoas, embora seus benefícios permaneçam sem comprovação.',
  'Quantos Anos a Mais? Sem dúvida, viver mais pode ter suas vantagens. Rejuvenescer células velhas significa que elas se dividirão novamente. A divisão controlada representa juventude, e a descontrolada, câncer. Mas cientistas ainda não têm certeza se conseguem obter uma sem a outra.',
  'Descobrir o momento certo para o tratamento também é complicado. Se o objetivo é prevenir as várias doenças do envelhecimento, você iniciaria uma terapia dessas ao primeiro sinal de doença? "Quando o problema aparece, é realmente difícil colocar tudo de volta no lugar. É mais eficiente apostar na prevenção e manter as pessoas sadias", afirma Brian Kennedy. Então, pode fazer mais sentido começar o tratamento anos mais cedo, durante uma sadia meia-idade, mas pesquisas necessárias para comprovar essa suposição levariam décadas.',
  'Se várias doenças podem ser adiadas, a próxima pergunta é por quanto tempo isso seria possível. James Kirkland, que dirige o Centro do Envelhecimento Robert e Arlene Kogod, da Clínica Mayo, em Rochester, Minnesota, avalia que levará pelo menos mais uns 20 anos para responder a essa pergunta. Em laboratórios, cientistas têm estendido com êxito oito vezes a vida de vermes e acrescentado um ano à de ratos de 3 anos. Mas esses avanços permitirão às pessoas viver um século ou mesmo uns 30 anos a mais? Ou ainda que seja um ano ... A extensão da vida nos humanos é propensa a ser mais modesta que a de leveduras, vermes, moscas e camundongos. Pesquisas anteriores sugeriram que animais de "ordem inferior" se beneficiam ao máximo de iniciativas de longevidade - como as leveduras, por exemplo, ganhando maior benefício em experimentos de restrição calórica que mamíferos. "Quanto mais perto se chega dos humanos, menor o efeito na expectativa de vida", observa Rando. E que magnitude de benefício alguém precisa para justificar fazer - e pagar - esse tratamento? "Vale a pena tomar um remédio durante toda a vida na esperança de viver 4% ou 7% a mais?", questiona o pesquisador.',
  'Os cientistas que trabalham com estudos sobre antienvelhecimento fazem algo para retardar os efeitos da passagem do tempo em si mesmos? A meia dúzia de cientistas entrevistados para este artigo disse que faz esforços balanceados para estender a própria vida. Um era grato pelo diagnóstico de pré-diabetes, que significou uma receita legítima para a metformina. Todos os especialistas dizem que tentam levar uma vida saudável para suportar a carreira profissional de muita pressão. Tentam chegar perto de oito horas de sono, comer quantidades moderadas de alimentos nutritivos e fazer bastante exercício. Nenhum deles fuma. A maioria das pessoas, no entanto, não segue esses hábitos saudáveis. A maior ironia seria descobrir que a pílula não é, afinal, mais eficaz que os hábitos saudáveis que já ignoramos.',
];

let perguntas = [
  {
    q: 1,
    p:
      'A maioria das pessoas mais idosas vive seus últimos anos com pelo menos quantas doenças crônicas, tais como - artrite, diabetes, cardiopatia e acidente vascular cerebral?',
    a: 'Uma ou duas.',
    b: 'Duas ou três.',
    c: 'Três ou quatro.',
    d: 'Nenhuma.',
    r: '',
  },
  {
    q: 2,
    p:
      'O que afirma Nir Barzilai, diretor do Instituto de Pesquisas sobre o Envelhecimento na Faculdade de Medicina Albert Einstein, sobre o que resulta na incomum longevidade de um centenário?',
    a:
      'Resulta devido ao declínio mais longo que o de outras pessoas no fim da vida.',
    b: 'Resulta do aparecimento tardio da doença.',
    c: 'Resulta da menor intensidade das doenças que acometem estes idosos.',
    d: 'Resulta do fato de não terem doenças ao final da vida.',
    r: '',
  },
  {
    q: 3,
    p: 'Em todo o mundo, quantas pessoas sofrem de demência?',
    a: 'Cerca de 135 milhões.',
    b: 'Cerca de 76 milhões.',
    c: 'Cerca de 44 milhões.',
    d: 'Cerca de 23 milhões.',
    r: '',
  },
  {
    q: 4,
    p:
      'Há dez anos, em um estudo, Thomas Rando, diretor do Centro Paul F. Glenn de Biologia do Envelhecimento da Universidade Stanford, mostrou que um camundongo recuperou a capacidade de cicatrização que tinha na juventude. Como ele fez isso?',
    a: 'A medula do camundongo idoso trocada com a de outro mais jovem.',
    b: 'O camundongo idoso recebeu os hormônios de outro mais jovem.',
    c:
      'As células-tronco do camundongo idoso foram trocadas com as de outro mais jovem.',
    d:
      'A corrente sanguínea do camundongo idoso foi cirurgicamente ligada a de outro mais jovem.',
    r: '',
  },
  {
    q: 5,
    p:
      'A bióloga Amy Wagers, pesquisadora da Universidade Harvard, descobriu qual proteína no sangue que pode ter contribuído para a cicatrização mais rápida?',
    a: 'A GDF11.',
    b: 'A GBF11.',
    c: 'A GDB11.',
    d: 'A GFD11.',
    r: '',
  },
  {
    q: 6,
    p:
      'Pesquisadores da Universidade de Cardiff, no País de Gales relataram que pacientes com diabetes do tipo 2 que tomavam qual medicamento viviam em média 15% mais que um grupo de pessoas sadias que não tinham o transtorno metabólico, mas eram semelhantes em quase todos os outros aspectos?',
    a: 'Metilalamina',
    b: 'Metformina.',
    c: 'Metamina.',
    d: 'Metiamina.',
    r: '',
  },
  {
    q: 7,
    p: 'O que é a glicação?',
    a:
      'Processo no qual a glicose se combina com proteínas e outras moléculas importantes.',
    b:
      'Processo no qual a glicose se combina com vitaminas e outras moléculas importantes.',
    c:
      'Processo no qual a glicose se combina com sais minerais e outras moléculas importantes.',
    d:
      'Processo no qual a glicose se combina com gorduras e outras moléculas importantes.',
    r: '',
  },
  {
    q: 8,
    p: 'Como é chamado o processo de endurecimento e degradação dos tecidos?',
    a: 'Hirtamento.',
    b: 'Rigidez tardia.',
    c: 'Resinação.',
    d: 'Calcificação.',
    r: '',
  },
  {
    q: 9,
    p:
      'Qual o nome do medicamento que os pesquisadores da Novartis mostraram que provocou melhora na eficácia da vacina contra gripe em pessoas com mais de 65 anos?',
    a: 'Everolimus.',
    b: 'Rapamicina.',
    c: 'Minesiun.',
    d: 'Constatina.',
    r: '',
  },
  {
    q: 10,
    p: 'Segundo o texto, o quê representa a divisão controlada das células?',
    a: 'Câncer.',
    b: 'Sincronia.',
    c: 'Organização.',
    d: 'Juventude.',
    r: '',
  },
];

export default function Teste5avaliacao() {
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

  const respCertas = ['a', 'b', 'c', 'd', 'a', 'b', 'a', 'c', 'a', 'd'];

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
      numero: 5,
      prova_id: prova,
    });

    if (response.data) {
      setTesteconcluido(true);
      history.push('/intermediario/teste5/resultado');
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
        numero: 5,
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

      toast.success('Teste 5 concluído com sucesso!');
      setTimeout(() => {
        setTesteconcluido(true);
        history.push('/intermediario/teste5/resultado');
      }, 3000);
    } catch (error) {
      toast.error('O Teste 5 já foi finalizado!');
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
    setTimeout(() => setPlm(700), 132000);
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
            <small>Teste 5</small>
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
            <Titulo>TESTE 5 - AVALIAÇÃO</Titulo>
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
            <Titulo>TESTE 5 - AVALIAÇÃO</Titulo>
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
