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

const titulo = 'Sabor Tropical';

const cred1 = 'Cleide Novelli Campos';

const cred2 = 'Revista Vida e Saúde';

const textos = [
  'Com sua exuberante quantidade de nutrientes e vitaminas, a manga virou uma fruta bem brasileira.',
  'Uma das coisas mais encantadoras é o rostinho lambuzado e a expressão de felicidade de uma criança saboreando suculenta manga. Essa fruta, rica em vitaminas e outros elementos importantes para o nosso organismo, tem sido difamada por conta de preconceitos e tabus. Um deles é considerá-la veneno quando misturada ao leite. Isso não passa de superstição. Existe até uma história por trás dessa mentira.',
  'Segundo os historiadores, a conversa de que "manga com leite faz mal" surgiu no tempo dos escrevamos. Como usavam mangas em abundância na alimentação, os grandes fazendeiros espalharam essa mentirinha, como meio de impedir que os negros consumissem leite, produto valioso na época. Por isso, persiste essa ideia errada.',
  'Há também a falsa informação de que manga é uma fruta pesada e indigesta, especialmente se ingerida no desjejum ou à noite. Segundo o Dr. Agostinho Bettarello, professor de gastroenterologia da Universidade de São Paulo (USP), "algumas pessoas se queixam talvez pelo fato de a manga ser um pouco gordurosa e fibrosa". Quem se ressente disso, diz ele, "deveria consultar um médico para avaliar suas condições digestivas".',
  'Pode ser que se considere a manga indigesta devido às fibras, pois, como qualquer outra fibra vegetal, elas não são digeridas pelo organismo. Mas, em vez de prejudicar, têm grande importância como auxiliares dos movimentos peristálticos intestinais.',
  'Originárias da Ásia, possivelmente da Índia, as mangueiras foram trazidas ao Brasil por volta do século 16 pelos portugueses, que as levaram para a nascente colônia de Pernambuco. São daquela época as seculares e frondosas mangueiras que ainda embelezam as avenidas de Belém do Pará.',
  'Árvore frondosa e exuberante, a mangueira pertence à família das anacardiáceas. Em sua imponência, pode atingir de 10 a 30 metros de altura. Isso no caso das que produzem naturalmente. As cultivadas não passam de 2 metros.',
  'A mangueira também apresenta copa densa, com folhas duras e pequenas, e flores coloridas que variam do alvacento até o amarelo-esverdeado. Seu fruto tem polpa carnosa, por vezes de cor amarela em variados tons. As principais variedades são: manga-rosa, espada, bourbon, coração-de-boi, carioquinha, haden e carlota.',
  'Essa planta frutífera de clima tropical é pouco exigente em matéria de solo. Planta-se no inverno, de preferência de mudas enxertadas. Pode-se também plantar a semente. A diferença é que a muda frutifica em dois ou três anos, conservando as boas características da planta-mãe. Isso não acontece com a árvore de semente que, além de não manter a qualidade de sua precedente, leva de cinco a seis anos para frutificar.',
  'Propriedades medicinais - as vitaminas do complexo B, presentes em boa quantidade nas suculentas mangas, fazem parte das enzimas digestivas e da absorção dos nutrientes. Sua carência no organismo torna impossível a ingestão equilibrada de carboidratos e proteínas, causando falta de apetite, fadiga, apatia e transtornos no crescimento.',
  'A manga possui, ainda, boa quantidade de um mineral bastante útil ao equilíbrio dos líquidos no corpo: o potássio. É verdade que ela perde para o abacate, a banana, a laranja e o mamão em potássio. Mas sua quantidade na manga é muito significativa. Nesse particular, recentes pesquisas sugerem que o potássio pode ter ação anticancerígena. Fósforo, magnésio e ferro, em menores quantidades, também marcam presença nessa fruta deliciosa. Eles entram na composição dos músculos, sangue, ossos, dentes e hormônios.',
  'Já as fibras são famosas por seu papel no bom desempenho dos intestinos. Por passarem praticamente ilesas pelo aparelho digestivo humano, agem como verdadeiras vassouras intestinais, limpando sem agredir esse sistema essencial para a boa saúde. O volume do material a ser eliminado é que torna mais densa a parede intestinal, provocando a eliminação de todo detrito indesejado. As fibras também ajudam a baixar o nível de colesterol sanguíneo, essa perigosa gordura que entope as arteiras do coração.',
  'O principal valor da manga está em seu alto teor vitamínico, principalmente de vitaminas A e C, variando, no caso da C, conforme a qualidade da manga. A rosa, por exemplo, é a que possui a mais elevada quota. Da vitamina A, cuja matéria-prima é o betacaroteno, se sabe atualmente que é o melhor combatente dos radicais livres. Os radicais livres são considerados a ferrugem do corpo, provocando o envelhecimento precoce, arteriosclerose, osteoporose e condições propícias para muitas outras enfermidades. Devido ao alto teor de vitamina A, a manga é um excelente antioxidante do organismo.',
  'Além das vitaminas A e C, a manga possui as vitaminas B1, B2 e B5. Contém ainda fósforo, cálcio, ferro, proteínas, gorduras e hidratos de carbono. Seu uso é recomendado em casos de bronquite e escorbuto, sendo depurativa do sangue.',
  'As cascas da mangueira podem ser usadas contra as hemorragias uterinas, leucorreias e sarna. A resina extraída do tronco é usada como depurativa contra disenteria e sífilis. O suco dos galhos, como antidiarreico. As folhas novas atuam contra a asma. Com a polpa dos frutos pode-se preparar medicamentos peitorais. Com as cascas, decocções para tratamento das cólicas em geral.',
  'Fazendo a decocção das folhas, prepara-se um chá para combater bronquites e doenças da boca. O chá do caroço é usado contra lombrigas e parasitas. O Dr. Teófilo Uchoa, citado no livro A Cura e a Saúde pelos Alimentos, da Casa Publicadora Brasileira, aconselha comer mangas em jejum pela manhã para combater a acidez e outras enfermidades do estômago.',
];

let perguntas = [
  {
    q: 1,
    p: 'Misturar manga com leite é considerado um veneno, essa afirmação:',
    a: 'não está fundamentada, mas é indigesto.',
    b: 'não passa de superstição.',
    c: 'é um equívoco.',
    d: 'é justificada cientificamente.',
    r: '',
  },
  {
    q: 2,
    p:
      'Segundo os historiadores, a conversa de que manga com leite faz mal surgiu quando?',
    a: 'no tempo dos escravos.',
    b: 'na crise de 1929.',
    c: 'no tempo dos egípcios.',
    d: 'antes de Cristo.',
    r: '',
  },
  {
    q: 3,
    p: 'As mangueiras são originadas de que país?',
    a: 'Brasil.',
    b: 'EUA.',
    c: 'Índia.',
    d: 'Itália.',
    r: '',
  },
  {
    q: 4,
    p: 'Pode ocorrer que se considere a manga indigesta em função de conter:',
    a: 'muitos nutrientes.',
    b: 'muitas fibras.',
    c: 'muita frutose.',
    d: 'fibras e frutose.',
    r: '',
  },
  {
    q: 5,
    p: 'As fibras têm grande importância como auxiliares:',
    a: 'na produção da bílis.',
    b: 'da digestão.',
    c: 'na produção de enzimas.',
    d: 'nos movimentos peristálticos intestinais.',
    r: '',
  },
  {
    q: 6,
    p: 'A carência de vitaminas do complexo B provoca:',
    a: 'irritabilidade, sonolência e aumento do nível de colesterol.',
    b: 'insônia, cansaço, apatia.',
    c: 'agitação, terror noturno, cegueira.',
    d: 'fadiga, apatia e transtornos no crescimento.',
    r: '',
  },
  {
    q: 7,
    p:
      'O principal valor da manga está em seu alto teor vitamínico, principalmente de:',
    a: 'vitamina A.',
    b: 'vitamina A e C.',
    c: 'vitamina B.',
    d: 'vitamina  E.',
    r: '',
  },
  {
    q: 8,
    p: 'A manga é rica em que mineral?',
    a: 'magnésio.',
    b: 'sódio.',
    c: 'potássio.',
    d: 'fósforo.',
    r: '',
  },
  {
    q: 9,
    p: 'Os radicais livres são considerados a ferrugem do corpo, provocando:',
    a: 'envelhecimento precoce, arteriosclerose e osteoporose.',
    b: 'anemia, edema e osteoporose.',
    c: 'distúrbios gástricos, arteriosclerose, pressão alta.',
    d: 'problemas de circulação, edema, envelhecimento precoce.',
    r: '',
  },
  {
    q: 10,
    p: 'Qual é a vitamina que melhor combate os radicais livres?',
    a: 'A.',
    b: 'B.',
    c: 'C.',
    d: 'D.',
    r: '',
  },
];

export default function Teste2avaliacao() {
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

  const respCertas = ['b', 'a', 'c', 'b', 'a', 'd', 'b', 'c', 'a', 'a'];

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
      numero: 2,
      prova_id: prova,
    });

    if (response.data) {
      setTesteconcluido(true);
      history.push('/intermediario/teste2/resultado');
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
        numero: 2,
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

      toast.success('Teste 2 concluído com sucesso!');
      setTimeout(() => {
        setTesteconcluido(true);
        history.push('/intermediario/teste2/resultado');
      }, 3000);
    } catch (error) {
      toast.error('O Teste 2 já foi finalizado!');
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
    setTimeout(() => setPlm(550), 98000);
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
            <small>Teste 2</small>
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
            <Titulo>TESTE 2 - AVALIAÇÃO</Titulo>
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
            <Titulo>TESTE 2 - AVALIAÇÃO</Titulo>
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
