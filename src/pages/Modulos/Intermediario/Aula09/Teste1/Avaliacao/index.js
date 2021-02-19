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

const titulo = 'O Que é, Afinal, o Talento?';

const cred1 = 'Por Marcus Buckingham';

const cred2 = 'Revista Exame';

const textos = [
  'A resposta a essa questão revela o que você tem em comum, provavelmente não sabe, com Michael Jordan, Robert De Niro...',
  'Normalmente, associamos o talento apenas à excelência celebrada - com forte ênfase na palavra "celebrada". Observamos Michael Jordan, correndo e passando pelos adversários a caminho da cesta, e sabemos que nem seu treinamento nem sua determinação férrea constituem a fonte primeira de seu brilho. Ele pode ter ambas as coisas, mas a maioria dos outros jogadores da NBA também as tem.',
  'Por si, essas coisas não podem explicar o brilho de Jordan. No fundo, sabemos que a arma secreta dele é seu talento. Olhamos para Robert De Niro e pensamos o mesmo: ele tem talento. Tiger Woods, Jay Leno, Maya Angelou, todos eles fazem parte do clube do talento. São dotados de uma dádiva secreta. Para a maioria de nós, o talento parece ser coisa rara e preciosa, concedida a pessoas especiais e distantes. Essas pessoas com talento são diferentes. Elas não são "como nós".',
  'Os grandes administradores discordam dessa definição de talento. Ela é estreita e especializada demais. Em vez disso, eles definem o talento como "um padrão recorrente de pensamento, sentimento ou comportamento que pode ser aplicado de maneira produtiva". A ênfase aqui está nas palavras "recorrente".',
  'Seu talento, dizem eles, são os comportamentos que você assume com frequência. Você tem um filtro mental que peneira seu mundo, forçando-o a prestar atenção a alguns estímulos, enquanto outros passam despercebidos por você. Sua capacidade instintiva de lembrar nomes, em vez de apenas rostos, é um talento. Sua necessidade de pôr em ordem alfabética sua prateleira de temperos e colocar um código de cores em seu guarda-roupa é um talento. Da mesma forma que seu amor pelas palavras cruzadas, ou sua fascinação pelo risco ou sua impaciência.',
  'Quaisquer padrões recorrentes de comportamento que possam ser aplicados de maneira produtiva são talentos. A chave do desempenho excelente, é claro, consiste em combinar seus talentos com seu papel.',
  'Essa definição de talento é decepcionantemente neutra, quase branda. Ainda assim, ela orienta os grandes administradores em direção a uma importante descoberta: todo papel, desempenhado com excelência, exige determinados padrões recorrentes de pensamento, sentimento ou comportamento. Isso significa que grandes enfermeiras têm talento. O mesmo ocorre com grandes caminhoneiros e grandes professores, grandes zeladores e grandes comissárias de bordo. "Celebrada" ou anônima, os grandes administradores sabem que é impossível alcançar a excelência sem o talento.',
  'Para a maioria dos papéis, a sabedoria convencional aconselha os administradores a selecionarem com base na experiência, na inteligência e na determinação. O talento, se chegar a ser mencionado, será uma reflexão posterior. A sabedoria convencional diz que:',
  '. a experiência faz a diferença: os administradores que atribuem uma ênfase especial à experiência prestam mais atenção ao histórico e trabalho do candidato. Eles estudam cuidadosamente o currículo da pessoa, avaliando as empresas que a empregaram e o tipo de trabalho que ela faz. Eles consideram seu passado com uma janela para seu futuro.',
  '. o poder cerebral faz a diferença: esses administradores acreditam na inteligência bruta. Eles dizem que, desde que você seja inteligente, pode "imaginar" a maioria dos papéis. As pessoas inteligentes simplesmente "imaginam as coisas" melhor do que o resto. Ao selecionarem as pessoas, elas tendem a favorecer os candidatos articulados com brilhantes registros acadêmicos.',
  '. a força de vontade faz a diferença: essa é a escola de pensamento de "o sucesso é 10% inspiração e 90% transpiração". Os administradores que seguem essa escola acreditam que a parte técnica da maioria dos papéis pode ser ensinada, ao passo que o desejo de realizar, de persistir diante dos obstáculos, não pode. Ao selecionarem as pessoas, eles procuram provas passadas de fortaleza e caráter.',
  'Até aí, os grandes administradores concordariam com todos os componentes desse conselho - a experiência pode ensinar lições valiosas; a inteligência é uma dádiva; e a força de vontade, que os grandes administradores realmente consideram um talento, é quase impossível de ensinar.',
  'Mas a sabedoria convencional para por aqui: ela deixa de levar em consideração que haja tantos outros tipos de talentos e que os talentos certos, mais do que a experiência, mais do que o poder cerebral e mais do que a força de vontade, sozinhos, constituem os pré-requisitos da excelência em todos os papéis - talentos como a capacidade de um garçom em formar opiniões, a empatia das enfermeiras, a atitude positiva dos vendedores ou, nos administradores, a capacidade de individualizar.',
  'A sabedoria convencional pressupõe ou que esses comportamentos podem ser adquiridos por treinamento depois que a pessoa é contratada ou que essas características são relativamente sem importância para o desempenho no trabalho.',
  'Ambas as suposições são falsas. Primeiro, não se pode ensinar talento. Não se pode ensinar a pessoa a ter opiniões fortes, a sentir as emoções dos outros, a divertir-se na confrontação ou a perceber as sutis diferenças de como administrar cada pessoa. O processo de seleção deve procurar talentos como esses.',
  'Segundo, talentos como esses provam ser uma força que impulsiona o desempenho da pessoa no trabalho. Não que a experiência, a inteligência a força de vontade não tenham importância. Apenas que a totalidade dos talentos da pessoa - o que a motiva, como ela pensa, como forma relacionamentos - é mais importante.',
  'Não importa o cuidado que se tome para selecionar a experiência, a inteligência ou a força de vontade, no final ainda se acabará com uma faixa de desempenho.',
  'Uma empresa de transportes rodoviários relata que, em média, seus motoristas percorrem 200.000 quilômetros e sofrem quatro acidentes por ano - embora um de seus melhores motoristas tenha acabado de comemorar 1,6 milhão de quilômetros rodados sem um único acidente.',
  'Há uma faixa de desempenho em todo papel, não imortal quão simples ele seja. Embora tanto a experiência quanto a inteligência e a força de vontade afetem o desempenho de maneira significativa, só a existência dos talentos certos (padrões recorrentes de comportamento que se adequam ao papel) é que é responsável por essa faixa de desempenho.',
  'Só a existência de talentos pode explicar por que, em igualdade de condições, algumas pessoas apresentam um desempenho excelente num papel enquanto outras enfrentam grande dificuldade.',
  'Tomemos um exemplo extremo em que os candidatos são cuidadosamente selecionados de acordo com a experiência, inteligência e força de vontade. Eles foram treinados com perícia e, mesmo assim, o desempenho viria muito de um para outro.',
  'O general de brigada Don Flickinger enfrentou um dos desafios de administração mais assustadores da história. Ele tinha de encontrar e treinar sete homens para desempenhar um papel extremamente difícil. Ninguém jamais havia desempenhado esse papel antes e cada homem teria a oportunidade de fazê-lo apenas uma vez. Os valores em jogo eram muito altos. Se esses homens fossem bem-sucedidos, restaurariam a fé da América em si mesma. Se fracassassem, alimentariam a dilatada autoconfiança do bloco oriental.',
  'Como faria qualquer administrador, o general dedicou muito tempo e energia para encontrar os homens certos para o trabalho. Primeiro estabeleceu seus critérios mínimos: eles não poderiam ter mais de 39 anos e mais de 1,80 m de altura. Teriam de estar em excelentes condições físicas e ser formados por uma academia militar de pilotos de prova com pelo menos 1.500 horas de experiência de voo em aviões a jato.',
  'Depois de aprovados, todos os candidatos foram submetidos aos exames físicos e psicológicos mais rigorosos. O general acabou por encontrar seus sete homens: Alan Shepard, Gus Grisson, John Glenn, Scott Carpenter, Wally Schirra, Gordon Cooper e Deke Slayton. Encontrou os sete astronautas do programa espacial Mercury.',
  'E como qualquer bom administrador, depois de encontrá-los, treinou-os. Foi-lhes ensinado tudo, dos princípios da gravitação e da propulsão de foguetes até o assunto bem prático de controlar uma guinada, o movimento de rotação e a arfagem no vácuo do espaço. Eles tiveram os melhores professores, o equipamento mais atualizado e o tempo para focalizar. Em dois anos adquiriram uma riqueza de novas habilidades e conhecimento.',
  'Em 5 de maio de 1961 eles estavam prontos. O voo suborbital de 15 minutos de Shepard foi a primeira de suas missões bem-sucedidas. Deke Slayton foi impedido por uma doença cardíaca preexistente), que culminou com a maratona de 34 horas e 22 órbitas de Gordon Cooper. Quando Cooper amerissou em 17 de maio de 1963, os americanos já tinham alcançado os russos, o orgulho da América fora restaurado e se havia construído a plataforma para o salto para a Lua.',
  'De quase qualquer ângulo, o programa MISS (Homem no Espaço o Mais Breve Possível) foi um modelo de excelência na execução de um projeto: tecnologia superior combinada com empregados cuidadosamente selecionados e bem treinados, todos concentrados numa missão específica e sustentados pelas esperanças de uma nação. Não é de admirar que tivesse alcançado êxito.',
  'Mas olhemos mais de perto. Quando examinamos o Programa Mercury por uma lente estritamente empresarial, o que vemos não é um projeto perfeito. São seis missões muito diferentes. E se pusermos de lado por um momento a dimensão espetacular do empreendimento e a bravura inspiradora de todos os astronautas, a qualidade do desempenho de cada uma das missões pode ser classificada de maneira comparativa: duas foram comuns, duas heroicas e duas medíocres. Olhemos mais de perto ainda e perceberemos que, na maioria dos casos, foram os próprios astronauta que causaram essa variação.',
  'Alan Shepard e Wally Schirra, militares de carreira, executaram duas funções com perfeição: nenhum drama, nenhuma surpresa, missões executadas de acordo com o manual. John Glenn e Gordon Cooper eram um pouco especiais. Glenn era o herói dos heróis. Cooper era tão descontraído que realmente chegou a dormir na plataforma de lançamento. Mas ambos enfrentaram sérias dificuldades mecânicas e reagiram com heroico sangue-frio e brilhante perícia técnica - Cooper até conseguiu fazer a mais precisa amerissagem de todas, apesar da falha total os sistemas de direção de reentrada.',
  'Os desempenhos de Gus Grissom e de Scott Carpenter foram bem menos expressivos. Grissom fez um voo correto, mas aparentemente entrou em pânico depois que sua cápsula amerissou. Parece que ele abriu cedo demais a escotilha de escape e a cápsula, de aproximadamente 1.360 kg, encheu de água, mergulhando para o fundo do oceano 4.800 m abaixo.',
  'Carpenter, por sua vez, estava tão entusiasmado de estar no espaço que manobrou tanto sua nave em órbita a ponto de quase ficar sem combustível. Quando chegou a hora de reentrar na atmosfera da Terra, ele não conseguiu fazer as correções apropriadas de ângulo e acabou por amerissar a mais de 400 quilômetros do lugar original de pouso. Ele teve sorte. Se o seu ângulo de aproximação tivesse sido um pouco menor, teria ricocheteado na atmosfera e seria lançado ao espaço para a  eternidade.',
  'A NASA deve ter absorvido o desempenho de seus astronautas e perguntado: "Por que essa faixa de desempenho? Selecionamos com vistas na experiência, inteligência e determinação. Todos eles receberam o mesmo treinamento e as mesmas ferramentas. Então, por que não tiveram o mesmo desempenho? Por que Cooper foi excelente enquanto Carpenter enfrentou dificuldades: Por que Glenn comportou-se com tanta calma, enquanto Grisson foi menos ponderado?"',
  'A resposta é que, embora se assemelhassem em muitos aspectos - e todos alcançaram realizações excepcionais, em comparação a resto de nós -, esses seis homens possuíam talentos diferentes.',
  'O que isso significa: significa que embora todos enfrentassem os mesmos estímulos, a forma como reagiram a esses estímulos e, em consequência disso, como se comportavam, era muito diferente. Durante a órbita, Carpenter estava tão excitado que não podia parar de brincar com os jatos de altitude. Já Cooper sentia-se tão calmo que na verdade dormiu em algumas de suas órbitas. No lançamento, a pulsação de Grisson disparou para 150, enquanto a de Glenn nunca foi além de 80.',
  'Mesmos estímulos, reações muito diferentes. Por quê? Porque cada homem filtrava o mundo de maneira diferente. O filtro mental de cada um classificava e peneirava os acontecimentos, fazendo com que um tivesse consciência acurada de estímulos para os quais o outro era cego.',
  'Balançando na água após a amerissagem, o confiável Wally Schirra estava tão concentrado em "fazer as coisas corretamente" que permaneceu na cápsula por quatro horas para completar todas as etapas de sua rotina pós-voo. Seu filtro mental bloqueou quaisquer pontadas de claustrofobia. Já o de Gus Grisson não fez isso. Tudo indica que no máximo cinco minutos depois de tocar a água, ele se sentiu oprimido pela pequena cápsula. Seu filtro mental, já sem conseguir refrear o crescente pânico, disse-lhe para sair, escapar, agora, agora. A escotilha foi aberta.',
  'Você tem um filtro, um modo característico de reagir ao mundo que o cerca. Todos nós temos. Seu filtro lhe diz que estímulos notar e quais ignorar; quais deles amar e quais odiar. Ele cria suas motivações inatas. Você é competitivo, altruísta ou guiado pelo ego? Ele define seu modo de pensar. Você é disciplinado ou adota o laissez-faire, raciocina de maneira prática ou estratégica? Ele forja suas atitudes prevalecentes - você é otimista ou cínico, calmo ou ansioso, empático ou frio? Ele cria em você todos os seus padrões distintos de pensamento, sentimento e comportamento. Com efeito, seu filtro é a fonte de seus talentos.',
  'Seu filtro é único. Ele classifica cada estímulo e cria um mundo que só você vê. Esse filtro e responsável pelo fato de que o mesmo estímulo produz reações amplamente diferentes em você e na pessoa a seu lado. Imagine, por exemplo, que você esteja dormindo num longo voo quando o avião passa por uma forte turbulência. Você acorda convencido de que o principal motivo de não haver recebido nenhuma explicação da cabine de comando é que os pilotos estão ocupados demais, afivelando os paraquedas? Ou permanece dormindo, com um vigoroso balançar de cabeça como o único sinal de que seu corpo está notando os solavancos?',
  'Imagine-se ainda discutindo com seu chefe. À medida que a discussão se intensifica, você se torna mais frio, claro e articulado, com sua mente entregando uma palavra perfeita depois da outra? Ou, apesar de todos os preparativos, sua emoção aumenta e sua mente se fecha, separando-o de todas aquelas palavras cuidadosamente ensaiada?',
  'Como cada ser humano é guiado por seu filtro singular, a mesma situação produz reações muito diferentes. O que é de uma facilidade ridícula para um, e de uma dificuldade martirizante para outro. O que é estimulante para você é tedioso para outra pessoa.',
  'Todos os caminhoneiros enfrentam a mesma situação - quilômetros de estrada, carga pesada e difícil de manejar e enxames de carrinhos zumbindo à sua volta. Todos têm o mesmo treinamento, a mesma experiência. Mas  alguns desses motoristas dirigirem o dobro de quilômetros de seus colegas e, mesmo assim, sofrem metade dos acidentes. Por quê? Por causa de seu filtro. Quando perguntamos aos melhores motoristas "em que você pensa quando está dirigindo?", todos dizem a mesma coisa. Todos dizem: "Penso no que eu faria se... se aquele carro começasse a andar agora mesmo. Se aquele pedestre resolvesse atravessar a rua antes da mudança de sinal. Se eu perdesse o freio". Enquanto os outros motoristas estão pensando na próxima parada para descanso, na distância que ainda têm de percorrer no dia ou em outros assuntos mais dispersivos ainda, os melhores motoristas estão jogando jogos de "e se?" - antecipando cenários. planejando manobras evasivas. Mesmos estímulos, reações diferentes, desempenho muito diferente.',
  'Da mesma forma, todos os representantes de serviço ao cliente enfrentam a mesma situação - milhares de telefonemas chegando de clientes insatisfeitos. Todos esses representantes dispõe da mesma tecnologia, têm a mesma experiência e o mesmo treinamento. Ainda assim, os melhores dão um terço a menos de telefonemas para solucionar o mesmo tipo de reclamação. Por quê? Porque para os melhores, muitos dos quais são tímidos pessoalmente, o telefone é um instrumento intimidante. Ele lhes fornece abrigo do cliente ao mesmo tempo em que lhes proporciona a oportunidade de alcançá-lo e contratá-lo com maior rapidez e proximidade do que se estivessem face a face com o cliente. Eles imaginam o aposento em que o cliente se encontra. Imaginam a aparência do cliente. Eles sorriem e gesticulam com as mãos mesmo sabendo que o cliente não poderá ver o que estão fazendo. De maneira instintiva, o filtro deles pega cada voz sem corpo e cria um ser humano completo. No outro lado da linha, o cliente sente a diferença.',
  'Essa filtragem do mundo não é um processo consciente, racional. Não ocorre uma vez por semana, permitindo-lhes o luxo de recostar-se e pesar todas as alternativas antes de decidir pelo curso de ação mais "razoável". Ao contrário, o filtro deles está sempre em funcionamento, classificando, peneirando, criando-lhes o mundo em tempo real.',
  'Seu filtro está sempre em funcionamento. De todas as coisas que você pode fazer ou sentir, seu filtro está constantemente a lhe dizer as que você tem de fazer, sentir ou pensar, Seu filtro, mais do que sua raça, sexo, idade ou nacionalidade, é você.',
  'Se você odeia conhecer novas pessoas, você pode quebrar o gelo com estranhos? Se você se afasta assustado do confronto , pode-se fazer com que aprecie a rapidez do debate? Se as luzes fortes o fazem suar, será possível ensinar-lhe a emocionar-se com o desafio de falar em público? É possível esculpir novos talentos?',
  'Muitos gerentes e muitas empresas supõem que a resposta para todas essas perguntas seja "sim". Com a melhor das intenções, eles dizem a seus empregados que todos têm o mesmo potencial. Elas incentivam seus empregados a manter uma atitude de abertura e a se dedicar a aprender novos meios de se comportar. Para ajudá-los a subir na hierarquia da empresa, elas mandam seus empregados para aulas de treinamento destinadas a ensinar-lhes todos os tipos de novos comportamentos - empatia, atitude positiva, formação de relacionamentos, inovação, pensamento estratégico. Da perspectiva delas, uma das qualidades mais admiráveis que um empregado pode ter é a vontade de transformar-se a si próprio por intermédio do aprendizado e da autodisciplina.',
  'Os grandes administradores do mundo não compartilham essa perspectiva. Lembre-se do mantra deles: as pessoas não mudam tanto. Não perca tempo tentando colocar para dentro o que foi deixado de fora. Tente retirar o que foi deixado dentro. Isto é suficientemente árduo.',
  'Eles creem que os talentos das pessoas , o filtro mental delas, são "o que foi deixado dentro". Portanto, nenhuma quantidade de treinamento na "escola de sorrisos" transformará as pessoa que se intimida com estranhos num insinuante galanteador. Apesar de seus melhores esforços, a pessoa que se torna menos articulada à medida que mais se irrita jamais adquirirá as qualidades necessárias para um desempenho excelente no debate. E não importa o quanto compreenda o valor dos cenários "vencer-vencer", a pessoa muito competitiva jamais aprenderá a amá-los.',
  'O filtro mental da pessoa e tão durável e único quanto as suas impressões digitais. Essa e uma crença radical que contraria décadas de mitologia de autoajuda. Mas nos últimos 10 anos a neurociência começou a confirmar aspectos em que esses grandes administradores sempre acreditaram.',
];

let perguntas = [
  {
    q: 1,
    p: 'Qual a definição de talento feita pelos grandes administradores?',
    a: 'O padrão de comportamento que desempenhamos com maestria.',
    b:
      'Um padrão recorrente de pensamento, sentimento ou comportamento que pode ser aplicado de maneira produtiva.',
    c: 'As tarefas que realizo com facilidade independente da aptidão.',
    d: 'Fator hereditário combinado com realização pessoal.',
    r: '',
  },
  {
    q: 2,
    p:
      'A chave do desempenho excelente consiste na combinação de dois elementos, quais são?',
    a: 'talento com o papel que se desempenha.',
    b: 'talento e motivação.',
    c: 'inspiração e trabalho.',
    d: 'personalidade e empenho',
    r: '',
  },
  {
    q: 3,
    p:
      'A sabedoria convencional aconselha aos administradores a selecionarem os candidatos com base em quais aspectos:',
    a: 'inteligência, sabedoria e intenção.',
    b: 'experiência, inteligência e determinação.',
    c: 'realização pessoal, carisma e determinação.',
    d: 'talento, experiência e entusiasmo.',
    r: '',
  },
  {
    q: 4,
    p: 'A sabedoria convencional não considera que:',
    a: 'os talentos certos não podem ser adquiridos através do treinamento.',
    b: 'pode-se ensinar talento.',
    c:
      'a experiência, a inteligência e a determinação são aspectos cruciais para o desempenho.',
    d: 'o processo ao realizar a tarefa.',
    r: '',
  },
  {
    q: 5,
    p:
      'Os administradores afirmam que a experiência, a inteligência e a força de vontade têm importância, no entanto é:',
    a:
      'a totalidade dos talentos da pessoa - o que motiva, como ela pensa, como forma relacionamentos - é mais importante.',
    b: 'a motivação e a personalidade possuem importância crucial.',
    c:
      'o desempenho é o ponto chave para revelar o talento, portanto a pessoa deve primeiramente realizar a tarefa para posteriormente ser avaliada.',
    d: 'através do treinamento que podemos desenvolver o talento.',
    r: '',
  },
  {
    q: 6,
    p:
      'Todos nós temos um filtro, um modo característico de reagir ao mundo, ele cria em cada ser humano:',
    a: 'a mesma percepção da realidade.',
    b:
      'o que molda os padrões de comportamento de acordo com a cultura que fomos criados.',
    c: 'as oportunidades que criamos na nossa existência.',
    d: 'todos os padrões distintos de pensamento, sentimento e comportamento.',
    r: '',
  },
  {
    q: 7,
    p:
      'De acordo com a perspectiva de muitos gerentes e muitas empresas uma das qualidades mais admiráveis que um funcionário pode ter é:',
    a: 'a busca da realização pessoal, tendo como base o sucesso da empresa.',
    b:
      'a vontade de transformar-se através do aprendizado e da autodisciplina.',
    c:
      'o empregado possuir como premissa os objetivos da empresa acima da realização pessoal.',
    d: 'ter equilíbrio para conciliar vida pessoal e profissional.',
    r: '',
  },
  {
    q: 8,
    p:
      'Os grandes administradores estão convictos: as pessoas não mudam tanto. Não perca tempo tentando colocar dentro o que foi deixado de fora. Tente retirar o que foi deixado dentro. O que eles se referem com a expressão o que foi deixado dentro é:',
    a: 'talentos e o filtro mental.',
    b: 'realização pessoal e empenho.',
    c: 'disciplina e talento.',
    d: 'convicção pessoal e poder de persuasão.',
    r: '',
  },
  {
    q: 9,
    p: 'O título da matéria é:',
    a: 'Talento e a nossa realização pessoal?',
    b: 'Identifique o seu talento!',
    c: 'O que é, afinal, o talento?',
    d: 'Não perca tempo, descubra o seu talento!',
    r: '',
  },
  {
    q: 10,
    p: 'Este texto foi extraído da revista:',
    a: 'Exame.',
    b: 'Isto É.',
    c: 'Época.',
    d: 'SuperInteressante.',
    r: '',
  },
];

export default function Teste1avaliacao() {
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

  const respCertas = ['b', 'a', 'b', 'a', 'a', 'd', 'b', 'a', 'c', 'a'];

  const settings = {
    dots: true,
    // fade: true,
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
      numero: 1,
      prova_id: prova,
    });

    if (response.data) {
      setTesteconcluido(true);
      history.push('/intermediario/teste1/resultado');
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
        numero: 1,
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

      toast.success('Teste 1 concluído com sucesso!');
      setTimeout(() => {
        setTesteconcluido(true);
        history.push('/intermediario/teste1/resultado');
      }, 3000);
    } catch (error) {
      toast.error('Erro ao concluir o Teste 1. Tente novamente!');
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
    setTimeout(() => setPlm(500), 379800);
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
            <small>Teste 1</small>
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
            <Titulo>TESTE 1 - AVALIAÇÃO</Titulo>
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
            <Titulo>TESTE 1 - AVALIAÇÃO</Titulo>
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
