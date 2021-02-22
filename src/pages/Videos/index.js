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
          {video == 'aula01teoria' && (
            <>
              <li>|</li>
              <li>
                <Link to="/basico">
                  <small>Módulo Básico</small>
                </Link>
              </li>
              <li>|</li>
              <li>
                <Link to="/basico/aula01">
                  <small>Aula 01</small>
                </Link>
              </li>
            </>
          )}
          {video == 'aula02teoria' && (
            <>
              <li>|</li>
              <li>
                <Link to="/basico">
                  <small>Módulo Básico</small>
                </Link>
              </li>
              <li>|</li>
              <li>
                <Link to="/basico/aula02">
                  <small>Aula 02</small>
                </Link>
              </li>
            </>
          )}
          {video == 'aula03teoria' && (
            <>
              <li>|</li>
              <li>
                <Link to="/basico">
                  <small>Módulo Básico</small>
                </Link>
              </li>
              <li>|</li>
              <li>
                <Link to="/basico/aula03">
                  <small>Aula 03</small>
                </Link>
              </li>
            </>
          )}
          {video == 'aula04teoria' && (
            <>
              <li>|</li>
              <li>
                <Link to="/basico">
                  <small>Módulo Básico</small>
                </Link>
              </li>
              <li>|</li>
              <li>
                <Link to="/basico/aula04">
                  <small>Aula 04</small>
                </Link>
              </li>
            </>
          )}
          {video == 'aula05teoria' && (
            <>
              <li>|</li>
              <li>
                <Link to="/basico">
                  <small>Módulo Básico</small>
                </Link>
              </li>
              <li>|</li>
              <li>
                <Link to="/basico/aula05">
                  <small>Aula 05</small>
                </Link>
              </li>
            </>
          )}
          {video == 'aula06teoria' && (
            <>
              <li>|</li>
              <li>
                <Link to="/basico">
                  <small>Módulo Básico</small>
                </Link>
              </li>
              <li>|</li>
              <li>
                <Link to="/basico/aula06">
                  <small>Aula 06</small>
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
              src="https://www.youtube.com/embed/GbkJXPF8CtY"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {video == 'aula02pratica' && (
            <iframe
              src="https://www.youtube.com/embed/UWKtH8it5vg"
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
              src="https://www.youtube.com/embed/o9ge8QGC5zU?start=22"
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
              src="https://www.youtube.com/embed/1WOniH21YlE"
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
