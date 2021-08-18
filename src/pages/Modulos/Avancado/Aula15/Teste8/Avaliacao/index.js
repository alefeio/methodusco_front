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

const titulo = 'O Estresse não é Ruim';

const cred1 = 'Por James Loeher';

const cred2 = 'Extraído Revista Você S.A.';

const textos = [
  'Goste ou não da ideia, o fato é que o estresse veio para ficar. Ele deixou de ser uma situação especial para se tornar um dado do dia-a-dia. Há coisas demais - trabalho, projetos, problemas, pressão, família - para tempo de menos. Estamos, pois, todos condenados ao inferno? Não necessariamente. O estresse, em si, não é o monstro que se apregoa.',
  '"Não é o trânsito, o desemprego ou o chefe mal-humorado que nos desgasta, e sim a maneira como reagimos a cada uma dessas coisas", afirma o consultor e psicólogo americano James Loehr,  autor do Livro Stress for Sucess (algo como Use o Estresse para seu Sucesso), publicado nos Estados Unidos pela editora Random House e ainda sem previsão de lançamento no Brasil. Em resumo, a tese de Loehr é a seguinte: você é o maior culpado por seu estresse. Se você o enfrenta, ele pode virar algo que trabalha a seu favor. Note que essa não é mais uma daquelas obras irritantemente teóricas, cheias de receitas e fórmulas.',
  'Loehr, psicólogo esportivo que já cuidou de tenistas espetaculares, como Pete Sampras e Monica Seles, recheia o livro de exemplos e histórias de pessoas que transformaram o estresse  em fonte de energia.',
  'Formulou-se toda uma mitologia em torno do estresse. Diz-se, por exemplo, que ele acaba com a saúde. Livrar-se dele, por sua vez, aumenta a produtividade. Na verdade, o estresse em todas as suas formas - físico, mental e emocional - é bom para você. Existe uma diferença entre a exposição ao estresse e a resposta ao estresse. A simples exposição ao estresse não tem impacto negativo nenhum - ao contrário, é o mais poderoso estímulo ao crescimento pessoal.',
  'Não é o trânsito, o desemprego ou o chefe mal-humorado que desgasta você. O que o desgasta é a resposta emocional que você dá a esses eventos.',
  'Por 22 anos, venho ajudando as pessoas a melhorar sua capacidade de responder ao estresse. Para isso, desenvolvi o que chamo de Treinamento de Força. Por "força" não pretendo dizer força bruta, mas uma energia de performance altamente direcionada. Eu a batizei de Estado de Performance Ideal (EPI).',
  'Minhas ideias sobre força vêm de minha experiência de mais de duas décadas como psicólogo esportivo, quando trabalhei com mais de uma centena de atletas, entre eles Dan Jansen, medalhista de ouro de patinação sobre o gelo, e os tenistas Pete Sampras, Sergi Bruguerra, Monica Seles, Gabriela Sabatini e Arantxa Sánchez-Vicario.',
  'Há cerca de dez anos, comecei a aplicar o Treinamento de Força em executivos, que passe a chamar de "atletas corporativos". Já apliquei esse método em profissionais de empresas de todo tipo, de finanças a cosméticos. Também o utilizei com pessoas que tomam decisões de vida ou morte, como médicos, pilotos e policiais da Swat.',
  'Sucesso com o estresse é um programa "passo a passo", de 30 dias de duração. Você pode adotá-lo. Nesse período, para que dê certo, considere-se como um atleta treinando para a Olimpíada. Nessas quatro semanas, você sentirá uma profunda transformação - vai se sentir mais forte, atingirá níveis que nunca pensou serem possíveis, seja no trabalho ou fora dele.',
  'O atleta corporativo',
  'No mundo dos negócios de hoje, a pressão é cada vez maior. Uma decisão errada pode arruinar uma companhia. Devemos realizar cada vez mais com cada vez menos. Entre 1987 e 1995, mais de 50% das companhias listadas na Fortune 1 000 sofreram downsizing - dois terços delas devem passar de novo pelo mesmo processo num futuro próximo. Uma pesquisa realizada com executivos que ganham mais de 100 000 dólares por ano revela que 60% deles acreditam que não terão mais seus empregos dentro de um ano. As novas tecnologias não aumentaram as horas de lazer. Ao contrário, o telefone celular e o fax residencial trouxeram os escritórios ainda mais para dentro de nossas vidas.',
  'Quando se lida com o estresse, a sabedoria convencional diz: reduza-o. Não trabalhe tão duro, chegue mais cedo em casa, tire férias... Especialistas sempre dizem: seja mais positivo e você terá mais sucesso. Há ainda outros meios bastante procurados, como técnicas de relaxamento e mesmo mudanças na dieta.',
  'Todos esses recursos têm decerto sua eficiência, mas, individualmente, só produzem resultados de curto prazo. Motivo: a pressão no mundo corporativo e um fato da vida, que veio para fica. A única maneira de sobreviver é encontrar uma forma de melhorar a sua capacidade de lidar com o estresse. Ou seja, é buscar uma solução de longo prazo. Para isso, você vai ter de se expor a ele e aprender a desenvolver novas respostas.',
  'O caso Dan Jansen',
  'Em 1988, às vésperas da Olimpíada de Inverno de Calgary, Dan Jansen era tido como o melhor patinador de velocidade do mundo. Às 11 h do dia da corrida dos 500 metros, a sua especialidade, ele recebeu a notícia de que sua irmã havia morrido de leucemia. A prova foi um desastre para ele, assim como o restante da competição.',
  'Nos quatro anos seguintes Jansen se recuperou e bateu duas vezes o recorde mundial dos 500 metros. Mas, quando chegou para disputar os Jogos Olímpicos de Inverno de 1992, em Albertville, a lembrança do fracasso em Calgary o atingiu e a sua atuação foi menos do que medíocre. Ele saiu arrasado. Foi quando me procurou.',
  'Fizemos uma avaliação completa do estado físico, mental e emocional de Dan Jansen. Começamos com seu padrão de gasto de energia e tempo de recuperação. Também examinamos seus períodos de relaxamento e diversão. Criamos então um programa de treinamento específico que alternava exercício intenso e tempo para recuperação.',
  'Na parte psicológica, estava claro que a morte da irmã ainda o abalava. Ele nem sequer era capaz de imaginar-se vencendo a corrida de Calgary. Nós o ajudamos a entender melhor e a controlar esses sentimentos. A meta era torná-lo capaz de atingir seu Estado de Performance Ideal (EPI). Para tanto, utilizamos exercícios de visualização, música e rituais de pré-performance. Nos Jogos de Lillehammer, em 1994. Jansen venceu cinco corridas e bateu o recorde mundial dos 500 metros três vezes.',
  'Atleta dos atletas',
  'Talvez você estranhe o fato de eu falar tanto em atleta corporativo - afinal, você pode muito bem ser um daqueles para os quais o máximo de exercício concebível é caminhar da porta de casa até o carro.',
  'Mas um executivo precisa ser muito mais do que um atleta. Um profissional dos esportes gasta de 4 a 6 horas por dia treinando - mas qual é o executivo que trabalha menos do que 10 horas por dia? E, diferentemente do atleta, o executivo não pode falhar. Qual é o chefe que vai dizer: "Tudo bem, você errou, vamos perder muito dinheiro, mas nós entendemos que você errou porque, quando tomou aquela decisão, já havia trabalhado mais de 14 horas?" Pior, o executivo trabalha praticamente sete dias por semana e dificilmente tem, como o atleta, a possibilidade de mudar de carreira.',
  'Enfrentando a verdade',
  'O principal passo do Treinamento de Força é reconhecer as suas próprias fraquezas, por mais penoso e assustador que seja esse processo. Algumas ferramentas podem ajudar a descobrir nossos defeitos. Uma série de testes simples ajuda a identificar nossas emoções e, a partir daí, tentar aprender a lidar melhor com elas.',
  'As emoções são tudo. Se não houver equilíbrio emocional, você não vai conseguir desempenhar bem nenhuma tarefa. As emoções estão no comando mesmo quando você está lendo essas páginas. Se você se sentir desafiado, a leitura fluirá. Por outro lado, se você estiver perturbado ou desconcentrado, poderá ler cada página três vezes e mesmo assim as palavras não farão sentido.',
  'Uma resposta emocional gera reações físicas. A fisiologia por trás das emoções molda o comportamento. A raiva mobiliza o corpo para o ataque, o medo faz recuar. Da mesma forma, o Estado de Performance Ideal (EPI) prepara o corpo para exprimir suas habilidades nos limites máximos.',
  'Fisiologia do estresse',
  'A emoção não está apenas na sua cabeça. Na verdade, está em cada célula de seu corpo. Uma complexa cadeia de impulsos neuroquímicos faz com que até mesmo uma célula de defesa do corpo, um linfócito, reaja a um estímulo emocional. Em vista disso, o grande desafio é aprender meios de controlar ou modificar essas respostas bioquímicas e, assim, melhorar nossa performance e nossa saúde.',
  'Muito do sucesso evolutivo da espécie humana pode ser atribuído à estratégia de, diante de uma ameaça, atacar ou fugir. Essa estratégia está inscrita em nossa programação genética.',
  'Paradoxalmente, é exatamente esse mecanismo, em larga medida responsável pela nossa sobrevivência como espécie, que procuramos combater. O guerreiro moderno não pode ser deixar mover pela raiva ou pânico. Ele tem de encontrar um novo paradigma em que o estresse e a sua recuperação esteja em equilíbrio.',
  'Retornemos por um instante ao caso de Dan Jansen. Como todos nós, ele tinha dúvidas e temores. Em sua busca pela ouro olímpico, foi um extraordinário guerreiro, pois enfrentou suas próprias emoções. Ele compreendeu que não eram as lembranças associadas à morte da irmã que o impediam de competir, mas o modo como seu corpo respondia a essas lembranças. Quando percebeu a enorme diferença que havia, foi capaz de reassumir o controle. Não é tanto o que acontece que importa, mas a forma como você reage ao que acontece.',
  'Performance ideal',
  'Em 1976, larguei um bom emprego para dedicar-me à psicologia esportiva. Naquela época praticamente não havia pesquisas relacionando performance de atletas a seu estado emocional.',
  'Passei então seis anos fazendo esta pesquisa. Depois de mais de 400 entrevistas, ficou claro que sentimentos e emoções desempenhavam um papel essencial na performance do atleta. E mais: sempre que os competidores tinham uma alta performance, reconheciam em si mesmos um estado especial de interação entre a mente e o corpo, ao qual passei a chamar de Estado de Performance Ideal (EPI). As palavras mais usadas para descrever esse estado eram: relaxado, calmo, energizado, positivo, confiante.',
  'O melhor é que o EPI não é uma resposta instintiva ou inata. Ele pode ser aprendido.',
  'O maior inimigo do atleta corporativo é a sensação de impotência. Desde a década de 60, sabe-se que o sentimento de impotência desencadeia alterações importantes na química do cérebro, que predispõem à depressão e a vários outros riscos à saúde.',
  'Embora você não tenha controle sobre eventos catastróficos em sua vida, pode mudar a forma de reagir a eles. Quando ocorrerem, não se entregue. Faça alguma coisa, qualquer coisa. Tomar uma atitude vai impedir que a sensação de impotência o consuma. Também evite culpar os outros pelo que ocorreu. Isso só acentua a sensação de impotência.',
  'Rituais',
  'Os rituais são a principal ferramenta do atleta corporativo. Onde há rituais, há valor e significado. Eles marcam acontecimentos importantes de nossas vidas. Rituais são padrões de pensamento e ação que aumentam nossa capacidade de responder adequadamente às coisas que nos acontecem, disparando as emoções que ajudam a enfrentar uma determinada situação. Com eles, é possível aumentar nosso autocontrole e dirigir nossa atenção. Podem ser extremamente reconfortantes, inclusive por dar uma sensação de segurança em ambientes hostis.',
  'São muitas as histórias de sucesso de pessoas que enfrentaram as situações mais adversas com o auxílio de rituais, de rotinas que os ajudaram a superar os momentos de estresse. Eles permitem mobilizar as energias certas para os momentos certos, fazendo com que o EPI comece a atuar quase que inconscientemente.',
  'Não se deve, contudo, confundir ritual com superstição. O primeiro é uma sequência de pensamentos e ações voluntários que melhoram nosso desempenho. As superstições, por outro lado, dependem de fatores fora de nosso controle. É fácil, por exemplo, uma pessoa supersticiosa se desesperar ao ver algo que considere um mau presságio, como o número 13. É importante estar atento para impedir que rituais se transformem em superstições.',
  'Um outro risco é adotar rituais inadequados, como o hábito de fumar ou de beber álcool. Apesar do imaginário sedutor que envolve o fumo, bem exemplificado nas longas tragadas de Humphrey Bogart nas telas de cinema, os cigarros não melhoram a performance. Eles aumentam a tensão nervosa sem proporcionar energia extra, além de causar malefícios à saúde.',
  'Do mesmo modo, o uso do álcool para relaxar pode ter consequências trágicas. O potencial dessa droga para provocar dependência química é bem conhecido. Como não fosse o bastante, ele prejudica o apetite, interfere no sono e nas funções motora e de memória. Também se podem desenvolver rituais inadequados com comida e outras drogas, como soníferos e estimulantes.',
  'Aqui vão algumas sugestões básicas que podem ajudá-lo:',
  '. procure desenvolver padrões regulares para ir para a cama e para levantar. Isso melhora o ciclo de sono e, consequentemente, o de recuperação.',
  '. exercícios são fundamentais para o equilíbrio geral. Se você não é um esportista, tente ao menos adotar alguns hábitos que envolvem atividade física, como levar o cachorro para passear ou trocar os elevadores pelas escadas.',
  '. não descuide da alimentação. Você é o que você come.',
  '. tempo para a família é fundamental. É isso que dá sentido à sua vida. Valorize as refeições familiares e planeje as suas férias em comum.',
  '. procure sempre avaliar os seus rituais e ver se as suas respostas emocionais são adequadas. Alguns truques, como dizer sempre "sim, eu sou capaz", podem ser extremamente valiosos.',
  '. identifique os rituais que podem ser melhorados e desenvolva um plano para fazê-lo.',
  'Atuação',
  'Durante anos, eu me debati contra o uso da palavra "atuar" no Treinamento de Força. Para mim, atuar era algo falso, que só se fazia no palco.',
  'Mas, depois que a fisiologia envolvida na atuação foi mais bem compreendida, me convenci de que este era exatamente o conceito que eu tentava explicar. Cada um de nós passa cerca de 90% do tempo modificando as emoções e o comportamento para ajustá-los a um script. Ninguém é totalmente transparente o tempo todo, principalmente no ambiente de trabalho.',
  'Para efeitos de explicação, podemos dizer que existem o Eu Real (a maneira como você se sente e a fisiologia daí derivada) e o Eu Atuante (o modo como você precisa se sentir para responder a uma situação). Cada vez que suas habilidades como ator são acionadas e a fisiologia muda para uma outra direção, os Eu Real e Atuante tendem a se tornar um só. Essa batalha nem sempre é fácil.',
  'O que importa aqui é treinar suas habilidades como ator para ligar ou desligar as estruturas cerebrais que controlam o fluxo das emoções. Nosso "cérebro emocional", às vezes chamado de sistema límbico, tem como principal componente a amígdala. Essa estrutura é capaz de desencadear uma resposta física para cada uma de nossas emoções. Isso acontece com ou sem a intervenção da consciência.',
  'Mesmo sabendo que é impossível ser apanhado por um dinossauro, por exemplo, você é capaz de sentir medo ao assistir ao filme Parque dos Dinossauros. Mais surpreendente ainda: pesquisas recentes indicam que basta mover seus músculos faciais como se estivesse com raiva, medo etc. para fazer com que as respectivas reações fisiológicas sejam acionadas de verdade. É esse mecanismo que faz com que a capacidade de atuar seja tão útil para o controle das emoções. A atuação ajuda inclusive a controlar reações como fobia de avião, raiva no trânsito e medo de falar em público.',
  'Atores experientes utilizam basicamente duas formas de interpretar uma emoção. A primeira é a imaginação dirigida, que consiste, por exemplo, em se lembrar de um acontecimento triste real para encenar a tristeza. A segunda é a atuação dirigida, ou seja, acionar os músculos faciais e lembranças da tristeza para fazer com que a amígdala dispare os padrões fisiológicos da tristeza.',
  'A diferença entre um bom ator e um canastrão é que o bom ator consegue transformar a emoção registrada no script em um estado físico real. Quanto mais familiar for um sentimento, mais fácil será dispará-lo por vontade própria - e vice-versa. Pessoas que, por exemplo, não choram com facilidade, terão mais dificuldade para encenar a tristeza do que pessoas que choram com frequência. No nosso caso, a meta é exercitar o EPI para que ele esteja disponível sempre que necessário.',
  'Preparação mental',
  'Qualquer pensamento ou imagem mental cria um impulso neurológico que tem consequências de curto e de longo prazo. Pensamentos novos podem estimular o surgimento de novos circuitos cerebrais.',
  'Pensamentos constantemente repetidos se tornam mais fortes e mais acessíveis. Ficar repetindo, por exemplo, que você odeia seu chefe faz com que isso se torne uma crença que afeta o seu humor e comportamento. Isso decerto não ajuda ninguém.',
  'É possível, no entanto, mudar suas crenças por intermédio de afirmações. Dan Jensen, por algum motivo, odiava a prova dos 1 000 metros. Ele só se inscrevia nela para efeito de treinamento. Nos seis meses que antecederam os Jogos de Lillehammer, fiz com que ele escrevesse todos os dias eu seu diário de treinamento: "Eu amo os 1 000 metros". É claro que ele achava isso uma idiotice, mas,  três meses depois, Jensen admitiu a contragosto que não odiava tanto essa prova. Seis semanas antes de Lillehammer, finalmente admitiu que gostava dos 1000 metros. Resultado: acabou ganhando a medalha de outro nessa competição.',
  'Siga o exemplo: enumere as coisas que você mais odeia fazer. Vamos supor que você deteste falar em público. Procure redirecionar seu processo de pensamento escrevendo todos os dias: "Eu gosto de falar em público". Se fizer isso com seriedade e confiança, quanto mais vezes você repetir essas palavras, mais forte será o seu novo circuito cerebral.',
  'Pensamento positivo',
  'Em 1992, Richard Davidson descobriu que sentimentos positivos e negativos têm origem em áreas diferentes do cérebro O lobo pré-frontal esquerdo está associado a euforia, felicidade e bom humor. O lobo direito, por sua vez, à depressão e à repugnância. O bloqueio do hemisfério direito ativa o lado esquerdo e provocar risos no paciente. Essas descobertas explicam por que o hábito do pensamento positivo tem efeitos tão profundos na vida das pessoas.',
  'Treino diário',
  'Procure, todas as manhãs, dedicar pelo menos 10 minutos a um treinamento mental. Ele deve se tornar uma espécie de ritual, como escovar os dentes, Encontre um ambiente tranquilo, com ou sem música. Se você escolher a música, prefira instrumental, que evoque energia positiva. Concentre-se em sua respiração até se sentir relaxado.',
  'Procure então visualizar imagens do que você quer que se torne realidade. Quanto mais vívida for a imagem, melhor - para o seu cérebro uma imaginação vívida é tão real quanto uma situação concreta. Com 20 ou 30 dias de prática, as mudanças emocionais começam a acontecer de verdade.',
  'Procurando o estresse',
  'O cérebro funciona como um músculo. Quanto mais você o exercita, mais ele cresce. A exposição ao estresse é necessária e essencial para melhorar o potencial de performance.',
  'Assim sendo, proteger-se do estresse não o tornará mais forte - ao contrário, desligar a chave do estresse é desligar a chave geral. Um dos períodos mais críticos da vida são os seis meses imediatamente posteriores á aposentadoria.',
  'Um dos agentes antienvelhecimento mais poderosos que existem é o estresse. Se quisermos manter nossa capacidade funcional por toda a vida, temos de nos expor ao estresse ao longo de toda a vida.',
  'Experiências difíceis nos tornam mais fortes. Tudo é uma questão de resposta bioquímica. Se você muda sua percepção, a química também muda. Se você passa a ver o trânsito como uma oportunidade para estar sozinho e refletir, e não como um obstáculo, todo o estresse negativo do congestionamento desaparece. Mas cuidado. Você não pode exceder sua capacidade de resistência. Se isso acontecer, sua percepção das coisas se tornará automaticamente negativa. E o único meio de aumentar sua capacidade e resistência é expor-se progressivamente a episódios de estresse, seguidos de períodos de completa recuperação.',
  'E como se descobre o ponto certo? A sensação de desconforto é o sinal de que você está exercitando sua capacidade. A sensação de dor, por sua vez, é o sinal de que você chegou ao seu limite e deve parar, dar um tempo para recuperar-se. E como se reconhece a dor em termos emocionais? Sensações muito intensas de tristeza, raiva, impotência ou insegurança são os sinais de alerta. Ignorar esses sinais é como tapar o para-brisa de seu carro e sair dirigindo a toda velocidade.',
  'Aumentar sua tolerância ao estresse físico aprofundará sua tolerância a todo tipo de estresse. E a melhor forma de aumentar a sua capacidade é com a exposição intermitente ao estresse. Note que altos níveis de estresse não significam alto risco de adoecer. A exposição intermitente a sensações de raiva, hostilidade ou medo não é um problema. Essas sensações só se tornam tóxicas para o organismo quando são prolongadas. Assim é importante estar sempre se expondo ao estresse para aumentar a sua capacidade de superá-lo.',
  'Existem, porém, várias formas de se expor ao estresse, algumas mais úteis do que outras para o atleta corporativo. De acordo com nossa experiência, o executivo se beneficia especialmente de exercícios abdominais, exposição aeróbica seguida de anaeróbica e exercícios para aumentar a massa muscular e melhorar a flexibilidade.',
  'Recuperação',
  'Quando uma pessoa passa por um colapso nervoso, normalmente se atribui a culpa ao estresse. Na verdade, o que falhou foram os mecanismos de recuperação dessa pessoa. Uma das descobertas mais fascinantes de minha carreira foi perceber que o intervalo entre os pontos no tênis pode ser utilizado pelo atleta para se recuperar do estresse.',
  'Mais do que 25 segundos jogados fora, esse período pode ser uma variável fundamental para o futuro da partida. Os melhores atletas seguem rituais de pensamento e atuação que os envolvem numa onda de recuperação mental, física e emocional.',
  'A palavra que melhor traduz o sentido de recuperação é "alívio". Tanto o estresse como a recuperação são eventos bioquímicos. Estresse e gasto de energia. Recuperação e restauração de energia. Essa recuperação pode ser obtida tanto por estratégias passivas (meditação, sono, cochilos) como por estratégias ativas (correr, falar, fazer ioga). Exemplo: vamos supor que eu peça para você ficar andando por muitas horas seguidas. Andar vai se tornar penoso. A energia gasta é estresse e a dor é distresse. Então, eu peço para você sentar. Isso lhe traz alívio imediato. A dor desaparece. Sentar torna-se recuperação. Mas sentar-se é tão doloroso quanto andar. Sair da cadeira traz alívio. Agora, andar é que é recuperação.',
  'Karoshi é a palavra japonesa para designar a morte por excesso de trabalho. Ela vem na forma de ataque cardíaco, pressão alta, suicídio, câncer e várias outras doenças relacionadas ao estresse.',
  'Estresse sem um tempo para a recuperação pode ser falta - e o alívio é a marca da recuperação. No caso da recuperação física, a tensão muscular se reduz. Na recuperação emocional, há a sensação de alegria e segurança. Na mental, calma e aumento da criatividade.',
  'Existe uma hierarquia na recuperação. Necessidades fisiológica, como comida e água, vêm antes de necessidades psicológicas do tipo amor e segurança. É por isso que os rituais diários de sono, alimentação e exercício são tão importantes. Junto com comer, beber e respirar, dormir é a mais importante atividade de recuperação. Pesquisas relacionam maiores taxas de mortalidade tanto para os que dormem pouco (menos de 7 horas) como para os que dormem muito (mais de 10 horas). A quantidade de sono necessária para cada pessoa varia, mas está em algum lugar entre 7 e 9 horas para um adulto. O sono apresenta várias fases, cada uma delas desempenhando um papel importante na recuperação.',
  'A idade afeta o sono. Quanto mais jovem, maior a necessidade de dormir. Estar em boa forma física também é importante. Quanto mais em forma você estiver, mais rapidamente você se recupera, necessitando de períodos menores de sono. Procure não se exercitar nas duas horas anteriores a se preparar par dormir. O exercício libera hormônios estimulantes.',
  'A dieta também é importante. Evite estimulantes, como café e chocolate. O álcool também tem efeitos devastadores sobre o sono, mesmo em pequenas quantidades. O cochilo no meio da tarde também pode ser extremamente reparador.',
  'Em termos de alimentação, procure se regular. Muitas refeições leves durante o dia mantem o nível de energia e reduzem a obsessão por comida. Nunca dispense o café da manhã. Fique longe de dietas. Normalmente, assim que elas acabam os problemas reaparecem. Reduz os níveis de gordura e sal e evite as frituras. Beba pelo menos oito copos de água por dia.',
  'Em relação a exercícios, a melhor hora é o meio da tarde. Vinte a 30 minutos por dia é a duração mínima. Vale tudo que envolva gastar energia, de andar a jardinagem. Procure variar a rotina de exercícios.',
  'O humor também pode e deve ser praticado. Ria sempre que possível, pelo menos 50 vezes por dia (o número médio de risadas em um adulto é 25).',
  'Outra excelente forma de recuperação é a música. Já no sexto século antes de Cristo, Pitágoras utilizava a música para restabelecer a harmonia entre corpo e alma. Recentes descobertas científicas dão sustentação a esse uso. A música interfere nos batimentos cardíacos e na respiração e tem influência sobre o neo-córtex e o sistema límbico. Grave uma fita com a música que tem mais influência sobre o seu humor e utilize sempre, no escritório, -quando a situação fica difícil, ou no trânsito.',
  'Oscilação',
  'O segredo para o equilíbrio é a oscilação. Excesso de estresse sem recuperação e excesso de recuperação sem gasto de energia tornam-se disfuncionais. Muitos problemas de saúde podem ser atribuídos à incapacidade de oscilar. A seguir algumas dicas para ajudá-lo a oscilar:',
  '. procure andar enquanto fala ao telefone.',
  '. evite reuniões intermináveis. Mantenha intervalos a cada duas hora.',
  '. nunca deixe o trabalho invadir a sua casa. Desenvolva técnicas para não pensar em problemas do trabalho quando está com a família. Se você tem filhos, envolva-se em suas brincadeiras.',
  'Energia',
  'Energia e emoções têm a mesma fisiologia. Aprender a lidar com emoções é aprender a lidar com energia e estresse. Uma pessoa pode descrever sua energia em termos de quantidade (de muito alta a muito baixa) e de qualidade (agradável ou desagradável, positiva ou negativa). Quando você se sente com muita energia positiva, você está no EPI. As sensações são de desafio, inspiração, de estar vivo. Você também pode estar se sentindo sem muita energia, mas a disponível é positiva - as sensações, então, são as de calma, alívio. Quando a energia é alta e negativa, você está em estado de ataque ou fuga. Medo e raiva são as sensações dominantes. Para pouca energia, e ainda por cima negativa, os sentimentos são de tristeza, depressão, solidão.',
  'Para aprender a controlar sua energia, faça um balanço de como você se sente mais ou menos a cada 2 horas. Anote os resultados. Se o seu estado mais frequente é de energia baixa e negativa, seu desempenho está bem abaixo do potencial e você pode estar cometendo grandes erros no trabalho. Os estados de baixa energia, seja ela negativa ou positiva, são estados de recuperação. O ideal é estar oscilando entre os estados de alta e baixa energia positiva, o Estado de Performance Ideal e o Estado de Recuperação Ideal. Estados de alta energia negativa são até necessários de tempos em tempos, mas, se eles se prolongam, os custos são mito altos para a saúde.',
  'Empregue as técnicas de utilização de rituais, atuação e preparação mental para passar a maior parte do tempo com energia positiva, seja ela alta ou baixa.',
  'Chegando em casa',
  'Costumo usar a metáfora de chegar em casa pra resumir os principais conceitos deste livro. Chegar em casa é reordenar sua vida para obter mais saúde, felicidade e produtividade. Chegar em casa é encarar a verdade em relação a suas maiores fraquezas e fazer algo concreto para modificá-las.',
  'Chegar em casa e aceitar a realidade de que cada dia é uma batalha para estar no controle de suas emoções. Chegar em casa e melhorar sua capacidade e responder aos fatos da vida da forma mais inteligente possível. Chegar em casa é conectar o que você faz todo dia com os seus valores e crenças mais profundos. Chegar em casa é sentir-se bem com as mudanças - a única constante real da vida corporativa. Chegar em casa é aceitar e respeitar as conexões entre as cosias. Chegar em casa é compreender e aceitar o fato de que todo tempo é um tempo sagrado.',
  'Há mais: chegar em casa é atribuir importância ao passado e ao futuro, mas compreendendo que a vida é vivida no presente. Chegar em casa é desenvolver rituais que o coloquem em harmonia com o mundo e que melhorem sua capacidade de agir em ambientes de alto estresse. Chegar em casa é pensar e atuar com precisão. Chegar em casa é buscar o estresse. Chegar em casa é estruturar sua vida afim de que você tenha os períodos de recuperação necessários para estar sempre em equilíbrio. Chegar em casa é aceitar o fato de que as emoções comandam o show. Chegar em casa, por fim, é aprender a amar a batalha.',
];

let perguntas = [
  {
    q: 1,
    p: 'O que significa a sigla EPI?',
    a: 'Estado Programático Ideal.',
    b: 'Estado Proteico Ideal.',
    c: 'Estado de Performance Ideal.',
    d: 'Estado de Perfeição Ideal.',
    r: '',
  },
  {
    q: 2,
    p: 'O ator se refere ao conceito de "força" como:',
    a: 'força bruta praticada em alguns esportes.',
    b: 'apenas uma energia.',
    c: 'uma energia de performance direcionada.',
    d: 'um conceito ligado a filosofia oriental.',
    r: '',
  },
  {
    q: 3,
    p: 'Qual dos agentes antienvelhecimento é o mais poderoso?',
    a: 'o estresse.',
    b: 'a preocupação.',
    c: 'a expectativa.',
    d: 'a competição.',
    r: '',
  },
  {
    q: 4,
    p:
      'Se nós excedermos a capacidade de resistência, automaticamente as percepções das coisas se tornarão:',
    a: 'negativas.',
    b: 'incoerentes.',
    c: 'enfadonhas.',
    d: 'instigantes.',
    r: '',
  },
  {
    q: 5,
    p:
      'Ao passar por um colapso nervoso, geralmente atribui-se a culpa ao estresse, no entanto as falhas estão:',
    a: 'nos sintomas ligados à ansiedade.',
    b: 'nos mecanismos de recuperação.',
    c: 'nas manifestações de intolerância frente aos problemas.',
    d: 'nas reações desencadeadas pelo organismo.',
    r: '',
  },
  {
    q: 6,
    p:
      'Qual é a palavra que melhor traduz o sentido de recuperação do organismo?',
    a: 'alívio.',
    b: 'prazer.',
    c: 'plenitude.',
    d: 'integração corpo-mente.',
    r: '',
  },
  {
    q: 7,
    p: 'Podemos definir o estresse como:',
    a: 'insatisfação.',
    b: 'irritação generalizada.',
    c: 'gasto de energia.',
    d: 'não realização dos objetivos.',
    r: '',
  },
  {
    q: 8,
    p: 'Karoshi é uma palavra japonesa que significa:',
    a: 'satisfação ao realizar trabalho.',
    b: 'desintegração causada pelo estresse.',
    c: 'interação consciente com a mente.',
    d: 'morte por excesso de trabalho.',
    r: '',
  },
  {
    q: 9,
    p:
      'No mundo corporativo a única forma de sobreviver ao estresse é encontrar uma forma de:',
    a: 'melhorar a capacidade de lidar com o estresse.',
    b: 'fazer um acompanhamento médico.',
    c: 'praticar esporte diariamente.',
    d: 'fazer dieta e exercícios respiratórios.',
    r: '',
  },
  {
    q: 10,
    p: 'Qual o novo paradigma que o homem moderno precisa aprender?',
    a: 'o equilíbrio entre o estresse e a sua recuperação.',
    b: 'integração entre trabalho e aprendizagem contínua.',
    c: 'identificar pontos de competência x incompetência.',
    d: 'integração entre trabalho e vida pessoal.',
    r: '',
  },
];

export default function Teste18avaliacao() {
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

  const respCertas = ['c', 'c', 'a', 'a', 'b', 'a', 'c', 'd', 'a', 'a'];

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
      numero: 18,
      prova_id: prova,
    });

    if (response.data) {
      setTesteconcluido(true);
      history.push('/avancado/teste8/resultado');
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
        numero: 18,
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

      toast.success('Teste 18 concluído com sucesso!');
      setTimeout(() => {
        setTesteconcluido(true);
        history.push('/avancado/teste8/resultado');
      }, 3000);
    } catch (error) {
      toast.error('O Teste 18 já foi finalizado!');
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
    setTimeout(() => setPlm(1350), 214600);
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
            <small>Teste 18</small>
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
            <Titulo>TESTE 18 - AVALIAÇÃO</Titulo>
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
            <Titulo>TESTE 18 - AVALIAÇÃO</Titulo>
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
