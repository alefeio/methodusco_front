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

const titulo = 'Compulsão e Obesidade';

const cred1 = 'Paul J. Kenny';

const cred2 = 'Scientific American';

const textos = [
  'Um rato se arriscaria a morrer apenas para satisfazer sua compulsão por um alimento do qual gostasse muito? Consegui responder a essa pergunta recentemente. Em meu laboratório, demos a ratos acesso ilimitado à sua ração normal e a uma "minilanchonete" repleta de alimentos apetitosos altamente calóricos: linguiça, cheesecake e chocolate. Observamos que os animais diminuíram a ingestão dos itens saudáveis - porém pouco saborosos - e passaram a consumir quase que exclusivamente a comida adicional. Resultado: os bichinhos ficaram obesos.',
  'Na sequência do experimento, enquanto comiam, nós "os avisávamos", piscando uma luz, de que receberiam um choque na patinha - leve, porém desagradável. Os ratos alimentados com a ração normal logo se distanciavam da comida, mas roedores obesos continuavam a devorar o alimento calórico com intensidade crescente, ignorando o aviso que foram treinados a temer. O desejo pelo prazer anulou o sentimento básico de autopreservação.',
  'Nossa descoberta espelha um experimento anterior, coordenado pelo neurocientista comportamental Barry Everitt, professor da Universidade de Cambridge - com a diferença de que seus ratos se tornaram dependentes de cocaína. Em casos de adição, é comum haver incapacidade de suprimir um comportamento apesar das consequências negativas. Cientistas encontram compulsão semelhante em certas pessoas. Quase todos os obesos dizem querer consumir menos, mas continuam a comer muito além do que necessitam para saciar a fome, mesmo sabendo das consequências negativas sociais e de saúde. Estudos indicam que comida em excesso sobrecarrega os sistemas de recompensa do cérebro anulando em algumas pessoas a capacidade cerebral de suspender a alimentação quando já tiveram o suficiente. Como ocorre com alcoólatras e dependentes de drogas, quanto mais consomem a substância mais a desejam. Independentemente de a gula ser ou não uma dependência química, se ela estimula os mesmos circuitos cerebrais que as drogas, então medicamentos que diminuem o sistema de recompensa poderiam ajudar os obesos.',
  'Até o início da década de 90, a obesidade costumava ser vista apenas como um distúrbio comportamental: muitos acreditavam que pessoas com sobrepeso não tinham força de vontade e autocontrole. Desde então a visão tem se alterado, pelo menos na comunidade científica.',
  'A primeira mudança de opinião surgiu com o trabalho pioneiro dos pesquisadores Douglas Coleman, do Jackson Laboratory, em Bar Harbor, Maine, e de Jeffrey Friedman, da Universidade Rockefeller. Experimentos com duas linhagens de camundongos, ambas geneticamente propensas à obesidade e ao diabetes, determinaram o que os levou a exceder na comida. Cientistas descobriram que uma linhagem apresentava uma disfunção genética nas células adiposas, que secretam um hormônio denominado leptina. Camundongos, assim como humanos, normalmente secretam leptina após a refeição para suprimir o apetite e evitar excessos. Os roedores obesos apresentavam deficiência de leptina - e, consequentemente, apetite insaciável. Mais tarde, pesquisadores descobriram que a obesidade na segunda linhagem de camundongos era provocada por um problema genético na capacidade de responder à leptina e regular sua ação. Os resultados parecem deixar claro que os hormônios controlam o apetite e, portanto, o peso corporal. Um desequilíbrio hormonal pode levar à gula. Na verdade, a obesidade é bastante comum em pessoas com deficiência genética de leptina.',
  'Duas observações sugerem que considerar a obesidade um distúrbio hormonal é um raciocínio simplista. E isso porque apenas um pequeno número de obesos, nos Estados Unidos e em outros países, exibe deficiência genética de hormônios relacionada ao apetite. Além disso, seria de esperar que os exames de sangue deles mostrassem um nível mais baixo de hormônios supressores de apetite ou um nível mais elevado de hormônios que estimulam o apetite. No entanto, o inverso é verdadeiro. Em geral, paradoxalmente, obesos apresentam nível alto de hormônios supressores de apetite, inclusive de leptina e insulina.',
  'Aqui entra em jogo o conceito de dependência alimentar. Hormônios controladores de apetite afetam certas vias neuronais - alimentando circuitos - no hipotálamo e os sistemas cerebrais que controlam a sensação de recompensa. Se alguém não se alimenta por muitas horas, quando o faz a comida "terá sabor especial". Como diz o ditado, "a fome é o melhor tempero".',
  'Durante períodos de escassez, hormônios aumentam a reatividade dos circuitos de recompensa no cérebro relacionados com os alimentos, especialmente na região cerebral chamada corpo estriado, que contém altas concentrações de endorfina - substância que aumenta a sensação de prazer e recompensa.',
  'Ao comer, estômago e intestinos liberam hormônios supressores de apetite que diminuem os sinais de prazer acionados pelo corpo estriado e por outros componentes do sistema de recompensa. Esse processo torna a comida menos atraente, permitindo desviar a atividade de comer para outras finalidades. Em parte, hormônios reguladores de apetite controlam a alimentação, modulando a experiência prazerosa. ',
  'Os alimentos apetitosos - e, muitas vezes, visualmente atraentes - aos quais temos fácil acesso atualmente, costumam ser ricos em gordura e açúcar. Eles afetam os sistemas de recompensa com força suficiente para superar os hormônios supressores de apetite, levando-nos a comer. Esses alimentos ativam os circuitos de recompensa com intensidade superior à capacidade de bloqueio da leptina. Todos já experimentamos esse efeito: ao terminar uma refeição enorme, você não aguentaria comer mais nada, mas quando vê o bolo de chocolate, milagrosamente "surge espaço" para um último bocado, o mais calórico do dia.',
  'E é aí que está a questão. Desenvolvemos um sistema cerebral eficiente para ajudar a manter um peso corporal saudável e consistente, sinalizando a hora de comer e a de parar. Mas, muitas vezes, alimentos apetitosos podem anular esses sinais, levando ao ganho de peso.',
  'O organismo humano responde ao excesso com elevação crescente dos níveis sanguíneos de hormônios supressores de apetite como a leptina e a insulina, enquanto o peso corporal aumenta. Os hormônios se tornam progressivamente menos eficazes enquanto o organismo desenvolve tolerância aos efeitos deles. Além disso, estudos de imagens cerebrais feitos por pesquisadores do Laboratório Nacional Brookhaven e do Instituto de Pesquisa do Oregon mostram que os sistemas de recompensa no cérebro de pessoas com sobrepeso respondem levemente à alimentação, até mesmo às guloseimas calóricas. Esses circuitos de recompensa abafados deprimem o humor. Como alguém pode superar isso? Comendo mais delícias para ganhar um ânimo temporário, o que perpetua o ciclo. Ou seja: obesos comem demais apenas para experimentar o mesmo grau de prazer que os magros desfrutam com a comida.',
  'Ao que parece, a obesidade não é provocada pela falta de força de vontade e nem sempre por um desequilíbrio hormonal. Em muitos casos é causada por consumo excessivo, motivado pela busca de prazer desencadeado pelas redes de recompensa no cérebro. Como drogas que causam dependência, a comida em excesso cria um ciclo de retroalimentação nos centros de recompensa do cérebro: quanto mais se consome, mais se deseja, e mais difícil fica satisfazer essa compulsão.',
  'Tolerância e recaída',
  'Drogas como a morfina estimulam o sistema de recompensa do cérebro da mesma forma que alimentos, mas as semelhanças não param por aí. Quando a morfina é injetada no corpo estriado de ratos, desencadeia excesso de consumo alimentar, mesmo em animais saciados. Essa resposta mostra que a morfina e outros opiáceos imitam os efeitos de neurotransmissores (substâncias químicas cerebrais) como endorfinas, produzidas naturalmente no cérebro para estimular comportamentos de alimentação.',
  'Poderíamos esperar, então, que drogas que bloqueiem a ação de endorfinas pudessem reduzir a gula por prazer. Estudos recentes mostram que bloqueadores de endorfina realmente diminuem a ativação dos circuitos de recompensa em humanos e roedores apresentados a comida apetitosa - os sujeitos comem menos. Bloqueadores também podem reduzir o uso de heroína, álcool e cocaína em dependentes de drogas, confirmando a ideia de que mecanismos comuns regulam excessos hedônicos e uso de drogas viciantes? Surpreendentemente, ratos com compulsão alimentar diária exibem comportamentos que se assemelham muito à crise de abstinência, sintoma típico de dependentes de drogas, depois que são tratados com bloqueadores de endorfina. Esse comportamento confirma a noção incrível de que excessos alimentares hedônicos podem induzir a estado semelhante ao de dependência de drogas.',
  'Essas descobertas dão credibilidade à ideia de que em certas circunstâncias comer demais pode partilhar características básicas da dependência de drogas. Observamos as mesmas semelhanças com outro neurotransmissor básico: a dopamina. Todas as drogas conhecidas levam à liberação de dopamina no corpo estriado. A dopamina é essencial para a motivação, estimulando a busca pela droga. A maioria dos especialistas defende que essa ação impulsiona o desenvolvimento da dependência, embora os mecanismos precisos sejam muito controversos. Acontece que alimentos apetitosos também estimulam a liberação de dopamina no corpo estriado, motivando as pessoas a se concentrar no consumo de alimentos. Estudos de imagens revelam que o corpo estriado de obesos mostra níveis baixos de um receptor que responde à dopamina, denominado receptor D2 de dopamina (DRD2). O mesmo vale para os que sofrem de alcoolismo ou de dependência de opiáceos, cocaína ou metanfetamina.',
  'Agora também sabemos que pessoas que nascem com níveis reduzidos de DRD2 têm maior risco genético de desenvolver obesidade e dependência de drogas. A condição resulta em níveis mais baixos de atividade em sistemas de recompensa no cérebro, sugerindo que podem comer em excesso, obtendo apenas o mesmo nível de prazer com a comida dos que não apresentam déficits de DRD2. Pessoas com reduzida quantidade de DRD2 também tendem a ter dificuldade em aprender a evitar ações prazerosas com consequências negativas: sistemas cerebrais envolvidos em comportamentos de risco, mas gratificantes, como o consumo de alimentos de alto teor calórico ou uso de drogas, podem não funcionar de modo tão eficaz.',
  'Nosso estudo com ratos em laboratório apoia essa ideia. Ratos obesos que consumiram a comida de lanchonete, apesar dos avisos de choque, apresentaram níveis reduzidos de DRD2 no corpo estriado. Nosso estudo e outros demonstram que o uso de drogas em ratos dependentes, e de alimentação prazerosa, em ratos obesos persiste mesmo quando os animais enfrentam consequências negativas. Muitos humanos obesos lutam tanto contra suas escolhas alimentares deficientes que se submetem voluntariamente a procedimentos potencialmente perigosos, como a cirurgia de bypass gástrico, para ajudá-los a controlar a dieta. Mas, muitas vezes, terão uma recaída ao excesso de alimentação e, portanto, ganho de peso.',
  'O ciclo de se engajar em um mau hábito prazeroso a curto prazo e depois tentar se abster dele e, por fim, ter recaída assemelha-se de modo curioso com a dependência de drogas. Parece que a obesidade é provocada por uma motivação irresistível para satisfazer os sistemas de recompensa - centros de prazer - do cérebro. Os distúrbios hormonais e metabólicos em obesos podem resultar do ganho de peso, em vez de serem a causa.',
  'As semelhanças entre a obesidade e a dependência de drogas levam alguns especialistas a dizer que as duas condições devem ser tratadas da mesma forma. Alguns recomendaram que a obesidade fosse incluída na atualização mais recente do Manual diagnóstico e estatístico de transtornos mentais - a "bíblia" da psiquiatria, que fornece diretrizes para o diagnóstico de doenças mentais, o DSM-S. Essa proposta deflagrou intenso debate entre neurocientistas, psiquiatras e psicólogos, mas foi deixada de lado, basicamente, para evitar classificar obesos como doentes mentais.',
  'O cuidado é justificado, pois, apesar das semelhanças, obesidade e dependência diferem em aspectos importantes. Se a comida é viciante, por exemplo, então certamente deveria conter algum componente especial que conduz à dependência - a nicotina de guloseimas insalubres, comparativamente falando. Trabalho de Nicole Avena, da Universidade da Flórida, do falecido Bartley Hoebel, da Universidade de Princeton, e de outros dão certa credibilidade à ideia de que gorduras ou açúcares específicos possam ser responsáveis. Um pequeno estudo de David Ludwig, do Hospital Infantil de Boston, sugere que alimentos altamente processados e carboidratos rapidamente digeríveis poderiam provocar compulsão, mas a pesquisa geral não indica um ingrediente que incentive comportamentos semelhantes à dependência. Pelo contrário, a combinação de gorduras e açúcares, juntamente com o conteúdo de calorias, parece maximizar o "impacto prazeroso" do alimento.',
  'Outros especialistas, inclusive Hisham Ziauddeen, I. Sadaf Farooqi e Paul C. Fletcher, da Universidade de Cambridge, não acreditam que a tolerância e a crise de abstinência ocorram em obesos da mesma forma que em dependentes de drogas. Argumentam que a obesidade e a dependência de drogas são fundamentalmente diferentes, mas esse ponto de vista é discutível. Se obesos devem comer cada vez mais para - superar a ativação reduzida de redes de recompensa no cérebro, isso se assemelha muito com tolerância. A perda de peso pode provocar mau humor e depressão, semelhantes aos de ex-dependentes dispostos à abstinência.',
  'Outros especialistas argumentam que toda a noção de compulsão por comida é um absurdo, pois todos somos, em certo sentido, dependentes de comida. Se não fôssemos, não sobreviveríamos. A diferença na obesidade é que alimentos modernos, de alto teor calórico, podem sobrecarregar nossas redes de feedback biológico de modo que outros alimentos não conseguem. Durante milhões de anos de evolução a maior preocupação dos humanos não era suprimir o apetite, mas caçar, coletar ou cultivar alimentos suficientes para subsistência durante os tempos de crise. Talvez nossos circuitos de alimentação sejam melhores em motivar a ingestão de alimentos quando estamos com fome que suprimir essa ingestão quando estamos saciados. É fácil imaginar que o cérebro consideraria excessos de alimentos calóricos como muito benéficos se não estivesse claro quando o alimento estaria disponível novamente. Talvez esse comportamento não seja mais adaptativo e possa até ser contraproducente em um mundo onde o alimento é abundante.',
  'Cientistas que argumentam contra um modelo de dependência para obesidade levantam questões razoáveis e eu também temo que o termo "dependência" venha carregado de preconceitos. Ainda assim, a gula compulsiva e o uso de drogas parecem compartilhar características óbvias, mais notadamente uma incapacidade de controlar o consumo. Cabe a cientistas determinar se essas semelhanças são superficiais ou se decorrem de alterações comuns, ocultas no cérebro. Mais importante será determinar se o modelo de dependência é útil. O debate é um mero exercício acadêmico, a menos que nos ajude a criar novas estratégias de tratamento.',
  'Mas, como sabemos pela recuperação de dependentes de drogas e álcool, oferecer medicação sem acompanhamento psicoterapêutico não basta, já que questões subjetivas e estímulos ambientais são o principal motivo de compulsão e recaída. E a sociedade ocidental, saturada de gordura e tentações, dificulta o afastamento do obeso da comida.',
];

let perguntas = [
  {
    q: 1,
    p:
      'Qual hormônio os camundongos, assim como humanos, normalmente secretam após a refeição para suprimir o apetite e evitar excessos?',
    a: 'Dopamina.',
    b: 'Serotonina.',
    c: 'Adenosina.',
    d: 'Leptina.',
    r: '',
  },
  {
    q: 2,
    p:
      'Como se chama a região cerebral que contém altas concentrações da substância que aumenta a sensação de prazer e recompensa?',
    a: 'Hipotálamo.',
    b: 'Corpo estriado.',
    c: 'Córtex pré-frontal.',
    d: 'Hipocampo.',
    r: '',
  },
  {
    q: 3,
    p: 'Qual é a substância que aumenta a sensação de prazer e recompensa?',
    a: 'Endorfina.',
    b: 'Leptina.',
    c: 'Serotonina.',
    d: 'Adrenalina.',
    r: '',
  },
  {
    q: 4,
    p:
      'Apesar de termos desenvolvido um sistema cerebral eficiente para ajudar a manter um peso corporal saudável e consistente, sinalizando a hora de comer e a de parar, muitas vezes, o que pode anular esses sinais, levando ao ganho de peso?',
    a: 'Doenças metabólicas.',
    b: 'Alimentos apetitosos.',
    c: 'Baixa produção hormonal.',
    d: 'Alta produção hormonal.',
    r: '',
  },
  {
    q: 5,
    p:
      'Estudos de imagens cerebrais feitos por pesquisadores do Laboratório Nacional Brookhaven e do Instituto de Pesquisa do Oregon mostram que os sistemas de recompensa no cérebro de pessoas com sobrepeso respondem levemente à alimentação, até mesmo às guloseimas calóricas. O que acontece com esses circuitos de recompensa abafados?',
    a: 'Eles aumentam a sensação de saciedade.',
    b: 'Eles diminuem a produção dos hormônios da saciedade.',
    c: 'Eles deprimem o humor.',
    d: 'Eles falham e desencadeiam a elevação dos hormônios.',
    r: '',
  },
  {
    q: 6,
    p:
      'Conforme o texto, ao que parece, em muitos casos, a obesidade é causada devido a qual fator?',
    a: 'Falta de força de vontade motivada pela depressão.',
    b: 'Por um desequilíbrio hormonal causado por alimentação inadequada.',
    c: 'Consumo excessivo motivado pela busca de prazer.',
    d: 'Depressão do sistema imunológico devido infecções.',
    r: '',
  },
  {
    q: 7,
    p:
      'Segundo o texto, qual droga estimula o sistema de recompensa do cérebro da mesma forma que alimentos?',
    a: 'Cocaína.',
    b: 'Ecstasy.',
    c: 'LSD.',
    d: 'Morfina.',
    r: '',
  },
  {
    q: 8,
    p:
      'Ratos com compulsão alimentar diária exibem qual comportamento que se assemelha muito ao sintoma típico de dependentes de drogas, depois que são tratados com bloqueadores de endorfina?',
    a: 'Crise de abstinência.',
    b: 'Aversão à comida.',
    c: 'Dessensibilização do apetite.',
    d: 'Depressão do humor.',
    r: '',
  },
  {
    q: 9,
    p:
      'De acordo com o texto, pode-se dizer que a afirmação: “As semelhanças entre a obesidade e a dependência de drogas levam alguns especialistas a dizer que as duas condições devem ser tratadas da mesma forma”, está?',
    a: 'Certa.',
    b: 'Errada.',
    r: '',
  },
  {
    q: 10,
    p:
      'A perda de peso pode provocar quais sintomas, semelhantes aos de ex-dependentes expostos à abstinência?',
    a: 'Mau humor e clareza mental.',
    b: 'Baixa imunidade e depressão.',
    c: 'Mau humor e depressão.',
    d: 'Aumento do apetite e aceleração do metabolismo.',
    r: '',
  },
];

export default function Teste3avaliacao() {
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

  const respCertas = ['d', 'b', 'a', 'b', 'c', 'c', 'd', 'a', 'a', 'c'];

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
      numero: 3,
      prova_id: prova,
    });

    if (response.data) {
      setTesteconcluido(true);
      history.push('/intermediario/teste3/resultado');
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
        numero: 3,
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

      toast.success('Teste 3 concluído com sucesso!');
      setTimeout(() => {
        setTesteconcluido(true);
        history.push('/intermediario/teste3/resultado');
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
    setTimeout(() => setPlm(600), 235000);
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

        <a href="javascript:history.back()">
          <small>&laquo; Voltar</small>
        </a>
      </Voltar>
      <Prod visivel={visiv}>
        {!plm && !testeconcluido && (
          <div>
            <Titulo>TESTE 3 - AVALIAÇÃO</Titulo>
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
