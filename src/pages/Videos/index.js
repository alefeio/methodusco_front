import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Prod, Voltar } from './styles';

import icoPlay from '~/assets/ico-play.png';

import api from '~/services/api';

export default function Videos(props) {
  const [video, setVideo] = useState({});

  const urlVideo = props.match.params.id;

  async function loadVideo() {
    const response = await api.get(`videos/${urlVideo}`);

    console.log('video: ', response.data);

    setVideo(response.data);
  }

  useEffect(() => {
    loadVideo();
  }, [urlVideo]);

  return (
    <Container>
      <Voltar>
        <ul>
          <li>
            <Link to="/dashboard">
              <small>Home</small>
            </Link>
          </li>

          {urlVideo !== 'sobre' && urlVideo !== 'avalie' && urlVideo !== 'treinamentoseficazes' &&
          <>
            <li>|</li>
            <li>
              <Link to={`/${video.urlmodulo}`}>
                <small>{video.modulo}</small>
              </Link>
            </li>
          </>
          }

          {urlVideo !== 'sobre' && urlVideo !== 'avalie' && urlVideo !== 'treinamentoseficazes' &&
          <>
            <li>|</li>
            <li>
              <Link to={`/${video.urlmodulo}/aula${video.aula}`}>
                <small>Aula {video.aula}</small>
              </Link>
            </li>
          </>
          }

          <li>|</li>
          <li>
            <small>{video.titulo}</small>
          </li>
        </ul>

        <a href="javascript:history.back()">
          <small>&laquo; Voltar</small>
        </a>
      </Voltar>
      <Prod>
        <h2>{video.titulo}</h2>

        <span>
          <iframe
            src={`https://www.youtube.com/embed/${video.video}?rel=0`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </span>

        {urlVideo == 'sobre' && (
          <>
            <p>Próximo vídeo:</p>
            <h4>
              <Link to="/video/avalie">
                <img src={icoPlay} /> Avalie sua Leitura
              </Link>
            </h4>
          </>
        )}
        {urlVideo == 'avalie' && (
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
