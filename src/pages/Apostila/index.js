import React, { useState, useEffect, useRef } from 'react';

import Cores from '~/components/Apostila/Cores';
import Exercicio02 from '~/components/Apostila/Exercicio02';
import Palavras from '~/components/Apostila/Palavras';
import Exercicio03 from '~/components/Apostila/Exercicio03';
import Opcoes04 from '~/components/Apostila/Opcoes04';
import Exercicio04 from '~/components/Apostila/Exercicio04';
import Quantas04 from '~/components/Apostila/Quantas04';
import Exercicio06 from '~/components/Apostila/Exercicio06';
import Exercicio07 from '~/components/Apostila/Exercicio07';
import Exercicio08 from '~/components/Apostila/Exercicio08';
import Exercicio09 from '~/components/Apostila/Exercicio09';
import Opcoes02 from '~/components/Apostila/Opcoes02';
import Sortidas from '~/components/Apostila/Sortidas';
import Numeros from '~/components/Apostila/Numeros';
import Frases from '~/components/Apostila/Frases';

import { Container } from './styles';

export default function Percepcaovisual(props) {
  const [exercicio, setExercicio] = useState();
  const [pergunta, setPergunta] = useState();
  const [palavra, setPalavra] = useState();
  const [palavra2, setPalavra2] = useState();
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

  function palavras2(palav, palav2, ...opc) {
    setPalavra(palav);
    setPalavra2(palav2);
    setOpcoes(opc);
  }

  function cores(...opc) {
    setCor(opc);
  }

  function atualizarExercicio(exerc) {
    if (exerc === 1) fExercicio('Exercício 01');
    if (exerc === 2) fExercicio('Exercício 02');
    if (exerc === 332) fExercicio('Exercício 03');
    if (exerc >= 3 && exerc <= 36) fExercicio('Exercício 03');
    if (exerc === 333) fExercicio('Exercício 04');
    if (exerc >= 37 && exerc <= 59) fExercicio('Exercício 04');
    if (exerc === 334 || (exerc >= 60 && exerc <= 90))
      fExercicio('Exercício 05');
    if (exerc === 335 || (exerc >= 91 && exerc <= 119))
      fExercicio('Exercício 06');
    if ((exerc >= 120 && exerc <= 150) || exerc === 336)
      fExercicio('Exercício 07');
    if (exerc >= 151 && exerc <= 178) fExercicio('Exercício 08');
    if (exerc >= 337) fExercicio('Exercício 09');

    if (exerc === 1) {
      fPergunta('');
    }
    if (exerc === 332) fPergunta('');
    if (exerc === 333) fPergunta('');
    if ((exerc >= 3 && exerc <= 18) || (exerc >= 174 && exerc <= 177))
      fPergunta('A palavra está?');
    if (exerc >= 19 && exerc <= 36) fPergunta('Onde a palavra está?');
    if (exerc >= 37 && exerc <= 59) fPergunta('Quantas vezes a palavra está?');
    if (exerc >= 60 && exerc <= 71) fPergunta('O número está?');
    if (exerc >= 72 && exerc <= 81) fPergunta('Onde o número está?');
    if (exerc >= 82 && exerc <= 90)
      fPergunta('Quantas vezes o número aparece?');
    if (
      (exerc >= 91 && exerc <= 109) ||
      (exerc >= 120 && exerc <= 135) ||
      (exerc >= 151 && exerc <= 158) ||
      (exerc >= 164 && exerc <= 173)
    )
      fPergunta('As palavras estão?');
    if (
      (exerc >= 110 && exerc <= 119) ||
      (exerc >= 136 && exerc <= 150) ||
      (exerc >= 159 && exerc <= 163)
    )
      fPergunta('Onde as palavras estão?');
    if (exerc >= 337 && exerc <= 364)
      fPergunta('Em qual número a palavra se repete?');

    if (exerc === 186)
      palavras('últimos', 'afirmar', 'diferencial', 'últimos', 'dominado');

    if (exerc === 332)
      cores(
        'leve',
        'praça',
        'chegar',
        'nosso',
        'ainda',
        'ligue',
        'minha',
        'mesmo',
        'método',
        'cordial',
        'gerar',
        'penso',
        'sólido',
        'ensinar',
        'gente',
        'bonito',
        'bom',
        'ouvir',
        'acordo',
        'imagem',
        'abrir',
        'livre',
        'fonte',
        'sair',
        'todo',
        'seu',
        'projeto',
        'venda',
        'suco',
        'alegam',
        'reune',
        'quero',
        'sinais',
        'fazer',
        'setor',
        'décadas',
        'preços',
        'tarefa',
        'quero',
        'diretor',
        'paz',
        'tema',
        'ponto',
        'serviço',
        'admitir',
        'ativo',
        'saber',
        'usar',
        'ver',
        'para',
        'tenha',
        'ficar',
        'todo',
        'jogo',
        'porque',
        'quem',
        'todo',
        'seu',
        'projeto',
        'venda',
        'sinais',
        'fazer',
        'setor',
        'décadas',
        'preços',
        'tarefa',
        'quero',
        'diretor',
        'paz',
        'tema',
        'ponto',
        'serviço',
        'admitir',
        'ativo',
        'saber',
        'usar',
        'ver',
        'para',
        'tenha',
        'ficar',
        'todo',
        'jogo',
        'porque',
        'quem',
        'orientar',
        'pleno',
        'buscar',
        'ambição',
        'longo',
        'decisão',
        'mudança',
        'recurso',
        'risco',
        'obter',
        'inovar',
        'pessoa',
        'surgir',
        'decisão',
        'projeto',
        'caráter',
        'equipe',
        'processo',
        'custar',
        'estado',
        'futuro',
        'fazer',
        'criar',
        'mudança',
        'setor',
        'visão',
        'meta',
        'térmica',
        'cobrir',
        'pagar',
        'urnas',
        'provar',
        'cogitar',
        'haver',
        'total',
        'haver',
        'tambor',
        'retomar',
        'sutil',
        'centro',
        'mesa',
        'coragem',
        'leve',
        'praça',
        'chegar',
        'nosso',
        'ainda',
        'ligue',
        'minha',
        'mesmo',
        'método',
        'cordial',
        'gerar',
        'penso',
        'sólido',
        'ensinar',
        'gente',
        'bonito',
        'bom',
        'ouvir',
        'acordo',
        'imagem',
        'abrir',
        'livre',
        'fonte',
        'sair',
        'todo',
        'seu',
        'projeto',
        'venda',
        'suco',
        'alegam',
        'reune',
        'quero',
        'sinais',
        'fazer',
        'setor',
        'décadas',
        'preços',
        'tarefa',
        'quero',
        'diretor',
        'paz',
        'tema',
        'ponto',
        'serviço',
        'admitir',
        'ativo',
        'saber',
        'usar',
        'ver',
        'para',
        'tenha',
        'ficar',
        'todo',
        'jogo',
        'porque',
        'quem',
        'todo',
        'seu',
        'projeto',
        'venda'
      );
    if (exerc === 3)
      palavras(
        'ainda',
        'leve',
        'praça',
        'chegar',
        'nosso',
        'ainda',
        'ligue',
        'minha',
        'mesmo'
      );
    if (exerc === 4)
      palavras(
        'ensinar',
        'método',
        'cordial',
        'gerar',
        'penso',
        'sólido',
        'ensinar',
        'gente',
        'bonito'
      );
    if (exerc === 5)
      palavras(
        'curva',
        'bom',
        'ouvir',
        'acordo',
        'imagem',
        'abrir',
        'livre',
        'fonte',
        'sair'
      );
    if (exerc === 6)
      palavras(
        'reune',
        'todo',
        'seu',
        'projeto',
        'venda',
        'suco',
        'alegam',
        'reune',
        'quero'
      );
    if (exerc === 7)
      palavras(
        'jornal',
        'sinais',
        'fazer',
        'setor',
        'décadas',
        'preços',
        'tarefa',
        'quero',
        'diretor'
      );
    if (exerc === 8)
      palavras(
        'música',
        'paz',
        'tema',
        'ponto',
        'serviço',
        'admitir',
        'ativo',
        'usar',
        'saber'
      );
    if (exerc === 9)
      palavras(
        'ficar',
        'ver',
        'para',
        'tenha',
        'ficar',
        'todo',
        'jogo',
        'porque',
        'quem'
      );
    if (exerc === 10)
      palavras(
        'saúde',
        'todo',
        'seu',
        'projeto',
        'venda',
        'sinais',
        'fazer',
        'setor',
        'décadas'
      );
    if (exerc === 11)
      palavras(
        'quero',
        'preços',
        'tarefa',
        'quero',
        'diretor',
        'paz',
        'tema',
        'ponto',
        'serviço'
      );
    if (exerc === 12)
      palavras(
        'saber',
        'admitir',
        'ativo',
        'saber',
        'usar',
        'ver',
        'para',
        'tenha',
        'ficar'
      );
    if (exerc === 13)
      palavras(
        'pleno',
        'todo',
        'jogo',
        'porque',
        'quem',
        'orientar',
        'pleno',
        'buscar',
        'ambição'
      );
    if (exerc === 14)
      palavras(
        'olhos',
        'longo',
        'decisão',
        'mudança',
        'recurso',
        'risco',
        'obter',
        'inovar',
        'pessoa'
      );
    if (exerc === 15)
      palavras(
        'caráter',
        'surgir',
        'decisão',
        'projeto',
        'caráter',
        'equipe',
        'processo',
        'custar',
        'estado'
      );
    if (exerc === 16)
      palavras(
        'pássaro',
        'futuro',
        'fazer',
        'criar',
        'mudança',
        'setor',
        'visão',
        'meta',
        'térmica'
      );
    if (exerc === 17)
      palavras(
        'provar',
        'cobrir',
        'pagar',
        'urnas',
        'provar',
        'cogitar',
        'haver',
        'total',
        'haver'
      );
    if (exerc === 18)
      palavras(
        'coragem',
        'tambor',
        'retomar',
        'sutil',
        'centro',
        'mesa',
        'coragem',
        'método',
        'ligue'
      );
    if (exerc === 19) palavras('ativo', 'onde', 'reside', 'ativo', 'pátria');
    if (exerc === 20)
      palavras('mudar', 'estilo', 'mudar', 'viável', 'aprender');
    if (exerc === 21) palavras('entre', 'entre', 'local', 'canto', 'postura');
    if (exerc === 22) palavras('levar', 'inovar', 'causar', 'levar', 'onde');
    if (exerc === 23) palavras('capaz', 'optar', 'oferta', 'plano', 'capaz');
    if (exerc === 24) palavras('reside', 'pensa', 'reside', 'vigor', 'sonho');
    if (exerc === 25) palavras('apto', 'trata', 'estilo', 'apto', 'renda');
    if (exerc === 26)
      palavras('lucro', 'alcance', 'patrão', 'receber', 'lucro');
    if (exerc === 27) palavras('autor', 'provar', 'autor', 'enviar', 'tipos');
    if (exerc === 28) palavras('faixa', 'saída', 'cogitar', 'faixa', 'sala');
    if (exerc === 29) palavras('parte', 'mim', 'nota', 'dono', 'parte');
    if (exerc === 30)
      palavras('cogitar', 'cogitar', 'provar', 'colunas', 'sinal');
    if (exerc === 31)
      palavras('exercer', 'exercer', 'fazem', 'pelas', 'enviar');
    if (exerc === 32) palavras('título', 'além', 'título', 'condutor', 'mesmo');
    if (exerc === 33)
      palavras('motor', 'assistir', 'soldado', 'motor', 'esteve');
    if (exerc === 34)
      palavras('metade', 'sobre', 'metade', 'decisão', 'gostar');
    if (exerc === 35)
      palavras('tentar', 'ganhar', 'efeito', 'tentar', 'quando');
    if (exerc === 36)
      palavras('atenção', 'quando', 'valor', 'lidar', 'atenção');
    if (exerc === 333)
      cores(
        'medalha',
        'eliminar',
        'executivo',
        'relacionar',
        'gravata',
        'espetacular',
        'acionista',
        'indicado',
        'integração',
        'instalação',
        'linguagem',
        'acessórios',
        'enfatizar',
        'preencher',
        'símbolos',
        'inovação',
        'transmitir',
        'automático',
        'adequado',
        'documentos',
        'representar',
        'moderação',
        'formalidade',
        'professor',
        'qualidade',
        'primeiro',
        'permanece',
        'corresponder',
        'essência',
        'imprimir',
        'informar',
        'dinâmica',
        'alternativo',
        'ampliar',
        'manutenção',
        'competitivo',
        'qualidade',
        'capacidade',
        'suficiente',
        'excelente',
        'manufaturas',
        'crescimento',
        'semelhança',
        'passageiros',
        'demorava',
        'afugentar',
        'simpáticos',
        'faturamento',
        'treinamento',
        'combinação',
        'imaginar',
        'atendimento',
        'partidas',
        'desenredar',
        'energia',
        'floresta',
        'universo',
        'disposição',
        'pacote',
        'pioneiro',
        'transferir',
        'espiral',
        'expandido',
        'seguinte',
        'livraria',
        'capacidade',
        'importantes',
        'múltiplas',
        'sintomático',
        'reforço',
        'disposto',
        'colocar',
        'preparar',
        'principal',
        'criativo',
        'animado',
        'estabelecer',
        'atingir',
        'queremos',
        'específica',
        'aprender',
        'importância',
        'sorriso',
        'sintonia',
        'sucessos',
        'administrar',
        'econômico',
        'mutação',
        'tempestade',
        'concebido',
        'fascinante',
        'carisma',
        'vídeo',
        'necessário',
        'improvisar',
        'fundamentos',

        'ingerência',
        'aparelho',
        'fidelidade',
        'diferença',
        'integração',
        'inventores',
        'encontrar',
        'televisão',
        'felicidade',
        'princípio',
        'explorar',
        'embora',
        'tentativa',
        'assunto',
        'altamente',
        'conversar',
        'automático',
        'necessário',
        'permitir',
        'controlar',
        'exprimir',
        'lidando',
        'congruente',
        'reservado',
        'aprovar',
        'engloba',
        'responsável',
        'proposta',
        'segmentação',
        'cabeça',
        'exemplo',
        'interesse',
        'interlocutor',
        'estratégia',
        'pergunta',
        'empatia',
        'adotado',
        'produto',
        'encadear',
        'questionar',
        'simbólico',
        'comparação',
        'retomada',
        'decidido',
        'caminhar',
        'sensoriais',
        'alcançar',
        'frequência',
        'acrescentar',
        'crédito',
        'propor',
        'memorizar',
        'durante',
        'estabelecer',
        'trampolim',
        'utilizar',
        'reformule',
        'triagem',
        'levantar',
        'opinião',
        'possibilita',
        'vivemos',
        'relações',
        'entender',
        'próximo',
        'conheço',
        'indivíduo',
        'aproveitar',
        'instrutora',
        'positivo',
        'influência',
        'prefácio',
        'flexível',
        'controle',
        'escrito',
        'situação',
        'conseguir',
        'recurso',
        'resultar',
        'programação',
        'coração',
        'vibrante',
        'conquistar',
        'oportunidade',
        'transformar',
        'montagem',
        'ministrar',
        'parceria',
        'especialista',
        'estabelecer',
        'graduação',
        'diferença',
        'precioso',
        'falante',
        'transformar',
        'independer'
      );
    if (exerc === 37)
      palavras(
        'tendência',
        'altitude',
        'tendência',
        'promover',
        'oficial',
        'tendência',
        'formação'
      );
    if (exerc === 38)
      palavras(
        'sofisticado',
        'interessado',
        'movimento',
        'determina',
        'sofisticado',
        'sedimentar',
        'sofisticado'
      );
    if (exerc === 39)
      palavras(
        'harmonia',
        'contribui',
        'harmonia',
        'impressão',
        'harmonia',
        'principal',
        'harmonia'
      );
    if (exerc === 40)
      palavras(
        'impressão',
        'revelar',
        'composto',
        'identificar',
        'impressão',
        'estiver',
        'pesquisador'
      );
    if (exerc === 41)
      palavras(
        'organismo',
        'organismo',
        'recuperação',
        'organismo',
        'permanecer',
        'memória',
        'organismo'
      );
    if (exerc === 42)
      palavras(
        'recuperação',
        'acalmar',
        'anatomia',
        'paisagem',
        'proteína',
        'recuperação',
        'explicar'
      );
    if (exerc === 43)
      palavras(
        'circulação',
        'cientista',
        'circulação',
        'formidável',
        'circulação',
        'especiais',
        'telefonar'
      );
    if (exerc === 44)
      palavras(
        'especiais',
        'reconhecer',
        'profundo',
        'lembrança',
        'compreender',
        'especiais',
        'encontro'
      );
    if (exerc === 45)
      palavras(
        'admirado',
        'admirado',
        'proposta',
        'admirado',
        'apressar',
        'estabilidade',
        'admirado'
      );
    if (exerc === 46)
      palavras(
        'justamente',
        'semblante',
        'justamente',
        'instigar',
        'vislumbre',
        'disposição',
        'justamente'
      );
    if (exerc === 47)
      palavras(
        'disposição',
        'amoroso',
        'princesa',
        'aprontar',
        'disposição',
        'aproveitar',
        'agradável'
      );
    if (exerc === 48)
      palavras(
        'preencher',
        'concordar',
        'apartamento',
        'preencher',
        'diferença',
        'preencher',
        'rápido'
      );
    if (exerc === 49)
      palavras(
        'certeza',
        'arranjar',
        'diplomacia',
        'certeza',
        'cogitação',
        'discordar',
        'compromisso',
        'pretendo',
        'certeza'
      );
    if (exerc === 50)
      palavras(
        'demonstrar',
        'insistir',
        'demonstrar',
        'iluminação',
        'comanda',
        'pensava',
        'demonstrar',
        'executivos',
        'demonstrar'
      );
    if (exerc === 51)
      palavras(
        'insistir',
        'peregrinação',
        'comparar',
        'estratégias',
        'convenção',
        'canaliza',
        'insistir',
        'comunidade',
        'acreditam'
      );
    if (exerc === 52)
      palavras(
        'fartamente',
        'autonomia',
        'fartamente',
        'conceber',
        'dimensão',
        'fartamente',
        'fartamente',
        'realidade',
        'fartamente'
      );
    if (exerc === 53)
      palavras(
        'indicador',
        'fenômeno',
        'indicador',
        'indicador',
        'aprimorar',
        'caloria',
        'princípio',
        'sintético',
        'conforto'
      );
    if (exerc === 54)
      palavras(
        'aprimorar',
        'bastante',
        'patamar',
        'avanço',
        'provoca',
        'aprimorar',
        'treinamento',
        'dinâmico',
        'andava'
      );
    if (exerc === 55)
      palavras(
        'progressivo',
        'carinho',
        'progressivo',
        'semana',
        'circunstância',
        'progressivo',
        'segurança',
        'progressivo',
        'proporcionar'
      );
    if (exerc === 56)
      palavras(
        'segurança',
        'rápido',
        'crescendo',
        'cidadão',
        'apresentado',
        'negócio',
        'segurança',
        'armazenar',
        'esperança'
      );
    if (exerc === 57)
      palavras(
        'permanecer',
        'permanecer',
        'preparar',
        'primeiro',
        'permanecer',
        'descoberta',
        'permanecer',
        'experiência',
        'instrumento'
      );
    if (exerc === 58)
      palavras(
        'cérebro',
        'libertação',
        'cérebro',
        'embarcar',
        'possível',
        'importado',
        'universal',
        'assessores',
        'cérebro'
      );
    if (exerc === 59)
      palavras(
        'comandante',
        'comandante',
        'encontrado',
        'interesse',
        'emocionado',
        'comandante',
        'conseguir',
        'comandante',
        'confirmou'
      );
    if (exerc === 60)
      palavras(
        '99',
        '1337',
        '434',
        '50461',
        '5941',
        '7490',
        '4814',
        '99',
        '88503'
      );
    if (exerc === 61)
      palavras(
        '651',
        '493652',
        '1569',
        '651',
        '86014',
        '55',
        '74153',
        '56614',
        '54901'
      );
    if (exerc === 62)
      palavras(
        '6320',
        '4051',
        '74191',
        '083',
        '3144',
        '924',
        '86301',
        '54301',
        '51860'
      );
    if (exerc === 63)
      palavras(
        '3861',
        '64320',
        '72419',
        '460',
        '97',
        '3861',
        '28651',
        '41512',
        '961'
      );
    if (exerc === 64)
      palavras(
        '65719',
        '561',
        '2654',
        '86691',
        '1189',
        '61840',
        '805142',
        '806431',
        '79'
      );
    if (exerc === 65)
      palavras(
        '5463',
        '36902',
        '903',
        '11592',
        '9341',
        '968547',
        '457',
        '26141',
        '30612'
      );
    if (exerc === 66)
      palavras(
        '992',
        '1721',
        '4245',
        '992',
        '182610',
        '65541',
        '28791',
        '1550',
        '581'
      );
    if (exerc === 67)
      palavras(
        '90718',
        '441',
        '8003',
        '92251',
        '76569',
        '553',
        '952450',
        '791',
        '90718'
      );
    if (exerc === 68)
      palavras(
        '8042',
        '235',
        '2309',
        '941',
        '98245',
        '8042',
        '24790',
        '521',
        '500'
      );
    if (exerc === 69)
      palavras(
        '78',
        '56141',
        '730',
        '451402',
        '504190',
        '3581',
        '9253',
        '11',
        '415'
      );
    if (exerc === 70)
      palavras(
        '8442',
        '092',
        '37',
        '8442',
        '72549',
        '54031',
        '25192',
        '691',
        '9241'
      );
    if (exerc === 71)
      palavras(
        '21431',
        '7542',
        '63214',
        '87',
        '47618',
        '314',
        '8832',
        '84241',
        '346014'
      );
    if (exerc === 72) palavras('441', '441', '28791', '4245', '451405');
    if (exerc === 73) palavras('18261', '746569', '65541', '18261', '1550');
    if (exerc === 74) palavras('876', '581', '24790', '876', '8042');
    if (exerc === 75) palavras('730', '521', '730', '8003', '92251');
    if (exerc === 76) palavras('992', '553', '2309', '90718', '992');
    if (exerc === 77) palavras('2963', '56141', '941', '2963', '237');
    if (exerc === 78) palavras('781', '78', '500', '50231', '781');
    if (exerc === 79) palavras('67492', '67492', '2863', '15926', '9913');
    if (exerc === 80) palavras('774', '140312', '47431', '774', '63251');
    if (exerc === 81) palavras('18', '50571', '18', '572', '492136');

    if (exerc === 82)
      palavras('6150', '602', '6150', '976', '44', '6150', '8962');
    if (exerc === 83)
      palavras('982', '982', '80322', '982', '5914', '982', '5196');
    if (exerc === 84)
      palavras('466', '750', '466', '656', '26143', '466', '4621');
    if (exerc === 85)
      palavras('883', '724', '8544', '5401', '79541', '883', '26143');
    if (exerc === 86)
      palavras('929', '537', '929', '517', '78146', '1631', '929');
    if (exerc === 87)
      palavras('3741', '3741', '517', '2841', '3741', '214610', '3741');
    if (exerc === 88)
      palavras('494', '2913', '986', '24931', '494', '24931', '494');
    if (exerc === 89)
      palavras('49613', '9751', '49613', '982', '7871', '82246', '96');
    if (exerc === 90)
      palavras('2479', '5941', '2479', '537', '2479', '2479', '16371');

    if (exerc === 91)
      palavras(
        'inovador rápido',
        'capacidade competitiva',
        'sequência principal',
        'sistema integrado',
        'empresas agressivas',
        'inovador rápido',
        'flexibilidade interior'
      );
    if (exerc === 92)
      palavras(
        'habilidades técnicas',
        'força espiritual',
        'habilidades técnicas',
        'mudança espiritual',
        'vantagem estratégica',
        'novos paradigmas',
        'posição competitiva'
      );
    if (exerc === 93)
      palavras(
        'clima competitivo',
        'experiência operacional',
        'vigor competitivo',
        'reformular processo',
        'melhoras constantes',
        'resultados surpreendentes',
        'sistema gerencial'
      );
    if (exerc === 94)
      palavras(
        'novas formas',
        'meta ambiciosa',
        'pensamento descontínuo',
        'inovações tecnológicas',
        'novas formas',
        'engenharia estrutural',
        'desempenho otimizado'
      );
    if (exerc === 95)
      palavras(
        'propiciar sucesso',
        'estrutura organizacional',
        'efeitos significativos',
        'forças congruentes',
        'fornecer recursos',
        'organização flexível',
        'salto evolutivo'
      );
    if (exerc === 96)
      palavras(
        'nova tecnologia',
        'criatividade potencial',
        'processo competitivo',
        'pressão competitiva',
        'competências necessárias',
        'habilidades interpessoais',
        'enfrentar mudanças'
      );
    if (exerc === 97)
      palavras(
        'tecnologias avançadas',
        'mudança radical',
        'departamentos funcionais',
        'realizar trabalho',
        'tecnologias avançadas',
        'realizações industriais',
        'capacidade intelectual'
      );
    if (exerc === 98)
      palavras(
        'equipes virtuais',
        'capacidade plena',
        'altamente rentável',
        'valor agregado',
        'impacto competitivo',
        'objetivos estratégicos',
        'equipes virtuais'
      );
    if (exerc === 99)
      palavras(
        'sistemas integrados',
        'capacitador essencial',
        'inovação competitiva',
        'sistemas integrados',
        'alianças estratégicas',
        'processo interativo',
        'atendimento superior'
      );
    if (exerc === 100)
      palavras(
        'mercado emergente',
        'pensamento estratégico',
        'crescimento acelerado',
        'salto qualitativo',
        'oportunidades futuras',
        'mercado emergente',
        'tomar decisões'
      );
    if (exerc === 101)
      palavras(
        'produzir resultados',
        'editoração eletrônica',
        'desafio competitivo',
        'sistema flexível',
        'futuro próximo',
        'produzir resultados',
        'ambição estimulante'
      );
    if (exerc === 102)
      palavras(
        'realidade virtual',
        'aprendizado ascendente',
        'melhora operacional',
        'verdadeiro trabalho',
        'formação contínua',
        'recursos humanos',
        'estratégia empresarial'
      );
    if (exerc === 103)
      palavras(
        'alta rentabilidade',
        'redifinição radical',
        'demanda insaciável',
        'foco operacional',
        'integrar habilidade',
        'alta rentabilidade',
        'liderança competitiva'
      );
    if (exerc === 104)
      palavras(
        'teoria quântica',
        'realidade objetiva',
        ' consciência expandida',
        'centro energético',
        'sofisticação energética',
        'dinâmica invisível',
        'seres radiantes'
      );
    if (exerc === 105)
      palavras(
        'fonte ilimitada',
        'crescimento limitado',
        'confiança interior',
        'amplamente acessível',
        'sexto sentido',
        'planejamento estratégico',
        'processos reformulados'
      );
    if (exerc === 106)
      palavras(
        'visão estratégica',
        'tendências estruturais',
        'líder potencial',
        'potencial criativo',
        'vantagem competitiva',
        'tecnologia adequada',
        'processo específico'
      );
    if (exerc === 107)
      palavras(
        'carreira executiva',
        'criar riqueza',
        'empresas dinâmicas',
        'destruição criativa',
        'desafio econômico',
        'liderança estabelecida',
        'recursos envolvidos'
      );
    if (exerc === 108)
      palavras(
        'energia vital',
        'processo tecnológico',
        'excepcional qualidade',
        'tomar decisões',
        'líderes empresariais',
        'sistemas gerenciais',
        'saltos qualitativos'
      );
    if (exerc === 109)
      palavras(
        'estrutura flexível',
        'tecnologia eficaz',
        'novos protótipos',
        'partilhar informações',
        'estrutura flexível',
        'visão internacional',
        'verdade interior'
      );

    if (exerc === 110)
      palavras(
        'origem intuitiva',
        'sucesso sustentado',
        'origem intuitiva',
        'fazer diferença',
        'reorganização interna'
      );
    if (exerc === 111)
      palavras(
        'trabalho eficaz',
        'ideias básicas',
        'cultura pensante',
        'trabalho eficaz',
        'ideias adicionais'
      );
    if (exerc === 112)
      palavras(
        'clientes felizes',
        'objetivos estratégicos',
        'clientes felizes',
        'estudantes vitalícios',
        'eficiência possível'
      );
    if (exerc === 113)
      palavras(
        'ciência global',
        'força competitiva',
        'conexão cósmica',
        'ciência global',
        'campo energético'
      );
    if (exerc === 114)
      palavras(
        'poder inovador',
        'visão integrada',
        'adiciona valor',
        'poder inovador',
        'mudança radical'
      );
    if (exerc === 115)
      palavras(
        'posição competitiva',
        'posição competitiva',
        'atenção aumentada',
        'esforço antecipado',
        'clientes empolgados'
      );
    if (exerc === 116)
      palavras(
        'força integradora',
        'equipes integradas',
        'serviço superior',
        'criação infinita',
        'força integradora'
      );
    if (exerc === 117)
      palavras(
        'ideias criativas',
        'ideias criativas',
        'experiência interna',
        'ações futuras',
        'abrir caminho'
      );
    if (exerc === 118)
      palavras(
        'resultados criativos',
        'processo criativo',
        'direção específica',
        'resultados criativos',
        'energia interior'
      );
    if (exerc === 119)
      palavras(
        'construção mental',
        'diálogo interno',
        'técnica analítica',
        'construção mental',
        'padrão criativo'
      );

    if (exerc === 120)
      palavras2(
        'maiores',
        'fabricantes',
        'década',
        'final',
        'soluções',
        'produtos',
        'maiores',
        'fabricantes',
        'soluções',
        'equipamentos'
      );
    if (exerc === 121)
      palavras2(
        'metas',
        'ambiciosas',
        'faturamento',
        'mundial',
        'metas',
        'ambiciosas',
        'comunicação',
        'móvel',
        'componentes',
        'básicos'
      );
    if (exerc === 122)
      palavras2(
        'engenharia',
        'elétrica',
        'marketing',
        'produtos',
        'desenvolver',
        'negócios',
        'corporações',
        'estruturadas',
        'plataforma',
        'treinamento'
      );
    if (exerc === 123)
      palavras2(
        'novo',
        'serviço',
        'banco',
        'dados',
        'liderar',
        'vendas',
        'crescimento',
        'pessoal',
        'novo',
        'serviço'
      );
    if (exerc === 124)
      palavras2(
        'empresa',
        'objetivo',
        'distribuição',
        'mundial',
        'empresa',
        'objetivo',
        'tentando',
        'implementar',
        'criação',
        'participar'
      );
    if (exerc === 125)
      palavras2(
        'comércio',
        'eletrônico',
        'editoração',
        'eletrônica',
        'fax',
        'copiadora',
        'empresa',
        'objetivo',
        'sons',
        'animações'
      );
    if (exerc === 126)
      palavras2(
        'vendedores',
        'consumidores',
        'lucro',
        'criatividade',
        'sistemas',
        'embutidos',
        'vendedores',
        'consumidores',
        'aplicativos',
        'computadores'
      );
    if (exerc === 127)
      palavras2(
        'autoria',
        'programas',
        'revelar',
        'planos',
        'tecnologias',
        'descartáveis',
        'palavras',
        'sintetizam',
        'autoria',
        'programas'
      );
    if (exerc === 128)
      palavras2(
        'aparelhos',
        'dispositivos',
        'aprendizado',
        'entretenimento',
        'aparelhos',
        'dispositivos',
        'enfrenta',
        'problemas',
        'primeiro',
        'modelo'
      );
    if (exerc === 129)
      palavras2(
        'sistema',
        'instalação',
        'agregar',
        'produtos',
        'conferência',
        'eletrônica',
        'equipamentos',
        'comerciais',
        'sistema',
        'instalação'
      );
    if (exerc === 130)
      palavras2(
        'software',
        'compras',
        'período',
        'crescimento',
        'texto',
        'escrever',
        'fabricante',
        'milhões',
        'mudanças',
        'drásticas'
      );
    if (exerc === 131)
      palavras2(
        'internet',
        'mundo',
        'cores',
        'vivas',
        'computadores',
        'servidores',
        'futuro',
        'trabalho',
        'agressivas',
        'estratégias'
      );
    if (exerc === 132)
      palavras2(
        'excelência',
        'comunicação',
        'viagens',
        'negócios',
        'imagens',
        'apresentações',
        'gráficos',
        'impressoras',
        'sons',
        'serviços'
      );
    if (exerc === 133)
      palavras2(
        'prazer',
        'aventura',
        'aspirações',
        'profissionais',
        'fácil',
        'produzir',
        'sons',
        'imagens',
        'comunicação',
        'multimídia'
      );
    if (exerc === 134)
      palavras2(
        'usuário',
        'fabricante',
        'ambiente',
        'doméstico',
        'treinamento',
        'funcionário',
        'tarefas',
        'organizadas',
        'usuário',
        'fabricante'
      );
    if (exerc === 135)
      palavras2(
        'estatísticas',
        'animadoras',
        'estatísticas',
        'animadoras',
        'vontade',
        'cliente',
        'lucro',
        'busca',
        'recursos',
        'inéditos'
      );
    if (exerc === 136)
      palavras2(
        'mundo',
        'externo',
        'produtos',
        'serviços',
        'aproveitar',
        'plenamente',
        'arquivo',
        'tranferência',
        'mundo',
        'externo',
        'clientes',
        'mercado',
        'suporte',
        'técnico'
      );
    if (exerc === 137)
      palavras2(
        'transmitir',
        'arquivos',
        'conexão',
        'remota',
        'recursos',
        'disponíveis',
        'transmitir',
        'arquivos',
        'controle',
        'remoto',
        'vendedores',
        'profissionais',
        'processos',
        'internos'
      );
    if (exerc === 138)
      palavras2(
        'safra',
        'aplicativos',
        'questões',
        'solucionar',
        'agente',
        'mudanças',
        'informações',
        'armazenadas',
        'resultados',
        'responsabiliza',
        'safra',
        'aplicativos',
        'acesso',
        'remoto'
      );
    if (exerc === 139)
      palavras2(
        'definir',
        'direção',
        'recompensa',
        'profissional',
        'resultados',
        'empresariais',
        'definir',
        'direção',
        'meio',
        'comunicação',
        'modificações',
        'necessárias',
        'avaliações',
        'favoráveis'
      );
    if (exerc === 140)
      palavras2(
        'matriz',
        'ativa',
        'utilizar',
        'possibilidades',
        'matriz',
        'ativa',
        'diretor',
        'financeiro',
        'informado',
        'tendência',
        'custos',
        'lucratividade',
        'comércio',
        'eletrônico'
      );
    if (exerc === 141)
      palavras2(
        'conhecer',
        'mercado',
        'som',
        'placa',
        'longa',
        'permanência',
        'situação',
        'interna',
        'resolução',
        'equipamento',
        'atender',
        'mercado',
        'conhecer',
        'mercado'
      );
    if (exerc === 142)
      palavras2(
        'velocidade',
        'impressionante',
        'computadores',
        'pessoais',
        'presidente',
        'companhia',
        'velocidade',
        'impressionante',
        'linha',
        'telefônica',
        'equipes',
        'consultores',
        'estratégias',
        'habilitar'
      );
    if (exerc === 143)
      palavras2(
        'imagens',
        'coloridas',
        'checar',
        'mercado',
        'scanner',
        'digitalização',
        'plano',
        'suportar',
        'computação',
        'móvel',
        'imagens',
        'coloridas',
        'escala',
        'mundial'
      );
    if (exerc === 144)
      palavras2(
        'consumidor',
        'doméstico',
        'títulos',
        'diversões',
        'consumidor',
        'doméstico',
        'alto',
        'risco',
        'recuperar',
        'atraso',
        'monitor',
        'visualização',
        'aumento',
        'médio'
      );
    if (exerc === 145)
      palavras2(
        'adesão',
        'padrões',
        'telefone',
        'informações',
        'produtos',
        'distribuição',
        'adesão',
        'padrões',
        'funções',
        'programas',
        'clientes',
        'servidores',
        'baixo',
        'custo'
      );
    if (exerc === 146)
      palavras2(
        'melhoria',
        'produtos',
        'brinquedos',
        'infantis',
        'esforço',
        'repetitivo',
        'java',
        'linguagem',
        'harmonia',
        'competidores',
        'melhoria',
        'produtos',
        'panorama',
        'ecológico'
      );
    if (exerc === 147)
      palavras2(
        'realizar',
        'viagens',
        'competidores',
        'cooperação',
        'estratégias',
        'agressivas',
        'contexto',
        'econômico',
        'governo',
        'planejamento',
        'novos',
        'paradigmas',
        'realizar',
        'viagens'
      );
    if (exerc === 148)
      palavras2(
        'comércio',
        'exportações',
        'comércio',
        'exportações',
        'mercado',
        'proteção',
        'favorável',
        'mercado',
        'conceito',
        'moderno',
        'visão',
        'ampla',
        'varejo',
        'competição'
      );
    if (exerc === 149)
      palavras2(
        'desempenho',
        'pessoal',
        'atividade',
        'econômica',
        'eficientes',
        'modernos',
        'setores',
        'economia',
        'desempenho',
        'pessoal',
        'negociando',
        'competindo',
        'confiança',
        'absoluta'
      );
    if (exerc === 150)
      palavras2(
        'garantir',
        'vitória',
        'mercados',
        'lançamentos',
        'preços',
        'consumidores',
        'garantir',
        'vitória',
        'preços',
        'diferentes',
        'sistema',
        'político',
        'restaurar',
        'confiança'
      );
    if (exerc === 151)
      palavras(
        'criar',
        'essa',
        'para',
        'tenha',
        'criar',
        'numa',
        'custos',
        'buscar',
        'equipe',
        'dedicar'
      );
    if (exerc === 152)
      palavras(
        'verificar',
        'boa',
        'hoje',
        'andam',
        'sempre',
        'grandes',
        'levando',
        'verificar',
        'contendo',
        'mudança'
      );
    if (exerc === 153)
      palavras(
        'mundo',
        'pelo',
        'uma',
        'todas',
        'tenha',
        'lentes',
        'tentam',
        'mundo',
        'assunto',
        'explicar'
      );
    if (exerc === 154)
      palavras(
        'escolher',
        'alta',
        'mais',
        'nosso',
        'linhas',
        'ganhou',
        'gerentes',
        'processo',
        'diretores',
        'globalizar'
      );
    if (exerc === 155)
      palavras(
        'quando',
        'até',
        'uma',
        'cada',
        'geral',
        'esteve',
        'quando',
        'chegam',
        'voltaram',
        'atividades'
      );
    if (exerc === 156)
      palavras(
        'resultados',
        'detalhes',
        'ambiente',
        'investigar',
        'principais',
        'presidente',
        'autonomia',
        'promovida',
        'produzindo',
        'diretamente'
      );
    if (exerc === 157)
      palavras(
        'profundo',
        'qualquer',
        'atividades',
        'motivador',
        'finalmente',
        'subsidiária',
        'importante',
        'produzindo',
        'funcionários',
        'departamento'
      );
    if (exerc === 158)
      palavras(
        'tecnologia',
        'últimos',
        'diferente',
        'contratar',
        'revolução',
        'tecnologia',
        'argumentar',
        'economista',
        'possibilidade',
        'acompanham'
      );
    if (exerc === 159)
      palavras(
        'primeira onda',

        'ocupem com',
        'cada um deles',
        'vai se verificar',
        'ponto de partida',
        'deixar as pessoas',
        'tendência natural',
        'retomada dos lucros',
        'direção das empresas',
        'onda de reengenharia',

        'intermédio',
        'empresarial',
        'compunham',
        'desempenho',
        'velho e novo',
        'retomada dos',
        'primeira onda',
        'salto quântico',
        'pela retomada',

        'de ser como',
        'boa impressão',
        'aquele chefe que',
        'se quisesse mesmo',
        'é preciso ver como',
        'muitas vezes vai se',
        'a opinião da equipe',
        'examinar a situação',
        'novos talentos estão'
      );
    if (exerc === 160)
      palavras(
        'empresas voltaram',

        'está cada vez',
        'a possibilidade',
        'sob as lentes de',
        'sobreviver num',
        'prefere entender',
        'jornais e revistas',
        'de todas as coisas',
        'que o tema merece',
        'parte do seu espaço',

        'lado a lado',
        'para uma vaga',
        'significa mesmo',
        'são vários e vêm',
        'aplicação de mais',
        'ascensão gerencial',
        'embalada pelo bom',
        'até como parte deste',
        'pode parecer estranha',

        'amigos têm',
        'muitos casos',
        'com cortes de',
        'um maior grau',
        'uma noção mais',
        'processo anterior',
        'empresas voltaram',
        'por diretores e mais',
        'longe de representar'
      );
    if (exerc === 161)
      palavras(
        'está cheia de exemplos',

        'setor de serviços fez',
        'um novo setor surgia',
        'nossa história recente',
        'o número médio deles',
        'está cheia de exemplos',
        'único momento em que',
        'nem de como sobreviver',
        'o conceito de ter emprego',
        'um setor adequado a uma',

        'clima expansivo',
        'pela consultoria',
        'elas precisam de',
        'em termos gerais',
        'grandes empresas',
        'retomada dos lucros',
        'direção das empresas',
        'onda de reengenharia',
        'há espaço para reduzir',

        'uma pessoa assim',
        'técnico no assunto',
        'suas técnicas nesse',
        'mantém pessoas que',
        'sugerir ideias com as',
        'aquele que vê que tem',
        'resolver as dúvidas do',
        'os clientes e o mercado',
        'pessoas que apresentam'
      );
    if (exerc === 162)
      palavras(
        'ele age assim porque confia',

        'todos os detalhes e faz',
        'e faz questão de checar',
        'que tenham um extremo',
        'ela age assim porque não',
        'exige ser avisado de todos',
        'gasta o tempo que deveria',
        'falar com este chefe talvez',
        'para fazer carreira aqui eu',
        'as principais caracterísitcas',

        'maior do que se imagina',
        'os chefes obtêm respeito',
        'usar esse tempo para criar',
        'ele age assim porque confia',
        'isso é querer que as pessoas',
        'precisa supervisionar com os',
        'a resposta rápida aos clientes',
        'novos talentos estão emergindo',
        'está acontecendo, sendo feito no',

        'ingressam na economia',
        'primeira prioridade das',
        'o mercado de consumo de',
        'precisam buscar aumento',
        'à medida que cada vez mais',
        'mudanças de foco são fáceis',
        'nesses mercados emergentes',
        'em termos gerais as empresas',
        'promovida pela consultoria das'
      );
    if (exerc === 163)
      palavras(
        'tempo médio de permanência',

        'tentando ajudar executivos',
        'as principais características',
        'a combinação da jornada de',
        'deslocados pela mecanização',
        'supervisionar com os próprios',
        'sob as lentes de um economista',
        'se você não puder sair de férias',
        'faz para explicar por que novos',
        'revolução tecnológica ameaçada',

        'pode parecer estranha',
        'dois níveis hierárquicos',
        'são vários e vêm depois',
        'significa mesmo uma das',
        'recrutamento e seleção do ',
        'conseguiram ocupar novos',
        'processo de reorganização',
        'se reportar a uma pessoa assim',
        'sendo feito no seu departamento',

        'também mantém muitos',
        'faz a equipe trabalhar mais',
        'ascensão dos gerentes e dos',
        'retomada dos investimentos',
        'executivos conseguiram seus',
        'tempo médio de permanência',
        'ambiente competitivo nacional',
        'revolução tecnológica ameaçada',
        'novos investimentos não resultam'
      );
    if (exerc === 164)
      palavras2(
        'frequentar',
        'década',
        'casa',
        'crescer',
        'estudar',
        'urgente',
        'frequentar',
        'década',
        'início',
        'desenvolver',
        'seguir',
        'solene'
      );
    if (exerc === 165)
      palavras2(
        'cultura',
        'livro',
        'noções',
        'custos',
        'dizer',
        'ouvir',
        'líder',
        'futuro',
        'visão',
        'trajetória',
        'árvore',
        'vento'
      );
    if (exerc === 166)
      palavras2(
        'revista',
        'aprender',
        'tentativa',
        'financeiro',
        'jogar',
        'empresário',
        'energia',
        'formação',
        'revista',
        'aprender',
        'sorrir',
        'mudar'
      );
    if (exerc === 167)
      palavras2(
        'projeto',
        'buscar',
        'soluções',
        'articular',
        'espaço',
        'precisa',
        'amar',
        'responder',
        'cuidar',
        'renda',
        'marco',
        'construir'
      );
    if (exerc === 168)
      palavras2(
        'inclusive',
        'cantar',
        'encontrar',
        'intuir',
        'ensaios',
        'motivar',
        'retorno',
        'satisfazer',
        'inclusive',
        'cantar',
        'investir',
        'locar'
      );
    if (exerc === 169)
      palavras2(
        'franquia',
        'simulado',
        'incluir',
        'modelo',
        'franquia',
        'simulado',
        'soldar',
        'praticar',
        'onde',
        'ouro',
        'coletivo',
        'formar'
      );
    if (exerc === 170)
      palavras2(
        'querer',
        'faz',
        'tudo',
        'nós',
        'carro',
        'tempos',
        'nasce',
        'liderança',
        'querer',
        'faz',
        'milhões',
        'líder'
      );
    if (exerc === 171)
      palavras2(
        'querer',
        'área',
        'controle',
        'primeiro',
        'real',
        'grupo',
        'renda',
        'vantagem',
        'atitude',
        'curso',
        'carta',
        'diploma'
      );
    if (exerc === 172)
      palavras2(
        'rápido',
        'judô',
        'marcante',
        'humor',
        'encantar',
        'empresa',
        'rápido',
        'judô',
        'edição',
        'endereço',
        'mundial',
        'assunto'
      );
    if (exerc === 173)
      palavras2(
        'varejo',
        'artigo',
        'optar',
        'executivo',
        'melhoria',
        'chamar',
        'varejo',
        'artigo',
        'livro',
        'vender',
        'número',
        'solução'
      );
    if (exerc === 174)
      palavras(
        'impulso',
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
    if (exerc === 175)
      palavras(
        'ganhar',
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
    if (exerc === 176)
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
    if (exerc === 177)
      palavras(
        'liderança',
        'marcante',
        'vantagem',
        'renda',
        'grupo',
        'real',
        'líder',
        'milhões',
        'liderança',
        'nasce',
        'primeiro',
        'controle',
        'faz',
        'querer',
        'formar',
        'coletivo',
        'tempos',
        'tudo',
        'progresso'
      );
    if (exerc === 334)
      cores(
        '1337',
        '434',
        '50461',
        '5941',
        '7490',
        '4814',
        '99',
        '88503',
        '493652',
        '1569',
        '651',
        '86014',
        '55',
        '74153',
        '56614',
        '54901',
        '4051',
        '74191',
        '083',
        '3144',
        '924',
        '86301',
        '54301',
        '51860',
        '64320',
        '72419',
        '460',
        '97',
        '3861',
        '28651',
        '41512',
        '961',
        '561',
        '2654',
        '86691',
        '1189',
        '61840',
        '805142',
        '806431',
        '79',
        '36902',
        '903',
        '11592',
        '9341',
        '968547',
        '457',
        '26141',
        '30612',
        '1721',
        '4245',
        '992',
        '182610',
        '65541',
        '28791',
        '1550',
        '581',
        '441',
        '8003',
        '92251',
        '76569',
        '553',
        '952450',
        '791',
        '90718',
        '235',
        '2309',
        '941',
        '98245',
        '8042',
        '24790',
        '521',
        '500',
        '29617',
        '876',
        '7751',
        '955',
        '82',
        '241',
        '002',
        '2963',
        '56141',
        '730',
        '451402',
        '504190',
        '3581',
        '9253',
        '11',
        '415',
        '092',
        '37',
        '8442',
        '72549',
        '54031',
        '25192',
        '691',
        '9241',
        '7542',
        '63214',
        '87',
        '47618',
        '314',
        '8832',
        '84241',
        '346014'
      );
    if (exerc === 335)
      cores(
        'capacidade competitiva',
        'sequência principal',
        'sistema integrado',
        'empresas agressivas',
        'inovador rápido',
        'flexibilidade interior',
        'força espiritual',
        'habilidades técnicas',
        'mudança espiritual',
        'vantagem estratégica',
        'novos paradigmas',
        'posição competitiva',
        'experiência operacional',
        'vigor competitivo',
        'reformular processo',
        'melhoras constantes',
        'resultados surpreendentes',
        'sistema gerencial',
        'meta ambiciosa',
        'pensamento descontínuo',
        'inovações tecnológicas',
        'novas formas',
        'engenharia estrutural',
        'desempenho otimizado',
        'estrutura organizacional',
        'efeitos significativos',
        'forças congruentes',
        'fornecer recursos',
        'organização flexível',
        'salto evolutivo',
        'criatividade potencial',
        'processo competitivo',
        'pressão competitiva',
        'competências necessárias',
        'habilidades interpessoais',
        'enfrentar mudanças',
        'mudança radical',
        'departamentos funcionais',
        'realizar trabalho',
        'tecnologias avançadas',
        'realizações industriais',
        'capacidade intelectual',
        'capacidade plena',
        'altamente rentável',
        'valor agregado',
        'impacto competitivo',
        'objetivos estratégicos',
        'equipes virtuais',
        'capacitador essencial',
        'inovação competitiva',
        'sistemas integrados',
        'alianças estratégicas',
        'processo interativo',
        'atendimento superior',
        'pensamento estratégico',
        'crescimento acelerado',
        'salto qualitativo',
        'oportunidades futuras',
        'mercado emergente',
        'tomar decisões',
        'editoração eletrônica',
        'desafio competitivo',
        'sistema flexível',
        'futuro próximo',
        'produzir resultados',
        'ambição estimulante',
        'aprendizado ascendente',
        'melhora operacional',
        'verdadeiro trabalho',
        'formação contínua',
        'recursos humanos',
        'estratégia empresarial',
        'redifinição radical',
        'demanda insaciável',
        'foco operacional',
        'integrar habilidade',
        'alta rentabilidade',
        'liderança competitiva',
        'realidade objetiva',
        'consciência expandida',
        'centro energético',
        'sofisticação energética',
        'dinâmica invisível',
        'seres radiantes',
        'crescimento limitado',
        'confiança interior',
        'amplamente acessível',
        'sexto sentido',
        'planejamento estratégico',
        'processos reformulados',
        'tendências estruturais',
        'líder potencial',
        'potencial criativo',
        'vantagem competitiva',
        'tecnologia adequada',
        'processo específico',
        'criar riqueza',
        'empresas dinâmicas',
        'destruição criativa',
        'desafio econômico',
        'liderança estabelecida',
        'recursos envolvidos',
        'processo tecnológico',
        'excepcional qualidade',
        'tomar decisões',
        'líderes empresariais',
        'sistemas gerenciais',
        'saltos qualitativos',
        'tecnologia eficaz',
        'novos protótipos',
        'partilhar informações',
        'estrutura flexível',
        'visão internacional',
        'verdade interior'
      );
    if (exerc === 336)
      cores(
        'década',
        'final',
        'soluções',
        'produtos',
        'maiores',
        'fabricantes',
        'soluções',
        'equipamentos',
        'faturamento',
        'mundial',
        'metas',
        'ambiciosas',
        'comunicação',
        'móvel',
        'componentes',
        'básicos',
        'marketing',
        'produtos',
        'desenvolver',
        'negócios',
        'corporações',
        'estruturadas',
        'plataforma',
        'treinamento',
        'banco',
        'dados',
        'liderar',
        'vendas',
        'crescimento',
        'pessoal',
        'novo',
        'serviço',
        'distribuição',
        'mundial',
        'empresa',
        'objetivo',
        'tentando',
        'implementar',
        'criação',
        'participar',
        'editoração',
        'eletrônica',
        'fax',
        'copiadora',
        'empresa',
        'objetivo',
        'lucro',
        'criatividade',
        'sistemas',
        'embutidos',
        'vendedores',
        'consumidores',
        'aplicativos',
        'computadores',
        'revelar',
        'planos',
        'tecnologias',
        'descartáveis',
        'palavras',
        'sintetizam',
        'autoria',
        'programas',
        'aprendizado',
        'entretenimento',
        'aparelhos',
        'dispositivos',
        'enfrenta',
        'problemas',
        'primeiro',
        'modelo',
        'agregar',
        'produtos',
        'conferência',
        'eletrônica',
        'equipamentos',
        'comerciais',
        'sistema',
        'instalação',
        'período',
        'crescimento',
        'texto',
        'escrever',
        'fabricante',
        'milhões',
        'mudanças',
        'drásticas',
        'cores',
        'vivas',
        'computadores',
        'servidores',
        'futuro',
        'trabalho',
        'agressivas',
        'estratégias',
        'viagens',
        'negócios',
        'imagens',
        'apresentações',
        'gráficos',
        'impressoras',
        'sons',
        'serviços',
        'aspirações',
        'profissionais',
        'fácil',
        'produzir',
        'sons',
        'imagens',
        'comunicação',
        'multimídia',
        'ambiente',
        'doméstico',
        'treinamento',
        'funcionário',
        'tarefas',
        'organizadas',
        'usuário',
        'fabricante',
        'estatísticas',
        'animadoras',
        'vontade',
        'cliente',
        'lucro',
        'busca',
        'recursos',
        'inéditos'
      );
    if (exerc === 337)
      palavras(
        'junto',
        '1. frente',
        '2. chaves',
        '3. versão',
        '4. minha',
        '5. aplicar',
        '6. junto'
      );
    if (exerc === 338)
      palavras(
        'elevar',
        '1. bolso',
        '2. cidade',
        '3. elevar',
        '4. militar',
        '5. treino',
        '6. peguei'
      );
    if (exerc === 339)
      palavras(
        'causar',
        '1. saudável',
        '2. causar',
        '3. noção',
        '4. elevar',
        '5. limite',
        '6. inteiro'
      );
    if (exerc === 340)
      palavras(
        'falar',
        '1. sinapse',
        '2. relação',
        '3. força',
        '4. falar',
        '5. interno',
        '6. aposto'
      );
    if (exerc === 341)
      palavras(
        'ajuste',
        '1. chuva',
        '2. torna',
        '3. perfume',
        '4. correto',
        '5. ajuste',
        '6. aparecer'
      );
    if (exerc === 342)
      palavras(
        'observar',
        '1. emoção',
        '2. acesso',
        '3. parecer',
        '4. observar',
        '5. tentar',
        '6. seguido'
      );
    if (exerc === 343)
      palavras(
        'saber',
        '1. conhecer',
        '2. encontro',
        '3. forte',
        '4. produzir',
        '5. vencer',
        '6. saber'
      );
    if (exerc === 344)
      palavras(
        'amor',
        '1. sonho',
        '2. amor',
        '3. impacto',
        '4. viável',
        '5. sensível',
        '6. apostar'
      );
    if (exerc === 345)
      palavras(
        'solar',
        '1. vetor',
        '2. setor',
        '3. valor',
        '4. solar',
        '5. rede',
        '6. calor'
      );
    if (exerc === 346)
      palavras(
        'cliente',
        '1. etapa',
        '2. equipe',
        '3. pleno',
        '4. grupo',
        '5. cliente',
        '6. tempo'
      );
    if (exerc === 347)
      palavras(
        'plano',
        '1. andar',
        '2. pode',
        '3. pleno',
        '4. parte',
        '5. vender',
        '6. plano'
      );
    if (exerc === 348)
      palavras(
        'calor',
        '1. agora',
        '2. calor',
        '3. época',
        '4. gerar',
        '5. motor',
        '6. maior'
      );
    if (exerc === 349)
      palavras(
        'otimista',
        '1. simplista',
        '2. considerar',
        '3. otimista',
        '4. desenho',
        '5. aumentar',
        '6. correntista'
      );
    if (exerc === 350)
      palavras(
        'mensagem',
        '1. triagem',
        '2. aumentar',
        '3. filtragem',
        '4. desempenho',
        '5. metragem',
        '6. mensagem'
      );
    if (exerc === 351)
      palavras(
        'medalha',
        '1. malha',
        '2. valho',
        '3. medalha',
        '4. desempenho',
        '5. sandália',
        '6. primeiro'
      );
    if (exerc === 352)
      palavras(
        'tecnologia',
        '1. eletrônica',
        '2. ligeiro',
        '3. roteiro',
        '4. viveiro',
        '5. tecnologia',
        '6. primeiro'
      );
    if (exerc === 353)
      palavras(
        'comandos',
        '1. muitos',
        '2. comandos',
        '3. escrever',
        '4. minutos',
        '5. imprimir',
        '6. benefícios'
      );
    if (exerc === 354)
      palavras(
        'simbolo',
        '1. iniciante',
        '2. corresponder',
        '3. saltitante',
        '4. simbolo',
        '5. qualidade',
        '6. cativante'
      );
    if (exerc === 355)
      palavras(
        'variável',
        '1. variável',
        '2. preferir',
        '3. metáfora',
        '4. restantes',
        '5. cânfora',
        '6. disciplina'
      );
    if (exerc === 356)
      palavras(
        'coração',
        '1. retomar',
        '2. opinião',
        '3. conjunto',
        '4. coração',
        '5. preservar',
        '6. recurso'
      );
    if (exerc === 357)
      palavras(
        'relevante',
        '1. retomar',
        '2. conjunto',
        '3. moderno',
        '4. modelo',
        '5. relevante',
        '6. conjunto',
        '7. hodierno',
        '8. eficácia',
        '9. audácia'
      );
    if (exerc === 358)
      palavras(
        'entender',
        '1. resolver',
        '2. apressar',
        '3. pretender',
        '4. preservar',
        '5. retomar',
        '6. vibrante',
        '7. remover',
        '8. entender',
        '9. dissolver'
      );
    if (exerc === 359)
      palavras(
        'proposta',
        '1. animado',
        '2. memória',
        '3. soldado',
        '4. proposta',
        '5. vestir',
        '6. prever',
        '7. evidência',
        '8. antever',
        '9. promover'
      );
    if (exerc === 360)
      palavras(
        'cérebro',
        '1. cérebro',
        '2. idioma',
        '3. excelência',
        '4. inteiro',
        '5. conforto',
        '6. negócio',
        '7. secreto',
        '8. saliência',
        '9. experiência'
      );
    if (exerc === 361)
      palavras(
        'começar',
        '1. entortar',
        '2. essencial',
        '3. avançar',
        '4. começar',
        '5. patamar',
        '6. oficial',
        '7. confiar',
        '8. acreditar',
        '9. olhar'
      );
    if (exerc === 362)
      palavras(
        'estratégias',
        '1. começar',
        '2. decidir',
        '3. instância',
        '4. entoar',
        '5. avançar',
        '6. optar',
        '7. fundir',
        '8. estratégias',
        '9. impacto'
      );
    if (exerc === 363)
      palavras(
        'continuar',
        '1. estratégias',
        '2. qualquer',
        '3. relíquia',
        '4. acreditar',
        '5. optar',
        '6. continuar',
        '7. clima',
        '8. parte',
        '9. freqüente'
      );
    if (exerc === 364)
      palavras(
        'aplicar',
        '1. parte',
        '2. utilizar',
        '3. relíquia',
        '4. optar',
        '5. estratégias',
        '6. entender',
        '7. aplicar',
        '8. saber',
        '9. iniciar'
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
      {exercicio_id === 1 && (
        <Cores ex={exercicio} exercicio={exercicio_id} pergunta={pergunta} />
      )}
      {exercicio_id === 2 && (
        <Exercicio02
          ex={exercicio}
          exercicio={exercicio_id}
          pergunta={pergunta}
        />
      )}
      {exercicio_id === 332 && (
        <Palavras
          ex={exercicio}
          exercicio={exercicio_id}
          pergunta={pergunta}
          palavra={cor}
        />
      )}
      {((exercicio_id >= 3 && exercicio_id <= 18) ||
        (exercicio_id >= 60 && exercicio_id <= 71) ||
        (exercicio_id >= 91 && exercicio_id <= 109)) && (
        <Exercicio03
          ex={exercicio}
          exercicio={exercicio_id}
          pergunta={pergunta}
          palavra={palavra}
          opcoes={opcoes}
        />
      )}
      {((exercicio_id >= 19 && exercicio_id <= 36) ||
        (exercicio_id >= 72 && exercicio_id <= 81) ||
        (exercicio_id >= 110 && exercicio_id <= 119)) && (
        <Opcoes04
          ex={exercicio}
          exercicio={exercicio_id}
          pergunta={pergunta}
          palavra={palavra}
          opcoes={opcoes}
        />
      )}
      {exercicio_id === 333 && (
        <Exercicio04
          ex={exercicio}
          exercicio={exercicio_id}
          pergunta={pergunta}
          palavra={cor}
        />
      )}
      {((exercicio_id >= 37 && exercicio_id <= 59) ||
        (exercicio_id >= 82 && exercicio_id <= 90)) && (
        <Quantas04
          ex={exercicio}
          exercicio={exercicio_id}
          pergunta={pergunta}
          palavra={palavra}
          opcoes={opcoes}
        />
      )}
      {exercicio_id >= 120 && exercicio_id <= 150 && (
        <Exercicio06
          ex={exercicio}
          exercicio={exercicio_id}
          pergunta={pergunta}
          palavra={palavra}
          palavra2={palavra2}
          opcoes={opcoes}
        />
      )}
      {exercicio_id >= 151 && exercicio_id <= 163 && (
        <Exercicio08
          ex={exercicio}
          exercicio={exercicio_id}
          pergunta={pergunta}
          palavra={palavra}
          opcoes={opcoes}
        />
      )}
      {exercicio_id >= 164 && exercicio_id <= 173 && (
        <Opcoes02
          ex={exercicio}
          exercicio={exercicio_id}
          pergunta={pergunta}
          palavra={palavra}
          palavra2={palavra2}
          opcoes={opcoes}
        />
      )}
      {exercicio_id >= 174 && exercicio_id <= 177 && (
        <Sortidas
          ex={exercicio}
          exercicio={exercicio_id}
          pergunta={pergunta}
          palavra={palavra}
          opcoes={opcoes}
        />
      )}
      {exercicio_id === 334 && (
        <Numeros
          ex={exercicio}
          exercicio={exercicio_id}
          pergunta={pergunta}
          palavra={cor}
        />
      )}
      {exercicio_id === 335 && (
        <Frases
          ex={exercicio}
          exercicio={exercicio_id}
          pergunta={pergunta}
          palavra={cor}
        />
      )}
      {exercicio_id === 336 && (
        <Exercicio07
          ex={exercicio}
          exercicio={exercicio_id}
          pergunta={pergunta}
          palavra={cor}
        />
      )}
      {exercicio_id >= 337 && exercicio_id <= 364 && (
        <Exercicio09
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
