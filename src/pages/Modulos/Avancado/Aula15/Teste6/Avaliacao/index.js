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

const titulo = 'À beira de um ataque de Nervos';

const cred1 = 'Por Ernesto Bernardes';

const cred2 = 'Revista Veja';

const textos = [
  'As pressões da vida moderna deixam os brasileiros cada vez mais tensos e exaustos.',
  'Nos oito meses em que trabalhou na defesa de Guilherme de Pádua, assassino da atriz Daniella Perez, o advogado carioca Paulo Ramalho viveu os piores dias de sua vida. Ao caminhar na rua, era abordado por pessoas que o xingavam e ameaçavam.',
  '"De repente, sem motivo nenhum, meu cabelo começou a cair, aos tufos. Fiquei com medo, pensei que estivesse com câncer", recorda ele. Ramalho, que alguns anos atrás havia "apagado" por dois dias, vítima de um distúrbio neurovegetativo, assustou-se e foi correndo consultar um médico. O diagnóstico foi lúpus eritematoso, uma doença incurável e de fundo psicológico, que afeta também o couro cabeludo. A causa identificada: stress.',
  'Na semana do julgamento. Ramalho não conseguiu dormir e, se por sorte pegava no sono durante uma dou duas horas, sonhava com fogueiras, linchamentos e acordava suando frio. Mesmo depois do julgamento, em que conseguiu uma vitória moral - uma condenação abaixo da pena máxima para seu cliente problemático -, ele só voltou a dormir quatro dias depois.',
  'Como Ramalho, milhões de brasileiros passam os dias duelando com o stress, aprisionados em engarrafamentos de trânsito, encarcerados em apartamentos com fechaduras de segurança e angustiados em empregos que não sabem por quanto tempo serão capazes de manter.',
  'O stress, definido pela Organização Mundial de Saúde como "uma epidemia global", é também uma obsessão nacional. Um estudo da Pontifícia Universidade Católica, PUC, de Campinas, que examinou 1.800 pessoas no Aeroporto de Congonhas, num grande edifício do centro de São Paulo e na sede de uma empresa multinacional, mostrou que 32% delas apresentavam sintomas de stress em nível suficiente para merecer atenção médica.',
  'Na indústria farmacêutica brasileira, os dois remédios campeões e faturamento, Frontal e Lexotan, são calmantes benzodiazepínicos. Sua função original seria tratar vítimas de ansiedade e de síndrome do pânico. Mas, na prática, apenas 10% deles são de fato receitados por psiquiatras. A maior parte, prescrita por cardiologistas e clínicos-gerais, acaba sendo receitada a pessoas estressadas, da dona de casa que não aguenta mais o tédio das tarefas domésticas ao executivo que é perseguido pela exaustão constante devido ao acúmulo de trabalho.',
  'É isso mesmo: o excesso de tarefas e de responsabilidade bem como o vazio da vida produzem igualmente estressados, gente que anda o tempo todo com o sentimento de que a vida se tornou pesada demais. São as mulheres e os homens tensos e exaustos da sociedade moderna, um grupo que parece englobar quase todo mundo hoje em dia.',
  'Tempo das cavernas - até gente sentada na cadeira mais invejada do país, o do presidente da República, é vítima do problema. José Sarney ficava com o rosto vermelho e pipocado de tanta tensão quando estava no Palácio do Planalto. Fernando Collor de Mello emagreceu tanto, ficou tão encovado e doentio que correu o boato infundado de que estaria contaminado com o vírus da Aids. O mal de Collor era stress. Itamar Franco, todos se lembram, tinha faniquitos. Só com Fernando Henrique Cardoso o Brasil experimenta um presidente que parece feliz onde está. "Sabe o que ele faz à noite", comenta um amigo e FHC. "Ele dorme!", completa esse amigo, sem esconder a inveja. Por essa estatística empírica entre os últimos presidentes, 75% deles sofrem de stress.',
  'É natural que figuras muito expostas ao público sejam vítimas frequentes do stress. O piloto Rubens Barrichello, que tem o preparo físico de um atleta olímpico, ainda não encontrou a fórmula para descarregar suas tensões. Desde a morte de Ayrton Senna, torcedores e jornalistas descarregaram sobre ele a responsabilidade de reconduzir o Brasil ao pódio da Fórmula 1. Com um carro ruim e pouca experiência, Rubinho não aguentou a barra. Tinha dificuldades par adormir nas noites que antecediam as provas, cansava-se facilmente e sofria de dores na coluna e nos maxilares, que travavam nos momentos de tensão. "Não havia massagem que resolvesse as dores", lembra o piloto. Durante uma crise, chegou a brigar com a família e a se isolar durante um mês na Inglaterra. "Eu não estava bem comigo, e não conseguia relacionar-me com as pessoas", diz. Desde então, conseguiu melhorar.',
  'Na prefeitura de São Paulo, um relatório da Secretaria de Administração detectou que o número de licenças médicas concedidas a funcionários por stress e hipertensão ultrapassou a soma das licenças por acidente de trabalho, acidente de trânsito e acidente doméstico.',
  'Estudos da General Motors nos EUA indica que a empresa gasta mais com despesas médicas e  perda de produtividade causadas pelo stress do que com o aço que compra para seus automóveis.',
  'Juliet Schor, professora de economia de Harvard, explica que a espiral da fadiga se desenvolveu como uma bola-de-neve desde o tempo das cavernas, para chegar ao auge no período em que vivemos. O homem primitivo trabalhava apenas vinte horas por semana, caçando animais nas proximidades e colhendo frutos das árvores. Embora também estivesse sujeito ao stress - pelo medo dos predadores, das tempestades ou das tribos inimigas -, o número de  agressões que sofria diariamente era mais reduzido.',
  'Na Idade Média, ainda se trabalhava pouco. Os países europeus tinham o descanso de domingo como princípio sagrado e, de lambuja, cinquenta feriados por ano. Durante séculos, a maior parte da humanidade dedicou-se apenas a trabalhos braçais, que sempre terminavam junto com o pôr-do-sol. Tudo isso acabou com a Revolução Industrial, que instituiu a carga horária de dezesseis horas diárias e aboliu a maioria dos feriados.',
  'No Brasil, onde tudo isso aconteceu com atraso, o choque do stress foi ainda mais violento. Na cultura colonial portuguesa, o ócio era elegante e o trabalho não passava de uma obrigação do escravo. Entrar na lógica da produção pesada e da concorrência capitalista foi um trauma. E no século XX, no curto espaço de duas gerações, a maioria da população do país abandonou o campo para viver no stress da cidade.',
  'Os avanços da tecnologia no início do século haviam prometido facilitar a vida de todos. Economistas previam que na década de 90 os operários, felizardos, trabalhariam apenas três horas por dia. Mas as invenções que prometiam um mar de rosas escondiam um risco que hoje cobra seu preço. Os automóveis pouparam o trabalho de caminhar, mas criaram congestionamentos irritantes. O computador, que emperra no meio de uma operação, faz o homem civilizado enfurecer-se como um canibal.',
  'A vida tornou-se acelerada demais para o ritmo do corpo humano. "A informática, o fax, o celular e os pagers deixam a pessoa "ligada" no trabalho 24 horas por dia. É muito pior que trabalhar doze horas seguidas e depois ir para casa relaxar, como faziam os nossos avós", teoriza Paul Rosch, do American Institute of Stress. A pior inovação, porém, foi a descoberta de que a maneira de obter o melhor rendimento de uma pessoa é submetendo-a a um stress pesado. "O trabalhador rende bem quando está submetido a um razoável stress, mas sua máxima produtividade é atingida quando ele, sem perceber, já passou do limite", explica a psicóloga Marilda Lipp, da PUC de Campinas. "Sob tensão pesada, o ser humano rende maravilhosamente durante algum tempo. Depois, simplesmente capota".',
  'Sem Férias - O técnico de basquete Ary Vidal, 61 anos, conseguiu o feito de levar o Corinthians de Santa Cruz do Sul duas vezes às finais do campeonato brasileiro. O esforço, porém, custou-lhe muito em saúde. Durante os jogos, ele notou que a irritação com os erros dos jogadores passou a vir acompanhada por sensações desagradáveis.',
  'Começou a sofrer de dores pelo corpo e, de tempo a tempo, tinha uma febre sem motivo aparente. Apesar da gravidade dos sintomas, ele não procurou um médico até que as dores se tornassem insuportáveis. "Então, corri para fazer um check-up completo", diz ele. O médico, depois de fazer uma série de previsões cavernosas, ordenou a Vidal que tirasse férias imediatamente. O técnico consentiu e passou 45 dias de molho. Mas, no início do mês, estava novamente uma pilha. Durante um jogo duríssimo contra o Flamengo, quando um dos seus alas cometeu a quinta falta e foi eliminado da partida, Vidal irritou-se e quase agrediu o grandalhão. Passou-lhe tamanha descompostura que o jogador deixou a quadra em prantos. "Sinceramente, não posso garantir que já tenha aprendido a lidar com o stress", reconhece o treinador.',
  'O que faz os stress pesar especialmente sobre algumas pessoas não é apenas a carga de responsabilidade que carregam. A falta de hábito de delegar tarefas e a obsessão doentia pelo trabalho podem tomar o fardo ainda maior. Os advogados da cidade de Paulo Afonso, uma das maiores da Bahia, não se surpreendem mais quando o juiz da Vara Cível local suspende a audiência sem explicação aparente. Além dos processos civis do município. Rosalino dos Santos Almeida, de 46 anos, acumula jurisdição sobre outra comarca, a 13 quilômetros dali, e sobre a Justiça Eleitoral de cinco outros municípios. Em suas estantes ele contabiliza 5 000 processos à espera de julgamento. À beira de um ataque de nervos, Rosalino não se constrange mais em interromper o depoimento de uma testemunha para levantar da cadeira, lavar o rosto e tomar um pouco de ar.',
  '"Estou com cinco anos de férias vencidas", lamenta o juiz, com a cabeça apoiada entre as mãos. Sofrendo de hipertensão arterial, tonturas e fadiga, ele toma remédios e tenta caminhar todos os dias para entrar em forma. O esforço não é suficiente. Na última vez que ousou relaxar, levando a família para passear na praia, sentiu-se mal e baixou no hospital com uma crise hipertensiva. "As pessoas mais estressadas são aquelas que têm dificuldade em expressar sentimentos, tendem a explodir nos momentos de tensão, mas acabam fazendo um esforço para ser gentis e educadas. Muitas vezes, elas ficam com remorso pelo simples fato de tirar uma folga", explica a psicóloga Marilda Lip. Mas, afinal de contas, como pode o stress ter tamanha influência sobre a saúde das pessoas?',
  'O stress é um mecanismo primitivo e antiquíssimo, engastado nas paredes das cavernas do sistema nervoso. É como um programa de computador velho, de pouca serventia, que ninguém se preocupou em apagar da memória do micro. O problema é que o corpo insiste em recorrer ao programa, mesmo que ele não sirva mais para resolver seus problemas atuais.',
  'O stress, utilíssimo na origem, surgiu como uma maneira de preparar o organismo para as situações de perigo na selva. Seu objetivo é deixar o corpo em condições de lutar ou fugir. Ele esquenta os motores da musculatura e, no cérebro, substitui a sensação de tranquilidade por uma agitação nervosa. Sob o efeito do stress, as glândulas descarregam uma torrente de substâncias químicas no organismo para deixá-lo em ponto de bala. O cérebro, o pulmão, o estômago - tudo isso passa a funcionar em outro ritmo. A partir daí, estão criadas as condições orgânicas que, na vida selvagem, deixariam o indivíduo pronto para saltar sobre a jugular do oponente ou correr como um coelho assustado. Eram alternativas eficientes no tempo em que se podia cruzar com um tigre dentes-de-sabre pelo caminho. São opções inúteis diante dos custos da vida moderna, como a namorada que telefona à 1 da manhã para "discutir a relação" ou o gerente do banco que liga para falar de um cheque sem fundos.',
  'Perdendo os dentes - Quando o stress é crônico, as substâncias que geram a reação de defesa acabam intoxicando o organismo. O estômago funciona como se estivesse prestes a digerir uma presa, liberando cachoeiras de suco gástrico e enzimas digestivas. Os ácidos estomacais, fortes o suficiente para fazer buraco num tapete, causam o quadro conhecido pelo gastroenterologistas como "úlcera de stress". A pressão arterial, que sofre drasticamente, leva os vasos sanguíneos a perder flexibilidade e endurecer, favorecendo a arteriosclerose. A balbúrdia provada no organismo ainda pode favorecer o surgimento de diabete, derrames, depressão e até câncer. "Não há dúvida de que existe relação entre os stress e as patologias diversas.',
  'O problema é delimitar até que ponto vai essa influência. Acho que tem havido exagero em estudos sobre o assunto", observa o psiquiatra Marcio Benik, chefe do Laboratório de Ansiedade da Universidade de São Paulo.',
  'A química do stress não é, em si, responsável pelas doenças. Ela reduz a resistência do organismo e favorece o aparecimento de enfermidades para as quais a pessoa tem alguma tendência genética.',
  'O empresário de Curitiba Marcio Bamberg, 41 anos, tinha má-formação nas raízes dos dentes, mas sem maiores problemas. Ao abandonar a sociedade que tinha numa empresa de consultoria em 1991, ele entrou em parafuso. Deprimido, passava os dias em casa, de pijama, sem coragem para procurar emprego. Perdeu 10 quilos. Dormia pouco, comia pouco, fumava muito. Quando,  tinha de pedir dinheiro emprestado aos pais e ao sogro para sustentar a família. Finalmente, adquiriu o que os dentistas chamam de bruxismo. Durante o sono, ele rangia os dentes involuntariamente, de forma brutal. Em apenas dois meses, os dentes do empresário caíram inexoravelmente, um a um, até que restassem apenas dois caninos e dois pré-molares. "Seus dentes eram frágeis, mas não teriam caído se ele recebesse o apoio psicológico adequado", diz o dentista Paulo Afonso Cunali, que o atendeu.',
  'Depois de dois anos de terapia, Bambert recuperou-se, retomou sua careira e, com sua nova empresa, fatura 60.000 reais por mês.',
  'Na década de 20, o fisiologista austríaco Hans Seyle descobriu que pessoas e animais submetidos a desgaste físico e emocional desenvolviam um quadro de sintomas facilmente reconhecível. Eles iam de insônia e taquicardia a falta de apetite. A longo prazo, poderiam levar à morte.',
  'Para definir essa síndrome, Seyle tomou emprestado um termo usado na física para definir o desgaste de materiais submetidos a excesso de peso, calor ou radiação. A descoberta foi tão marcante que stress passou a ser empregado como sinônimo de tensão - seja ela física ou psicológica -, e não significa necessariamente ameaça de infarto. Passada a situação de risco, o organismo tende a voltar ao seu equilíbrio original. O problema é o stress continuado, crônico.',
  'Calos nas orelhas - Tensões acumuladas no dia-a-dia são a grande causa do stress contemporâneo. Quem não tem tempo para respirar fundo entre um problema e outro acaba sufocado.',
  'Certas profissões são reconhecidas como tão estressantes que o valor cobrado por suas apólices de seguro de vida é mais alto que entre as dos mortais comuns. O pregão da Bolsa de Valores de São Paulo, em que 480 operadores gritam, correm e se acotovelam sem parar todos os dias, é um bom laboratório para perceber esse tipo de situação. Ali, pessoas como o operador Wilson Luiz de Souza, 26 anos, passam o dia segurando telefones sem fio com os ombros, até criar calos nas orelhas. "Ninguém se surpreendeu no dia em que passei mal no meio do leilão e tive de sair para tomar ar", recorda ele. Ali, poucos conseguem fortuna, mas o índice de úlcera é altíssimo.',
  'No tempo em que era apenas um cardiologista, Adib Jatene atendeu o deputado Ulysses Guimarães. À época, este acumulava a presidência da Câmara dos Deputados, da Assembleia Constituinte e do PMDB. Ulysses perguntou se o excesso de trabalho não poderia afetar sua saúde. "Trabalho não mata ninguém", retrucou Jatene. "O que mata é a raiva". A explicação parece simples demais, mais é verdadeira. As substâncias nocivas que o stress descarrega no sangue permanecem causando prejuízo durante o tempo em que as pessoas remoem suas frustrações. Estudos feitos em clínicas do Rio de Janeiro mostram que o número de infartos praticamente dobra às segundas-feiras, dia oficial da revolta contra o dever de sair da cama.',
  'Morrer de trabalhar - "Trabalhar não me incomoda. O problema é a sensação de não conseguir salvar a vida de todos os pacientes", afirma o médico gaúcho José Abruzzi Neto, 43 anos, plantonista no Hospital Conceição, o maior do Rio Grande do Sul. Ele trabalha numa sala com mais oito médicos que tentam dar conta de sessenta a 100 pacientes em estado grave. Sua carga horária chega a 72 horas semanais. "Quando um paciente morre, fico prostrado, sem conseguir fazer mais nada", explica. Nessas situações, ele pede a um colega que assuma temporariamente seu posto e vai para um canto da sala até a revolta passar.',
  'Esses ingredientes - muito trabalho, muita frustração e muito senso do dever - são a receita de um fenômeno que, no Japão, recebeu o nome de karoshi (que significa "morrer de tanto trabalhar"). Segundo médicos japoneses, 3.000 trabalhadores foram vítimas desse mal nos últimos cinco anos. Na semana passada, uma pesquisa publicada na Inglaterra indicou que os ataques do coração são mais frequentes entre os trabalhadores que têm menos poder de decisão e mais obrigação de acatar ordens - independentemente do salário que ganhem e do prestígio social de seus cargos.',
  'Nos últimos anos, a conexão mais discutida pelos cientistas tem sido a que une stress e câncer. "Não tenho dúvida de que existe uma relação, mas ainda não conseguimos entendê-la completamente", explica o psiquiatra americano Paul Rosch.',
  'O Instituo de Imunologia da Universidade de Witten, na Alemanha, divulgou o resultado de um estudo que, durante dez anos, acompanhou a vida de trinta mulheres que sofriam de câncer no seio. No início da pesquisa, todas elas tinham tumores em um estágio inicial, controlável. No final, quinze haviam sido curadas e não voltaram a desenvolver novos tumores. Seis outras alternaram períodos de regressão e evolução. E, em nove, a doença progrediu inexoravelmente até a morte.',
  '"Percebemos que as mulheres curadas apresentavam uma atitude mais positiva e voluntariosa. Em compensação, oito das nove que faleceram eram as pacientes que apresentavam mais sintomas de ansiedade e stress", explica o médico Kurt Zanker, coordenador do estudo. Ele não sugere com isso que stress cause câncer, mas que "o stress psicológico e a atitude negativa diante da doença são fatores que dificultam a cura".',
  'Os efeitos que as tensões da vida têm sobre cada pessoa variam. A tendência à depressão ou à ansiedade é genética, e o desgaste cotidiano cumpre o mero papel de detonador.',
  'Características da personalidade, como timidez ou irritabilidade, são congênitas. E a maneira pela qual cada pessoa reagirá diante da vida é determinada logo na infância. Ao chegar à idade adulta, cada pessoa tem seu limite físico e mental já determinado, como o limite de uma conta de cheque especial. As pressões da vida têm tanto peso como a maneira de cada um enfrentá-las. A empresária paulista Yara Baungart, de 49 anos, encarava qualquer problema até que foi golpeada pela morte de seu irmão mais novo, de 30 anos, vítima de um infarto fulminante. "Achei que tinha de ser forte para ajudar meus pais, e procurava até mesmo não chorar", recorda. Yara bem que tentou, mas de uma hora para outra passou a sofrer dores de cabeça tão fortes que não tinha forças para levantar da cama. Desesperada, visitou vários médicos e tratou-se com antibióticos. Nada. Até que um  médico, ortomolecular, na Suíça, deu o diagnóstico: stress. O desgaste emocional não havia apenas causado dores de cabeça, mas também reduzido seu sistema imunológico a frangalhos. Ela passou por um mês de tratamento com aplicação de soro enriquecido com remédios e nutrientes. Ao voltar para o Brasil, decidiu abrir uma clínica para tratar estressados.',
  'Aftas e mais aftas - Para interromper o redemoinho do stress antes que ele ponha a saúde das pessoas em risco, pesquisadores estudaram centenas de estratégias nos últimos anos. Desenvolveram até máquinas para medir o stress. Os resultados mais eficientes não vieram de nenhum tratamento mirabolante, mas do bom, velho e nunca suficiente elogiado exercício físico. Ele ajuda a descarregar a tensão acumulada durante o dia e estimula no organismo a produção de substâncias que contribuem para o relaxamento.',
  '"O esporte salvou a minha vida", diz o economista Mailson da Nóbrega, de 54 anos, que durante 27 meses foi um dos homens com mais razão para ter stress em todo o país. No apagar das luzes do governo Sarney, com o ministro da Fazenda, Mailson encarou uma inflação de 84,3% ao mês. Sofria de insônia. A boca começou a pipocar com aftas que não saravam de jeito nenhum. No auge da crise, o ministro não tinha sequer coragem de ler os jornais, porque tinha medo de passar mal. A inflação era o pesadelo comum de 150 milhões de pessoas. Elas pareciam estar olhando para Mailson e perguntando: e aí? Hoje, calejado, ele faz três check-ups anuais, pratica natação três vezes por semana, perdeu 8 quilos. "Aprendi a me controlar", afirma.',
  'Para enfrentar o stress, comprimidos, a solução favorita dos brasileiros, podem até ser usados em casos mais graves. Mas a unanimidade dos médicos e psicólogos considera que eles não são a melhor solução. "A quantidade de pessoas que realmente precisam de tratamento químico é pequena", explica o psiquiatra Marcio Bernik.',
  'Pesquisas recentes mostram que tratamentos mais leves podem ter efeitos bem mais positivos. Exercícios de relaxamento, feitos religiosamente todos os dias, podem reduzir em até 30% o índice de complicações cardiovasculares em pacientes hipertensos. Descobriu-se que até a acupuntura e a meditação transcendental têm efeitos físicos concretos - melhorando a oxigenação do sangue e reduzindo a pressão arterial. E, melhor que tudo, uma vida regrada, sem excesso de trabalho, com exercícios físicos, repouso e lazer. Contra o stress, viver bem é a melhor arma.',
];

let perguntas = [
  {
    q: 1,
    p: 'A Organização Mundial da Saúde define o stress como:',
    a: 'o mal do século.',
    b: 'uma epidemia global.',
    c: 'sobrecarga inerente à globalização.',
    d:
      'predisposição do organismo, frente a estímulos que desencadeiam maior desgaste de energia física e mental.',
    r: '',
  },
  {
    q: 2,
    p: 'No Brasil, o choque do stress foi mais violento porque:',
    a:
      'o clima tropical não é propício para ter disposição à sobrecarga de trabalho.',
    b:
      'o brasileiro estava habituado a ter uma carga horária diferente para todos os seus afazeres.',
    c:
      'as transformações sobre o ritmo de trabalho foram mudadas mais bruscamente.',
    d:
      'os brasileiros não tinham necessidade de trabalhar muitas horas, pois não tinham demanda.',
    r: '',
  },
  {
    q: 3,
    p:
      'Com o avanço da tecnologia no início do século XX, economistas previram que na década de ___, os operários trabalhariam apenas ___ horas.',
    a: '70; 5.',
    b: '80; 4.',
    c: '85; 4.',
    d: '90; 3.',
    r: '',
  },
  {
    q: 4,
    p: 'Qual opção está correta:',
    a:
      'sob tensão pesada, o ser humano rende extraordinariamente durante certo tempo, depois passa a produzir menos.',
    b:
      'sob certo grau de tensão, o ser humano não produz metade do que deveria.',
    c: 'sob algum grau de tensão, o ser humano rende acima das expectativas.',
    d: 'sob muita tensão, o ser humano se acomoda frente às tarefas.',
    r: '',
  },
  {
    q: 5,
    p:
      'O stress, surgiu como forma de preparar o organismo para as situações de perigo na selva. Seu objetivo é deixar o corpo pronto para lutar ou fugir. No entanto, são ________, diante do contexto da vida moderna.',
    a: 'mecanismos assintomáticos.',
    b: 'opções inúteis.',
    c: 'opções a serem consideradas.',
    d: 'úteis para o organismo.',
    r: '',
  },
  {
    q: 6,
    p: 'Stress é:',
    a: 'a reação do organismo à tensão, seja ela física ou psicológica.',
    b: 'sinônimo de causa de diversas patologias.',
    c: 'um certo nervosismo, depressão ou ainda estafa.',
    d: 'um desânimo generalizado.',
    r: '',
  },
  {
    q: 7,
    p:
      'Pesquisas recentes mostram que exercícios de relaxamento feitos todos os dias, tais como: acupuntura,  a meditação têm efeitos físicos concretos, melhorando a oxigenação do sangue e reduzindo a pressão arterial. Esta afirmação é:',
    a: 'parcialmente correta.',
    b: 'verdadeira.',
    c: 'falsa.',
    d:
      'correta, desde que conste a observação que o resultado depende do paciente.',
    r: '',
  },
  {
    q: 8,
    p:
      'A química do stress é responsável pelas doenças - porque, reduz a resistência do organismo e favorece o aparecimento de doenças para as quais a pessoa tem tendência genética. A afirmação é:',
    a: 'falsa.',
    b: 'verdadeira.',
    c:
      'parcialmente verdadeira, porque não afirmou que o stress não é responsável pelas doenças.',
    d:
      'parcialmente verdadeira, porque não afirmou que não favorece o aparecimento de doenças.',
    r: '',
  },
  {
    q: 9,
    p: 'A conexão mais discutida pelos cientistas tem sido a relação:',
    a: 'do stress e doenças cardiovasculares.',
    b: 'do stress e o desgaste psíquico-emocional.',
    c: 'do stress e depressão.',
    d: 'do stress e câncer.',
    r: '',
  },
  {
    q: 10,
    p:
      'A tendência à depressão ou ansiedade é _______. No entanto, características da personalidade como  timidez ou irritabilidade são ______.',
    a: 'genética; congênitas.',
    b: 'congênita; genéticas.',
    c: 'aprendida; adquiridas.',
    d: 'altamente prejudicial; aprendidas.',
    r: '',
  },
];

export default function Teste16avaliacao() {
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

  const respCertas = ['b', 'c', 'd', 'a', 'b', 'a', 'b', 'b', 'd', 'a'];

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
      numero: 16,
      prova_id: prova,
    });

    if (response.data) {
      setTesteconcluido(true);
      history.push('/avancado/teste6/resultado');
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
        numero: 16,
        plm,
        pcr: notaPcr,
        pcm: calcPcm,
        horas: calcHoras,
        nivel_id: 5,
        prova_id: prova.id,
      });

      const response = await api.get(`provas`);

      setProva(response.data);
      dispatch(updateProvaRequest(response.data));

      toast.success('Teste 6 concluído com sucesso!');
      setTimeout(() => {
        setTesteconcluido(true);
        history.push('/avancado/teste6/resultado');
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
    setTimeout(() => setPlm(1250), 170500);
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
          <li>|</li>
          <li>
            <small>{pcr}</small>
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
