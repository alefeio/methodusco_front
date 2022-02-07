import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '~/services/api';

import icoConcluido from '~/assets/ico-concluido.jpg';

export default function Testerealizado() {
    const [prova, setProva] = useState();

    async function loadProvas() {
        const response = await api.get(`provas`);

        // console.log('Prova: ', response.data);

        setProva(response.data);
    }


    useEffect(() => {
        loadProvas();
    }, []);

    return (
        <>
            <h2>
                Teste Concluído! <img src={icoConcluido} />
            </h2>
            <br />
            <p>
                Clique no botão abaixo para ver o seu resultado. Este teste tem
                por objetivo medir a velocidade (Palavras Lidas por Minuto -
                PLM), o quanto compreende (Percentual de Compreensão e Retenção
                - PCR) e quantas (Palavras Compreende por Minuto - PCM).
            </p>
            <br />
            <p>Se quiser repetir este teste, acesse o <strong><Link to={`/grafico/${prova && prova.id}`}>Gráfico de Evolução</Link></strong> e finalize a <strong>Prova em andamento</strong>.</p>
        </>
    );
}
