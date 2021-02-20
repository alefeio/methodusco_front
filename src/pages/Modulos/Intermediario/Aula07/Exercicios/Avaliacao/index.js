import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import history from '~/services/history';

import api from '~/services/api';

import {
  updateProvaRequest,
  // updateEmProvaRequest,
  updateFimProvaRequest,
} from '~/store/modules/usuario/actions';

import icoConcluido from '~/assets/ico-concluido.jpg';

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
  Asterisco,
  Span,
} from './styles';

const hrInicio = Date.now();

export default function Exerciciosavaliacao(props) {
  const [perfil, setPerfil] = useState();
  const [prova, setProva] = useState();
  const [minimo, setMinimo] = useState();
  const [maximo, setMaximo] = useState();
  const [contador, setContador] = useState(1);
  const [bloco, setBloco] = useState(0);
  const [conc, setConc] = useState(false);
  const [top, setTop] = useState(1);
  const [left, setLeft] = useState(-10000000);

  const id = parseInt(props.match.params.id);

  const aula = 7;

  const titulo1 = {
    titulo: '10 maneiras de proteger seu dinheiro de você',
    cred1: 'Tiago Mali',
    cred2: 'Revista Galileu',
  };

  const titulo2 = {
    titulo: 'As Armadilhas da Autoestima',
    cred1: 'Jennifer Crocker',
    cred2: 'Revista Scientific American',
  };

  const titulo3 = {
    titulo: 'Mente Sã, Corpo são, Carreira idem',
    cred1: 'Jim Loehr',
    cred2: 'Você Exame',
  };

  const titulo4 = {
    titulo: 'Metamorfose no trabalho',
    cred1: 'Tiago Cordeiro e Tiago Mali',
    cred2: 'Revista Galileu',
  };

  const titulo5 = {
    titulo: 'Cérebro Turbinado',
    cred1: 'Thorsten Galert',
    cred2: 'Revista Scientific American',
  };

  const titulo6 = {
    titulo: 'Registros Evolutivos',
    cred1: 'Georges Chapouthier',
    cred2: 'Revista Mente Cérebro',
  };

  const texto1 = [
    {
      p1:
        'A ciência garante: quando o assunto é grana, nosso cérebro costuma nos trair. Entenda o que está errado em suas decisões e cuide melhor das suas finanças. Nem bem o 13º entrou, você já gastou em compras desnecessárias. Ou pior: pegou um empréstimo no banco antecipando o pagamento e, em vez de dinheiro a mais, chegou ao fim do ano com outra dívida. Você não é exceção, mas parte de uma regra cruel cada vez mais estudada por cientistas: ganhar um bônus pode aumentar as dívidas. Não parece racional, mas várias das nossas decisões financeiras não são. Tendemos a comprar mais quando a loja só permite pagar com cartão. E as vendas de um produto crescem com promoções tipo "leve 4 por R$ 2", sendo que cada unidade custaria mesmo R$ 0,50. Pois é, se fôssemos sempre lógicos, como explicar levantamentos mostrando que a bolsa tende a subir em dias ensolarados e a cair quando o país é eliminado da Copa do Mundo?  (Sim, essas pesquisas foram feitas por professores da Universidade da Califórnia e da Pensilvânia). Caminhos irracionais de consumo como esses são objeto de estudo da economia comportamental. Em vez de analisar taxas e índices financeiros, ela usa experimentos de psicólogos para entender como decidimos. "A economia tradicional afirma que as pessoas fazem escolhas depois de analisar as possibilidades racionalmente. Mas estudos mostram que, em alguns casos, tomamos decisões intuitivamente", diz o psicólogo Thomas Gilovich, um dos principais nomes da pesquisa na área. A maioria dos experimentos sobre o assunto segue uma noção consolidada na psicologia de que nossa mente funciona de duas formas. Uma delas é intuitiva, rápida, automática, se baseia em experiências passadas. Quando perguntam quanto é 2+2, você usa o modo automático. O outro sistema de pensar é mais lento, racional e demanda concentração e esforço para analisar situações. É acionado quando temos de responder quanto é 17x24, por exemplo. Na maioria das vezes, funcionamos no modo automático, já que ligar o modo mais analítico o tempo todo demandaria intensa atenção e concentração.',
    },
    {
      p1:
        'Isso é bom, caso contrário gastaríamos horas em cada decisão. No modo automático, nossa tendência é chutar uma resposta sem recolher muitas informações, seguindo padrões memorizados pelo cérebro. Como nossa mente é capaz de identificar padrões incrivelmente complexos, a maior parte desses chutes estão certos. O problema é que esse comportamento inconsciente também cria padrões que nos prejudicam, como o excesso de confiança ao mexer com dinheiro. "Isso ajuda em encontros amorosos ou entrevistas de emprego, mas pode fazer você achar que manja tudo sobre ações após ler algumas notícias ou que vai comparecer tanto à musculação que vale a pena pagar o plano anual da academia", diz Gary Belsky, especialista em economia comportamental e autor do livro Proteja seu Dinheiro de Você Mesmo. Costumamos avaliar mal os riscos, mudar nossa decisão de acordo com a forma que a pergunta é feita e comprar mais por conta de coisas irrelevantes - cheiros, sons e até a posição do produto na prateleira. "Marqueteiros e vendedores sabem disso há muito tempo e nos manipulam", afirma o Ph.D. em psicologia Baruch Fischoff, pioneiro da área. A economia comportamental ganhou espaço depois da crise econômica de 2008. De lá pra cá, um de seus representantes, Cass Sunstein, virou assessor do presidente americano Barack Obama e outro, Richard Thaller, foi chamado pelo governo britânico para palpitar em políticas públicas. Além disso, o prêmio Nobel de economia Daniel Kahneman lançou o livro Thinking, Fast and Slow (Pensando, Rápido e Devagar, sem edição no Brasil), sua primeira obra sobre o tema para leigos, que entrou nos 10 mais vendidos do jornal The New York Times. Estudiosos defendem que, quando se trata de decisões financeiras, somos induzidos ao erro de tantas maneiras que o governo deveria era interferir, manipulando sutilmente nossas escolhas. Mas antes que o governo se meta, reuni os 10 principais enganos que podem afetar seu saldo bancário. Saiba identificá-los e fuja das armadilhas e golpes de marketing que prejudicam suas finanças.',
    },
    {
      p1:
        'Afinal de contas, o cliente quase nunca tem razão. 1 - NÃO CAIA NO CONTO DO "LEVE 4". Supermercados são diplomados na arte de nos fazer comprar mais do que precisamos. Uma série de estudos realizada de 1998 a 2009 nos EUA mostra que um cartaz de "leve 4 por US$ 2" faz com que o mesmo produto venda 32% do que quando anunciado por "US$ 0,50 cada" - o que dá na mesma. "Associar um número de produtos ao preço funciona com consumidores indecisos", diz o Ph.D. em marketing Brian Wansink, responsável pelos estudos. O fato de a loja estabelecer um limite de compra ("máximo de 10 unidades por cliente", por exemplo) também turbina vendas, mesmo sem nenhuma promoção. Quando alguém vai às compras sem ter ideia clara da quantidade, acaba sendo fisgado pela sugestão. Mesmo que não leve 10 produtos, o número, inconscientemente, puxa para cima a avaliação de quantas unidades você precisa. "Usamos pistas ao redor inconscientemente para decidir." Ruim para o bolso e o meio ambiente - cresce a chance da sua compra estragar sem você ter tocado nela. O QUE FAZER: Ressuscite a lista de compras e não deixe para decidir na hora quantas unidades vai levar. Os números funcionam mais quando você vai à loja pensando "vou comprar iogurte" em vez de "vou comprar 2 potes de iogurte". 2 - SE OS OUTROS FAZEM, VOCÊ TAMBÉM VAI QUERER. O que os outros pensam importa mais do que você imagina. A conformidade, nossa tendência em fazer o que outros estão fazendo, já foi identificada em diversas pesquisas. Sem perceber, mudamos nosso comportamento para nos adequar. Se amigos compraram aparelhos de bluray, a tendência é que você também compre, mesmo que no fim só use pra assistir a DVDs. Em um experimento de 2007, a cidade de San Marcos, na Califórnia, passou a informar na conta de luz se a pessoa estava consumindo mais ou menos eletricidade que os vizinhos. Quando o consumidor era informado que gastou acima da média, passava a reduzir a despesa. O contrário também aconteceu, e as casas com menor consumo ficaram mais perdulárias que antes.',
    },
    {
      p1:
        'Seguindo a mesma lógica, o estado de Minnesota, EUA, testou, em 1993, mandar uma carta para parte dos contribuintes informando que "93% da população não sonegava imposto e entregava a declaração em dia". O grupo que recebeu o recado passou a cumprir mais com as obrigações do imposto, tentando se adequar à maioria. Anúncios de apartamentos que falam em "90% das unidades vendidas" ou de produtos que "mais de 2 milhões já experimentaram" são uma tentativa de se aproveitar desse instinto. Outra são as listas de livros mais vendidos. Estudos mostram que só o fato de um produto estar entre os mais procurados atrai mais consumidores. O QUE FAZER: Ignore o seu instinto de manada. As chances de fazer a escolha mais adequada para nós aumentam quando desconsideramos as opções feitas por estranhos. 3 - GANHAR BÔNUS PODE FAZER VOCÊ PERDER DIHEIRO. Lembra quando sua mãe dizia "tudo que é difícil tem mais valor"? Por mais estranho que pareça estudos indicam que dinheiro extra é menos valorizado - e pode prejudicar as finanças. A tendência é gastarmos pequenos bônus, abonos salariais, restituição do imposto de renda e até o 13° salário de uma maneira mais irracional que o salário. Um dos primeiros a mostrar isso foi o professor de economia Michael Landsberger, da Universidade de Haifa, em Israel. que analisou os bônus mensal: recebidos por cerca de 300 israelenses como reparação aos danos da Segunda Guerra. No estudo, as pessoas que recebiam um adicional pequeno (menos de 7% do salário), na média, faziam um gasto adicional equivalente ao dobro do bônus. Ou seja, torravam tudo o que recebiam e ainda passavam a se desfazer de outras fontes de renda. "A conclusão é que um dólar de salário aumenta minha riqueza mais do que um dólar de bônus", diz Landsberger. O que acontece, dizem os psicólogos que se dedicam ao assunto, é que fazemos uma contabilidade mental e rotulamos de "dinheiro fácil" a grana que vem inesperadamente. Por fim, tratamos esse extra com menos cuidado. Na prática, R$ 100 ganhos numa raspadinha não parecem ter o mesmo valor que R$ 100 do nosso salário.',
    },
    {
      p1:
        'Embora, racionalmente, isso não faça nenhum sentido, é bom refazer as contas. O QUE FAZER: Um real de dinheiro que "cai do céu" tem o mesmo valor de um real do seu salário. Se você não quer gastá-lo de maneira irracional, coloque a quantia imediatamente em uma aplicação. É uma maneira de transformar o tal dinheiro fácil em investimento. 4 - FUJA DAS ARMADILHAS DE MARKETING. Uma propaganda não força ninguém a fazer algo que não queira, mas a ciência mostra que nossas decisões de compra são bastante influenciadas pelo marketing. A música ambiente, o perfume da loja, e a disposição dos produtos são pensados para fazer com que consumidores gastem mais. Num levantamento, pesquisadores de Harvard, Yale e Princeton tentaram descobrir que mensagem seria mais eficaz para estimular clientes a tomar empréstimos em um banco. Foram 50 mil cartas, com pequenas diferenças - corte de 5 pontos porcentuais na taxa de juros, chance de concorrer a prêmios. O que deu mais resultado! Colocar, no fim de uma carta para um homem, a foto de uma funcionária bonita. "Há anúncios simples que funcionam imperceptivelmente. Muitos nem sabemos como nos fazem aumentar o interesse", diz o Ph.D. em psicologia EIdar Shafir, autor do estudo e um dos maiores especialistas do mundo em economia comportamental. Se funciona com empréstimos, imagine com cerveja. Entendeu agora por que quase todas usam gostosonas? O QUE FAZER: Não dá pra ser imune ao marketing. Mas evite tomar decisões após ver um anúncio. Faça listas de prós e contras de um produto e saiba: uma loja é um péssimo local para decidir o que você realmente precisa comprar. 5 - COM CARTÃO VOCÊ GASTA MAIS. Ao contrário do que cantam na propaganda, cosa triste não é usar dinheiro, mas o cartão. Manoj Thomas, Ph.D. em marketing da Universidade de Cornell, nos EUA, mostrou isso numa pesquisa sobre o consumo de mil famílias durante 6 meses. O estudo indica que, ao usar dinheiro de plástico, consumidores tendem a gastar mais. Bem mais. Quando pagaram em espécie, a média para cada compra foi de US$ 38.',
    },
    {
      p1:
        'Com cartão de débito, pulou para US$ 60 e com o de crédito, quase dobrou: US$ 68. Detalhe: os itens comprados a mais quase sempre eram doces, balas e junk food. Outros experimentos confirmam o papel de vilão do cartão. Um deles, conduzido pelo MIT, mostrou que, quando só há a opção de pagar com crédito, tende-se a gastar o dobro do que se desse pra usar dinheiro. Os cientistas chamam isso de "contabilidade mental": inconscientemente, atribuímos uma dor menor ao gasto com cartão, o que nos leva a abrir mais a mão. No fim das contas, bala de troco até que não é tão ruim. O QUE FAZER: Saque dinheiro antes de comprar e use o cartão somente para as despesas grandes (que podem se reverter em milhagem) ou quando não dá para pagar em espécie (compras online, por exemplo). 6 - QUANDO R$ 1 NÃO VALE R$ 1. 1. Você vai a uma loja comprar um abajur por R$ 100 mas descobre que, na filial a 5 quarteirões, o mesmo abajur está em promoção por R$ 65. Você anda até lá? 2. Desta vez, você está comprando um conjunto de mesas e cadeiras por R$ 1.775 mas descobre que, a 5 blocos dali, é Vendido por R$ 1.740. Você anda até lá? "A maioria responde "sim" na situação 1 e "não" na 2. Acontece que a decisão é a mesma: andar 5 quadras para poupar R$ 35", diz Gary Belsky, especialista em economia comportamental. O exemplo usado em seus seminários mostra outra tendência da mesma "contabilidade mental" do item anterior. Tratamos a mesma soma de dinheiro como se tivesse valor diferente em compras caras. Por mais que alguém considere um absurdo gastar R$ 1 mil em um aparelho de som para o carro, adicionar esse gasto em um carro novo de R$ 35 mil parece menos doloroso. Outro exemplo é o seguro contra danos para computador na hora da compra. Em que outro momento você pensaria na possibilidade de ir atrás desse seguro? O QUE FAZER: Divida compras em pequenas partes. Vai comprar um computador de R$ 2 mil? Pense se pagaria R$ 400 por um upgrade para colocar um pouco mais de memória. Você iria até uma loja gastar R$ 150 em uma capa plástica para ele?',
    },
    {
      p1:
        'Gastaria R$ 200 num mouse em vez de R$ 50 só porque ele é sem fio? 7 - MUDE DEMAIS E PERCA DINHEIRO. O investidor que se informa constantemente sobre ações ou fundos e sempre muda seu portfólio em busca dos que dão mais lucro se sai muito melhor do que aquele paradão, certo? Errado, em um estudo que virou referência, o professor Ph.D, em contabilidade llla Dichev, da Emory University (EUA), mostrou que quem pula de galho em galho acaba levando um belo tombo - e olha que ele foi atrás de dados na bolsa desde 1926, Segundo pesquisas, o grupo que mais muda seus investimentos ganha quase metade da média. E o problema só piorou: "A internet aumentou o número de vendas e reduziu os ganhos. Com pouca informação, as pessoas acham que sabem muito e tendem fazer mais transações, E piores negócios", diz o Ph.D, em marketing Frank Yates, da Universidade de Michigan. Para se ter ideia de como isso atrapalha, de 1988 a 2008, os fundos de ações dos EUA tiveram lucro médio de 8.4% ao ano, "Mas os investidores desses fundos ganharam apenas 1.9% porque ficaram entrando e saindo de aplicações da moda", diz Gary Belsky. O QUE FAZER: As chances de um amador obter rendimento acima da média são as mesmas de vencer o Neymar numa pelada, Compre ações recomendadas por um especialista e, a não ser que elas estejam caindo durante muito tempo, deixe-as lá no médio prazo - você não ganha nada mudando de mês em mês seu portfólio. 8 - NÃO MUDE NADA E TAMBÉM PERCA DINHEIRO. Você já viu no item anterior que em time que está ganhando não se mexe. Mas, quando ele está perdendo de lavada, tem que mudar. O investidor-padrão não faz nenhum dos dois. Após analisar aplicações de 10 mil contas ao longo de 7 anos, pesquisadores da Universidade da Califórnia observaram que as pessoas têm a mania de vender rápido demais quando a aposta está dando lucro e demorar muito para se desfazer dela quando está dando prejuízo - na esperança de uma volta por cima. As ações vendidas analisadas, no fim das contas, tiveram um desempenho bem melhor que as mantidas. Ou seja, os investidores bobearam.',
    },
    {
      p1:
        '"Odiamos perder, e usamos uma parte diferente do cérebro quando o mercado vai mal", sintetiza o especialista em mercado Mebane Faber, um dos primeiros a descobrir o fenômeno. Faber se refere à "aversão à perda", conceito da economia comportamental que diz que o prejuízo virtual é mais fácil de engolir. "Reconhecemos ganhos rapidamente - faz nos sentirmos espertos. Mas relutamos em reconhecer prejuízos, porque isso traz dor", diz o americano Meir Statman, autor do livro What Investors Really Want (O que os investidores realmente querem, sem edição em português). O QUE FAZER: Avalie as suas aplicações por períodos longos (de pelo menos 3 meses) antes de decidir qualquer coisa e veja se as perdas são constantes. Se forem, não tenha medo de vendê-Ias. 9 - SEJA MENOS PREGUIÇOSO PARA MUDAR. Nem sempre a grama do vizinho é mais verde. Na verdade, temos uma tendência a superestimar um objeto se ele nos pertence e de subestimar se é do outro. Em um estudo, metade dos estudantes da Universidade de Cornell recebeu canecas da faculdade, a outra metade não. Na média, os com-caneca estimavam que ela custava o dobro do valor chutado por quem não recebeu. Anúncios que oferecem um período de testes ou garantia do seu dinheiro de volta nada mais são do que vendedores aproveitando essa tendência, chamada de viés de status quo. Uma vez que você está com o produto, inconscientemente atribui a ele um valor maior, o que torna improvável que vá devolvê-lo. Isso nos leva a comer bola quando recebemos alguns meses grátis de algum serviço. No automático, nossa tendência é não cancelar e nem mudar nada, mesmo que isso signifique perder dinheiro. Se você já entrou num leilão online, percebeu que costuma se colocar um preço bem abaixo do real. Estimulando mais gente a dar o lance inicial, aumenta a chance de que o lance final seja maior. "Assim, mais pessoas vão sentir que o produto é seu e terão dificuldade de sair da disputa", diz Thomas Gilovich, um dos maiores especialistas atuais em economia comportamental.',
    },
    {
      p1:
        'O QUE FAZER: Saber que uma escolha já foi tomada faz com que coloquemos um valor maior nela. Pense nas decisões como se fossem sempre a partir do zero. Se tivesse de optar entre comprar ou não este aplicativo, por exemplo, você compraria? Mas claro que sim - afinal, você leu quase toda a matéria! 10 - QUANTO MAIS OPÇÕES, MENOS DECISÃO. Ao se deparar com muitas opções na hora da compra, é comum que o consumidor se canse e deixe pra lá. Ou que pegue o primeiro produto que vê pela frente, para evitar a fadiga. Num dos estudos pioneiros a mostrar isso, psicólogos perguntaram a estudantes de Princeton o que fariam se quisessem um CD player e vissem um aparelho Sony por US$ 99 (uma barganha em 1992, ano da pesquisa). Dois terços disseram que comprariam na hora e 33% que pesquisariam outros modelos. Outro grupo viu dois aparelhos: um Sony e um Aiwa, por US$159 (outro bom negócio). Dar opções, em vez de reduzir, aumentou o número de indecisos: 46% decidiram esperar. Quanto mais opções, mais chance de indecisão - e de perder um bom negócio. Os psicólogos chamam isso de paralisia de decisão. "Empresas estão reduzindo o número de marcas, porque gera confusão no consumidor. Ou ele adia ou simplifica demais a escolha", afirma Fábio Mariano Borges, professor do núcleo de ciências do consumo da ESPM. Deixar de comprar algo que está anunciado por um bom preço ou levar o primeiro que aparece por preguiça pode ser evitado ao se reduzir a quantidade de produtos analisados. Melhor não ficar lendo centenas de resenhas. "Se parar para ver cada um dos detalhes, não vai fazer uma boa decisão", diz Fischhoff, da Universidade de Carnegie Mellon. O QUE FAZER: No meio de 400 fatores para escolher, eleja alguns mais importantes e se guie por eles. Se vai escolher um hotel, por exemplo, pense só no preço, localização e conforto do quarto, em vez de se perder em uma comparação do cardápio de café da manhã, da piscina e da academia. A MANIPULAÇAO "PARA O BEM" Especialistas defendem usar as tendências irracionais para empurrar as pessoas em direção às escolhas que acham corretas.',
    },
    {
      p1:
        'Estudos recentes comandados pelo Ph.D. em marketing Brian Wansink, da Universidade de Cornell, mostram que pequenas alterações na cantina da escola podem mudar os hábitos de consumo das crianças. Colocar as frutas perto do caixa ou obrigar que compras de doces só possam ser pagas com dinheiro em espécie, mostram as pesquisas, aumentam bastante o consumo de alimentos saudáveis. A ideia vem de uma corrente da economia comportamental que defende o que chamam de nudge, um empurrãozinho para que as pessoas tomem as decisões corretas - pelo menos as que os pesquisadores acham corretas. Em português mais claro, defendem que as escolhas sejam manipuladas. Isso funciona tirando proveito de algumas tendências irracionais que temos como pegar o primeiro produto que está na frente, gastar menos quando é com dinheiro em espécie, ou ter preguiça de mudar. Uma das propostas já adotadas por empresas, por exemplo, é aproveitar o fato de que as pessoas tendem a não mudar a escolha-padrão dos contratos, para estimulá-Ias a entrar em planos de previdência considerados vantajosos. Neste caso, o funcionário teria de pedir para ficar de fora do plano de previdência (o que, de acordo com estudos, poucos acabam fazendo), em vez de optar por adquirir o benefício. A mesma lógica serve para os que defendem que na carteira de habilitação a pessoa tenha que optar por não ser doadora de órgãos. A ideia tem sido incorporada em projetos apresentados no Congresso dos Estados Unidos e é considerada um mecanismo eficiente de ajudar a evitar que as pessoas sejam levadas a escolhas ruins por não pararem para pensar no assunto. "É mais fácil fazer com que uma pessoa escolha de uma determinada maneira do que esperar que ela pense sobre seu consumo de maneira consciente", diz Wansink. Dois dos maiores defensores desse tipo de manipulação são o economista americano Richard Thaler, da Universidade de Chicago, e o especialista em direito Cass Sunstein, de Harvard, que a chamam de "paternalismo libertário". "Não é possível evitar influenciar a escolha das pessoas.',
    },
    {
      p1:
        'Em muitas situações, mesmo que você não saiba, vai ter de fazer uma opção que modifica o comportamento de alguém", escrevem em seu livro Nudge (sem edição em português). O apelo da ideia de manipular sem proibir que a pessoa escolha outras opções tem sido grande. Para aplicar alguns desses conceitos, Sunstein virou assessor de Obama e Thaler conselheiro do governo do Reino Unido. Só que essa manipulação está longe de ser consenso. "Em vez disso, os governos deveriam educar seus cidadãos a pensar criticamente. Eu ensino doutores e juízes a entender riscos e incertezas para tomar melhores decisões e sei que é possível. Não há razão para o paternalismo libertário", critica o psicólogo alemão Gerd Gigerenzer, que há mais de 20 anos estuda o viés irracional de nossas decisões. Um dos pioneiros da pesquisa na área, o Ph.D. em psicologia Baruch Fischhoff, vê a ideia com algumas restrições. "Temos obrigação ética de informar a população, mas sabemos que nem sempre adianta, o que justificaria uma manipulação sutil. Mas a questão que eu faria antes de fazer isso é a seguinte: nós não estamos desistindo das pessoas rápido demais?',
    },
  ];

  const texto2 = [
    {
      p1:
        'É verdade que aqueles que enxergam o próprio valor tendem a tirar proveito dessa característica de personalidade.',
      p2:
        'Mas, em excesso, autoestima pode trazer sérias desvantagens. Além disso, a busca contínua por reconhecimento é claramente nociva. Buscar obstinadamente alcançar sucesso em projetos que aumentem o próprio poder, sem que haja um objetivo maior além de simplesmente "vencer", nos torna emocionalmente vulneráveis a angústias e frustrações inevitáveis da vida e, não raro, deflagra comportamentos prejudiciais ao desenvolvimento de competências e ao cultivo de relações pessoais saudáveis.',
      p3:
        'Parece que, na contramão do que costuma pregar a cultura vigente no mercado de trabalho, popularizada pela mídia e pela publicidade, o caminho mais eficaz para desenvolver e preservar a autovalorização é, ironicamente, pensar menos sobre si mesmo.',
      p4:
        'Desenvolver compaixão pelos outros e por si próprio, de uma perspectiva menos egocêntrica, reforça a motivação para atingir metas pessoais principalmente em momentos de dificuldades, ajuda a aprender com os próprios erros e a fortalecer laços de amizade.',
      p5:
        'A psicologia costuma definir autoestima como o valor que uma pessoa atribui a si mesma, ou seja, trata-se de uma avaliação inerentemente subjetiva. Geralmente os pesquisadores medem essa característica por meio de escalas de autorrelato, baseando-se em declarações como "Tenho atitude positiva em relação a mim mesmo" ou "Costumo me comparar com os outros e me sentir fracassado". Na década de 80, nos Estados Unidos, alguns políticos, psicólogos, e pesquisadores em geral mostravam-se preocupados com a falta de autoconfiança entre a população. Eles acreditavam que a solução do problema seria forjar cidadãos mais produtivos a resolver problemas sociais como criminalidade e fracasso escolar.',
    },
    {
      p1:
        'Iniciou-se um verdadeiro movimento pró-autoestima, que coincide com o início do boom de livros de autoajuda que pregam o poder incontestável da autorrealização, insistindo no uso de "fórmulas" de motivação e felicidade.',
      p2:
        'Escolas e outras instituições americanas investiram em intervenções para aumentar a autoconfiança, principalmente das crianças. Esses programas geralmente focavam em exercícios que possibilitavam a exposição de qualidades e em fornecer retorno positivo (independentemente do desempenho).',
      p3:
        'Lições do tipo "eu me amo", incentivavam alunos a completar frases como "Eu sou ... ", com as palavras "bonito", "inteligente" ou "talentoso", por exemplo. Aqueles com baixo desempenho eram ensinados a se concentrar no potencial em vez de olhar para o que precisavam melhorar.',
      p4:
        'Em 1986, o estado da Califórnia destinou $ 245 mil dólares para a Força Tarefa para Promover Autoestima e Responsabilidade Social, acreditando que o investimento seria recompensado com a queda da criminalidade, do fracasso escolar, do número de gestações indesejadas e de dependência química.',
      p5:
        'No entanto, mesmo com o grande impulso do movimento a favor da autoestima - que não ficou restrito aos Estados Unidos, mas influenciou formas de pensar em quase todo o planeta -, dados científicos começaram a minar alguns de seus principais pressupostos e sustentações. Muitas pesquisas mostram que pouca gente sofre disso. Pelo contrário, a maioria de nós já se sente muito bem sobre si. Em um estudo publicado em 1989, o psicólogo Roy F. Baumeister e seus colegas Dianne M. Tice e Debra G. Hutton, na época da Universidade Case Western Reserve, mostraram que, de maneira geral, a pontuação dos americanos em relação à autoconfiança está bem acima da média das escalas,',
    },
    {
      p1: 'do ponto que denota visão moderada ou digna a respeito de si.',
      p2:
        'O que vão pensar? De fato, hoje tendemos a nos supervalorizar. Em um estudo publicado em 2008, os psicólogos Jean M. Twenge, da Universidade do Estado de San Diego, e W. Keith Campbell, da Universidade da Geórgia, constataram que atualmente estudantes do ensino médio têm maior orgulho de si mesmos em comparação aos jovens da década de 70.',
      p3:
        'O curioso, porém, é que eles não se consideram mais competentes do que pessoas de sua idade em gerações anteriores. Ou seja: embora não acreditem ser melhores em matemática, esportes ou outras áreas que adolescentes do passado, julgam-se com maior benevolência.',
      p4:
        'Ao perceberem índices tão altos de autoestima, os pesquisadores começaram a relativizar a importância desse aspecto. Em uma ampla revisão da literatura publicada em 2003, Baumeister, agora da Universidade Estadual da Flórida, e seus colegas apontaram que pessoas muito autoconfiantes não se saem significativamente melhor no trabalho ou na vida acadêmica em relação àquelas com baixo apreço por si. A característica tem pouca relação com grau de popularidade, qualidade das relações com as pessoas em geral ou mesmo com probabilidade de se tonar violento ou ter comportamentos de risco como tabagismo e uso de drogas.',
      p5:
        'Obviamente a avaliação positiva sobre si traz benefícios. Baumeister e seus colaboradores descobriram que a característica ajuda a ser mais persistente, por exemplo. Além disso, aqueles com autoestima elevada dizem se sentir mais felizes e dificilmente desenvolvem depressão. Mas ainda não está claro se o apreço por si é responsável por provocar outros sentimentos, positivos ou não. No entanto, autoconfiança em excesso tem desvantagens. Talvez a mais imediata seja a dificuldade de perceber as próprias dificuldades e falhas.',
    },
    {
      p1:
        'Diversas pesquisas feitas nas últimas décadas mostram que pessoas com autoestima elevada tendem a ter opiniões positivas irreais sobre si: acreditam ser mais atraentes, bem­sucedidas, simpáticas, inteligentes e virtuosas que as outras e raramente se dão conta de sua incompetência ou de suas faltas.',
      p2:
        'Quando recebem um retorno negativo, tendem a ficar defensivas e culpar a situação ou a pessoa que traz a informação em vez de assumir os próprios erros e fragilidades, o que prejudica o aprendizado, o crescimento e as relações pessoais. Quando se trata de alguém em quem devemos confiar, como um cirurgião cerebral, por exemplo, ou mesmo a pessoa com quem dividimos a vida, a maioria de nós provavelmente se sentiria mais à vontade com quem tivesse uma visão realista de suas qualidades e interesse em aprender com os próprios erros, em vez de excesso de autoconfiança.',
      p3:
        'Baumeister observou que geralmente os estudos medem autoestima com questões que levam os participantes a refletir sobre si ao longo do tempo. Porém, quando uma pessoa é convidada a indicar como se sente "agora" ou "hoje", os escores tendem a variar drasticamente de acordo com eventos cotidianos.',
      p4:
        'Altos e baixos afetam a motivação: momentos de bem-estar aumentam o a autossatisfação e experiências difíceis tendem a baixá-la. De maneira geral, buscamos situações que ajudam a reforçar a nossa confiança e tentamos evitar aquilo que possa destruí-la. Quando alcançamos sucesso ou nos sobressaímos a tendência é que ela aumente.',
      p5:
        'Da mesma maneira, fugimos do mal-estar para contornar o fracasso. Já que não podemos ser bons em tudo, tendemos a investir naquilo que nos garante mais "vitórias" - por exemplo, a vida acadêmica, os esportes ou a aparência.',
    },
    {
      p1:
        'Essas contingências representam as áreas em que a autoestima está em xeque: a pessoa sente-se merecedora se atinge seus objetivos, ou fracassada se falha.',
      p2:
        'Em 2003, nossas colegas Riia K. Luhtanen e Alexandra Bouvrette, na época da Universidade de Michigan, e Lynne Cooper, da Universidade de Missouri, desenvolveram um questionário para avaliar circunstâncias como sucesso acadêmico, aparência, aprovação dos outros e virtude moral. Aqueles que baseiam a autoestima no desempenho acadêmico, por exemplo, relatam maior autoconfiança quando tiram boas notas; e sentimentos de vergonha, ansiedade e impotência quando recebem baixa pontuação.',
      p3:
        'Não é de estranhar, portanto, que pessoas que se tornam extremamente dedicadas em algumas áreas comecem a dominá-las, o que geralmente as leva a se esforçar cada vez mais. Uma de nós (Jennifer) e colegas apontaram que estudantes cuja autoestima dependia de um retorno de desempenho estudavam mais do que os outros que não se apoiavam nesse campo. Por outro lado, depender de realizações para sentir autoconfiança abre espaço para vulnerabilidade emocional e retrocessos. Mesmo pessoas bem-sucedidas, por mais que se esforcem, às vezes falham ou deixam a desejar.',
      p4:
        'E, nessas ocasiões, a sensação de fracasso por golpes na autoestima parece ser muito maior do que os efeitos positivos decorrentes do sucesso. Em um estudo publicado em 2002, solicitamos a 37 universitários do último período, candidatos a pós-graduação, que preenchessem um questionário para avaliar o quanto baseavam a autoestima no histórico acadêmico, na aparência física, no bom relacionamento com a família e com os amigos etc.',
      p5:
        'Na sequência, os estudantes deveriam continuar registrando a sensação de autoconfiança duas vezes por semana, durante dois meses, nos quais participariam do processo de seleção.',
    },
    {
      p1:
        'Descobrimos que aqueles cuja autoestima estava fortemente ligada ao desempenho acadêmico sentiram pouco aumento na autoconfiança nos dias em que se safam bem, mas uma grande queda na segurança nos dias de baixo desempenho. Para essas pessoas, a dor do fracasso superou a alegria do sucesso.',
      p2:
        'Aqueles que não dependiam do resultado para preservar a autoconfiança experimentaram claramente flutuações mais amenas: mostraram-se emocionalmente mais estáveis diante de resultados positivos ou negativos. Outros estudos demonstram vulnerabilidade semelhante em relação à aparência ou ao sucesso profissional. ',
      p3:
        'Além disso, doses extras de autoconfiança não duram muito tempo, de acordo com nossos estudos. Mesmo depois de desfrutarmos de grandes realizações, geralmente voltamos a nos sentir como de costume. Por outro lado, a instabilidade que resulta desses altos e baixos tem custos significativos para a saúde mental - e pode colaborar para o desenvolvimento de sintomas de depressão. ',
      p4:
        'No caso dos candidatos à pós-graduação, por exemplo, observamos que as flutuações na autoestima experimentadas estavam associadas a distúrbios do apetite e do sono, a perda de motivação, a humor deprimido e a sentimentos de desesperança e impotência. A dependência de bom desempenho para manter a autoestima não raro leva a evitar o fracasso em vez de buscar o sucesso - uma atitude que pode minar as chances de êxito. ',
      p5:
        'Para proteger a autoconfiança, surgem desculpas para o mau desempenho, como "não tentei o suficiente" ou "estava cansado, doente, chateado". Para ter efeito, a explicação deve ser verossímil. Por exemplo, uma pessoa pode ficar acordada até tarde antes de fazer um teste para validar a afirmação de cansaço caso vá mal na prova; ou adiar os estudos até o último momento para alegar que não pôde se dedicar o suficiente.',
    },
    {
      p1:
        'Os psicólogos sociais Edward E. Jones, da Universidade de Princeton, e Steven Berglas da Faculdade de Medicina da Universidade Harvard, cunharam o termo "autossabotagem" para descrever o comportamento. Buscar situações somente para sentir-se com maior autoestima prejudica a motivação intrínseca, ou seja, o interesse pela tarefa em si. Os psicólogos Edward Deci e Richard Ryan, da Universidade de Rochester, argumentam que pessoas com autoestima contingente se concentram a maior parte do tempo na maneira como sucessos e fracassos refletem sobre sua imagem.',
      p2:
        'Sua pesquisa, realizada ao longo de várias décadas, aponta que aqueles com essa característica realizam atividades, como estudar e trabalhar, porque sentem que devem e não porque querem. A pressão e o senso de obrigação terminam por suplantar a satisfação.',
      p3:
        'As relações pessoais também ficam prejudicadas. Pessoas focadas em aumentar a autoestima tendem a sempre colocar suas necessidades antes das dos outros. A preocupação com questões sobre o próprio valor influencia a relação com amigos, familiares e conhecidos, que acabam servindo, principalmente, como fontes de validação ou anulação de méritos - no final das contas, a interação gira em torno de uma única pessoa, o que empobrece e desgasta as relações.',
      p4:
        'No entanto, escorar a autoestima em valores como fé ou virtude parece ter menos consequências negativas do que em outras circunstâncias nas quais é possível ser avaliado e julgado (como aparência ou alguma habilidade específica). Ainda não sabemos exatamente os motivos dessa discrepância.',
      p5:
        'A hipótese é que pessoas com necessidade de provar que são virtuosas ou fiéis a uma religião são mais propensas a se envolver em atividades úteis, colaborativas ou filantrópicas, recebendo então, a aprovação dos outros.',
    },
    {
      p1:
        'Ainda assim, as contingências nos tornam vulneráveis às consequências de deixar a autoestima tão dependente de elementos externos para nos definir. Embora a busca por autoestima possa trazer consequências negativas, também nos motiva à ação. Sem o desejo de provar nosso valor, poderíamos ficar desanimados. Felizmente, temos opções. Em vez de nos concentrarmos em nossa própria situação, podemos focar em outras pessoas ou no beneficio coletivo. Metas construtivas e solidárias tendem a fortalecer o sentimento de confiança e a sensação de pertencimento, o que ajuda a reduzir conflitos e medos.',
      p2:
        'O bem maior. Projetar metas colocando-se no lugar dos outros parece produzir um senso de intimidade. Na prática, isso costuma ajudar a evitar os efeitos devastadores de algum comentário alheio entendido como crítica, por exemplo. Em um estudo que publicamos em 2011, com a psicóloga Amy Canevello, agora na Universidade da Carolina do Norte, em Charlotte, analisaram as consequências dessa atitude em calouros universitários e colegas de quarto do mesmo sexo.',
      p3:
        'Cada participante avaliou seu "grau de compaixão", de acordo com frases como "ser solidário com meu colega de dormitório" ou "estar ciente do impacto que meu comportamento pode ter sobre os sentimentos da pessoa com quem divido o quarto". Eles também responderam a um questionário sobre autoestima a cada semana do ano letivo. Além disso, os voluntários classificaram em que medida respeitavam seus colegas, o quão responsáveis acreditavam ser em relação ao que eles precisavam e quanta consideração percebiam daqueles com quem dividiam o dormitório em relação a suas próprias necessidades.',
      p4:
        'Aqueles que desenvolveram postura mais compreensiva demonstraram maior receptividade às necessidades dos colegas de quarto (de acordo com a própria opinião e a do companheiro).',
    },
    {
      p1:
        'Os colegas com quem os voluntários dividiam o ambiente perceberam a atitude e responderam positivamente, criando um ciclo que fortaleceu a relação entre os dois. Curiosamente, quanto mais procuravam ser sensíveis ao outro, maior autoestima demonstravam de acordo com as avaliações. O sentimento de autoconfiança entre os colegas também ficou mais forte, sugerindo que se manter atento às demandas dos outros pode ser uma estratégia bastante eficaz para reforçar o sentimento de amor-próprio a longo prazo.',
      p2:
        'Por outro lado, aqueles que se preocuparam excessivamente com a ideia que o companheiro fazia sobre si foram menos atentos aos colegas - um padrão de comportamento que colaborou para tornar mais frágil a autoestima de ambos. Os pesquisadores acreditam que é possível fortalecer propositadamente a tolerância consigo mesmo e com os outros para que, nos momentos difíceis, o sentimento ajude a amenizar a sensação de fracasso.',
      p3:
        'Pessoas compreensivas tendem a tratar a si mesmas com gentileza, assim como um amigo próximo faria. "Não se trata de assumir uma atitude de condescendência ou de desresponsabilização, mas sim de ser paciente com as próprias limitações e fazer consigo mesmo o pacto de se esforçar para mudar o que incomoda em vez de simplesmente se julgar e se desprezar", afirma o psicólogo Kristin Neff, professor da Universidade do Texas em Austin.',
      p4:
        'A atitude positiva em relação a si mesmo também ajuda a pessoa a aceitar contratempos inevitáveis e permite enxergar fracassos como oportunidades de aprendizagem e não como de ameaças, o que fortalece a motivação para continuar na direção dos objetivos. Fácil? Com certeza não. "Fazer boas escolhas para si mesmo costuma ser uma decisão que precisa ser constantemente renovada", acredita Neff.',
    },
    {
      p1:
        'Um fato interessante é que a atitude de compreensão consigo parece estar ligada à compaixão pelos outros. Em um experimento apresentado em 2012 em conferência da Sociedade de Psicologia Social e da Personalidade, nos Estados Unidos, as psicólogas Juliana Breines e Serena Chen, da Universidade da Califórnia em Berkeley, apresentaram um estudo no qual se propuseram incentivar esse sentimento em alguns voluntários pedindo que escrevessem uma nota para que um amigo se sentisse melhor depois de ter causado um pequeno acidente de carro.',
      p2:
        'Os participantes do experimento se autoavaliaram mais positivamente que outros que se recordaram de um momento divertido ou leram sobre pessoas em situação de sofrimento. Uma técnica chamada pelos cientistas de autodistanciamento também ajuda a reduzir a preocupação excessiva consigo e os problemas decorrentes dessa atitude. A estratégia propõe que a pessoa olhe para si como se fosse da perspectiva de um terceiro.',
      p3:
        'Em um estudo de 2012, o psicólogo Ethan Kross, da Universidade de Michigan, e seus colegas da mesma instituição pediram a alguns voluntários que analisassem e respondessem, individualmente, a perguntas sobre eventos emocionais que ocorreram no dia anterior, durante sete noites. Além de observar frequência, intensidade e duração dos episódios, os participantes do experimento avaliaram em quais momentos mergulharam na situação ou se afastaram para refletir.',
      p4:
        'Aqueles que adotaram um ponto de vista mais distante se recuperaram com maior rapidez de sentimentos negativos (embora experimentassem menos emoções positivas) em comparação aos mais egocêntricos. Os resultados sugerem que manter certa distância mental de situações que mexem com as emoções ameniza o impacto dos problemas cotidianos.',
    },
    {
      p1:
        'A autoafirmação também pode ajudar a aliviar o incômodo da autocrítica sentida após um comentário alheio desfavorável, restaurando sentimentos positivos por meio da reflexão sobre os próprios valores em outras áreas da vida. Por exemplo, se uma pessoa se sente excluída de um grupo de amigos, pode proteger a autoconfiança ao desenvolver projetos significativos em sua área profissional.',
      p2:
        'Nossa recente pesquisa sugere que a estratégia funciona melhor se a importância do que está em questão é muito maior do que os objetivos pessoais. A médio e longo prazo, considerar que seu trabalho pode colaborar para a qualidade de vida de outras pessoas tem muito mais efeito do que imaginar como ela poderia ajudar a enriquecer ou alcançar uma boa posição social.',
      p3:
        'Hoje, se tivéssemos de desenvolver um novo movimento em favor da autoestima, tentaríamos sugerir que as pessoas não supervalorizassem a si mesmas e sim focassem um pouco mais nos outros. O mais eficaz parece ser tirar o foco de si mesmo. Afinal, não bastam grandes realizações para lidar com o sentimento de vazio. O mais útil seria sermos tolerantes com nossas próprias dificuldades e cultivar uma visão distanciada de nós mesmos, pois na base de todo sofrimento existe sempre a ameaça ao "eu" e ao "meu".',
      p4:
        'Convém lembrar ainda que medidas com o objetivo de aumentar a autoconfiança trazem, no máximo, benefícios temporários: provavelmente vão falhar mais cedo ou mais tarde (em geral mais cedo) porque são motivadas pelo autojulgamento.',
    },
  ];

  const texto3 = [
    {
      p1:
        'Pode apostar: manter corpo, mente e espírito em forma ajuda e muito na corrida pelo alto desempenho profissional. Existem executivos que se revelam quando estão sob pressão. Outros simplesmente desaparecem.',
      p2:
        'Faz tempo que os teóricos da administração tentam explicar por que isso acontece, e, invariavelmente, chegam a respostas parciais, como cultura corporativa adequada, administração por objetivos, etc. O problema de ver as coisas dessa maneira é que se considera as pessoas do pescoço para cima, vinculando o alto desempenho apenas à capacidade cognitiva. Mas, para ter uma performance plena e constante, é preciso associar corpo, mente e espírito. Chamamos a essa hierarquia de pirâmide de desempenho, em que cada um dos níveis influencia os demais. Essa visão surgiu na época em trabalhamos com atletas de primeira linha.',
      p3:
        'Com o tempo. percebemos que, depois de algumas adaptações, as técnicas utilizadas por eles poderiam ser úteis também para aquelas demandas absurdas que todo profissional tem de enfrentar no ambiente de trabalho.',
      p4:
        'O treinador geralmente não se preocupa com as aptidões básicas do atleta, como dar um saque ou arremessar a bola. O mesmo se aplica aos negócios. O foco do treinamento não devem ser habilidades elementares como falar em público ou interpretar balanços. O objetivo deve ser desenvolver as aptidões secundárias ou de apoio, como resistência, força, flexibilidade, autocontrole e foco. Fazendo isso, tanto atletas quanto executivos conseguem apresentar um desempenho de alto nível - uma situação que chamamos de Condição Ideal e Desempenho (CID).',
      p5:
        'Para atingir a CID, é preciso administrar a energia, e essa gestão tem dois componentes fundamentais: o primeiro é o equilíbrio entre o estresse e a reposição energética, que chamamos de oscilação. No esporte, o verdadeiro inimigo do bom desempenho não é o estresse, mas a baixa reposição de energia. Quando se torna crônico, o estresse esgota as reservas energéticas, levando ao desgaste.',
    },
    {
      p1:
        'As atitudes que promovem a  oscilação são o segundo componente da gestão de energia. No Trabalho, o Jogo é mais Pesado - os desafios que obrigam os executivos a manter um elevado padrão de desempenho dia após dia, ano após ano podem ser maiores do que os enfrentados pelos atleta. O esportista profissional médio, por exemplo, passa a maior parte do seu tempo praticando e só uma pequena parte dele competindo. O executivo típico, por sua vez, quase não se dedica ao treinamento e se vê em plena competição durante 10, 12, 14 horas por dia.',
      p2:
        'Os atletas desfrutam de temporadas de descanso entre um campeonato e outro, enquanto a maior parte dos executivos mal consegue tirar algumas semanas de férias por ano.  A carreira do atleta profissional médio dura 7 anos; a do executivo pode se estender por mais de 40. Mas, assim como seus colegas do esporte, os atletas corporativos também têm seus dias de azar. Embora nem sempre seja possível mudar as condições externas, podemos gerir nossa condição interior.',
      p3:
        'O segredo é utilizar nossas aptidões para alcançar o sucesso em meio a circunstâncias difíceis, emergindo delas mais revigorados, saudáveis e ansiosos pelo próximo desafio. Aptidão Física é a Base de Tudo - a energia pode ser definida como a capacidade de executar determinado trabalho. O treinamento começa no plano físico, porque o corpo   é nossa fonte principal de  energia. Por isso, a  capacidade física é a base da pirâmide de desempenho.',
      p4:
        'Talvez o melhor paradigma para a produção de energia seja o fenômeno da supercompensação, que explica por que o levantamento de peso leva ao aumento da massa muscular. O exercício consiste em estressar um músculo até o ponto em que suas fibras começam literalmente a se romper. Depois de um período de repouso (em geral, 48 horas), o músculo não somente se recompõe como fica mais forte. Mas, se estressarmos o músculo sem respeitar esse descanso, ganharemos uma lesão. Por outro lado, se a musculatura não for solicitada, atrofiará.',
    },
    {
      p1:
        'O poder de certos rituais na recuperação de um atleta fica evidente se você observar um tenista em ação. Alguns praticam rituais precisos de reposição de energia nos 15 ou 20 segundos de intervalo entre um ponto e outro - geralmente, sem ter consciência disso. Eles se concentram na raquete, adotam uma postura confiante e visualizam como desejam marcar o próximo ponto. Isso produz um efeito fisiológico surpreendente. Já medimos a frequência cardíaca de alguns tenistas e notamos que seu coração disparar durante o jogo e reduz seu ritmo de 15% a 20% entre um ponto e outro.',
      p2:
        'Os efeitos mentais e emocionais desses rituais de reposição energética são importantes também porque permitem aos jogadores evitar pensamentos negativos, aumentar sua concentração e se preparar para o ponto seguinte.',
      p3:
        'Já os jogadores que não seguem nenhum ritual, ou os que o praticam de maneira inconsistente, tornam-se lineares - gastam muita energia sem nenhuma reposição. Seja qual for o seu talento ou grau de preparo, tornam-se vulneráveis à ansiedade e à falta de concentração, além de mais propensos ao fracasso.',
      p4:
        'A mesma lição se aplica aos atletas corporativos. Em geral, eles se desgastam demais mental e emocionalmente, mas muito pouco fisicamente. As duas formas de linearidade fazem mal para o desempenho. A falta de oscilação era o problema principal de Marilyn Clark, diretor-gerente da Salomon Smith Barney e uma de nossas clientes. Perto dos 40 anos, tinha um bom cargo na empresa, era mãe de três crianças e esposa de um alto executivo. Aparentemente, ela levava uma vida invejável, tanto que relutou em admitir sua frustração. Acontece que o corre-corre diário estava lhe custando caro demais. Pela manhã, temporariamente energizada por um pãozinho e um café, ficava esperta. À tarde, porém, suas reservas começavam a se esgotar. A hora do almoço, que poderia ser usada pra relaxar, Marilyn passava trabalhando. Além disso, tinha de dar atenção à família, ficando sem tempo para si mesma. Por isso, sua frustração aumentava a cada dia.',
    },
    {
      p1:
        'Nosso primeiro passo foi avaliar a capacidade física de Marilyn. Embora tivesse sido atleta quando era mais jovem, na época em que nos procurou se limitava a fazer alguns abdominais. À medida que aprendia mais sobre a relação entre a energia e a excelência do desempenho, Marylin compreendeu que sua primeira providência deveria ser entrar em forma novamente. Ela queria sentir-se melhor fisicamente e sabia que sua disposição melhoraria se reservasse um espaço na agenda para a prática de exercícios físicos.',
      p2:
        'Como é muito difícil abandonar velhos hábitos, ajudamos Marilyn a criar rituais pra substituí-los. Parte desse trabalho foi gerar um ambiente amigável, transformando o fato de treinar com alguns colegas do trabalho em estímulo para continuar. Marilyn começou a se exercitar três vezes por semana, às 11 horas da manhã. Nos fins de semana, pedia ao marido que cuidasse das crianças para que pudesse fazer exercícios. Isso a ajudou a criar demarcações claras para suas atividades profissionais e lhe devolveu a sensação de bem-estar que sentia quando era atleta. Agora, ela já não precisava recorrer ao chocolate para recuperar as forças na parte da tarde. Diz que trabalha menos e consegue fazer mais. Como não se sente tão sobrecarregada, acredita até ter se tornado uma chefe melhor.',
      p3:
        'É claro que o atleta corporativo não constrói um firme fundamento físico unicamente com exercícios. Dormir e comer bem também são rituais inerentes à gestão eficaz de energia.',
      p4:
        'Rudy Borneo, vice-presidente da Macy´s West, queixava-se de níveis inconstantes de energia, alterações de ânimo e dificuldade de concentração. A exemplo de muitos executivos, estava acima do peso e tinha hábitos alimentares pobres. Em geral, começava seu dia, habitualmente repleto de viagens, sem tomar o café da manhã - o equivalente a ir para a linha de largada das 500 milhas de Indianápolis com o tanque praticamente vazio. Na hora do almoço recorre a lanches doces para combater as inevitáveis pontadas de fome do período da tarde.',
    },
    {
      p1:
        'Esses alimentos aumentavam o nível de glicose do sangue, dando-lhe uma súbita descarga de energia, que logo se dissipava. O jantar era farto, composto por diferentes pratos e feito tarde da noite. A digestão de toda aquela comida perturbava o sono de Borneo e o deixava lento e sem disposição na manhã seguinte. Essa história não lhe parece familiar? Dissemos a ele que, se comesse pouco, mas com frequência, conseguiria manter um nível constante de energia. Hoje, Borneo toma café da manhã diariamente. Aprendeu também que, segundo os princípios da cronobiologia, o corpo e a mente precisam de renovação a cada 90 ou 120 minutos. Tomando esse ciclo como base para sua alimentação, passou a fazer de cinco a seis refeições ao dia, além de beber água frequentemente.',
      p2:
        'Além de induzir a perda de peso e de fazê-lo sentir-se melhor, os rituais nutricionais e de condicionamento físico tiveram um efeito espetacular sobre outros aspectos de sua vida. Aos 59 anos, ele diz ter mais energia do que nunca e que aprendeu a lidar com questões complicadas, além de ter melhorado seu relacionamento com os colegas.',
      p3:
        'Emoções em Equilíbrio - o segundo bloco necessário à construção da CID é a capacidade emocional - o clima interno que dá sustentação ao desempenho. Pouco depois de ganhar uma medalha de outro nos Jogos Olímpicos de Sydney, a velocista Marion Joses disse: "Eu me divirto enquanto estou correndo. Fico superfeliz, não me sinto estressada".',
      p4:
        'Assim como as emoções positivas impulsionam o alto desempenho, os sentimentos negativos, como frustração, impaciência, ira, medo, ressentimento e tristeza, minam as reservas energéticas. Com o passar do tempo, eles podem se tornar literalmente tóxicos, acelerando o ritmo dos batimentos cardíacos, aumentando a pressão sanguínea e a tensão muscular, obstruindo a visão e colocando o desempenho a perder. Os atletas ansiosos, por exemplo, são os que mais têm chances de fracassar nas competições, porque permitem que a raiva e a frustração sabotem sua concentração.',
    },
    {
      p1:
        'No mundo dos negócios, o impacto das emoções negativas sobre a performance é mais sutil, porém igualmente devastador. Alan, executivo de uma empresa americana de investimentos, viajava frequentemente supervisionando as filiais da companhia espalhadas pelo país. Seus colegas o consideravam um líder perfeccionista e crítico, cuja frustração e impaciência por vezes transbordavam em comentários ferinos.',
      p2:
        'O grande desafio de Alan era aprender a lidar com suas emoções. Ele reagia instintivamente diante de situações em que se sentia ameaçado. Para administrar isso, teria de transformar em desafio o que via como ameaça. Passou a fazer exercícios físicos com regularidade, o que o tornou menos tenso. Ensinamos a ele também um rigoroso ritual de cinco etapas para refrear as emoções negativas.',
      p3:
        'O primeiro passo era aguçar a percepção, reagindo aos sinais de que seu corpo estaria à beira de um ataque de nervos - tensão física, coração acelerado e aperto no peito. Toda vez que essas sensações viessem à tona, Alan deveria fechar os olhos, respirar profundamente diversas vezes e relaxar os músculos do rosto. Depois, deveria esforçar-se para abrandar o tom e voz e falar mais lentamente. O próximo passo era tentar se colar no lugar da pessoa que o deixara irritado e imaginar o que ela poderia estar sentindo. A quinta etapa consistia em tentar verbalizar sua reação com palavras positivas. No início, Alan achou tudo isso constrangedor, e, é claro, teve algumas recaídas no seu velho estilo de reagir. No entanto, passadas algumas semanas, o ritual de cinco etapas tornou-se automático. O resultado? Seus colegas de trabalho andam dizendo que Alan agora é um sujeito mais sensato, e ele mesmo reconhece que sua performance profissional melhorou muito.',
      p4:
        'Os atletas têm inúmeros rituais que ajudam a restaurar a energia positiva. Não é nenhuma coincidência, por exemplo, que muitos deles ouçam música antes da competição.',
    },
    {
      p1:
        'A música tem um efeito poderoso sobre as condições fisiológicas e emocionais, e pode detonar um deslocamento na atividade mental do hemisfério esquerdo do cérebro, ligado à racionalidade, para o hemisfério direito, relacionado á intuição. Isso espanta o pensamento obsessivo e as preocupações.',
      p2:
        'A música pode ser um meio de calibração direta da energia: aumentando o pique quando é hora de entrar em ação e acalmando quando o momento pede isso. A linguagem do corpo também influencia as emoções. Em uma experiência bem conhecida, pediu-se a alguns atores que fizessem uma expressão de raiva. Depois, o grupo foi submetido a diversos testes psicológicos e exames para medir batimentos cardíacos, pressão sanguínea, temperatura, reação da pele e estímulos e níveis hormonais. Em seguida, os mesmos atores foram expostos a situações que os deixaram irritados de verdade e passaram de novo pelos mesmos testes.',
      p3:
        'Nas duas vezes os resultados não tiveram praticamente nenhuma diferença. Uma encenação bem-feita produz exatamente o mesmo perfil fisiológico delineado por emoções reais. Todos os grandes atletas compreendem isso instintivamente. Se demonstrarem confiança, vão acabar se sentindo confiantes, mesmo nas situações mais estressantes.',
      p4:
        'É por isso que instruímos nossos clientes para que ajam "como se", criando uma visão do lado de fora que desejam sentir do lado de dentro. Aristóteles dizia que você é aquilo que faz constantemente. A excelência não é um ato isolado, e sim um hábito. É na intimidade dos relacionamentos que as emoções positivas e a recuperação de energia encontram um terreno fértil. Uma vida feliz em família ou uma noite agradável passada na companhia dos amigos proporcionam segurança e tranquilidade. E esses sentimentos estão intimamente associados à CID. Infelizmente, muitos dos atletas corporativos que treinamos acham que, para atender às expectativas do trabalho, não há outra alternativa senão restringir o tempo dedicado à família.',
    },
    {
      p1:
        'Acontece que, ao dedicar mais tempo aos seus relacionamentos pessoais, estabelecendo limites definidos entre o trabalho e a vida fora dele, as pessoas se sentem mais satisfeitas, e isso influencia positivamente seu desempenho profissional. Mente em Alerta - o terceiro nível da pirâmide de desempenho - a capacidade mental - costuma ser o foco das atenções da maioria dos treinamentos voltados para o aperfeiçoamento do desempenho. Nosso objetivo é expandir as aptidões cognitivas dos clientes e sobretudo suas habilidades de concentração, organização do tempo e pensamento crítico.',
      p2:
        'Concentração significa colocar a energia a serviço de um objetivo específico. A meditação, comumente considerada um exercício espiritual, pode ser um meio eficaz de adestramento da atenção e de reposição de energia. Para que a técnica funcione adequadamente, é preciso que o indivíduo se sinta tranquilo e respire profundamente, contando cada expiração e recomeçando todo o processo sempre que cheque a dez. Pode-se também escolher uma palavra que será repetida a cada inspiração. Quando praticada com regularidade, a meditação acalma a mente, as emoções e o corpo.',
      p3:
        'Diversos estudos mostram, por exemplo, que praticantes habituais precisam de muito menos horas de sono. A meditação e outras disciplinas não cognitivas podem também desacelerar a atividade das ondas cerebrais e estimular um deslocamento da atividade mental do hemisfério esquerdo do cérebro para o direito. Já não aconteceu de você achar a solução para um problema quando se dedicava a alguma coisa pouco intelectual, como caminhar ou cuidar do jardim?',
      p4:
        'Para desenvolver esse nível da pirâmide, a preocupação básica é gerir o tempo e a energia conscientemente. Ao alternar períodos de estresse com os de reposição de energia, o profissional aprende a ajustar o trabalho com a necessidade que o corpo tem de fazer pausas a cada 90 ou 120 minutos. Isso pode ser tornar um verdadeiro desafio para os workaholics.',
    },
    {
      p1:
        'Jeffrey Sklar, de 39 anos, diretor-gerente de vendas internacionais da Gruntal & Company, uma empresa de investimentos de Nova York, estava acostumado a superar a concorrência pela força bruta porque trabalhava mais do que todo mundo. O ritual proposto a Sklar foi o seguinte: uma vez pela manhã e outra à tarde, ele deveria ir para uma sala tranquila e passar 15 minutos praticando exercícios de respiração profunda. Na hora do almoço, foi aconselhado a sair do escritório e caminhar um pouco. Também começou a fazer ginástica.',
      p2:
        'Em casa, ele e sua esposa, Sherry, uma executiva igualmente ocupada, fizeram um pacto de não conversar sobre negócios depois das 8 da noite e de não trabalhar nos fins de semana. Isso faz dois anos. Nesse período, os ganhos de Sklar aumentaram mais de 63%. Para Jim Connor, presidente e CEO da Footjoy, a reavaliação do uso do tempo tornou-se uma forma de administrar a energia e de equilibrar a vida. Connor nos procurou dizendo que se sentia amarrado a uma rotina tirânica. "Esquematizei um comportamento que me ajuda a enfrentar todos os reveses, mas eu não sinto a vida, vivo de modo repetitivo", disse. ',
      p3:
        'Com o tempo, chegou à conclusão de que ninguém no escritório se importaria com o fato de ele chegar um pouco atrasado ou de ir para casa mais cedo. Achou também que era aceitável passar um ou dois dias trabalhando em uma unidade-satélite da empresa mais próxima de sua casa. Connor começou também a praticar golfe, instituiu passeios com a esposa e estabeleceu um período de reposição de energia durante a semana. Hoje, diz que se tornou muito mais produtivo. Os rituais que estimulam o pensamento positivo também aumentam a possibilidade de atingir a CID. ',
      p4:
        'A visualização produz resultados de desempenho palpáveis. O jogador de golfe americano Tiger Woods, por exemplo, aprendeu com seu pai, Earl, a formar uma imagem mental da bola rolando em direção ao buraco antes de cada tacada. O exercício faz mais do que apenas produzir uma sensação de otimismo e bem-estar.',
    },
    {
      p1:
        'O neurocirurgião Ian Robertson, do Trinity College de Dublin, autor de Mind Sculpture (Ed. Fromm), constatou que a visualização age sobre o cérebro, afetando positivamente o desempenho. No escritório, essa técnica também pode ser muito útil. Sherry, a esposa de Jeffrey Sklar, sempre visualiza o que deseja de cada reunião de trabalho. ',
      p2:
        'Na verdade, ela está reduzindo a possibilidade de que pensamentos negativos possam distraí-la num momento de pressão. É Preciso Acreditar - a maior parte dos executivos tem restrições ao quarto patamar da pirâmide de desempenho - a capacidade espiritual. E é compreensível que seja assim, porque esse conceito parece não combinar muito com trabalho. A menos que se pense nessa habilidade como a energia liberada toda vez que se toca os valores mais profundos de um indivíduo. ',
      p3:
        'Isso funciona como uma poderosa fonte de motivação, concentração, determinação e flexibilidade. O caso de Ann, executiva de alto nível de uma grande empresa de cosméticos, ilustra bem isso. Durante anos, ela tentou deixar de fumar, jogando a culpa por seus fracassos profissionais na falta de disciplina. O cigarro cobrava um preço alto de Ann: baixa resistência decorrente do fôlego curto, mais dias de licença por motivo de doença, além do desejo de fumar, que acabava por distraí-la durante as reuniões mais longas.',
      p4:
        'Curioso era que Ann havia parado de fumar nas duas vezes em que ficou grávida. Nossa explicação para o fato: quando associava o impacto de fumar, a um propósito de extrema importância - no caso, a saúde dos filhos -, era fácil largar o vício, porque ela fazia o que se chama de adaptação baseada nos valores. Mas, quando essa associação deixava de existir, Ann voltava afumar. Para vencer o vício, ela precisou refletir sobre uma fonte de motivação na qual pudesse se amparar. Assim como a maioria dos executivos. Ann vivia num estado contínuo de urgência, cuidando sempre do que parecia mais premente, sem analisar a situação como um todo.',
    },
    {
      p1:
        'Entre os rituais que dão às pessoas a possibilidade de olhar para dentro de si mesmas estão, por exemplo, as anotações feitas em um diário, as orações e os serviços comunitários.',
      p2:
        'Vale a pena separar um tempo para esse contato com valores mais profundos. É uma experiência recompensadora, mas pode ser dolorosa também, como descobriu um cliente que vamos chamar de Richard. Ele é corretor e trabalha em Nova York. Sua esposa passa o dia cuidando dos três filhos do casal. Richard não estava satisfeito como o fato de não ter tempo para a família, mas não conseguia mudar essa situação. ',
      p3:
        'Sua infelicidade começou a afetar seu trabalho, o que fez dele uma pessoa ainda mais ranzinza em casa. Certa noite, na volta do escritório, Richard começou a refletir sobre sua vida e chorou. Estacionou o carro perto de um parque para se recompor. Depois de uns 10 minutos, o que ele mais queria era chegar em casa. As crianças ficaram confusas quando viram o pai entrar em casa com lágrimas nos olhos e abraçando-as calorosamente. Quando a esposa entrou na sala, pensou que ele tivesse sido despedido. No dia seguinte, Richard parou novamente no parque. Mais uma vez, chorou ao penar na falta que sentia da família e foi correndo ao encontro dos filhos e da mulher.',
      p4:
        'Nos dois anos que se seguiram, ele podia contar nos dedos as vezes em que não repetiu aquele mesmo ritual antes de chegar em casa. Com o passar do tempo, as emoções foram ficando mais contidas, mas aquela sensação de saber o que era realmente importante em sua vida nunca mais o abandonou. Por isso, voltar para casa depois do trabalho tornou-se uma fonte de reposição de energias. Nem é preciso dizer que seu desempenho profissional melhorou. Como se vê, na pista de corrida ou no escritório, o bom desempenho depende da maneira como as pessoas gastam e renovam suas energias e como administram sua vida pessoal Quando um profissional se sente forte, física, emocional e espiritualmente, todo mundo sai ganhando: ele próprio, sua família e, é claro, os colegas e a empresa em que trabalha.',
    },
  ];

  const texto4 = [
    {
      p1:
        'Escolha um emprego. Escolha uma carreira. Escolha um ramo de atuação e um rumo pra vida. Escolha uma boa universidade, uma especialização, mas esteja preparado: você terá de rever suas escolhas.',
      p2:
        'Vasculhou uma série de estudos sobre o futuro do trabalho e entrevistamos especialistas renomados que indicam, todos, transformações rápidas. Mesmo quem já está no mercado terá de se acostumar com uma nova lógica, preveem. E ela envolve cada vez mais escolhas.',
      p3:
        'Projeções para 2020 ou 2030 de entidades como o Massachusets Institute of Technology (MIT) ou o Institute for the Future sugerem um trabalho mais humanizado, lidando com massas de dados, valorizando mais a sua rede de contatos e a sua empatia. ',
      p4:
        'Preveem, também, as "profissões que aparecerão no futuro", mas, sejamos claros, os próprios estudiosos admitem que não costumam acertar nesse ponto. Entenda a seguir como essas tendências mudarão o seu jeito de trabalhar e veja nos quadros como profissões tradicionais já estão sendo reinventadas.',
      p5: '• Faculdade basta?',
      p6:
        'Previsões sempre carregam incerteza, mas há algumas difíceis de errar. Quem duvida que em alguns anos a população mundial continuará envelhecendo, que a capacidade dos processadores aumentará e que teremos mais smartphones, mais dados à disposição de todos e mais robôs?',
      p7:
        'Os impactos desses prováveis cenários, analisam os futurologistas, não devem ser pequenos.',
      p8:
        'Um consenso é que não bastará mais aplicar corretamente o conhecimento aprendido na faculdade. Ao estudar a criação de novas vagas de emprego nos Estados Unidos, a consultoria Mckinsey identificou que 85% delas exigiam que o candidato soubesse resolver problemas complexos, que requerem mais de uma área de conhecimento. O relatório O Futuro das Competências no Trabalho em 2020, do Institute for the Future, reforça a tendência. ',
      p9:
        '"Muitos dos problemas de hoje são complexos demais para serem resolvidos por uma disciplina específica. Requerem soluções transdisciplinares", diz o documento. Ser apto a uma abordagem transdisciplinar significa dominar profundamente um ramo do conhecimento, mas, ao mesmo tempo, conseguir "falar a língua" de outros. Se no século 20 foi exigido mais especialização, o futuro vai pedir mais interação com outras áreas. É por isso que bioinformática, biologia molecular e arquitetura digital são vistas como áreas em expansão.',
    },
    {
      p1:
        'É por isso também que vamos precisar de mais professores universitários. Será necessário criar esse contato com outras áreas do conhecimento constantemente, durante toda a carreira, não apenas na faculdade. "Já acompanhamos uma tendência de as pessoas estudarem mais e terem uma segunda carreira", diz Fernando Mantovani, diretor de operações na empresa de recrutamento Robert Half no Brasil.',
      p2:
        'Essa tendência é também identificada por estudos da área. Um deles foi feito no ano passado pelo economista Bart Hobijn, do banco Federal Reserve de São Francisco, e mostra que mais da metade das vagas de emprego abertas nos Estados Unidos nos últimos anos foi preenchida por pessoas que trocaram de área. ',
      p3:
        'Outro levantamento, da Universidade do Arizona, mostrou que 54% dos trabalhadores americanos com mais de 40 anos estão buscando uma nova carreira. Essa tendência de mudança constante de trabalho levou a revista de negócios Fast Company a cunhar a expressão "Geração Fluxo". "Eles abraçam a instabilidade, toleram - e até curtem - recalibrar suas carreiras, modelos de negócio e premissas. Nem todos se juntarão à Geração Fluxo, mas, para ser bem-sucedido, indivíduos e empresas agora terão de se esforçar para se adequar a ela", define a publicação.',
      p4: '• Menos médicos, mais sensores.',
      p5:
        'Falta de doutores deve fazer enfermeiros e técnicos ganharem espaço no mercado de saúde, assim como diagnósticos digitais.',
      p6:
        'Se vamos falar de futuro, esqueça a polêmica do Mais Médicos. Não haverá médicos suficientes com ou sem programa - e isso em todo o mundo. Como os mais idosos requerem mais atenção médica. ',
      p7:
        'O envelhecimento da população levará a uma escassez de profissionais. Só nos EUA serão 45 mil faltando em 2020, prevê a Associação de Universidades de Medicina do país. ',
      p8:
        'A Organização Mundial de Saúde se preocupa tanto com isso, que chegou a passar resoluções para frear a migração de profissionais de países pobres para nações ricas, temendo deixá-los desassistidos.',
      p9:
        'Soluções que começam a aparecer para lidar com isso podem mudar significativamente o cotidiano das profissões ligadas à saúde. A rede LifeSpring, na Índia, coloca enfermeiros para fazer o atendimento básico e estimula os médicos a atuar apenas em casos mais complexos. ',
      p10:
        'O programa de telemedicina Medicall Home, na Colômbia, já atende 1 milhão de famílias, que fazem 90 mil ligações mensais - o modelo é exportado para 30 países em desenvolvimento. ',
    },
    {
      p1:
        'A ideia é que formados em medicina tenham mais tempo para tarefas especializadas, como engenharia genética, criação de órgãos mecânicos e nanomedicina. Cuidar de pacientes e fazer diagnósticos simples ficaria a cargo de outros profissionais.',
      p2:
        'Este tipo de mudança encontra resistência na comunidade médica. O Congresso Nacional aprovou recentemente o Ato Médico, que proibia que uma série de serviços fossem feitos por "não-médicos", mas a presidente Dilma vetou as restrições, o que levou a categoria a protestar. ',
      p3:
        '"A hegemonia dos médicos sobre o tratamento das doenças já é coisa do passado", afirma o brasileiro Alexandre Kalache, que coordenou o programa de envelhecimento da Organização Mundial de Saúde e hoje preside o Centro de Longevidade Internacional.',
      p4:
        '"Doenças crônicas podem, em grande parte, ser prevenidas, ou postergadas. Mas os médicos precisam conhecer o paciente como pessoa, e não como um fígado ou um coração isolados", diz Kalache.',
      p5:
        'É dentro dessa abordagem que está em curso uma tendência de retomo do médico de família.',
      p6:
        'Nos Estados Unidos, uma empresa especializada neste tipo de serviço, a Carena, tem clientes do porte da Microsoft - os funcionários são atendidos por médicos ou enfermeiros, que usam um software de análise de dados para avaliar a gravidade do caso. ',
      p7:
        'Em 75% dos contatos, o problema é resolvido com uma entrevista por webcam. Já o médico americano Jay Parkinson levou a experiência do atendimento online a um novo estágio. Ele criou em 2012 a startup Sherpaa, que coloca 100 especialistas à disposição, de forma remota, para tirar dúvidas dos 500 pacientes cadastrados - e, em casos mais graves, encomendar o caso ao hospital.',
      p8:
        'Outra tendência é que visitas anuais sejam complementadas por atendimentos por e-mail ou celular - afinal, com tecnologias de diagnóstico em casa, vai ser possível medir os níveis de glicose e colesterol no sangue com a mesma facilidade com que hoje usamos um termômetro.',
      p9:
        ' "Os aparelhos de diagnóstico caseiros vão estar disponíveis a qualquer momento. O passo seguinte vai ser softwares capazes de prever o aparecimento de doenças crônicas", diz a Ph.D. em ciências da computação canadense Carolyn Mcgregor, do Instituto de Tecnologia de Ontario. Um programa que ela criou em parceria com a IBM já consegue cruzar fluxos de dados para identificar uma infecção um dia antes de os sintomas aparecerem.',
      p10: '• Gestor de Conhecimento.',
    },
    {
      p1:
        'O professor do futuro vai orientar seus alunos em projetos - muitas vezes fora da sala de aula.',
      p2:
        'Alunos de idades diferentes, sentados ao redor de mesas circulares, usando notebooks para fazer deveres que vão muito além de preencher lacunas ou responder decorebas. O lugar do professor na sala de aula do futuro deve ser monitorar, tirar dúvidas e avaliar projetos que alunos trabalham, com metas. Isso já é o que acontece em algumas escolas de vanguarda. Inclusive no Brasil.',
      p3:
        'No Colégio Estadual José Leite Lopes, é a sede de um projeto-piloto, Núcleo Avançado em Educação (Nave), 420 estudantes de Ensino Médio conciliam o currículo tradicional com cursos técnicos em Programação de Jogos Digitais, Multimídia e Roteiro para Mídias Digitais. As lições de casa são armazenadas em um pen drive, que cada aluno recebe ao se matricular.',
      p4:
        'Para concluir o curso, é preciso desenvolver um projeto em uma das três áreas escolhidas - ele precisa ser funcional e viável economicamente. O ensino por projetos, com turmas de idades diferentes, também é colocado em prática na Escola Municipal André Urani, na favela da Rocinha, Rio de Janeiro. Desde março, o Ginásio Experimental de Novas Tecnologias Educacionais (Gente) disponibiliza um notebook para cada um dos 180 alunos, que são organizados em turmas de seis pessoas para realizar tarefas que conciliam lições tradicionais com videogames - quem acerta passa de fase e recebe problemas mais complexos.',
      p5:
        'Em nenhum desses projetos, o professor é substituído por aparelhos, mas em todos ele tem de mudar sua postura. "O estudante não fica parado, diante de um professor que detém todo o conhecimento. Ele busca o conhecimento, e o professor atua como um gestor", afirma o especialista em tecnologia de educação Marc Prensky, fundador da Game2train, uma empresa que fornece ferramentas de ensino à distância com base em games. ',
      p6:
        'Faz sentido, se levarmos em conta que, entre os brasileiros com 10 a 15 anos, dois terços têm celular e metade desse grupo usa o aparelho para acessar a internet (podendo checar as informações do professor), segundo a pesquisa TIC do centro de estudos Cetic.br.',
      p7:
        'Quanto menor a criança, mais tempo ela passará com outras, a fim de aprender a conviver em grupo, diz Prensky. A tendência, para ele, é que, na medida em que envelheçam, os estudantes estudem mais de casa - desde a adolescência, as aulas expositivas poderão ser gravadas pelo professor em vídeo. "Mais do que nunca, vamos estudar ao longo de toda a vida, fazendo cursos diferentes, mais curtos.E muitos vão estar disponíveis à distância, o que funciona melhor para pessoas mais velhas, que têm maior capacidade de se organizar e se concentrar sozinhas", afirma Prensky. ',
      p8:
        'Nos Estados Unidos, a instituição de cursos universitários à distância Coursera já reúne 1,7 milhão de alunos e ganha adeptos com mais velocidade do que o Facebook. No Brasil, 993 mil pessoas estão matriculadas em cursos superiores no mesmo estilo. "Eles não têm o mesmo valor de um diploma tradicional, mas dentro de alguns anos vão passar a ter", afirma o professor João Vianney Valle dos Santos, pesquisador do tema na Universidade Federal de Santa Catarina.',
      p9:
        'Neste cenário, os professores poderão ter vínculos menos estáveis com instituições de ensino e atuar como freelancers para aulas dentro de empresas, ou em diferentes escolas, mesclando participações físicas e cursos à distância. "Numa era de tanta informação disponível, mas nem sempre confiável, o professor é mais importante do que nunca", diz Maria Helena Bonilla, pesquisadora da Faculdade de Educação da Universidade Federal da Bahia (UFBA).',
      p10: '• Era de ouro',
    },
    {
      p1:
        'Não se trata apenas de estudar outras áreas e trocar de ramo, mas também de lidar com muita informação. A IBM calcula que, em um ano, o mundo criou diariamente novos 2,5 quintilhões de bytes de dados (o suficiente para preencher 1 bilhão de livros com 10 milhões de páginas cada). Todos estamos expostos a parte dessa sobrecarga cognitiva, das dezenas de e-mails inúteis que recebemos por dia aos milhões de resultados de qualquer busca pela internet. Filtrar o que interessa, neste ambiente, tornou-se mais complicado. É por isso que os profissionais, daqui pra frente, terão de incorporar um quê de cientistas de dados.',
      p2:
        'A tendência afeta diferentes áreas, do técnico de futebol do Corinthians, que recebe relatórios de estatísticas sobre o desempenho e o desgaste físico de seus jogadores após cada jogo, aos policiais de Santa Cruz, na Califórnia, que todos os dias ganham listas com as probabilidades de vários crimes ocorrerem em diferentes regiões da cidade. "A capacidade de interpretar dados corretamente e extrair desse volume gigantesco de informações estratégias e iniciativas criativas será fundamental para o sucesso", afirma Erik Brynjolfsson, professor da MIT Sloan School of Management.',
      p3:
        'Cientistas de dados propriamente ditos, é claro, também serão cada vez mais requisitados. São eles que vão criar algoritmos ajudando a interpretar as massas de informação, seja para extrair sentido de bilhões de bases do genoma de uma pessoa, seja para analisar transações de cartão de crédito e identificar movimentações suspeitas. "Estamos observando o nascimento de uma era de ouro para os especialistas em estatísticas", diz Brynjolfsson.',
      p4:
        'São também os cientistas de dados os responsáveis por outra grande transformação: levar a automação de tarefas a um nível sem precedentes. As máquinas já conseguem, por exemplo, escrever uma notícia automaticamente ao conectar aos dados da bolsa. ',
      p5:
        'É isso o que faz o algoritmo da empresa americana Narrative Sciences, criado na Universidade Northwestern, para o site da revista Forbes e de mais 30 outras companhias. Além de redigir notícias de economia e de esportes, o serviço também pode criar análises financeiras para grandes empresas. "O que chamamos hoje de auditoria na contabilidade será feito automaticamente por sistemas inteligentes analisando transações em tempo real", diz Rohit Talwar, CEO da companhia de pesquisas Fast Future, que assessora o governo britânico em futurologia.',
      p6:
        'O fato de as máquinas cuidarem, cada vez mais, dos processos de rotina que hoje nos tomam muito tempo, "criará uma demanda por mais relações interpessoais", diz o futurólogo britânico Ian Pearson, autor do livro You Tomorrow. "O trabalho ficará mais humanizado." O que sobrará para nós será exatamente o que as máquinas ainda não podem fazer, atividades que requerem empatia e sociabilidade. De acordo com o economista Richard Freeman, professor da Universidade de Harvard, isso já está em curso. "As vagas de trabalho estão migrando rapidamente. Há menos emprego para funcionários que executam tarefas repetitivas."',
      p7:
        'Isso também levanta um aspecto preocupante. A nova leva de produtividade das máquinas substitui agora não apenas empregos no chão de fábrica, mas também trabalhadores na área de serviço, para onde historicamente têm migrado os empregos a cada leva de mecanização. ',
      p8:
        'Essa mudança fundamental explica em parte por que, pela primeira vez na história, o aumento da produtividade dos Estados Unidos não é acompanhado pelo aumento na oferta de trabalho. "A automatização da produção sempre foi acompanhada de uma melhoria geral na renda e na criação de novas oportunidades de trabalho, geradas pelo aumento do consumo", diz Brynjolfsson. "Este ciclo está se rompendo porque a automação está acelerada demais para que a criação de vagas acompanhe." A conclusão do professor do MIT, controversa entre outros economistas, é que pela primeira vez as máquinas provocarão desemprego estrutural - ou seja, não serão criadas vagas suficientes para ocupar as pessoas demitidas.',
      p9: '• Você mais social.',
      p10:
        'O novo ecossistema de comunicação possibilita e estimula o trabalho colaborativo, que reúne profissionais com talentos diferentes de quaisquer pontos do planeta para solucionar problemas complexos (lembra da transdisciplinaridade?) Vários estudos recentes mostram que os grupos mais inovadores e inteligentes são normalmente constituídos de pessoas de diferentes idades, habilidades, formação e estilos de pensar e agir. ',
    },
    {
      p1:
        'Ou seja, quanto mais diferença, melhor. Numa dessas pesquisas, Scott E. Page, diretor do Centro para Estudos de Sistemas Complexos da Universidade de Michigan, escreve que o desempenho de grupos de trabalho para resolver problemas "é tão influenciado pelas diferenças coletivas dentro do grupo quanto pelo QI individual de cada um dos participantes".',
      p2:
        'Com mais diversidade e conectividade, saber lidar com uma rede social de especialistas e ter bom relacionamento interpessoal pode valer tanto quanto entender profundamente de um assunto. "Temos exemplos de engenheiros que discutem problemas através do Facebook numa das empresas que assessoramos", diz Fernando Mantovani, da Robert Half. "Se um deles tem dificuldade numa obra, posta para um grupo de engenheiros de obras. Meia hora depois, um colega, de outro estado, apresenta uma solução".',
      p3:
        'Outro exemplo disso são plataformas como a Innocentive, que colocam problemas na internet para qualquer pessoa, de qualquer área, solucionar. Elas criam competições valendo dinheiro para resolver questões que funcionários de empresas como a GE, P&G e Pfizer não conseguiram. Criar latinhas de refrigerantes melhores ou uma campanha de comunicação mais eficiente são alguns dos trabalhos postados na web para qualquer um que tiver ideias. É uma espécie de freelancer.',
      p4: '• Vida frila',
      p5:
        'Esta é, aliás, outra tendência indicada pelos pesquisadores: fundir relações pessoais e profissionais, redução do vínculo do trabalhador com apenas uma empresa (ou um chefe) e mais agilidade em detrimento da hierarquia rígida e da burocracia. "Arranjos informais onde pessoas se ligam umas com as outras para trabalhar de freelancer em projetos serão mais comuns. Os freelancers estarão numa posição melhor, vendendo seus serviços para o melhor cliente a cada semana", diz Pearson. "Muitas grandes companhias vão se decompor e muito mais pessoas trabalharão em pequenas empresas."',
      p6:
        'Deve ganhar espaço (já ganhou, na verdade) o trabalho eventual em home office, ao menos em parte do tempo. Outro relatório da consultoria Mckinsey mostra que o número de vagas nesse tipo de ocupação mais informal cresceu 66% na França, enquanto as vagas normais cresceram 7%. ',
      p7:
        'Empresários dos Estados Unidos e das outras grandes economias, diz o relatório, se dizem cada vez mais dispostos a aumentar o número de empregados de alta qualificação para trabalhos pontuais. Isso também pode ser visto pelo lado ruim: condições menos seguras de contratação e a falta de carteira assinada.',
      p8:
        'Diante deste quadro, não surpreende que o home office já seja uma realidade. O Centro de Estudos de Teletrabalho e Alternativas de Trabalho Flexível, da Business School São Paulo, calcula que o Brasil tenha cerca de 12 milhões de teletrabalhadores.',
      p9:
        'Nas unidades brasileiras da empresa HP, por exemplo, mais de metade dos 8.500 funcionários podem fazer parte do trabalho fora do ambiente da empresa. A Ticket, que implantou o trabalho remoto, fechou 24 filiais físicas (manteve apenas uma, em São Paulo), o que rendeu à empresa uma economia de R$ 3,5 milhões. Ainda assim, o volume de vendas cresceu 40%. "Em boa parte das profissões, ainda não é possível trabalhar de casa", diz o consultor Sidnei Oliveira, autor (do recém-lançado livro Profissões do Futuro - Você Está no Jogo? ',
    },
    {
      p1:
        '"Mas, mesmo nestes casos, o empregado já aceita misturar a vida pessoal com a profissional: ele não quer mais passar oito horas de seu dia sem acesso ao Facebook. Por outro lado, não se incomoda tanto de responder um e-mail de trabalho no sábado à noite." Além dessas, há outras tendências pontuais que devem mexer com o mercado de trabalho, como o envelhecimento. Uma população com menos crianças e mais velhos (processo em curso no Brasil) tende a fechar mercados a pediatras e professores infantis e abrir oportunidades para cuidadores e outros serviços ligados a idosos. Um reflexo inusitado disso já ocorre no mercado pet (menos filhos tem feito as pessoas comprarem mais animais de estimação), que alcançou o faturamento recorde de R$ 14,2 bilhões em 2012.',
      p2:
        'Para além de mudanças pontuais em mercados, especialistas dizem que as transformações no trabalho continuarão rápidas. "A própria definição sobre o que é trabalho já é muito diferente de 20 anos atrás. A humanidade mudou muito, numa velocidade estonteante", afirma o psicólogo Edward E. Gordon, consultor de várias das maiores empresas do mundo e autor do recém-lançado livro Future Jobs (Trabalhos do futuro). "A vida profissional do século 21 vai ser melhor, favorecerá inteligência, criatividade e iniciativa. Mas não vai ser nem um pouco estável."',
      p3: '• Supervisor de Máquinas',
      p4:
        'Novas áreas vão surgir no direito para supervisionar "softwaresjuízes" e promover julgamentos à distância.',
      p5:
        'Todos os dias, centenas de casos semelhantes, com jurisprudência estabelecida, chegam aos tribunais. Seria possível implantar um software capaz de fazer triagem e estabelecer sentenças para desafogar as cortes? Na Alemanha, a Agência de Emprego Federal já trabalha em parceria com Tom Gordon, do Instituto Fraunhofer, para criar um "despachador automático", que toma decisões sobre pedidos de pensão para os filhos sozinho. ',
      p6:
        'As frases dos requerimentos são separadas pelo software em categorias que o sistema consegue interpretar e comparar com a legislação. Portanto, aos advogados e juízes de carne e osso, restaria a tarefa de auditar estes processos, para evitar erros. "As leis vão ter que ser reorganizadas, com os códigos e artigos usando tags para facilitar a identificação", afirma Richard Susskin, pesquisador do Oxford Internet Institute e especialista em tendências futuras na área.',
      p7:
        'A previsão dele é que casos que vão a júri popular aconteçam por webcam, com os jurados no conforto de suas casas. O mesmo vale para o aconselhamento jurídico, que na maior parte das vezes é repetitivo. Ele pode ser gravado em vídeo para algumas questões recorrentes, em vez de ser pessoal, sugere Susskin.',
      p8:
        'Sobre o futuro do mercado, algumas áreas tendem a crescer muito, em especial direito internacional e direito digital. "Num mundo em que um garoto na Indonésia pode cometer crime digital contra uma instituição bancária da Dinamarca, ambos serão mais necessários. É um território pantanoso, que vai exigir a formação de profissionais altamente especializados, com conhecimento de TI", diz Susskin, que lançou recentemente o livro Tomorrow Lawyers: An Introduction to Your Future (Os advogados de amanhã: uma introdução ao seu futuro, sem edição em português). ',
      p9:
        'É aí que deve surgir a figura do perito forense digital. Ele vai buscar evidências diante das acusações de ataques a servidores e contas bancárias, roubo de dados, pedofilia e outros crimes na rede.',
    },
    {
      p1: '• Novos Analistas de dados.',
      p2:
        'Profissionais de marketing e economistas vão ter de entender um volume inacreditável de informações para se comunicar com o consumidor.',
      p3:
        'O marketing, há muito tempo, é calcado em pesquisas e dados. "Mas o volume e o tipo de dados que estamos começando a adquirir mudou demais", escreve Duncan Watts, líder de pesquisas na Microsoft, em um artigo para a consultoria Mckinsey.',
      p4:
        '"As questões que podemos perguntar hoje são mais sofisticadas e requerem uma ciência completamente nova para isso", completa. Se o profissional de marketing costumava trabalhar com grupos como "mulheres da classe C, de 25 a 30 anos", agora, com a enxurrada de informações das redes sociais, podem traçar estratégias para as "mulheres da classe C, com 25 a 30 anos, que têm um filho, são divorciadas, fazem parte um grupo grande de amigos, usam o instagram e gostam de hip hop, sapatos de salto alto e roupas de cores vivas". ',
      p5:
        '"O profissional dessa área terá de ser mais eficiente na organização e na extração de sentido desses dados", afirma Fernando Mantovani, da empresa de recrutamento Robert Half.',
      p6:
        'Para Watts, as novas perspectivas trazem outras consequências para o marqueteiro: abdicar um pouco do imaginário de hipóteses imaginativas para entender os consumidores. "Temos intuições sobre como as pessoas fazem as coisas e como podemos influenciá-las. ',
      p7:
        'Mas, agora que temos os dados para checá-las, vemos que isso na maioria das vezes não condiz com a realidade. O profissional terá de duvidar mais da sua intuição e ser mais dirigido por dados." Com os economistas, acontece algo semelhante. Um mundo das finanças cada vez mais rápido e volátil faz com que suas análises também se beneficiem da capacidade de decifrar bancos de dados gigantescos. "Pequenas oscilações no mercado financeiro internacional poderão ser previstas por economistas ágeis", afirma o americano Xavier Gabaix, Ph.D. em economia em Harvard.',
      p8:
        'A área também tende a recuperar seu status. Se desde os anos 1990 a economia perdeu espaço no mercado para administração, direito e engenharia, esta situação está mudando. Os cursos universitários estão sendo revistos, para que o novo profissional seja capaz de atuar em prevenção de crises e em consultaria de finanças.',
      p9:
        'O aumento de profissionais autônomos e de idosos favorecem esses profissionais - e, no caso específico do Brasil, também o crescimento no acesso a crédito das classes C e D, que ainda estão envoltas em dúvidas sobre as oportunidades que se abrem. "Essas pessoas estão perdidas, fazendo dívidas que não têm como pagar e aceitando taxas de juros desnecessárias", afirma o consultor de carreiras Sidnei Oliveira.',
      p10:
        '"Os especialistas poderão ajudar essas pessoas e orientar suas vidas financeiras, tendo em vista que haverá mais profissionais que não recebem mais salários mensais fixos e precisam pensar sozinhos nas próprias aposentadorias."',
    },
  ];

  const texto5 = [
    {
      p1:
        'É o dia do casamento da melhor amiga de Maria. Ela ajudou a preparar cuidadosamente todos os detalhes da festa e será a madrinha da noiva. Mas justamente nessa manhã Maria e seu namorado têm uma grande discussão.',
      p2:
        'A briga é tão intensa que lhe parece impossível ir mais tarde à festa pela qual esperou ansiosamente. Mas também pode estragar uma data tão importante para sua amiga querida. O que fazer?',
      p3:
        'Muitas pessoas, em uma situação semelhante, provavelmente afogariam a angústia em alguns copos de champanhe. Mas nesse caso isso é impensável, pois Maria precisa estar lúcida para ajudar na organização do evento. ',
      p4:
        'Vamos supor então que seu primo, que acompanhara todo o drama matutino, sugira um remédio: uma pílula que ele próprio toma para controlar a depressão. O comprimido tem efeito "milagroso" e, além disso, ele leu há pouco tempo que também melhora o estado de espírito de pessoas saudáveis.',
      p5:
        'Para evitar desilusões avisamos logo: a pílula milagrosa aqui descrita não existe. E é questionável se os antidepressivos comuns realmente favoreça o estado psíquico de pessoas saudáveis. E se têm esse efeito, certamente não é instantâneo. ',
      p6:
        'Substâncias como o ecstasy, por sua vez, que elevam o ânimo de forma imediata, podem causar dependência e graves efeitos colaterais. Mas suponha que cientistas realmente desenvolvessem um preparado que estimulasse no mínimo tanto quanto, o champanhe sem serem acompanhados dos efeitos negativos causados pela embriaguez e pela ressaca. ',
      p7:
        'Uma substância assim seria uma bênção ou uma maldição? Especialistas alertam para possíveis riscos e alguns questionam até mesmo se esse comportamento é "correto". Mas haveria algo de errado em recorrer a fármacos para favorecer o rendimento no trabalho e nos estudos, diminuir a necessidade de sono, melhorar a memória e a capacidade intelectual e, ainda, o humor?',
      p8:
        'Cada vez mais a mídia apresenta casos de estudantes que tomam estimulantes para estudar para provas ou profissionais que enfrentam a pressão no trabalho com medicamentos normalmente usados para o tratamento de Alzheimer ou da pressão alta (betabloqueadores). ',
      p9:
        'Com isso, buscam melhorar a capacidade de concentração, reduzir a tensão e a ansiedade. Mesmo que quase não haja números confiáveis a esse respeito, podemos ter a impressão de que vivemos um momento eticamente preocupante. "Doping cerebral" é um termo-chave, e a associação com o embuste que ocorre nos esportes antecipa o julgamento negativo.',
      p10:
        'Propomos, porém, considerar que os objetivos desses "dopings cerebrais" parecem bastante louváveis: iniciativas para melhorar o próprio desempenho intelectual ou favorecer a forma de relacionar-se consigo mesmo e com os outros são vistas, com razão, de forma positiva. ',
      p11:
        'Quem procura ampliar seu potencial por meio de treinamento mental (cultivando o hábito da leitura e aprendendo línguas, por exemplo), prática de exercícios ou meditação normalmente é valorizado por isso. Mesmo aqueles que tentam influenciar positivamente as pequenas variações de humor e o desempenho diário com café, chocolate, vitaminas, comprimidos de ginkgo biloba ou pelo consumo moderado de álcool certamente não estão agindo de forma imoral.',
      p12:
        'Para evitar equívocos ou olhares preconceituosos, optamos por utilizar a denominação neuroaprimoramento (NA), do inglês neuroenhancement. Alguns autores indicam com essa expressão medidas puramente preventivas contra doenças neurológicas ou psiquiátricas, além de estratégias tradicionais para favorecer o desempenho como ingerir café para espantar o sono ou treinar a memória fazendo palavras cruzadas.',
      p13:
        'Aqui, porém, nos referimos ao NA para falar da melhora do desempenho cognitivo ou do estado psíquico por meio de dispositivos neurotécnicos (como chips de memória ou marca-passos cerebrais) e, principalmente, de fármacos - sempre sem nenhum objetivo terapêutico ou preventivo.',
      p14: 'Risco de dependência',
      p15:
        'Mais uma observação referente ao exemplo do início: se Maria passasse a tomar as "pílulas da felicidade" oferecidas pelo primo a cada briga com o namorado para fugir da clareza profunda, mas com certeza dolorosa, de seus problemas de relacionamento, seu comportamento pareceria muito mais problemático. ',
    },
    {
      p1:
        'Se fizer isso em uma ocasião específica, porém, a situação parece mais aceitável. Para um julgamento ético do farmacêutico, portanto, é importante considerar a intensidade e regularidade com que esse recurso é utilizado.',
      p2:
        'Além disso, vale questionar os motivos impulsionadores e as intenções concretas de quem adere ao neuroaprimoramento. Por fim, cabe levar em conta se uma pessoa optou por utilizá-lo para si, de forma autônoma, ou se a decisão foi tomada por outros, como no caso de crianças, ou mesmo se houve influência do médico. ',
      p3:
        'O ponto de partida de nossas reflexões é o direito de cada um ser capaz de fazer escolhas e dispor de seu corpo e sua psique. Sendo assim, não é a liberdade de usar PNAs que precisa ser justificada, mas sim o tolhimento dessa liberdade. ',
      p4:
        'Há, porém, uma questão que se impõe: o NA é benéfico ou prejudicial a uma vida bem-sucedida?',
      p5:
        'Quando se apresentam objeções ao uso de drogas para turbinar o cérebro costuma ser a "antinaturalidade" desse recurso ou os riscos de intervir na "natureza humana". Este, porém, é um argumento fraco. A mera artificialidade não pode ser vista como problema se aceitamos o uso de meios correspondentes na medicina sem nenhum questionamento. ',
      p6:
        'E no que diz respeito às intenções, elas consistem principalmente em obter melhoras que nos parecem insuspeitas quando realizadas de outras formas, não químicas.',
      p7:
        'Mesmo em cenários futuristas, nos quais realmente falássemos da superação da natureza humana, teríamos primeiramente de explicar por que essa seria intocável - afinal, somos bem menos cautelosos quando se trata de alterar a natureza em nosso interesse. No entanto, é fato que intervenções na complicada e ainda pouco compreendida dinâmica dos seres vivos, especialmente do próprio homem, só podem ocorrer com extremo cuidado. ',
      p8:
        'A metáfora da "sabedoria evolucionária" é uma admonição pragmática e legítima, principalmente no que diz respeito ao cérebro humano.',
      p9:
        'Outra objeção comum contra o neuroaprimoramento se refere ao seu grau de intervenção neurobiológica que, em comparação com o impacto de treinamentos cognitivos ou da meditação, por exemplo, é considerado inferior: pílulas para processos metabólicos neuronais; conversas e argumentos para o espírito. ',
      p10:
        'Mas a premissa funcional-dualista dessa visão não é sustentável atualmente. Muitos fatos científicos e filosóficos indicam que medicamentos e outros fatores externos deixam marcas no "espaço da racionalidade", assim como a simples reflexão também se manifesta constantemente de forma neurológica. Sabe-se, por exemplo, que a psicoterapia faz com que sejam desenvolvidas ou fortalecidas as redes neurais. Não é possível, portanto, estabelecer hierarquias unívocas. ',
      p11:
        'Também é comum afirmar que psicofármacos para neuroaprimoramento (PNAs) estão associados principalmente ao seu uso regular e por longo prazo. Isso pode estar inicialmente relacionado ao risco de uma dependência física que se manifestaria, por exemplo, na medida em que fosse necessário tomar doses cada vez maiores e que, após a suspensão da substância, ocorressem síndromes de abstinência. ',
      p12:
        'Se os PNAs tivessem esse potencial aditivo, este seria um bom motivo contra o seu uso, já que o aumento da dose quase sempre é proporcional ao risco de efeitos desagradáveis.',
      p13:
        'Mais difícil de avaliar é o temor de que turbinar quimicamente o cérebro leve à dependência emocional e psíquica, já que não está totalmente claro em que consiste e quando exatamente se dá. Ela se fundamenta na ideia de que a pessoa deseja um objeto de certo modo irracional e sente extremo desconforto quando não tem acesso a ele. ',
      p14:
        'Esse risco é normalmente explicado, no caso do NA, com o exemplo de um estudante que, após algumas notas excelentes obtidas sob influência de pílulas, desenvolve enorme medo do fracasso apenas ao cogitar que terá de enfrentar a próxima prova sem a ajuda de fármacos.',
      p15:
        'Muitos seriam contra essa dependência de um preparado para neuroaprimoramento. No entanto, a objeção ao uso de PNAs tem menor peso que o temor da dependência física, pois é quase impossível levarmos uma vida totalmente livre de dependências psíquicas. ',
    },
    {
      p1:
        'Sabidamente, o desejo pelo objeto de um amor romântico também assume, às vezes, traços extremamente irracionais. Os "dependentes", não raro, perdem até mesmo a coragem de enfrentar a vida quando a pessoa amada morre ou termina o relacionamento. ',
      p2:
        'Algo similar ocorre com várias novidades tecnológicas, como celulares ou internet, que fazem com que as pessoas fiquem verdadeiramente "capturadas", muitas vezes após uma resistência inicial, e não possam mais imaginar a vida sem elas. Porém, ninguém sequer cogita a proibição dessas inovações.',
      p3:
        'Antes de mais nada, é indispensável que as pessoas avaliem se as vantagens associadas ao uso de psicofármacos valem possíveis desvantagens. Provavelmente, seu efeito social será, em algum momento, semelhante à atual "dependência da internet", que segundo alguns especialistas se caracteriza como um distúrbio psíquico. ',
      p4:
        'Ou seja, assim como no caso da informática, a maioria faria uso moderado e prático das possibilidades do neuroaprimoramento, já uma minoria desenvolveria um padrão de consumo patológico. Assim como no caso da internet, seria então mais sensato oferecer terapia aos necessitados do que proibir o acesso aos PNAs.',
      p5:
        'Vários críticos também cogitam, com razão, que o neuroaprimoramento farmacêutico possa levar a uma pressão ainda maior por resultados e prejudicar aqueles que rejeitarem o uso desse meio por qualquer motivo. Essa preocupação será ainda mais plausível quando o uso de PNAs se disseminar. ',
      p6:
        'Mas mesmo hoje, provavelmente, não é pelo puro prazer de experimentar coisas novas que gente saudável recorre a psicofármacos sem que os seus efeitos e segurança tenham sido comprovados. Essas pessoas possivelmente já devem estar sob pressão tão grande por resultados que experimentam estimulantes ou as chamadas "drogas da felicidade" sem refletir muito sobre os perigos. Isso é alarmante e ninguém pode querer que a pressão social devida à concorrência já tão alta se acirre ainda mais pela disseminação do neuroaprimoramento. ',
      p7:
        'Uma vida constantemente voltada para o desempenho e eficiência seria ainda mais desumana e segregadora.',
      p8:
        'Pílulas com a intenção de possibilitar que as pessoas trabalhem ininterruptamente, superando seus concorrentes, podem ser uma armadilha. Se o ganho de eficiência é sempre seguido de carga de trabalho crescente, então o indivíduo não ganha nada no final das contas ­ pelo contrário. ',
      p9:
        'Mas a imagem de uma possível futura sociedade do neuroaprimoramento seria incompleta, quase enganosa, se considerásse­mos apenas os questionáveis motivos para o seu uso e deixássemos de lado o potencial desse recurso de estimular a alegria de viver e a empatia. ',
      p10:
        'Se esses meios ajudassem a lidar melhor com as demandas de desempenho e, assim, a ter mais liberdade, tornando-nos mais sensíveis à música e outras formas de arte, oferecendo facilidade e prazer em aprender, então seria difícil nos queixarmos das mudanças pessoais e sociais associadas a essas transformações. ',
      p11:
        'Mesmo no âmbito competitivo, seja na ciência ou na economia ou qualquer outra área, a elevação das competências cognitivas e emocionais poderia melhorar a vida de muitas pessoas - e quem sabe significar avanços no combate a doenças degenerativas e câncer.',
      p12:
        'A obrigatoriedade de aprender e se esforçar para aqueles que querem ser bem-sucedidos dentro da competição social já faz parte do estilo de vida ocidental. Por isso mesmo não é tão simples rechaçar os temores de que o indivíduo, exposto à pressão coerciva cada vez maior, se veja obrigado a recorrer ao neuraprimoramento farmacêutico até contra sua própria vontade. ',
      p13:
        'Para muitos, o principal motivo para o uso de PNAs poderia ser a competição por vantagens na escola, nas provas finais ou no trabalho - mesmo que esses benefícios fossem nivelados; caso em algum momento todos tomassem as pílulas. O fato de termos de nos adaptar frequentemente a novidades diárias já foi bastante aceito. Certamente existe diferença em nos vermos obrigados a adquirir uma carta de motorista ou conhecimentos em computação e concordar com uma intervenção farmacológica no próprio cérebro e, assim, provavelmente, na própria personalidade.',
      p14:
        'Na maioria das vezes sequer nos damos contado longo caminho "biográfico" que percorremos até chegar às nossas metas, talvez porque esse processo ocorra em etapas: fazemos terapia, aprendemos uma infinidade de coisas, alteramos comportamentos, descobrimos "jeitos" de estudar, trabalhar, expor ideias durante reuniões ou aulas. ',
      p15:
        'Trata-se de uma adequação da personalidade (e do cérebro) que se dá lentamente e com poucos efeitos colaterais. A recorrência a psicofármacos, no entanto, parece pular várias etapas. A mudança causada pelo NA é experimentada como uma variação de personalidade relativamente abrupta. Por esse motivo, as pessoas afetadas podem achar essa alteração muito mais negativa do que as obtidas por aqueles que a atingem pelos caminhos tradicionais.',
    },
    {
      p1:
        'Um aspecto decisivo para a tomada de qualquer decisão, neste caso, é sabermos se o grau de risco ainda pode ser avaliado como "socialmente tolerável". O tráfego de carros, por exemplo, com suas inúmeras vítimas, também gera um "risco permitido", apesar de, mesmo para pessoas que se comportam com cautela, as consequências prejudiciais não podem ser excluídas - aliás, segundo as estatísticas, são até mesmo, muito prováveis.',
      p2:
        'Não é possível formular com certeza quais prejuízos devem ser considerados como socialmente adequados e, portanto, admissíveis.',
      p3:
        'Muitas vezes, teme-se que a disseminação do neuroaprimoramento possa causar ou acirrar injustiças sociais: drogas para melhorar capacidades cognitivas ofereceriam vantagens competitivas na vida social de seus usuários, mas certamente seriam muito caras. ',
      p4:
        'Portanto, apenas pessoas relativamente abastadas - que de qualquer forma já são privilegiadas - teriam condições de adquirir os custosos PNAs. A desigualdade entre as chances de sucesso para diferentes grupos sociais se ampliaria ainda mais. Será que isso fere os princípios básicos de uma distribuição social mais justa?',
      p5:
        'Possivelmente não. A desigualdade de condições, porém, já é uma realidade. Pesquisas mostram que crianças com pais afetuosos lidam melhor com frustações - o que é uma vantagem inegável para construir uma vida feliz. Além disso, ter a oportunidade de alimentar-se bem desde a infância, frequentar boas escolas, diversificar interesses, exercitar a criatividade, praticar esportes, viajar e aprender línguas e música também é um privilégio - e não fruto de merecimento, mas continuação da situação privilegiada dos pais. ',
      p6:
        'Essas vantagens iniciais também modificam (de forma muito similar aos psicofármacos) o cérebro daqueles que têm acesso a elas, embora obviamente não sejam determinantes.',
      p7:
        'Pressupondo que o neuroaprimoramento farmacêutico se tornasse uma prática socialmente aceita ou até mesmo desejada, quem deveria então controlar o acesso aos PNAs e esclarecer os potenciais usuários sobre benefícios e riscos do uso? Hoje, quem recorre a esse recurso providencia os preparados de efeito preponderantemente questionável, ao que tudo indica, no mercado negro, ilegalmente nas farmácias e, muitas vezes, com a ajuda de médicos.',
      p8:
        'A tarefa desses profissionais consiste primariamente em curar, evitar ou diminuir efeitos de distúrbios físicos e psicológicos. Até há poucos anos, só muito raramente eram procurados para que ajudassem pessoas saudáveis a melhorar ainda mais seu estado de saúde - esta demanda ainda é muito recente. ',
      p9:
        'Por isso, parece compreensível incluir a busca por neuroaprimoramento na categoria de diagnóstico e terapia. Um executivo que quer ampliar sua capacidade de se manter atento pode logo ser interpretado como alguém com "dificuldade de concentração", e seu desejo por um estimulante, classificado como sinal de leve depressão, para assim justificar o "auxílio" medicamentoso. ',
      p10:
        'Essa expansão excessiva dos diagnósticos e indicações não é desejável já que, com isso, pratica-se tacitamente o neuroaprimoramento "sob prescrição". Além disso, o NA assim disfarçado não pode ser considerado na coleta de dados epidemiológicos que possam ser acessados para uma avaliação científica, beneficiando outras pessoas. ',
      p11:
        'Mas, acima de tudo, bloqueia-se a visão pessoal, assim como a pública, de que essas práticas consistem em aprimoramentos que devem ser avaliados em vista de seus objetivos e consequências - diferentemente da terapia e da prevenção de doenças.',
      p12:
        'Mas o que se poderia objetar contra a permissão para que médicos acompanhassem abertamente o uso de PNAs, supondo que, eles fossem socialmente aceitos? Será que o aprimoramento vai contra a ética da medicina porque não tem nenhuma relação com "cura"? Pode-se argumentar contra essa afirmação que os médicos já assumiram, por bons motivos e com aprovação social, há muito tempo, atividades fora de suas responsabilidades básicas, como, por exemplo, a prescrição de métodos anticoncepcionais e realização de cirurgias plásticas exclusivamente estéticas. Nesta altura, seria hipocrisia dizer que essas intervenções não estão associadas, de forma global, à saúde física e psíquica do paciente.',
      p13:
        'O modelo ideal para chegar à medicação adequada - obviamente nem sempre possível - é aquele que permitiria que médicos e psicólogos avaliassem em conjunto a pessoa interessada em melhorar seu desempenho. Assim, o paciente tiraria benefícios dos conhecimentos médicos relativos a possíveis riscos, interações medicamentosas e o acompanhamento psicológico favoreceria a compreensão de motivações nem sempre óbvias para a busca desse recurso, ajudando o interessado a lidar melhor com as transformações em sua vida, de forma crítica e cuidadosa. ',
      p14:
        'Se realmente o uso de PNAs for abertamente adotado nos próximos anos - como acreditamos que venha a ser -, é importante que profissionais da saúde se especializem no tema para utilizar seus conhecimentos, já que a prática obscura do neuroaprimoramento não é interesse de ninguém.',
      p15:
        'Todos os preparados cujos potenciais de aprimoramento estão sendo atualmente testados por cientistas tinham originalmente um fim terapêutico. Do ponto de vista farmacológico, no entanto, é de suma importância determinar se a intervenção deve corrigir um sistema danificado ou favorecer algum aspecto que já funciona normalmente. Enquanto a opinião pública sobre o "doping cerebral" ainda for marcada pela rejeição - latente ou aberta -, porém, nenhuma empresa farmacêutica poderá admitir uma estratégia de pesquisa como essa.',
    },
    {
      p1:
        'Por outro lado, apesar da preocupação com sua imagem, certamente o setor farmacêutico não vai perder de vista os potenciais de vendas de substâncias de reforço cognitivo e emocional para pessoas saudáveis. Em vez disso, faz sentido temer que empresas e médicos sirvam cada vez mais a esse mercado de forma indireta ao estabelecer padrões sempre mais altos de saúde mental e psíquica de forma que já considerem, em vista dos menores desvios, a necessidade de tratamento. Ou seja: o que há alguns anos era considerado normal transforma-se atualmente em patológico.',
      p2:
        'Se o ponto de vista defendido por nós, de que o NA farmacêutico não deve ser rejeitado em princípio, se impusesse, as empresas farmacêuticas não teriam mais de realizar o desenvolvimento desses preparados sob o disfarce terapêutico e seria possível haver regulamentos apropriados, de acordo com a legislação vigente em cada país. Seria principalmente sensato definir padrões mais altos de segurança e efetividade para os PNAs do que os das pesquisas farmacológicas terapêuticas, pois se trata "apenas" de aprimoramentos do desempenho e do estado mental e não da salvação, cura ou amenização de sintomas (casos  em que as pessoas admitem maiores efeitos colaterais e buscam detectar até mesmo as menores esperanças).',
      p3:
        'Mesmo com altos padrões para o teste de inocuidade de preparados de neuroaprimoramento, nem todos os efeitos indesejáveis já poderiam ser determinados ou excluídos com absoluta certeza antes da sua liberação. De forma análoga ao regulamento existente para medicamentos, deveria haver também para os PNAs um procedimento de protocolo obrigatório complementar que coletasse indícios de efeitos indesejáveis após a introdução no mercado. ',
      p4:
        'Para que esse procedimento funcionasse de forma confiável, médicos e psicólogos teriam de registrar todas as queixas associadas ao consumo de um psicofármaco e repassá-las de forma padronizada para um centro de vigilância farmacológica. Por esse motivo, após a sua liberação, os PNAs devem ser submetidos à prescrição médica obrigatória pelo menos durante alguns anos.',
      p5:
        'Somos da opinião de que não há nenhuma objeção convincente contra um aprimoramento farmacêutico do cérebro ou do psiquismo. Pelo contrário: consideramos o neuroaprimoramento farmacêutico a continuidade de uma busca intelectual de "automelhoramento" inerente ao ser humano. No entanto, atualmente devemos nos preocupar com o fato de ainda não existir em discussão nenhum resultado de pesquisas suficientemente confiável sobre a efetividade e a segurança dos psicofármacos a longo prazo.',
      p6:
        'A comprovação de que um preparado causa rendimento adicional digno de ser mencionado é responsabilidade da empresa farmacêutica que vende o produto. As consequências físicas, psíquicas e socioculturais de longo prazo, por sua vez, são de interesse da sociedade. Por isso, estudos a esse respeito deveriam ser amplamente divulgados. Além disso, devem ser apoiados projetos de pesquisa que forneçam dados sobre a frequência com que determinadas substâncias já são usadas para fins de neuroaprimoramento e quais são os seus padrões de consumo. ',
      p7:
        'Só assim será possível avaliar corretamente o significado social do NA. Um estudo sistemático pressupõe que, antes de mais nada, o NA seja tirado do "lado escuro" da sociedade - e discutido por profissionais e estudantes da área de saúde mental.',
      p8: 'Questões inevitáveis',
      p9:
        'Enquanto o NA farmacêutico não puder ser identificado como uma opção de procedimento física e psiquicamente inofensivo, aqueles que são contra o aprimoramento devem ser protegidos para que não caiam em desvantagem social devido à sua recusa. E principalmente psicanalistas, psicólogos e médicos já não podem se furtar a essa reflexão.',
      p10:
        'Existem, no entanto, perguntas que só podem ser feitas a si mesmo: Quais são meus motivos para usar (ou não) esses produtos? Os benefícios valem o risco de sofrer efeitos colaterais indesejáveis? Estou disposto a, além das possíveis bem-vindas alterações da personalidade (maior sensibilidade e agilidade cognitiva), aceitar também consequências indesejadas que dificilmente podem ser previstas, pois são determinadas não apenas por fatores farmacológicos e individuais? Principalmente: quero atrelar o meu bem-estar e bom desempenho (ainda que parcialmente) à disponibilidade de um dispendioso preparado? ',
      p11:
        'O que o meu meio social pensa desse recurso? Terei de desrespeitar regras para conseguir as substâncias? Nenhum desses pontos de vista pode ser decisivo sozinho, mas todos juntos certamente ajudam a avaliar se as vantagens superam os inconvenientes - ou não.',
      p12: 'Fatos e números',
      p13:
        'Recentemente, uma enquete realizada pela publicação científica Nature causou polêmica ao revelar que um em cada cinco leitores acadêmicos já tinha tomado ritalina, modafinil ou betabloqueadores apenas para ampliar a capacidade intelectual. Ainda assim, não se sabe exatamente quão disseminado está o neuroaprimoramento e quantas pessoas usam medicamentos para turbinar o cérebro. ',
      p14:
        'Os estudos mais elaborados sobre a disseminação do neuroaprimoramento (NA) foram realizados nos Estados Unidos e mostram que 10% dos adultos já utilizaram pelo menos uma vez anfetaminas para fins "não terapêuticos" e 7% recorreram a estimulantes como ritalina. Quase 60% daqueles que tomam estimulantes com fins não terapêuticos querem melhorar a concentração, e 43% têm como meta permanecer mais alertas. Entre 3% e 11 % dos estudantes universitários americanos já recorreram a estimulantes para melhorar o desempenho nos estudos.',
    },
    {
      p1: 'Perguntas mais frequentes sobre substâncias para neuroaprimoramento',
      p2:
        'Atualmente há vários medicamentos já usados para favorecer habilidades cognitivas e humor, embora sua efetividade e segurança sejam pouco esclarecidas. Veja algumas perguntas - e respostas - sobre o tema:',
      p3: '- Existem drogas específicas para melhorar o desempenho mental?',
      p4:
        'Ainda não há PNAs realmente efetivos. Apenas o modafinil (Stavigile) parece ser uma exceção que consegue compensar, a curto prazo, a falta de sono aguda. Os preparados em estudo não têm nenhum efeito colateral grave quando pessoas saudáveis os tomam uma única vez ou durante poucos dias seguidos. O que sabemos com certeza é que existe uma falta alarmante de pesquisas objetivas sobre os efeitos do neuroaprimoramento.',
      p5: 'O modafinil é adequado para a manutenção do estado de vigília?',
      p6:
        'Após um único episódio de privação de sono, o modafinil compensa a perda de atenção, memória e concentração provocada pelo cansaço. Depois de várias situações desse tipo, porém, a atenção só é mantida com uso em maior quantidade, mas o desempenho cognitivo fica reduzido. Estudos nos quais o modafinil foi utilizado sem privação prévia de sono apresentam resultados contraditórios e, no máximo, efeitos reduzidos sobre o desempenho. Em alguns casos ocorreu uma supervalorização das próprias capacidades cognitivas, segundo avaliação dos voluntários.',
      p7:
        '- Antidepressivos levam à melhora do estado de humor de pessoas saudáveis?',
      p8:
        'Não há alterações imediatas, e estudos sobre efeitos a longo prazo são inexistentes. Apenas em algumas pessoas os antidepressivos levam a uma melhora das competências sociais e emocionais.',
      p9:
        '- É possível incrementar o desempenho cognitivo de pessoas saudáveis com o metilfenidato (ritalina, por exemplo)?',
      p10:
        'Contrariando afirmações divulgadas pela mídia e muitas expectativas, não há nenhuma prova definitiva desse efeito, nem com o uso prolongado. Mesmo após a privação de sono, a ritalina não melhora objetivamente as condições de aprendizagem. Indícios esparsos, porém, apontam para uma melhora da memória de trabalho (capacidade de guardar informações imediatas, como números de telefones usados com frequência). Subjetivamente, porém, os usuários tendem a avaliar seu desempenho intelectual como muito melhor.',
      p11: '- Anfetaminas ajudam a aumentar a atenção?',
      p12:
        'Há casos em que existe essa possibilidade, mas devido ao seu potencial aditivo e aos graves efeitos colaterais, estimulantes não são adequados como preparados de neuroaprimoramento.',
      p13:
        '- Os medicamentos antidemência favorecem o desempenho da memória em pessoas saudáveis?',
      p14:
        'Dados existentes sobre os efeitos dos medicamentos utilizados para tratar Alzheimer são insuficientes. Somente o donepezil foi estudado. Provavelmente a memória de pessoas saudáveis melhora com o uso regular durante um longo período de tempo, mas não há comprovação.',
    },
  ];

  const texto6 = [
    {
      p1:
        'A memória foi se tornando mais complexa ao ritmo da evolução biológica. Além de sua própria capacidade de memorizar, o homem desenvolveu "memórias paralelas", como livros e computadores.',
      p2:
        'Os seres vivos são produto da evolução das espécies, processo que marcou nosso planeta de forma singular e resultou da longa evolução cósmica e mineral. Seu surgimento só foi possível porque o Universo fabricou as moléculas de carbono com as quais eles foram construídos.',
      p3:
        'De uma perspectiva evolutiva, o termo memória pode assumir dois sentidos. No restrito, é a capacidade que certos seres vivos têm de armazenar, no sistema nervoso, dados ou informações sobre o meio que os cerca, para assim modificar o próprio comportamento.',
      p4:
        'É principalmente este o sentido discutido neste dossiê. Em uma acepção mais ampla, porém, a memória é também todo traço deixado no mundo ou nos componentes deste por determinado evento. Falamos assim de traços, resíduos ou fósseis bem como de memória genética, citoplásmica ou imunológica. E existem ainda as memórias artificiais criadas pelo ser humano.',
      p5:
        'Saber como surgiu a memória no sentido restrito, é importante não apenas para a compreensão dos demais animais, mas também da nossa espécie. O que essa capacidade mental essencial à vida humana deve a nossos sucessivos ancestrais (peixes, répteis, símios e outros) e o que isso ensina sobre nossa memória?',
      p6:
        'É notável que as capacidades cada vez mais complexas da memória, que surgem à medida que ascendemos na escala filogenética (organizada segundo um esquema de complexidade crescente), não substituem as faculdades mais rudimentares, mas as complementam.',
      p7:
        'As capacidades mnemônicas adquiridas no transcurso do processo evolutivo por distintos grupos animais e, finalmente, pelos seres humanos, constituem um conjunto heterogêneo de faculdades que se acrescentaram ao longo da evolução.',
      p8:
        'Segundo a árvore filogenética do reino animal, nossos ancestrais mais remotos eram unicelulares. Depois, vieram aqueles com várias células organizadas em duas camadas, como nos pólipos, anêmonas do mar ou medusas: trata-se de um tipo de saco com um único orifício (servindo de boca e de ânus), composto por uma camada externa protetora e outra interna digestiva. Então surgiram animais com três camadas: uma intermediária se desenvolveu entre as duas anteriores.',
    },
    {
      p1:
        'Ao alcançar esse grau de complexidade, a árvore evolutiva do mundo animal se dividiu em dois grandes ramos: o de animais com sistema nervoso ventral e o de animais com sistema nervoso dorsal. Os primeiros incluem os vermes, como a minhoca, os moluscos, como o caramujo e a ostra, e os artrópodes, como os crustáceos, os insetos e as aranhas.',
      p2:
        'Entre os moluscos, um grupo particular merece ser distinguido por razões que veremos em seguida: trata-se dos cefalópodes, com animais particularmente "inteligentes", como o polvo ou a lula. Os animais de sistema nervoso dorsal incluem vários grupos, como o dos vertebrados, importante pelo número de espécies que contêm e pelo fato de que a espécie humana é parte dele.',
      p3:
        'Perguntar sobre a evolução das capacidades mnemônicas equivale a indagar se a capacidade de formar memórias existe em todos esses grupos e, caso exista, quais são as eventuais diferenças entre a memória dos vermes, abelhas, peixes e seres humanos.',
      p4:
        'O estudo dessas variações exige meios de comparação, isto é, paradigmas de aprendizagem passíveis de ser modificados para se adaptar às condições e peculiaridades de cada espécie e, portanto, para poder avaliar as respectivas capacidades de memória de grupos de animais distintos. Os especialistas têm desenvolvido tarefas que avaliam distintos tipos de memória com os quais podemos comparar as capacidades mnemônicas dos animais.',
      p5:
        'Existem seis formas básicas desse tipo de tarefa: habituação, capacidade de alternância, condicionamento clássico ou pavloviano, condicionamento operativo ou skinneriano, aprendizagem de retomo e de inversão de resposta.',
      p6:
        'A habituação é um aprendizado simples que podemos propor a qualquer espécie: consiste em repetir um estímulo até que este não cause mais efeito porque o organismo se "habituou". Assim, o despertador não nos acorda mais, mas um outro de mesma potência e timbre diferente nos despertará: isso porque o cérebro memorizou as características do antigo despertador.',
      p7:
        'Da mesma maneira, é possível habituar a abelha a uma luz ou um verme a um desnível do solo. Os parâmetros físicos utilizados serão, é claro, adaptados a esses animais, mas a investigação do mecanismo de memória subjacente, se é que ele existe em tais seres, será a mesma.',
      p8:
        'Os paradigmas que avaliam o fenômeno de alternância baseiam-se no fato de que, se um animal foi colocado diante de duas escolhas e optou várias vezes por uma delas, terá tendência, estatisticamente, a optar pela outra. Um rato no labirinto em forma de T que escolheu várias vezes o lado esquerdo, tenderá a optar pelo direito, mesmo que não exista atrativo particular influenciando a escolha. A preferência pelo "outro lado" supõe, evidentemente, que o animal memorizou o primeiro lado em que entrou. Modificando a natureza das escolhas propostas, podemos adaptar essa tarefa a todos os grupos animais. ',
    },
    {
      p1:
        'O condicionamento clássico, que se tomou célebre com a experiência do cientista russo Ivan P. Pavlov (1849-1936), consiste em fazer o animal associar um estímulo inicialmente neutro (um som estridente, por exemplo) a um "incondicionado" que sempre desencadeia uma resposta.',
      p2:
        'Para um cão, o estímulo incondicionado pode ser a apresentação de carne e a resposta, a salivação. Com a repetição do pareamento entre os dois estímulos, o que era inicialmente neutro toma-se "estímulo condicionado" e passa a gerar a resposta: o cão saliva ao ouvir o som estridente.',
      p3:
        'A aprendizagem pode ser mais elaborada. No condicionamento skinneriano, ensina-se um comportamento ao animal, como percorrer um labirinto, apoiar-se em uma alavanca, mudar de caminho etc., seja para obter recompensa, seja para evitar. Também nesses casos, podemos modificar o estímulo usado no condicionamento pavloviano ou o comportamento ensinado no condicionamento skinneriano para pesquisar as aptidões de vários grupos animais.',
      p4:
        'Outro teste analisa a capacidade do animal de lembrar o caminho percorrido para alcançar um objetivo e refazer o trajeto quando requerido. Essa habilidade supõe a existência, no cérebro, de representações alocêntricas do ambiente ou um sistema que simula o espaço e que chamamos de "mapa cognitivo".',
      p5:
        'Os paradigmas que avaliam a capacidade de inversão da resposta, também denominado, em alguns casos, de aprendizado reverso, consistem, na realidade, em uma tarefa de aprendizado efetuada em duas condições um pouco diferentes: uma direta e outra reversa.',
      p6:
        'Por exemplo, em um labirinto em forma de T, ensinamos um animal, mediante recompensa, a entrar sempre no braço esquerdo: essa é a tarefa direta que, uma vez aprendida, rende a recompensa. Na tarefa invertida (ou reversa), o animal deve entrar no braço direito para obter a recompensa. A questão é: o animal fará mais ou menos tentativas para aprender a tarefa reversa do que fez para aprender a direta?',
      p7:
        'Se faz mais tentativas, é porque a primeira aprendizagem (entrar no braço esquerdo) o atrapalhou e ele teve dificuldade em substituí-la pela reversa (ir para a direita). Se fez menos tentativas, é porque, apesar do aprendizado direto, compreendeu a nova regra imposta pelas circunstâncias da condição reversa, ou seja, foi capaz de fazer um "salto abstrato": o que estava à esquerda está agora à direita, e não vale a pena refazer todo o aprendizado, basta dirigir-se à direita para obter a recompensa.',
    },
    {
      p1:
        'Esse tipo de memória exige do animal a capacidade de elaborar regras que simplificam seu comportamento. Trata-se de capacidades de memória, a priori, muito mais elaboradas. Variando os parâmetros físicos, é possível propor aos diversos grupos tarefas de retorno ou de inversão adequadas a seus meios e registros de comportamento.',
      p2:
        'Podemos agora responder quais são as capacidades de memória dos diferentes grupos animais? Todos os grupos são capazes de aprender conforme as seis categorias que definimos?',
      p3:
        'Se excetuarmos as controvérsias sobre as capacidades dos organismos unicelulares, é possível afirmar que as aprendizagens mais simples, como a habituação ou a capacidade de alternância, são encontradas em todos os grandes grupos animais.',
      p4:
        'Os condicionamentos (pavlovianos e skinnerianos) surgem nos animais de três camadas, no ponto em que a árvore filogenética se divide em dois grandes ramos: os vermes, moluscos, artrópodes e vertebrados são suscetíveis aos condicionamentos.',
      p5:
        ' Os animais mais inteligentes desses grupos (moluscos cefalópodes como o polvo, artrópodes e vertebrados) aprendem ainda, por condicionamento, coisas notáveis.',
      p6:
        'A famosa "linguagem das abelhas", que não é exatamente uma linguagem, mas um código que permite a esses insetos comunicar a posição das fontes de alimento, está baseada em condicionamentos. Graças ao condicionamento visual, os polvos são capazes de distinguir um quadrado de um círculo ou uma barra vertical de uma horizontal; também podem aprender a distinguir, apalpando, cilindros de diversas rugosidades.',
      p7:
        'Apenas dois grandes grupos de animais são capazes da aprendizagem de retorno: os moluscos cefalópodes, como o polvo e a lula, e os vertebrados. Por fim, a capacidade de inversão de resposta, índice da habilidade para aprender regras abstratas, só foi demonstrada nos vertebrados de sangue quente, aves e mamíferos.',
    },
    {
      p1:
        'Como já mencionado, foi constatado que as capacidades de memória surgidas ao longo da evolução rumo à complexidade não substituem as rudimentares, mas as complementam. Uma minhoca, capaz de ser condicionada, conserva as faculdades de habituação. A capacidade que o rato tem de aprender regras, tal como Tatiana Alexinsky e eu demonstramos, não impede que conserve a habilidade de adquirir respostas de alternância e condicionadas ou de aprender tarefas que requerem retomar a um lugar conhecido.',
      p2:
        'Convém assinalar que os cientistas que investigam as capacidades mnemônicas da espécie humana frequentemente classificam as memórias em dois grandes tipos: a memória para hábitos, denominada procedural ou implícita, e outra que inclui os conhecimentos semânticos, factuais e autobiográficos, bem como os conceitos abstratos, chamada declarativa ou explícita.',
      p3:
        'Nos grupos animais ditos inferiores, só as memórias associadas aos paradigmas que envolvem a aprendizagem reversa e, talvez, alguns aprendizados de retorno poderiam chegar a ser consideradas declarativas: todas as outras seriam procedurais. É importante ressaltar que, a respeito desta última afirmação, existem importantes controvérsias entre psicólogos e neurobiólogos que estudam os mecanismos de aprendizagem em modelos animais.',
      p4:
        'Bases Biológicas. Existem bases orgânicas específicas para os diferentes tipos de memória? Essas categorias de memória, cada vez mais complexas e que constituem o mosaico da memória dos animais superiores e do ser humano, estão baseadas em substratos biológicos cada vez mais complexos?',
      p5:
        'O estudo do condicionamento fornece elementos para a resposta. Pesquisas realizadas com caramujos marinhos (aphysia) e mamíferos mostraram que as memórias adquiridas durante o condicionamento clássico eram armazenadas sob a forma de modificações nas propriedades de redes funcionais constituídas por neurônios.',
      p6:
        'Outras pesquisas com a Aphysia indicam a importância das redes neurais para o processo de habituação. Esses resultados, porém, não explicam a habituação em animais desprovidos de neurônios. É válido, então, perguntar-se se a habituação ou a capacidade de alternância, antes de terem, como no caso da Aphysia, bases neuronais, não teriam substratos puramente químicos, que ainda precisariam ser determinados, principalmente nos animais situados nos pontos mais baixos da árvore filogenética.',
      p7:
        'Se estendermos esse modelo aos animais mais evoluídos, como o polvo, as aves e os mamíferos, teremos de admitir que as formas mais complexas da memória (retorno, aprendizagem de regras) baseiam-se na existência de "órgãos" complexos no cérebro desses animais. É o caso, principalmente, de uma estrutura do cérebro dos vertebrados denominada hipocampo, que desempenha um papel na percepção do espaço.',
    },
    {
      p1:
        'Quanto à percepção das regras por parte dos vertebrados de sangue quente, ela talvez resulte de um desenvolvimento particular dos hemisférios cerebrais. A importância dessas estruturas cerebrais diferenciadas, ligadas ao controle das emoções, explicaria também o caminho particular seguido pela evolução da memória dos animais, a qual está intimamente associada ao comportamento emocional. Reflexões similares poderiam ser feitas sobre a anatomia cerebral de cefalópodes como polvos ou lulas.',
      p2:
        'Essas ideias, ainda discutidas, são sedutoras, já que proporcionariam um correlato anatômico às capacidades de memória descritas. Cabe à pesquisa futura refutá-las ou confirmá-las.',
      p3:
        'Memórias Artificiais. E quanto ao ser humano? Suas prodigiosas capacidades de memorização seriam apenas uma ampliação quantitativa das capacidades comuns a todos os vertebrados de sangue quente? Ou trata-se de uma questão qualitativa, e o homem seria o único animal capaz de formar e armazenar certos tipos de memória?',
      p4:
        'A questão ainda divide os filósofos. Há, entretanto, uma habilidade que parece específica dos seres humanos: a fabricação, não de ferramentas (coisa que muitos outros animais fazem), mas de instrumentos capazes de simular aspectos particulares do mundo e, portanto, de armazenar (e transmitir) informação. A informação contida nesses instrumentos (memória) pode ser muito grande, como no caso dos livros, bibliotecas, arquivos sonoros, filmes e computadores.',
      p5:
        'Dados contidos nos computadores constituem um tipo de memória muito diferente da memória dos animais, já que para seu armazenamento são utilizados procedimentos de registro sistemáticos.',
      p6:
        'Essas memórias não têm conteúdo emocional e não são, portanto, comparáveis às dos animais de sangue quente. No estado atual de desenvolvimento da inteligência artificial, pode-se dizer que o homem permitiu que a evolução biológica prosseguisse mediante a evolução técnica e cultural, da qual é agente.',
      p7:
        'Uma evolução que culminou em memórias de novo tipo e que acrescenta novas peças artificiais ao mosaico biológico de nossa memória natural.',
    },
  ];

  const perguntas1 = [
    {
      q: 1,
      p:
        'O ramo das Ciências Econômicas que possui como objeto de estudo os caminhos irracionais de consumo é a...',
      a: 'economia cognitiva',
      b: 'economia tradicional',
      c: 'economia mental',
      d: 'economia comportamental',
      r: '',
    },
    {
      q: 2,
      p:
        'Uma noção consolidada na psicologia é a de que nossa mente funciona de duas formas. Uma delas é intuitiva, que se caracteriza por:',
      a: 'Exigir demanda alta de concentração',
      b: 'Basear-se em experiências passadas',
      c: 'Analisar padrões complexos',
      d: 'Fazer analises racionais',
      r: '',
    },
    {
      q: 3,
      p:
        'Nos estudos do Ph.D. em marketing Brian Wansink, foi constatado que associar um número de produtos ao preço para alavancar as vendas...',
      a: 'funciona com consumidores indecisos',
      b: 'funciona com consumidores ansiosos',
      c: 'funciona com consumidores organizados',
      d: 'funciona com consumidores distraídos',
      r: '',
    },
    {
      q: 4,
      p:
        'Em um experimento de 2007, a cidade de San Marcos, na Califórnia, passou a informar na conta de luz se a pessoa estava consumindo mais ou menos eletricidade que os vizinhos. O que mudou no comportamento dos cidadãos?',
      a:
        'Quando o consumidor era informado que gastou acima da média, passava a aumentar a despesa',
      b: 'As casas com menor consumo ficaram mais perdulárias que antes',
      c: 'Houve maior economia dos maiores consumidores',
      d:
        'Os consumidores mais econômicos passaram a adotar outras medidas de redução dos gastos com energia',
      r: '',
    },
    {
      q: 5,
      p:
        'Em Israel, cerca de 300 israelenses receberam bônus mensal como reparação aos danos da Segunda Guerra. No estudo, constatou-se que:',
      a:
        'as pessoas que recebiam um adicional pequeno faziam poupança com o ganho adicional',
      b:
        'aqueles que recebiam grandes bônus faziam grandes gastos com supérfluos',
      c:
        'quem recebia pequenos bônus, gastavam tudo o que recebiam e ainda passavam a se desfazer de outras fontes de renda',
      d:
        'as pessoas que recebiam grandes bônus faziam ótimos investimentos e mantinham o patrimônio',
      r: '',
    },
    {
      q: 6,
      p:
        'Inconscientemente, atribuímos uma dor menor ao gasto com cartão, o que nos leva a gastarmos além das possibilidades e necessidades. Os cientistas chamam isso de:',
      a: 'insensibilidade monetária',
      b: 'consciência perdulária',
      c: 'percepção distorcida de valor',
      d: 'contabilidade mental',
      r: '',
    },
    {
      q: 7,
      p: 'Em relação aos investimentos, a recomendação do texto é:',
      a:
        'Informe-se constantemente sobre ações ou fundos em busca dos que dão mais lucro para aumentar a lucratividade',
      b:
        'Seja mais estático nos investimentos e no seu portfólio para lucrar mais',
      c:
        'Aproveite as “ondas fortes”, investimentos em ações em crescimento para alavancar os lucros',
      d:
        'Nunca mude o portfólio de investimentos, pois as oscilações das ações são normais, mas, no longo prazo, sempre há aumento de retorno',
      r: '',
    },
    {
      q: 8,
      p:
        'Anúncios que oferecem um período de testes ou garantia do seu dinheiro de volta nada mais são do que vendedores aproveitando a tendência a superestimarmos um objeto se ele nos pertence e de subestimarmos se é do outro. Esta tendência é chamada de:',
      a: 'contabilidade mental',
      b: 'controle consciente de valoração',
      c: 'viés de status quo',
      d: 'neuroestimativa',
      r: '',
    },
    {
      q: 9,
      p:
        'Alguns especialistas defendem a ideia de usar as tendências irracionais de tomada de decisões para empurrar as pessoas em direção às escolhas que acham corretas. Este tipo de manipulação se chama:',
      a: 'paternalismo libertário',
      b: 'assistencialismo benéfico',
      c: 'sugestão pró-ativa',
      d: 'manipulação sutil',
      r: '',
    },
    {
      q: 10,
      p:
        'O professor do núcleo de ciências do consumo da ESPM, Fábio Mariano Borges,  afirma que para tomarmos boas decisões de consumo devemos:',
      a: 'usar mecanismos de pesquisa para comparar o maior número de opções',
      b:
        'aproveitar a intuição, pois, em geral, ficar lendo resenhas pode nos fazer perder bons negócios',
      c:
        'reduzir parâmetros de tomada de decisão ao fazer comparações entre as opções',
      d:
        'sempre comparar o máximo possível, pois para aproveitar as melhores ofertas é necessário garimpar entre as opções',
      r: '',
    },
  ];

  const perguntas2 = [
    {
      q: 1,
      p:
        'De acordo com o texto, na contramão do que costuma pregar a cultura vigente no mercado de trabalho, qual é o caminho mais eficaz para desenvolver e preservar a autovalorização?',
      a: 'A busca contínua pelo reconhecimento',
      b: 'Pensar menos sobre si mesmo',
      c: 'Alcançar sucesso em projetos que aumentem o próprio poder',
      d: 'Tornar a auto-estima extremamente elevada',
      r: '',
    },
    {
      q: 2,
      p:
        'A psicologia costuma definir autoestima como o valor que uma pessoa atribui a si mesma. Como podemos considerar este conceito?',
      a: 'Trata-se de uma avaliação inerentemente subjetiva',
      b: 'É um critério científico baseado em observações',
      c: 'Trata-se de um critério objetivo de auto-percepção',
      d: 'É uma definição equivocada do termo',
      r: '',
    },
    {
      q: 3,
      p:
        'Em 1986, o estado da Califórnia destinou $ 245 mil dólares para uma instituição, acreditando que o investimento seria recompensado com a queda da criminalidade, do fracasso escolar, do número de gestações indesejadas e de dependência química. Qual o nome desta instituição?',
      a: 'Força Tarefa para Promover a Responsabilidade Social',
      b: 'Grupo de Apoio a Autoestima e Responsabilidade Social',
      c: 'Força Tarefa para Promover Autoestima e Responsabilidade Social',
      d: 'Projeto de Elevação da Autoestima e Responsabilidade Social',
      r: '',
    },
    {
      q: 4,
      p:
        'Mesmo com o grande impulso do movimento a favor da autoestima - que não ficou restrito aos Estados Unidos, mas influenciou formas de pensar em quase todo o planeta -, dados científicos começaram a minar alguns de seus principais pressupostos e sustentações. Por quê?',
      a: 'A autoestima constantemente elevada tem benefícios modestos',
      b: 'Percebeu-se que a auto-avaliação era imprescindível para o sucesso',
      c: 'Constatou-se que a maioria de nós já se sente muito bem sobre si',
      d:
        'A população tem o costume de comparar-se com os outros e sentem-se fracassados',
      r: '',
    },
    {
      q: 5,
      p:
        'Na década de 80, escolas e outras instituições americanas investiram em intervenções para aumentar a autoconfiança, principalmente das crianças. Esses programas geralmente focavam em exercícios que possibilitavam a exposição de qualidades e em fornecer retorno positivo (independentemente do desempenho). O que acontecia com os alunos com baixo desempenho?',
      a:
        'Eram ensinados a se concentrar no potencial em vez de olhar para o que precisavam melhorar',
      b:
        'Eram colocados em grupos de estudos direcionados para o que precisavam melhorar',
      c:
        'Foram destinados a salas de aulas compostas por alunos com desempenhos semelhantes',
      d: 'Receberam acompanhamento psicológico para elevar a auto-estima',
      r: '',
    },
    {
      q: 6,
      p:
        'Qual postura dos estudantes atuais do ensino médio em comparação aos jovens da década de 70 foi constatada no estudo dos psicólogos Jean M. Twenge e W. Keith Campbell?',
      a: 'Que eles têm menor orgulho de si mesmos',
      b: 'Que eles consideram-se igualmente capacitados',
      c: 'Que eles têm maior competência',
      d: 'Que eles têm maior orgulho de si mesmos',
      r: '',
    },
    {
      q: 7,
      p:
        'Em uma ampla revisão da literatura publicada em 2003 Baumeister e seus colegas constataram que acontece o quê às pessoas muito autoconfiantes?',
      a: 'Possuem maiores probabilidades de se tonarem violentos',
      b:
        'Não se saem significativamente melhor na vida acadêmica em relação àquelas com baixo apreço por si',
      c:
        'Possuem maior grau de popularidade e qualidade das relações com as pessoas em geral',
      d:
        'Menor probabilidade de comportamentos de risco como tabagismo e uso de drogas',
      r: '',
    },
    {
      q: 8,
      p:
        'Como os cientistas denominam a estratégia na qual a pessoa olha para si como se fosse da perspectiva de um terceiro e que ajuda a reduzir a preocupação excessiva consigo?',
      a: 'Autodistanciamento',
      b: 'Autoafirmação',
      c: 'Autoestima',
      d: 'Autoreflexão',
      r: '',
    },
    {
      q: 9,
      p:
        'Baumeister observou que geralmente os estudos medem autoestima com questões que levam os participantes a refletir sobre si ao longo do tempo. Quando uma pessoa é convidada a indicar como se sente "agora" ou "hoje", os escores tendem a manterem-se coerentes de acordo com eventos ao longo da vida. Esta afirmação é:',
      a: 'Falsa',
      b: 'Correta',
      r: '',
    },
    {
      q: 10,
      p:
        'O psicólogo Kristin Neff, professor da Universidade do Texas, afirma qual característica que ajuda a pessoa a aceitar contratempos inevitáveis e permite enxergar fracassos como oportunidades de aprendizagem e não como de ameaças?',
      a: 'Atitude positiva em relação a si mesmo',
      b: 'Projetar metas colocando-se no lugar dos outros',
      c: 'O hábito de comparar-se com os outros',
      d: 'Autocrítica mantendo o bom desempenho em todas as ações',
      r: '',
    },
  ];

  const perguntas3 = [
    {
      q: 1,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 2,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 3,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 4,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 5,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 6,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 7,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 8,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 9,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 10,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
  ];

  const perguntas4 = [
    {
      q: 1,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 2,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 3,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 4,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 5,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 6,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 7,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 8,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 9,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 10,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
  ];

  const perguntas5 = [
    {
      q: 1,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 2,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 3,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 4,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 5,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 6,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 7,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 8,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 9,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 10,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
  ];

  const perguntas6 = [
    {
      q: 1,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 2,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 3,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 4,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 5,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 6,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 7,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 8,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 9,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
    {
      q: 10,
      p: '',
      a: '',
      b: '',
      c: '',
      d: '',
      r: '',
    },
  ];

  const respCertas1 = ['d', 'b', 'a', 'b', 'c', 'd', 'b', 'c', 'a', 'c'];
  const respCertas2 = ['b', 'a', 'c', 'c', 'a', 'd', 'b', 'a', 'a', 'a'];
  const respCertas3 = ['', '', '', '', '', '', '', '', '', ''];
  const respCertas4 = ['', '', '', '', '', '', '', '', '', ''];
  const respCertas5 = ['', '', '', '', '', '', '', '', '', ''];
  const respCertas6 = ['', '', '', '', '', '', '', '', '', ''];

  let tit1 = {};
  let t1 = {};

  if (id === 1) {
    t1 = texto1.filter((t, i) => {
      return i === bloco;
    });
    tit1 = titulo1;
  }
  if (id === 2) {
    t1 = texto2.filter((t, i) => {
      return i === bloco;
    });
    tit1 = titulo2;
  }
  if (id === 3) {
    t1 = texto3.filter((t, i) => {
      return i === bloco;
    });
    tit1 = titulo3;
  }
  if (id === 4) {
    t1 = texto4.filter((t, i) => {
      return i === bloco;
    });
    tit1 = titulo4;
  }
  if (id === 5) {
    t1 = texto5.filter((t, i) => {
      return i === bloco;
    });
    tit1 = titulo5;
  }
  if (id === 6) {
    t1 = texto6.filter((t, i) => {
      return i === bloco;
    });
    tit1 = titulo6;
  }

  const dispatch = useDispatch();

  // const dadosProva = useSelector((state) => state.usuario.prova);

  const perf = useSelector((state) => state.usuario);

  async function calcTopLeft(top, left) {
    setTop(top);
    setLeft(left);
  }

  let ct = 1;

  async function calcContador() {
    if (ct === 1) calcTopLeft(1, 19);
    if (ct === 2) calcTopLeft(1, 49);
    if (ct === 3) calcTopLeft(1, 79);

    if (ct === 4) calcTopLeft(4.5, 29);
    if (ct === 5) calcTopLeft(4.5, 69);

    if (ct === 6) calcTopLeft(8, 19);
    if (ct === 7) calcTopLeft(8, 49);
    if (ct === 8) calcTopLeft(8, 79);

    if (ct === 9) calcTopLeft(11.5, 29);
    if (ct === 10) calcTopLeft(11.5, 69);

    if (ct === 11) calcTopLeft(15, 19);
    if (ct === 12) calcTopLeft(15, 49);
    if (ct === 13) calcTopLeft(15, 79);

    if (ct === 14) calcTopLeft(18.5, 29);
    if (ct === 15) calcTopLeft(18.5, 69);

    if (ct === 16) calcTopLeft(22, 19);
    if (ct === 17) calcTopLeft(22, 49);
    if (ct === 18) calcTopLeft(22, 79);

    if (ct === 19) calcTopLeft(25.5, 29);
    if (ct === 20) calcTopLeft(25.5, 69);

    if (ct === 21) calcTopLeft(29, 19);
    if (ct === 22) calcTopLeft(29, 49);
    if (ct === 23) calcTopLeft(29, 79);

    if (ct === 24) calcTopLeft(32.5, 29);
    if (ct === 25) calcTopLeft(32.5, 69);

    if (ct === 26) calcTopLeft(36, 19);
    if (ct === 27) calcTopLeft(36, 49);
    if (ct === 28) calcTopLeft(36, 79);

    if (ct === 29) calcTopLeft(39.5, 29);
    if (ct === 30) calcTopLeft(39.5, 69);

    if (ct === 31) calcTopLeft(43, 19);
    if (ct === 32) calcTopLeft(43, 49);
    if (ct === 33) calcTopLeft(43, 79);

    if (ct === 34) calcTopLeft(46.5, 29);
    if (ct === 35) calcTopLeft(46.5, 69);

    if (ct === 36) calcTopLeft(50, 19);
    if (ct === 37) calcTopLeft(50, 49);
    if (ct === 38) calcTopLeft(50, 79);

    if (ct === 39) calcTopLeft(53.5, 29);
    if (ct === 40) calcTopLeft(53.5, 69);

    if (ct === 41) calcTopLeft(57, 19);
    if (ct === 42) calcTopLeft(57, 49);
    if (ct === 43) calcTopLeft(57, 79);

    if (ct === 44) calcTopLeft(60.5, 29);
    if (ct === 45) calcTopLeft(60.5, 69);

    if (ct === 46) calcTopLeft(64, 19);
    if (ct === 47) calcTopLeft(64, 49);
    if (ct === 48) calcTopLeft(64, 79);

    if (ct === 49) calcTopLeft(67.5, 29);
    if (ct === 50) calcTopLeft(67.5, 69);

    if (ct === 51) calcTopLeft(71, 19);
    if (ct === 52) calcTopLeft(71, 49);
    if (ct === 53) calcTopLeft(71, 79);

    if (ct === 54) calcTopLeft(74.5, 29);
    if (ct === 55) calcTopLeft(74.5, 69);

    if (ct === 56) calcTopLeft(78, 19);
    if (ct === 57) calcTopLeft(78, 49);
    if (ct === 58) calcTopLeft(78, 79);

    if (ct === 59) calcTopLeft(81.5, 29);
    if (ct === 60) calcTopLeft(81.5, 69);

    if (ct === 61) calcTopLeft(85, 19);
    if (ct === 62) calcTopLeft(85, 49);
    if (ct === 63) calcTopLeft(85, 79);

    if (ct === 64) calcTopLeft(88.5, 29);
    if (ct === 65) calcTopLeft(88.5, 69);

    if (ct === 66) calcTopLeft(92, 19);
    if (ct === 67) calcTopLeft(92, 49);
    if (ct === 68) calcTopLeft(92, 79);

    if (ct === 69) calcTopLeft(95.5, 29);
    if (ct === 70) calcTopLeft(95.5, 69);

    if (ct === 71) calcTopLeft(99, 19);
    if (ct === 72) calcTopLeft(99, 49);
    if (ct === 73) calcTopLeft(99, 79);

    if (ct === 74) calcTopLeft(102.5, 29);
    if (ct === 75) calcTopLeft(102.5, 69);

    if (ct === 76) calcTopLeft(106, 19);
    if (ct === 77) calcTopLeft(106, 49);
    if (ct === 78) calcTopLeft(106, 79);

    if (ct === 79) calcTopLeft(109.5, 29);
    if (ct === 80) calcTopLeft(109.5, 69);

    if (ct === 81) calcTopLeft(113, 19);
    if (ct === 82) calcTopLeft(113, 49);
    if (ct === 83) calcTopLeft(113, 79);

    if (ct === 84) calcTopLeft(116.5, 29);
    if (ct === 85) calcTopLeft(116.5, 69);

    if (ct === 86) calcTopLeft(120, 19);
    if (ct === 87) calcTopLeft(120, 49);
    if (ct === 88) calcTopLeft(120, 79);

    if (ct === 89) calcTopLeft(123.5, 29);
    if (ct === 90) calcTopLeft(123.5, 69);

    if (ct === 91) calcTopLeft(127, 19);
    if (ct === 92) calcTopLeft(127, 49);
    if (ct === 93) calcTopLeft(127, 79);

    if (ct === 94) calcTopLeft(130.5, 29);
    if (ct === 95) calcTopLeft(130.5, 69);

    if (ct === 96) calcTopLeft(134, 19);
    if (ct === 97) calcTopLeft(134, 49);
    if (ct === 98) calcTopLeft(134, 79);

    if (ct === 99) calcTopLeft(137.5, 29);
    if (ct === 100) calcTopLeft(137.5, 69);

    if (ct === 101) calcTopLeft(141, 19);
    if (ct === 102) calcTopLeft(141, 49);
    if (ct === 103) calcTopLeft(141, 79);

    if (ct === 104) calcTopLeft(144.5, 29);
    if (ct === 105) calcTopLeft(144.5, 69);

    if (ct === 106) calcTopLeft(148, 19);
    if (ct === 107) calcTopLeft(148, 49);
    if (ct === 108) calcTopLeft(148, 79);

    if (ct === 109) calcTopLeft(151.5, 29);
    if (ct === 110) calcTopLeft(151.5, 69);
  }

  async function execExerc() {
    setTimeout(() => {
      const bl = bloco;
      const max = maximo;

      if (max >= minimo) {
        setBloco(bl + 1);
        setMaximo(max - 1000);
      }
    }, maximo);
  }

  async function loadProvas() {
    const response = await api.get(`provas`);

    console.log('Prova: ', response.data);

    setProva(response.data);
    dispatch(updateProvaRequest(response.data));

    const prova_id = response.data ? response.data.id : null;
  }

  useEffect(() => {
    async function loadPerfil() {
      setPerfil(perf.perfil);
    }

    loadPerfil();
  }, []);

  useEffect(() => {
    loadProvas();
    if (id === 1) {
      setMaximo(40000);
      setMinimo(30000);
    } else if (id === 2) {
      setMaximo(30000);
      setMinimo(20000);
    } else if (id === 3) {
      setMaximo(25000);
      setMinimo(15000);
    } else if (id === 4) {
      setMaximo(20000);
      setMinimo(13000);
    } else if (id === 5) {
      setMaximo(15000);
      setMinimo(10000);
    } else if (id === 6) {
      setMaximo(13000);
      setMinimo(8000);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    execExerc();

    let i = 1;

    if (bloco === 0) i = texto1[0].p1.length - 300;
    if (bloco === 1) i = texto1[1].p1.length - 300;
    if (bloco === 2) i = texto1[2].p1.length - 300;
    if (bloco === 3) i = texto1[3].p1.length - 300;
    if (bloco === 4) i = texto1[4].p1.length - 300;
    if (bloco === 5) i = texto1[5].p1.length - 300;
    if (bloco === 6) i = texto1[6].p1.length - 300;
    if (bloco === 7) i = texto1[7].p1.length - 300;
    if (bloco === 8) i = texto1[8].p1.length - 300;
    if (bloco === 9) i = texto1[9].p1.length - 300;
    if (bloco === 10) i = texto1[10].p1.length - 160;

    console.log('i: ', i);

    const velocidadeContador = (maximo / i) * 21.9;

    const ct1 = setInterval(() => {
      ct = 0;
      return clearInterval(ct1);
    }, maximo);

    const ct2 = setInterval(() => {
      if (ct === 0) {
        return clearInterval(ct2);
      }
      calcContador();
      ct += 1;
    }, velocidadeContador);

    if (maximo < minimo) setConc(true);
  }, [maximo]);

  return (
    <Container>
      <Voltar>
        <ul>
          <li>
            <Link to="/dashboard">
              <small>Home</small>
            </Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/intermediario/aula07">
              <small>Aula 7</small>
            </Link>
          </li>
          {/* <li>|</li>
          <li>{maximo}</li>
          <li>|</li>
          <li>{minimo}</li> */}
        </ul>

        <a href="javascript:history.back()">
          <small>&laquo; Voltar</small>
        </a>
      </Voltar>
      <Prod>
        <div>
          <Titulo>
            Exercício {id} &raquo; {id === 1 && '40" - 30"'}
            {id === 2 && '30" - 20"'}
            {id === 3 && '25" - 15"'}
            {id === 4 && '20" - 13"'}
            {id === 5 && '15" - 10"'}
            {id === 6 && '13" - 08"'}
          </Titulo>
          <br />
          {!conc ? (
            <>
              <h2>
                {tit1.titulo && tit1.titulo}
                <small>
                  {tit1.cred1 && <>{tit1.cred1} </>}
                  {tit1.cred2 && <> - {tit1.cred2}</>}
                </small>
                {t1.map((t, i) => (
                  <Span>
                    {id === 1 &&
                      texto1.map((t1, i) => {
                        if (i === bloco) {
                          return <strong>{i + 1}</strong>;
                        } else {
                          return <small>{i + 1}</small>;
                        }
                      })}
                    {id === 2 &&
                      texto2.map((t1, i) => {
                        if (i === bloco) {
                          return <strong>{i + 1}</strong>;
                        } else {
                          return <small>{i + 1}</small>;
                        }
                      })}
                    {id === 3 &&
                      texto3.map((t1, i) => {
                        if (i === bloco) {
                          return <strong>{i + 1}</strong>;
                        } else {
                          return <small>{i + 1}</small>;
                        }
                      })}
                    {id === 4 &&
                      texto4.map((t1, i) => {
                        if (i === bloco) {
                          return <strong>{i + 1}</strong>;
                        } else {
                          return <small>{i + 1}</small>;
                        }
                      })}
                    {id === 5 &&
                      texto5.map((t1, i) => {
                        if (i === bloco) {
                          return <strong>{i + 1}</strong>;
                        } else {
                          return <small>{i + 1}</small>;
                        }
                      })}
                    {id === 6 &&
                      texto6.map((t1, i) => {
                        if (i === bloco) {
                          return <strong>{i + 1}</strong>;
                        } else {
                          return <small>{i + 1}</small>;
                        }
                      })}
                  </Span>
                ))}
              </h2>
              <div>
                <div>
                  {id === 1 && (
                    <Asterisco top={top} left={left}>
                      *
                    </Asterisco>
                  )}
                  {t1.map((t, i) => (
                    <>
                      {t.p1 && <p>{t.p1}</p>}
                      {t.p2 && <p>{t.p2}</p>}
                      {t.p3 && <p>{t.p3}</p>}
                      {t.p4 && <p>{t.p4}</p>}
                      {t.p5 && <p>{t.p5}</p>}
                      {t.p6 && <p>{t.p6}</p>}
                      {t.p7 && <p>{t.p7}</p>}
                      {t.p8 && <p>{t.p8}</p>}
                      {t.p9 && <p>{t.p9}</p>}
                      {t.p10 && <p>{t.p10}</p>}
                      {t.p11 && <p>{t.p11}</p>}
                      {t.p12 && <p>{t.p12}</p>}
                      {t.p13 && <p>{t.p13}</p>}
                      {t.p14 && <p>{t.p14}</p>}
                      {t.p15 && <p>{t.p15}</p>}
                    </>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <h2>
              Exercício Concluído! <img src={icoConcluido} />
            </h2>
          )}
          {/* <br />
            <div>
              <Default>
                <Link onClick={() => calcPlm()}>Responder às Perguntas</Link>
              </Default>
            </div> */}
          <p>&nbsp;</p>
        </div>
      </Prod>
    </Container>
  );
}
