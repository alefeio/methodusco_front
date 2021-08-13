import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  updateProvaRequest,
  // updateEmProvaRequest,
  updateFimProvaRequest,
} from '~/store/modules/usuario/actions';

import icoPlay from '~/assets/ico-play.png';
import icoTeste from '~/assets/ico-teste.png';
import icoPlay2 from '~/assets/ico-play2.png';
import icoPlay3 from '~/assets/ico-play3.png';
import icoGrafico from '~/assets/ico-grafico.png';

import {
  Container,
  Prod,
  ModUl,
  ModUl2,
  Titulo,
  Titulo2,
  Titulo3,
  Titulo4,
  Default,
  Danger,
  Ladodireito,
  Box1,
} from './styles';

export default function AdminVideos() {
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState();

  async function loadVideos() {
    const response = await api.get("videos");

    console.log('videos: ', response.data);

    setVideos(response.data);
  }

  async function editarVideo(nVideo) {
    console.log(nVideo);

    await api.put(`videos/${nVideo}`, {
      video
    });
    loadVideos();

    alert('Vídeo atualizado com sucesso!');

    loadVideos();
  }

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <Container>
      <Prod>
        <div>
          <Titulo>
            Administrar Vídeos
          </Titulo>

          <Box1>
            {videos.map((v) => (
              <span key={v.id}>
                <iframe
                  src={`https://www.youtube.com/embed/${v.video}?rel=0`}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <div>
                  <Titulo3>Título: {v.titulo}</Titulo3>
                  <p>Módulo: {v.modulo}</p>
                  <p>Aula: {v.aula}</p>
                  <p>URL: {v.urlvideo}</p>
                  <p>
                    Link vídeo:
                    <input
                      type="text"
                      placeholder={v.video}
                      onChange={(e) => setVideo(e.target.value)}
                    />
                    <button onClick={() => {editarVideo(v.id); setVideo()}}>Alterar</button>
                  </p>
                </div>
              </span>
            ))}
          </Box1>

        </div>
      </Prod>
    </Container>
  );
}
