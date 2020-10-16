import React, { useState, useEffect, useRef } from 'react';

import Opcoes02 from '~/components/Percepcaovisual/Opcao02';
import Opcoes02frases from '~/components/Percepcaovisual/Opcao02frases';
import Opcoes04 from '~/components/Percepcaovisual/Opcao04';
import Opcoes06 from '~/components/Percepcaovisual/Opcao06';
import Opcoesvariadas from '~/components/Percepcaovisual/Opcaovariada';
import Cores from '~/components/Percepcaovisual/Cores';

import { Container } from './styles';

export default function Percepcaovisual(props) {
  const [exercicio, setExercicio] = useState();
  const [pergunta, setPergunta] = useState();
  const [palavra, setPalavra] = useState();
  const [opcoes, setOpcoes] = useState([]);
  const [cor, setCor] = useState([]);

  const isMountedRef = useRef(null);

  const exercicio_id = parseInt(props.match.params.id);

  function fExercicio(ex) {
    setExercicio(ex);
  }

  function fPergunta(perg) {
    setPergunta(perg);
  }

  function palavras(palav, ...opc) {
    setPalavra(palav);
    setOpcoes(opc);
  }

  function cores(...opc) {
    setCor(opc);
  }

  function atualizarExercicio(exerc) {
    if (exerc === 207 || exerc === 241) fExercicio('Exercício 13');
    else if (exerc >= 186 && exerc <= 206) fExercicio('Exercício 10');
    else if (exerc >= 208 && exerc <= 285) fExercicio('Exercício 11');
    else if (exerc >= 286 && exerc <= 322) fExercicio('Exercício 12');

    if (exerc >= 186 && exerc <= 202) fPergunta('Onde a palavra está?');
    if (exerc >= 203 && exerc <= 206) fPergunta('A palavra está?');
    if (exerc === 207 || exerc === 241) fPergunta('Diga as cores das palavras');
    if (exerc >= 208 && exerc <= 240) fPergunta('Onde a palavra se repete?');
    if (exerc >= 242 && exerc <= 285) fPergunta('A frase se repete?');
    if (exerc >= 286 && exerc <= 322) fPergunta('Onde a frase se repete?');
    if (exerc === 186)
      palavras('últimos', 'afirmar', 'diferencial', 'últimos', 'dominado');
    if (exerc === 187)
      palavras('ganhar', 'econômico', 'ganhar', 'comando', 'teórico');
    if (exerc === 188)
      palavras('máximo', 'criar', 'consistente', 'presente', 'máximo');
    if (exerc === 189)
      palavras('novidade', 'grande', 'tempo', 'novidade', 'rico');
    if (exerc === 190)
      palavras('emitir', 'emitir', 'mudança', 'divulgar', 'corrigir');
    if (exerc === 191)
      palavras('organização', 'contínuo', 'organização', 'espaço', 'negócio');
    if (exerc === 192)
      palavras('pesquisa', 'pesquisa', 'aumento', 'tecnologia', 'melhora');
    if (exerc === 193)
      palavras('reportagem', 'contagem', 'crescente', 'confiar', 'reportagem');
    if (exerc === 194)
      palavras(
        'conquista',
        'informação',
        'significado',
        'conquista',
        'mercado'
      );
    if (exerc === 195)
      palavras('complexo', 'impulso', 'complexo', 'progresso', 'ampliar');
    if (exerc === 196)
      palavras('conseguir', 'origem', 'sucesso', 'conseguir', 'comandar');
    if (exerc === 197)
      palavras('notável', 'potável', 'confiar', 'mostrar', 'notável');
    if (exerc === 198)
      palavras('diretor', 'ações', 'passeio', 'diretor', 'banco');
    if (exerc === 199)
      palavras(
        'habilidade',
        'comunicação',
        'habilidade',
        'conquista',
        'crescente'
      );
    if (exerc === 200)
      palavras('importante', 'inverter', 'falante', 'importante', 'financiar');
    if (exerc === 201)
      palavras('vender', 'vender', 'esporte', 'férias', 'tempo');
    if (exerc === 202)
      palavras('favorito', 'implacável', 'favorito', 'mercado', 'complexo');
    if (exerc === 203)
      palavras(
        'aumento',
        'globalização',
        'executivo',
        'talento',
        'pesquisa',
        'significado',
        'impulso',
        'continuação',
        'profissional',
        'informação',
        'chamar',
        'melhoria',
        'reportagem',
        'presente',
        'independência',
        'grande',
        'tecnologia',
        'aumento',
        'máximo'
      );
    if (exerc === 204)
      palavras(
        'número',
        'espaço',
        'criar',
        'mudança',
        'organização',
        'transformar',
        'negócio',
        'consistente',
        'novidade',
        'comando',
        'ganhar',
        'teórico',
        'econômico',
        'dominado',
        'afirmar',
        'diferencial',
        'últimos',
        'solução',
        'número'
      );
    if (exerc === 205)
      palavras(
        'humor',
        'executivo',
        'optar',
        'vender',
        'edição',
        'endereço',
        'curso',
        'atitude',
        'artigo',
        'varejo',
        'assunto',
        'mundial',
        'empresa',
        'encantar',
        'diploma',
        'cartas',
        'judô',
        'rápido',
        'querer'
      );
    if (exerc === 206)
      palavras(
        'liderança',
        'marcante',
        'vantagem',
        'renda',
        'grupo',
        'real',
        'líder',
        'milhões',
        'progresso',
        'nasce',
        'primeiro',
        'controle',
        'faz',
        'querer',
        'formar',
        'coletivo',
        'tempos',
        'tudo',
        'liderança'
      );
    if (exerc === 207)
      cores(
        { cor: '#ff0000', palavra: 'amarelo' },
        { cor: '#009c00', palavra: 'azul' },
        { cor: '#ffff00', palavra: 'laranja' },
        { cor: '#ffffff', palavra: 'vermelho' },
        { cor: '#ff0000', palavra: 'preto' },
        { cor: '#ffffff', palavra: 'vermelho' },
        { cor: '#ffff00', palavra: 'verde' },
        { cor: '#ff0000', palavra: 'roxo' },
        { cor: '#15a615', palavra: 'amarelo' },
        { cor: '#ffffff', palavra: 'vermelho' },
        { cor: '#ff0000', palavra: 'laranja' },
        { cor: '#ffffff', palavra: 'verde' },
        { cor: '#ffff00', palavra: 'preto' },
        { cor: '#009c00', palavra: 'azul' },
        { cor: '#ffff00', palavra: 'vermelho' },
        { cor: '#ffffff', palavra: 'roxo' },
        { cor: '#ff0000', palavra: 'verde' },
        { cor: '#ffff00', palavra: 'laranja' },
        { cor: '#009c00', palavra: 'amarelo' },
        { cor: '#ff0000', palavra: 'azul' },
        { cor: '#ffffff', palavra: 'vermelho' },
        { cor: '#ff0000', palavra: 'laranja' },
        { cor: '#ffff00', palavra: 'verde' },
        { cor: '#ff0000', palavra: 'amarelo' },
        { cor: '#ffff00', palavra: 'laranja' },
        { cor: '#ff0000', palavra: 'preto' },
        { cor: '#ff0000', palavra: 'amarelo' },
        { cor: '#ffffff', palavra: 'vermelho' },
        { cor: '#009c00', palavra: 'azul' },
        { cor: '#ffffff', palavra: 'vermelho' },
        { cor: '#ffff00', palavra: 'verde' },
        { cor: '#ff0000', palavra: 'roxo' },
        { cor: '#009c00', palavra: 'amarelo' },
        { cor: '#ffffff', palavra: 'vermelho' },
        { cor: '#ff0000', palavra: 'laranja' },
        { cor: '#ffffff', palavra: 'verde' },
        { cor: '#ffff00', palavra: 'preto' },
        { cor: '#009c00', palavra: 'azul' },
        { cor: '#ffff00', palavra: 'vermelho' },
        { cor: '#ffffff', palavra: 'roxo' },
        { cor: '#ff0000', palavra: 'verde' },
        { cor: '#ffff00', palavra: 'laranja' },
        { cor: '#009c00', palavra: 'amarelo' },
        { cor: '#ff0000', palavra: 'azul' },
        { cor: '#ffffff', palavra: 'vermelho' },
        { cor: '#ff0000', palavra: 'amarelo' },
        { cor: '#ffff00', palavra: 'verde' },
        { cor: '#ff0000', palavra: 'laranja' }
      );
    if (exerc === 208)
      palavras(
        'chaves',
        'junto',
        'minha',
        'aplicar',
        'frente',
        'versão',
        'chaves'
      );
    if (exerc === 209)
      palavras(
        'mover',
        'mover',
        'cidade',
        'peguei',
        'militar',
        'treino',
        'bolso'
      );
    if (exerc === 210)
      palavras(
        'elevar',
        'noção',
        'elevar',
        'saudável',
        'inteiro',
        'limite',
        'causar'
      );
    if (exerc === 211)
      palavras(
        'falar',
        'aposto',
        'falar',
        'relação',
        'sinapse',
        'força',
        'interno'
      );
    if (exerc === 212)
      palavras(
        'perfume',
        'torna',
        'chuva',
        'ajuste',
        'correto',
        'perfume',
        'aparecer'
      );
    if (exerc === 213)
      palavras(
        'emoção',
        'tentar',
        'seguido',
        'acesso',
        'emoção',
        'parecer',
        'observar'
      );
    if (exerc === 214)
      palavras(
        'vencer',
        'conhecer',
        'saber',
        'vencer',
        'encontro',
        'forte',
        'produzir'
      );
    if (exerc === 215)
      palavras(
        'sensível',
        'apostar',
        'amor',
        'impacto',
        'sonho',
        'viável',
        'sensível'
      );
    if (exerc === 216)
      palavras('valor', 'valor', 'solar', 'rede', 'calor', 'vetor', 'setor');
    if (exerc === 217)
      palavras(
        'tempo',
        'etapa',
        'grupo',
        'cliente',
        'tempo',
        'etapa',
        'equipe'
      );
    if (exerc === 218)
      palavras('pleno', 'plano', 'andar', 'pode', 'vender', 'parte', 'pleno');
    if (exerc === 219)
      palavras('maior', 'maior', 'agora', 'calor', 'época', 'gerar', 'motor');
    if (exerc === 220)
      palavras(
        'otimista',
        'aumentar',
        'desenho',
        'otimista',
        'correntista',
        'simplista',
        'considerar'
      );
    if (exerc === 221)
      palavras(
        'mensagem',
        'mensagem',
        'triagem',
        'aumentar',
        'filtragem',
        'desempenho',
        'metragem'
      );
    if (exerc === 222)
      palavras(
        'medalha',
        'desempenho',
        'valho',
        'sandália',
        'medalha',
        'malha',
        'sandália'
      );
    if (exerc === 223)
      palavras(
        'primeiro',
        'eletrônica',
        'ligeiro',
        'roteiro',
        'primeiro',
        'viveiro',
        'tecnologia'
      );
    if (exerc === 224)
      palavras(
        'minutos',
        'imprimir',
        'minutos',
        'benefícios',
        'comandos',
        'muitos',
        'escrever'
      );
    if (exerc === 225)
      palavras(
        'cativante',
        'saltitante',
        'simbolo',
        'qualidade',
        'corresponder',
        'inciante',
        'cativante'
      );
    if (exerc === 226)
      palavras(
        'metáfora',
        'metáfora',
        'restantes',
        'cânfora',
        'disciplina',
        'variável',
        'preferir'
      );
    if (exerc === 227)
      palavras(
        'recurso',
        'conjunto',
        'opinião',
        'retomar',
        'preservar',
        'coração',
        'recurso'
      );
    if (exerc === 228)
      palavras(
        'moderno',
        'modelo',
        'conjunto',
        'hodierno',
        'moderno',
        'retomar',
        'relevante'
      );
    if (exerc === 229)
      palavras(
        'eficácia',
        'conjunto',
        'eficácia',
        'audácia',
        'preservar',
        'retomar',
        'vibrante'
      );
    if (exerc === 230)
      palavras(
        'pretender',
        'apressar',
        'resolver',
        'entender',
        'pretender',
        'remover',
        'dissolver'
      );
    if (exerc === 231)
      palavras(
        'animado',
        'memória',
        'prever',
        'proposta',
        'soldado',
        'vestir',
        'animado'
      );
    if (exerc === 232)
      palavras(
        'evidência',
        'antever',
        'promover',
        'evidência',
        'experiência',
        'saliência',
        'excelência'
      );
    if (exerc === 233)
      palavras(
        'cérebro',
        'idioma',
        'inteiro',
        'conforto',
        'cérebro',
        'secreto',
        'negócio'
      );
    if (exerc === 234)
      palavras(
        'patamar',
        'entortar',
        'patamar',
        'oficial',
        'essencial',
        'avançar',
        'começar'
      );
    if (exerc === 235)
      palavras(
        'confiar',
        'acreditar',
        'olhar',
        'entoar',
        'confiar',
        'avançar',
        'começar'
      );
    if (exerc === 236)
      palavras(
        'decidir',
        'optar',
        'instância',
        'decidir',
        'avançar',
        'fundir',
        'entoar'
      );
    if (exerc === 237)
      palavras(
        'impacto',
        'impacto',
        'clima',
        'continuar',
        'instância',
        'optar',
        'qualquer'
      );
    if (exerc === 238)
      palavras(
        'estratégias',
        'relíquia',
        'optar',
        'acreditar',
        'frequente',
        'parte',
        'estratégias'
      );
    if (exerc === 239)
      palavras(
        'utilizar',
        'relíquia',
        'utilizar',
        'entender',
        'optar',
        'parte',
        'estratégias'
      );
    if (exerc === 240)
      palavras(
        'aplicar',
        'saber',
        'iniciar',
        'utilizar',
        'aplicar',
        'intuição',
        'ecologia'
      );
    if (exerc === 241)
      cores(
        { cor: '#ff0000', palavra: 'amarelo' },
        { cor: '#009c00', palavra: 'azul' },
        { cor: '#ffff00', palavra: 'laranja' },
        { cor: '#ffffff', palavra: 'vermelho' },
        { cor: '#ff0000', palavra: 'preto' },
        { cor: '#ffffff', palavra: 'vermelho' },
        { cor: '#ffff00', palavra: 'verde' },
        { cor: '#ff0000', palavra: 'roxo' },
        { cor: '#15a615', palavra: 'amarelo' },
        { cor: '#ffffff', palavra: 'vermelho' },
        { cor: '#ff0000', palavra: 'laranja' },
        { cor: '#ffffff', palavra: 'verde' },
        { cor: '#ffff00', palavra: 'preto' },
        { cor: '#009c00', palavra: 'azul' },
        { cor: '#ffff00', palavra: 'vermelho' },
        { cor: '#ffffff', palavra: 'roxo' },
        { cor: '#ff0000', palavra: 'verde' },
        { cor: '#ffff00', palavra: 'laranja' },
        { cor: '#009c00', palavra: 'amarelo' },
        { cor: '#ff0000', palavra: 'azul' },
        { cor: '#ffffff', palavra: 'vermelho' },
        { cor: '#ff0000', palavra: 'laranja' },
        { cor: '#ffff00', palavra: 'verde' },
        { cor: '#ff0000', palavra: 'amarelo' },
        { cor: '#ffff00', palavra: 'laranja' },
        { cor: '#ff0000', palavra: 'preto' },
        { cor: '#ff0000', palavra: 'amarelo' },
        { cor: '#ffffff', palavra: 'vermelho' },
        { cor: '#009c00', palavra: 'azul' },
        { cor: '#ffffff', palavra: 'vermelho' },
        { cor: '#ffff00', palavra: 'verde' },
        { cor: '#ff0000', palavra: 'roxo' },
        { cor: '#009c00', palavra: 'amarelo' },
        { cor: '#ffffff', palavra: 'vermelho' },
        { cor: '#ff0000', palavra: 'laranja' },
        { cor: '#ffffff', palavra: 'verde' },
        { cor: '#ffff00', palavra: 'preto' },
        { cor: '#009c00', palavra: 'azul' },
        { cor: '#ffff00', palavra: 'vermelho' },
        { cor: '#ffffff', palavra: 'roxo' },
        { cor: '#ff0000', palavra: 'verde' },
        { cor: '#ffff00', palavra: 'laranja' },
        { cor: '#009c00', palavra: 'amarelo' },
        { cor: '#ff0000', palavra: 'azul' },
        { cor: '#ffffff', palavra: 'vermelho' },
        { cor: '#ff0000', palavra: 'amarelo' },
        { cor: '#ffff00', palavra: 'verde' },
        { cor: '#ff0000', palavra: 'laranja' }
      );
    if (exerc === 242)
      palavras(
        'capacidade plena',
        'realizar intenções',
        'capacidade plena',
        'tomar decisões'
      );
    if (exerc === 243)
      palavras(
        'processos internos',
        'estímulo adequado',
        'meta satisfatória',
        'natureza sistêmica'
      );
    if (exerc === 244)
      palavras(
        'estruturas de superfície',
        'natureza sistêmica',
        'abordagem sistêmica',
        'contexto terapêutico'
      );
    if (exerc === 245)
      palavras(
        'efetuar mudanças',
        'expectativa dinâmica',
        'potência dinâmica',
        'efetuar mudanças'
      );
    if (exerc === 246)
      palavras(
        'interação harmoniosa',
        'potência dinâmica',
        'detectar sutilezas',
        'demonstração da mudança',
        'estrutura de superfície'
      );
    if (exerc === 247)
      palavras(
        'sequências abordadas',
        'escolhas autogeradas',
        'mudanças desejadas',
        'sequências abordadas',
        'processos internos',
        'interação harmoniosa'
      );
    if (exerc === 248)
      palavras(
        'vivência espcífica',
        'efeturar mudanças',
        'resposta subjetiva',
        'vivência espcífica',
        'experiência intensa',
        'desempenho pessoal'
      );
    if (exerc === 249)
      palavras(
        'desempenho pessoal',
        'experiência sensorial',
        'comunicação verbal',
        'nível inconsciente',
        'participar ativamente',
        'resultado eficiente',
        'nível inconsciente'
      );
    if (exerc === 250)
      palavras(
        'entrar em contato',
        'recursos conceituais',
        'descoberta da essência',
        'enviar em direção',
        'entrar em sintonia'
      );
    if (exerc === 251)
      palavras(
        'líderes empresariais',
        'progresso ocacional',
        'processos de pesquisa',
        'progresso espiritual',
        'descoberta da essência',
        'líderes empresariais'
      );
    if (exerc === 252)
      palavras(
        'liderar pelo exemplo',
        'liberar as defesas',
        'liderança estabelecida',
        'documentação geral',
        'concepção parcial',
        'documentação geral',
        'tornar felizes',
        'concentração literal'
      );
    if (exerc === 253)
      palavras(
        'escutar o cliente',
        'escutar o cliente',
        'escutar com atenção',
        'estudar as lições',
        'manter abertura'
      );
    if (exerc === 254)
      palavras(
        'excepcional qualidade',
        'expansão lateral',
        'estudantes vitalícios',
        'bagagem emocional',
        'expectativas atingidas'
      );
    if (exerc === 255)
      palavras(
        'vantagem competitiva',
        'alavancagem emocional',
        'vantagem competitiva',
        'vantagem compreensiva',
        'excepcional qualidade',
        'delegação de poderes'
      );
    if (exerc === 256)
      palavras(
        'tecnologia e globalização',
        'questionar suposições',
        'tecnologia de precisão',
        'rascunhar exercícios',
        'partilhar informações',
        'patrulhar avenidas',
        'vasculhar gavetas'
      );
    if (exerc === 257)
      palavras(
        'aprendizagem acelerada',
        'diversidade de opiniões',
        'aparelhagem atualizada',
        'aprendizagem acelerada',
        'processo evolutivo',
        'detectar com rapidez',
        'dedilhar para aprender',
        'fervilhar de uma vez'
      );
    if (exerc === 258)
      palavras(
        'mudanças efetivas',
        'rebuscar outra vez',
        'partilhar informações',
        'detectar com rapidez',
        'relacionamente significativo',
        'mudanças efetivas',
        'experiência específica',
        'experiência associada',
        'comunicação efetiva'
      );
    if (exerc === 259)
      palavras(
        'comunicação efetiva',
        'experiência específica',
        'relacionamento significativo',
        'mudanças efetivas',
        'experiência associada',
        'dimensão sensorial',
        'experiência confortável',
        'diferença fundamental',
        'comportamento atual'
      );
    if (exerc === 260)
      palavras(
        'dimensão sensorial',
        'ponto fundamental',
        'conteúdo específico',
        'estado associado',
        'mudanças efetuadas',
        'sequências abordadas',
        'estímulo adequado'
      );
    if (exerc === 261)
      palavras(
        'capacidade de discernir',
        'modo de interagir',
        'coragem de subir',
        'procure detectar',
        'capacidade de abstrair'
      );
    if (exerc === 262)
      palavras(
        'escolhas autogeradas',
        'componente contextual',
        'escolhas autogeradas',
        'demonstrações comportamentais',
        'mudança contextualizada',
        'sistemas representacionais',
        'capacidade de discernir'
      );
    if (exerc === 263)
      palavras(
        'desenvolvimento intuitivo',
        'poder de decisão',
        'flexibilidade vitalícia',
        'grandes oportunidades',
        'padrão de expressão',
        'desenvolvimento intuitivo',
        'desenvolver convicção'
      );
    if (exerc === 264)
      palavras(
        'estudo científico',
        'desenvolvimento pessoal',
        'elemento fundamental',
        'essência emocional',
        'instrumento útil',
        'futuro irresistível'
      );
    if (exerc === 265)
      palavras(
        'futuro irresistível',
        'senso de realização',
        'poder de decisão',
        'poder de ação',
        'sentido unívoco',
        'conteúdo específico'
      );
    if (exerc === 266)
      palavras(
        'poder de decisão',
        'discurso científico',
        'criar valor',
        'virar a mesa',
        'criar riqueza',
        'sistema total',
        'poder de decisão'
      );
    if (exerc === 267)
      palavras(
        'buscar pesquisa',
        'criar riqueza',
        'desenvolvimento intuitivo',
        'visão internacional',
        'vantagem adicional',
        'visão científica',
        'vitórias significativas'
      );
    if (exerc === 268)
      palavras(
        'espírito científico',
        'visão integrada',
        'visão internacional',
        'cultura pensante',
        'forças integradoras'
      );
    if (exerc === 269)
      palavras(
        'forças protetoras',
        'forças mentais',
        'flexões abdominais',
        'forças integradoras',
        'visão estratégica',
        'tornar positivo',
        'forças protetoras'
      );
    if (exerc === 270)
      palavras(
        'marketing pessoal',
        'marcas significativas',
        'marketing efetivo',
        'mudanças ocorridas',
        'múltiplas palavras',
        'súmula histórica'
      );
    if (exerc === 271)
      palavras(
        'realidade virtual',
        'evocar conhecimentos',
        'valor associado',
        'real vantagem',
        'visão ocasional',
        'realidade virtual',
        'realeza ocidental',
        'potencial energético',
        'potencial criativo',
        'desempenho econômico'
      );
    if (exerc === 272)
      palavras(
        'recursos internos',
        'potencial criativo',
        'relacionar fatos',
        'reverter o processo',
        'resultados eficientes',
        'recursos internos',
        'capacitação efetiva',
        'reencontrar pessoas',
        'potencial visual',
        'sucesso garantido',
        'ideias temáticas'
      );
    if (exerc === 273)
      palavras(
        'sistemas integrados',
        'prefeito grandão',
        'reverter o processo',
        'perfeita integração',
        'recursos internos',
        'perfeita marcação',
        'perfume gostoso',
        'porta aberta'
      );
    if (exerc === 274)
      palavras(
        'perfeita integração',
        'sincronizar equipes',
        'experiência específica',
        'saturno distante',
        'capacidade criativa',
        'cisterna vazia',
        'sistemas integrados',
        'cinema estragado'
      );
    if (exerc === 275)
      palavras(
        'tempo de alegria',
        'colheita de jasmim',
        'tipo de alecrim',
        'tenda de marfim',
        'teto da casa',
        'tempo de alegria',
        'texto da revista',
        'testa de ferro'
      );
    if (exerc === 276)
      palavras(
        'bases sólidas',
        'bases soltas',
        'pastas azuis',
        'pistas molhadas',
        'poder saltar',
        'bases sólidas',
        'buscas modernas',
        'bases sóbrias'
      );
    if (exerc === 277)
      palavras(
        'grande sucesso',
        'guarda roupa',
        'garante processo',
        'grande progresso',
        'poder saltar',
        'garante ingresso',
        'guarda volume',
        'grande sucesso'
      );
    if (exerc === 278)
      palavras(
        'tomar decisões',
        'turmas decididas',
        'tomar participação',
        'torneio decidido',
        'time vitorioso',
        'topar pedrões',
        'soltar gaviões'
      );
    if (exerc === 279)
      palavras(
        'alcançar resultado',
        'calçar sapatos',
        'alcançar sucesso',
        'encantar clientes',
        'descansar sossegado',
        'conquistar espaço',
        'desafio profissional',
        'tomar decisões'
      );
    if (exerc === 280)
      palavras(
        'acelerar aprendizado',
        'acelerar comunicação',
        'escaldar macarrão',
        'encantar serpentes',
        'alcançar resultado',
        'acelerar rápido',
        'alcançar a margem',
        'acelerar aprendizado',
        'acelerar o carro',
        'saltitar cordas'
      );
    if (exerc === 281)
      palavras(
        'salto qualitativo',
        'alto comunicativo',
        'saldo informativo',
        'novas perspectivas',
        'ala criativa',
        'orla marítima',
        'asfalto aquecido',
        'captar a essência'
      );
    if (exerc === 282)
      palavras(
        'salto qualitativo',
        'exposição simpática',
        'implicação jurídica',
        'implantação dentária',
        'exposição sintética',
        'exposição poética',
        'manifestação pública',
        'apresentação correta',
        'exposição sintética',
        'explanação sintética'
      );
    if (exerc === 283)
      palavras(
        'vocabulário específico',
        'corolário científico',
        'secundário matutino',
        'vocabulário técnico',
        'dicionário técnico',
        'vocalista especialista',
        'voluntário sofisticado',
        'vocabulário específico',
        'vocabulário simplista',
        'modelar excelência'
      );
    if (exerc === 284)
      palavras(
        'incentivar excelência',
        'emoldurar cimento',
        'modelar capacidade',
        'moldar sucificente',
        'molar eficiente',
        'modelar experiência',
        'amolar ferramenta',
        'modelar excelência'
      );
    if (exerc === 285)
      palavras(
        'processos de pensamento',
        'promessas de gerente',
        'reverter o processo',
        'processos da mente',
        'progresso de temperamento',
        'processos de pensamento',
        'flexibilidade do pensamento',
        'capacidade de discernir',
        'modelar excelência'
      );
    if (exerc === 286)
      palavras(
        'capacidade plena',
        'realizar intenções',
        'capacidade plena',
        'tomar decisões'
      );
    if (exerc === 287)
      palavras(
        'processos internos',
        'estímulo adequado',
        'meta satisfatória',
        'processos internos'
      );
    if (exerc === 288)
      palavras(
        'natureza sistêmica',
        'natureza sistêmica',
        'abordagem sistêmica',
        'contexto terapêutico'
      );
    if (exerc === 289)
      palavras(
        'efetuar mudanças',
        'efetuar mudanças',
        'expectativa dinâmica',
        'potência dinâmica'
      );
    if (exerc === 290)
      palavras(
        'estruturas de superfície',
        'detectar sutilezas',
        'demonstração da mudança',
        'estruturas de superfície'
      );
    if (exerc === 291)
      palavras(
        'sequências abordadas',
        'sequências abordadas',
        'mudanças desejadas',
        'escolhas autogeradas'
      );
    if (exerc === 292)
      palavras(
        'interação harmoniosa',
        'efeturar mudanças',
        'interação harmoniosa',
        'processos internos'
      );
    if (exerc === 293)
      palavras(
        'vivência espcífica',
        'resposta subjetiva',
        'vivência espcífica',
        'experiência intensa'
      );
    if (exerc === 294)
      palavras(
        'desempenho pessoal',
        'desempenho pessoal',
        'experiência sensorial',
        'comunicação verbal'
      );
    if (exerc === 295)
      palavras(
        'nível inconsciente',
        'participar ativamente',
        'resultado eficiente',
        'nível inconsciente'
      );
    if (exerc === 296)
      palavras(
        'entrar em contato',
        'recursos conceituais',
        'entrar em contato',
        'enviar em direção',
        'entrar em sintonia'
      );
    if (exerc === 297)
      palavras(
        'descoberta da essência',
        'progresso ocacional',
        'processos de pesquisa',
        'progresso espiritual',
        'descoberta da essência'
      );
    if (exerc === 298)
      palavras(
        'líderes empresariais',
        'liderar pelo exemplo',
        'líderes empresariais',
        'liberar as defesas',
        'liderança estabelecida'
      );
    if (exerc === 299)
      palavras(
        'documentação geral',
        'concepção parcial',
        'documentação geral',
        'tornar felizes',
        'concentração literal'
      );
    if (exerc === 300)
      palavras(
        'escutar o cliente',
        'escutar o cliente',
        'escutar com atenção',
        'estudar as lições',
        'manter abertura'
      );
    if (exerc === 301)
      palavras(
        'excepcional qualidade',
        'expansão lateral',
        'estudantes vitalícios',
        'excepcional qualidade',
        'expectativas atingidas'
      );
    if (exerc === 302)
      palavras(
        'vantagem competitiva',
        'alavancagem emocional',
        'vantagem competitiva',
        'bagagem emocional',
        'vantagem compreensiva'
      );
    if (exerc === 303)
      palavras(
        'delegação de poderes',
        'delegação de poderes',
        'tecnologia e globalização',
        'questionar suposições',
        'tecnologia de precisão'
      );
    if (exerc === 304)
      palavras(
        'partilhar informações',
        'rascunhar exercícios',
        'partilhar informações',
        'patrulhar avenidas',
        'vasculhar gavetas'
      );
    if (exerc === 305)
      palavras(
        'aprendizagem acelerada',
        'diversidade de opiniões',
        'aparelhagem atualizada',
        'aprendizagem acelerada',
        'processo evolutivo'
      );
    if (exerc === 306)
      palavras(
        'detectar com rapidez',
        'detectar com rapidez',
        'dedilhar para aprender',
        'fervilhar de uma vez',
        'rebuscar outra vez'
      );
    if (exerc === 307)
      palavras(
        'mudanças efetivas',
        'relacionamente significativo',
        'mudanças efetivas',
        'experiência específica',
        'experiência associada',
        'comunicação efetiva'
      );
    if (exerc === 308)
      palavras(
        'comunicação efetiva',
        'experiência específica',
        'relacionamente significativo',
        'comunicação efetiva',
        'mudanças efetivas',
        'experiência associada'
      );
    if (exerc === 309)
      palavras(
        'dimensão sensorial',
        'dimensão sensorial',
        'experiência confortável',
        'diferença fundamental',
        'comportamento atual',
        'ponto fundamental'
      );
    if (exerc === 310)
      palavras(
        'estado associado',
        'conteúdo específico',
        'estado associado',
        'mudanças efetuadas',
        'seqüências abordadas',
        'estímulo adequado'
      );
    if (exerc === 311)
      palavras(
        'capacidade de discernir',
        'modo de interagir',
        'coragem de subir',
        'procure detectar',
        'capacidade de discernir',
        'capacidade de abstrair'
      );
    if (exerc === 312)
      palavras(
        'escolhas autogeradas',
        'componente contextual',
        'escolhas autogeradas',
        'demonstrações comportamentais',
        'mudança contextualizada',
        'sistemas representacionais'
      );
    if (exerc === 313)
      palavras(
        'desenvolvimento intuitivo',
        'poder de decisão',
        'flexibilidade vitalícia',
        'desenvolvimento intuitivo',
        'grandes oportunidades',
        'demonstrações comportamentais'
      );
    if (exerc === 314)
      palavras(
        'futuro irresistível',
        'desenvolvimento pessoal',
        'elemento fundamental',
        'futuro irresistível',
        'essência emocional',
        'instrumento útil'
      );
    if (exerc === 315)
      palavras(
        'poder de decisão',
        'senso de realização',
        'poder de decisão',
        'desenvolver convicção',
        'padrão de expressão',
        'poder de ação'
      );
    if (exerc === 316)
      palavras(
        'criar riqueza',
        'criar valor',
        'virar a mesa',
        'criar riqueza',
        'sistema total',
        'buscar pesquisa',
        'tomar decisões'
      );
    if (exerc === 317)
      palavras(
        'visão internacional',
        'vantagem adicional',
        'visão científica',
        'visão integrada',
        'vitórias significativas',
        'visão internacional',
        'cultura pensante'
      );
    if (exerc === 318)
      palavras(
        'forças integradoras',
        'forças protetoras',
        'forças mentais',
        'flexões abdominais',
        'forças integradoras',
        'visão estratégica',
        'tornar positivo'
      );
    if (exerc === 319)
      palavras(
        'marketing efetivo',
        'marketing pessoal',
        'marcas significativas',
        'marketing efetivo',
        'mudanças ocorridas',
        'múltiplas palavras',
        'súmula histórica'
      );
    if (exerc === 320)
      palavras(
        'realidade virtual',
        'evocar conhecimentos',
        'valor associado',
        'real vantagem',
        'visão ocasional',
        'realidade virtual',
        'realeza ocidental'
      );
    if (exerc === 321)
      palavras(
        'potencial criativo',
        'potencial energético',
        'potencial criativo',
        'desempenho econômico',
        'potencial visual',
        'sucesso garantido',
        'idéias temáticas'
      );
    if (exerc === 322)
      palavras(
        'recursos internos',
        'relacionar fatos',
        'reverter o processo',
        'resultados eficientes',
        'recursos internos',
        'capacitação efetiva',
        'reencontrar pessoas'
      );
  }

  useEffect(() => {
    isMountedRef.current = true;

    atualizarExercicio(exercicio_id);

    return () => {
      isMountedRef.current = false;
    };
  }, [exercicio_id]);

  return (
    <Container>
      {exercicio_id >= 186 && exercicio_id <= 202 && (
        <Opcoes04
          ex={exercicio}
          exercicio={exercicio_id}
          pergunta={pergunta}
          palavra={palavra}
          opcoes={opcoes}
        />
      )}
      {exercicio_id >= 203 && exercicio_id <= 206 && (
        <Opcoes02
          ex={exercicio}
          exercicio={exercicio_id}
          pergunta={pergunta}
          palavra={palavra}
          opcoes={opcoes}
        />
      )}
      {(exercicio_id === 207 || exercicio_id === 241) && (
        <Cores
          ex={exercicio}
          exercicio={exercicio_id}
          pergunta={pergunta}
          cor={cor}
        />
      )}
      {exercicio_id >= 208 && exercicio_id <= 240 && (
        <Opcoes06
          ex={exercicio}
          exercicio={exercicio_id}
          pergunta={pergunta}
          palavra={palavra}
          opcoes={opcoes}
        />
      )}
      {exercicio_id >= 242 && exercicio_id <= 285 && (
        <Opcoes02frases
          ex={exercicio}
          exercicio={exercicio_id}
          pergunta={pergunta}
          palavra={palavra}
          opcoes={opcoes}
        />
      )}
      {exercicio_id >= 286 && exercicio_id <= 322 && (
        <Opcoesvariadas
          ex={exercicio}
          exercicio={exercicio_id}
          pergunta={pergunta}
          palavra={palavra}
          opcoes={opcoes}
        />
      )}
    </Container>
  );
}
