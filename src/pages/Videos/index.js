import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Prod, Voltar } from './styles';

import icoPlay from '~/assets/ico-play.png';

export default function Videos(props) {
  const video = props.match.params.id;

  return (
    <Container>
      <Voltar>
        <ul>
          <li>
            <Link to="/dashboard">
              <small>Home</small>
            </Link>
          </li>
          {(video == 'aula01teoria' || video == 'aula02teoria' || video == 'aula03teoria' || video == 'aula04teoria' || video == 'aula05teoria' || video == 'aula06teoria' || video == 'aula01pratica' || video == 'aula02pratica' || video == 'aula03pratica' || video == 'aula04pratica' || video == 'aula05pratica' || video == 'aula06pratica') && (
            <>
              <li>|</li>
              <li>
                <Link to="/basico">
                  <small>Módulo Básico</small>
                </Link>
              </li>
            </>
          )}
          {(video == 'aula07teoria' || video == 'aula08teoria' || video == 'aula09teoria' || video == 'aula10teoria' || video == 'aula11teoria' || video == 'aula07pratica' || video == 'aula08pratica' || video == 'aula09pratica' || video == 'aula10pratica' || video == 'aula11pratica') && (
            <>
              <li>|</li>
              <li>
                <Link to="/intermediario">
                  <small>Módulo Intermediário</small>
                </Link>
              </li>
            </>
          )}
          {(video == 'aula12teoria' || video == 'aula13teoria' || video == 'aula14teoria' || video == 'aula15teoria' || video == 'aula16teoria' || video == 'aula12pratica' || video == 'aula13pratica' || video == 'aula14pratica' || video == 'aula15pratica' || video == 'aula16pratica') && (
            <>
              <li>|</li>
              <li>
                <Link to="/avancado">
                  <small>Módulo Avançado</small>
                </Link>
              </li>
            </>
          )}
          {(video == 'aula01teoria' || video == 'aula01pratica') && (
            <>
              <li>|</li>
              <li>
                <Link to="/basico/aula01">
                  <small>Aula 01</small>
                </Link>
              </li>
            </>
          )}
          {(video == 'aula02teoria' || video == 'aula02pratica') && (
            <>
              <li>|</li>
              <li>
                <Link to="/basico/aula02">
                  <small>Aula 02</small>
                </Link>
              </li>
            </>
          )}
          {(video == 'aula03teoria' || video == 'aula03pratica') && (
            <>
              <li>|</li>
              <li>
                <Link to="/basico/aula03">
                  <small>Aula 03</small>
                </Link>
              </li>
            </>
          )}
          {(video == 'aula04teoria' || video == 'aula04pratica') && (
            <>
              <li>|</li>
              <li>
                <Link to="/basico/aula04">
                  <small>Aula 04</small>
                </Link>
              </li>
            </>
          )}
          {(video == 'aula05teoria' || video == 'aula05pratica') && (
            <>
              <li>|</li>
              <li>
                <Link to="/basico/aula05">
                  <small>Aula 05</small>
                </Link>
              </li>
            </>
          )}
          {(video == 'aula06teoria' || video == 'aula06pratica') && (
            <>
              <li>|</li>
              <li>
                <Link to="/basico/aula06">
                  <small>Aula 06</small>
                </Link>
              </li>
            </>
          )}
          {(video == 'aula067eoria' || video == 'aula07pratica') && (
            <>
              <li>|</li>
              <li>
                <Link to="/intermediario/aula07">
                  <small>Aula 07</small>
                </Link>
              </li>
            </>
          )}
          {(video == 'aula08teoria' || video == 'aula08pratica') && (
            <>
              <li>|</li>
              <li>
                <Link to="/intermediario/aula08">
                  <small>Aula 08</small>
                </Link>
              </li>
            </>
          )}
          {(video == 'aula09teoria' || video == 'aula09pratica') && (
            <>
              <li>|</li>
              <li>
                <Link to="/intermediario/aula09">
                  <small>Aula 09</small>
                </Link>
              </li>
            </>
          )}
          {(video == 'aula10teoria' || video == 'aula10pratica') && (
            <>
              <li>|</li>
              <li>
                <Link to="/intermediario/aula10">
                  <small>Aula 10</small>
                </Link>
              </li>
            </>
          )}
          {(video == 'aula11teoria' || video == 'aula11pratica') && (
            <>
              <li>|</li>
              <li>
                <Link to="/intermediario/aula11">
                  <small>Aula 11</small>
                </Link>
              </li>
            </>
          )}
          {(video == 'aula12teoria' || video == 'aula12pratica') && (
            <>
              <li>|</li>
              <li>
                <Link to="/avancado/aula12">
                  <small>Aula 12</small>
                </Link>
              </li>
            </>
          )}
          {(video == 'aula13teoria' || video == 'aula13pratica') && (
            <>
              <li>|</li>
              <li>
                <Link to="/avancado/aula13">
                  <small>Aula 13</small>
                </Link>
              </li>
            </>
          )}
          {(video == 'aula14teoria' || video == 'aula14pratica') && (
            <>
              <li>|</li>
              <li>
                <Link to="/avancado/aula14">
                  <small>Aula 14</small>
                </Link>
              </li>
            </>
          )}
          {(video == 'aula15teoria' || video == 'aula15pratica') && (
            <>
              <li>|</li>
              <li>
                <Link to="/avancado/aula15">
                  <small>Aula 15</small>
                </Link>
              </li>
            </>
          )}
          {(video == 'aula16teoria' || video == 'aula16pratica') && (
            <>
              <li>|</li>
              <li>
                <Link to="/avancado/aula16">
                  <small>Aula 16</small>
                </Link>
              </li>
            </>
          )}
          <li>|</li>
          <li>
            {video == 'sobre' && <small>Sobre o Autor e Curso</small>}
            {video == 'avalie' && <small>Avalie sua Leitura</small>}
            {video == 'treinamentoseficazes' && (
              <small>Treinamentos Eficazes</small>
            )}
            {video == 'aula01teoria' && (
              <small>Mecanismos da Leitura Silábica Fonética</small>
            )}
            {video == 'aula01pratica' && (
              <small>Explicando como realizar os exercícios</small>
            )}
            {video == 'aula02teoria' && (
              <small>Campo Visual e Leitura Espacial</small>
            )}
            {video == 'aula02pratica' && (
              <small>Explicando como realizar os exercícios</small>
            )}
            {video == 'aula03teoria' && (
              <small>Relembrando a Teoria Básica</small>
            )}
            {video == 'aula03pratica' && (
              <small>Explicando como realizar os exercícios</small>
            )}
            {video == 'aula04teoria' && (
              <small>
                Paradigmas da Leitura Dinâmica e os Hemisférios Cerebrais
              </small>
            )}
            {video == 'aula04pratica' && (
              <small>Explicando como realizar os exercícios</small>
            )}
            {video == 'aula05teoria' && (
              <small>Pressupostos da Leitura Dinâmica</small>
            )}
            {video == 'aula05pratica' && (
              <small>Explicando como realizar os exercícios</small>
            )}
            {video == 'aula06teoria' && (
              <small>Subvocalização e sonorização</small>
            )}
            {video == 'aula06pratica' && (
              <small>Explicando como realizar os exercícios</small>
            )}
            {video == 'aula07teoria' && (
              <small>Autoaceleração → aplicando nos textos</small>
            )}
            {video == 'aula07pratica' && (
              <small>Explicando como realizar os exercícios</small>
            )}
            {video == 'aula08teoria' && (
              <small>
                Autoaceleração: → aplicando nos textos → com o timer
              </small>
            )}
            {video == 'aula08pratica' && (
              <small>Explicando como realizar os exercícios</small>
            )}
            {video == 'aula09teoria' && (
              <small>Quanto mudaram os paradigmas da leitura</small>
            )}
            {video == 'aula09pratica' && (
              <small>Avaliando o seu desempenho</small>
            )}
            {video == 'aula10teoria' && (
              <small>Subvocalização = cordas vocais</small>
            )}
            {video == 'aula10pratica' && (
              <small>Explicando como realizar os exercícios</small>
            )}
            {video == 'aula11teoria' && (
              <small>Quanto mudaram os paradigmas da leitura</small>
            )}
            {video == 'aula11pratica' && (
              <small>Avaliando o seu desempenho</small>
            )}
            {video == 'aula12teoria' && (
              <small>Mecanismos físicos + mecanismos mentais</small>
            )}
            {video == 'aula12pratica' && (
              <small>Treinamentos intensos, curtos e intercalados</small>
            )}
            {video == 'aula13teoria' && (
              <small>Quanto mudaram os paradigmas da leitura</small>
            )}
            {video == 'aula13pratica' && (
              <small>Avaliando o seu desempenho</small>
            )}
            {video == 'aula14teoria' && (
              <small>Paradigmas da leitura dinâmica x paradigmas da leitura silábica/fonética</small>
            )}
            {video == 'aula14pratica' && (
              <small>Treinamentos intensos, curtos e intercalados</small>
            )}
            {video == 'aula15teoria' && (
              <small>Quanto mudaram os paradigmas da leitura</small>
            )}
            {video == 'aula15pratica' && (
              <small>Avaliando o seu desempenho</small>
            )}
            {video == 'aula16teoria' && (
              <small>Fatores auxiliares da leitura</small>
            )}
            {video == 'aula16pratica' && (
              <small>Como continuar treinando</small>
            )}
          </li>
        </ul>

        <a href="javascript:history.back()">
          <small>&laquo; Voltar</small>
        </a>
      </Voltar>
      <Prod>
        {video == 'sobre' && <h2>Sobre o Autor e Curso</h2>}
        {video == 'avalie' && <h2>Avalie sua Leitura</h2>}
        {video == 'treinamentoseficazes' && <h2>Treinamentos Eficazes</h2>}
        {video == 'aula01teoria' && (
          <h2>Aula 01: Mecanismos da Leitura Silábica Fonética</h2>
        )}
        {video == 'aula01pratica' && (
          <h2>Aula 01: Explicando como realizar os exercícios</h2>
        )}
        {video == 'aula02teoria' && (
          <h2>Aula 02: Campo Visual e Leitura Espacial</h2>
        )}
        {video == 'aula02pratica' && (
          <h2>Aula 02: Explicando como realizar os exercícios</h2>
        )}
        {video == 'aula03teoria' && (
          <h2>Aula 03: Relembrando a Teoria Básica</h2>
        )}
        {video == 'aula03pratica' && (
          <h2>Aula 03: Explicando como realizar os exercícios</h2>
        )}
        {video == 'aula04teoria' && (
          <h2>
            Aula 04: Paradigmas da Leitura Dinâmica e os Hemisférios Cerebrais
          </h2>
        )}
        {video == 'aula04pratica' && (
          <h2>Aula 04: Explicando como realizar os exercícios</h2>
        )}
        {video == 'aula05teoria' && (
          <h2>Aula 05: Pressupostos da Leitura Dinâmica</h2>
        )}
        {video == 'aula05pratica' && (
          <h2>Aula 05: Explicando como realizar os exercícios</h2>
        )}
        {video == 'aula06teoria' && (
          <h2>Aula 06: Subvocalização e sonorização</h2>
        )}
        {video == 'aula06pratica' && (
          <h2>Aula 06: Explicando como realizar os exercícios</h2>
        )}
        {video == 'aula07teoria' && (
          <h2>Aula 07: Autoaceleração → aplicando nos textos</h2>
        )}
        {video == 'aula07pratica' && (
          <h2>Aula 07: Explicando como realizar os exercícios</h2>
        )}
        {video == 'aula08teoria' && (
          <h2>Aula 08: Autoaceleração: → aplicando nos textos → com o timer</h2>
        )}
        {video == 'aula08pratica' && (
          <h2>Aula 08: Explicando como realizar os exercícios</h2>
        )}
        {video == 'aula09teoria' && (
          <h2>Aula 09: Quanto mudaram os paradigmas da leitura</h2>
        )}
        {video == 'aula09pratica' && (
          <h2>Aula 09: Avaliando o seu desempenho</h2>
        )}
        {video == 'aula10teoria' && (
          <h2>Aula 10: Subvocalização = cordas vocais</h2>
        )}
        {video == 'aula10pratica' && (
          <h2>Aula 10: Explicando como realizar os exercícios</h2>
        )}
        {video == 'aula11teoria' && (
          <h2>Aula 11: Quanto mudaram os paradigmas da leitura</h2>
        )}
        {video == 'aula11pratica' && (
          <h2>Aula 11: Avaliando o seu desempenho</h2>
        )}
        {video == 'aula12teoria' && (
          <h2>Aula 12: Mecanismos físicos + mecanismos mentais</h2>
        )}
        {video == 'aula12pratica' && (
          <h2>Aula 12: Treinamentos intensos, curtos e intercalados</h2>
        )}
        {video == 'aula13teoria' && (
          <h2>Aula 13: Quanto mudaram os paradigmas da leitura</h2>
        )}
        {video == 'aula13pratica' && (
          <h2>Aula 13: Avaliando o seu desempenho</h2>
        )}
        {video == 'aula14teoria' && (
          <h2>Aula 14: Paradigmas da leitura dinâmica x paradigmas da leitura silábica/fonética</h2>
        )}
        {video == 'aula14pratica' && (
          <h2>Aula 14: Treinamentos intensos, curtos e intercalados</h2>
        )}
        {video == 'aula15teoria' && (
          <h2>Aula 15: Quanto mudaram os paradigmas da leitura</h2>
        )}
        {video == 'aula15pratica' && (
          <h2>Aula 15: Avaliando o seu desempenho</h2>
        )}
        {video == 'aula16teoria' && (
          <h2>Aula 16: Fatores auxiliares da leitura</h2>
        )}
        {video == 'aula16pratica' && (
          <h2>Aula 16: Como continuar treinando</h2>
        )}
        <span>
          {video == 'sobre' && (
            <iframe
              src="https://www.youtube.com/embed/aS45haxJAls"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'avalie' && (
            <iframe
              src="https://www.youtube.com/embed/7q-eSXHMIrQ"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'treinamentoseficazes' && (
            <iframe
              src="https://www.youtube.com/embed/aPQGZwmLORU"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula01teoria' && (
            <iframe
              src="https://www.youtube.com/embed/JjsfOmbnwnQ"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula01pratica' && (
            <iframe
              src="https://www.youtube.com/embed/8nxh_P0gou8"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula02teoria' && (
            <iframe
              src="https://www.youtube.com/embed/l2esGu4A4EM"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula02pratica' && (
            <iframe
              src="https://www.youtube.com/embed/KtfGBX_vv-E"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula03teoria' && (
            <iframe
              src="https://www.youtube.com/embed/A93fs7IesUY"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula03pratica' && (
            <iframe
              src="https://www.youtube.com/embed/_1rug5qjAr8"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula04teoria' && (
            <iframe
              src="https://www.youtube.com/embed/vWYTRrhQvfk"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula04pratica' && (
            <iframe
              src="https://www.youtube.com/embed/AyHsdsG15Ps"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula05teoria' && (
            <iframe
              src="https://www.youtube.com/embed/CTzpFV3GQrs"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula05pratica' && (
            <iframe
              src="https://www.youtube.com/embed/e2P1SY3sPz8"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula06teoria' && (
            <iframe
              src="https://www.youtube.com/embed/CTzpFV3GQrs"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula06pratica' && (
            <iframe
              src="https://www.youtube.com/embed/UWKtH8it5vg"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula07teoria' && (
            <iframe
              src="https://www.youtube.com/embed/uqGuXQTl--M"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula07pratica' && (
            <iframe
              src="https://www.youtube.com/embed/ubQ4SdKJ5kA"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula08teoria' && (
            <iframe
              src="https://www.youtube.com/embed/AhHkkRhcRmU"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula08pratica' && (
            <iframe
              src="https://www.youtube.com/embed/LG0zLiNIRNw"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula09teoria' && (
            <iframe
              src="https://www.youtube.com/embed/8GDpIBkeMRQ"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula09pratica' && (
            <iframe
              src="https://www.youtube.com/embed/HrmNjIiWY-M"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula10teoria' && (
            <iframe
              src="https://www.youtube.com/embed/C46wfOqZGME"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula10pratica' && (
            <iframe
              src="https://www.youtube.com/embed/NcYbcyGSrX0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula11teoria' && (
            <iframe
              src="https://www.youtube.com/embed/ScWHki164-Q"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula11pratica' && (
            <iframe
              src="https://www.youtube.com/embed/x-3Djj9naVQ"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula12teoria' && (
            <iframe
              src="https://www.youtube.com/embed/AWLd0UW3Qic"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula12pratica' && (
            <iframe
              src="https://www.youtube.com/embed/-KKirzc82Ls"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula13teoria' && (
            <iframe
              src="https://www.youtube.com/embed/RwtwS-EcMLw"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula13pratica' && (
            <iframe
              src="https://www.youtube.com/embed/LtouD6Z0JnY"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula14teoria' && (
            <iframe
              src="https://www.youtube.com/embed/zhmpAYqBX7c"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula14pratica' && (
            <iframe
              src="https://www.youtube.com/embed/twSd28-7dqc"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula15teoria' && (
            <iframe
              src="https://www.youtube.com/embed/pbym8xHp04Y"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula15pratica' && (
            <iframe
              src="https://www.youtube.com/embed/HBY3NpfjF-A"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula16teoria' && (
            <iframe
              src="https://www.youtube.com/embed/WMFh-ij2cNU"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
        </span>

        {video == 'sobre' && (
          <>
            <p>Próximo vídeo:</p>
            <h4>
              <Link to="/video/avalie">
                <img src={icoPlay} /> Avalie sua Leitura
              </Link>
            </h4>
          </>
        )}
        {video == 'avalie' && (
          <>
            <p>Próximo vídeo:</p>
            <h4>
              <Link to="/video/treinamentoseficazes">
                <img src={icoPlay} /> Treinamentos Eficazes
              </Link>
            </h4>
          </>
        )}
      </Prod>
    </Container>
  );
}
