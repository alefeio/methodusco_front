import React, { useState } from 'react';

import api from '~/services/api';

export async function loadAulas(aula) {
    const response = await api.get(`provas`);

    if(aula === 1 && !response.data.inicioa1) atualizaInicioAula(response.data.id, aula);
    else if(aula === 2 && !response.data.inicioa2) atualizaInicioAula(response.data.id, aula);
    else if(aula === 3 && !response.data.inicioa3) atualizaInicioAula(response.data.id, aula);
    else if(aula === 4 && !response.data.inicioa4) atualizaInicioAula(response.data.id, aula);
    else if(aula === 5 && !response.data.inicioa5) atualizaInicioAula(response.data.id, aula);
    else if(aula === 6 && !response.data.inicioa6) atualizaInicioAula(response.data.id, aula);
    else if(aula === 7 && !response.data.inicioa7) atualizaInicioAula(response.data.id, aula);
    else if(aula === 8 && !response.data.inicioa8) atualizaInicioAula(response.data.id, aula);
    else if(aula === 9 && !response.data.inicioa9) atualizaInicioAula(response.data.id, aula);
    else if(aula === 10 && !response.data.inicioa10) atualizaInicioAula(response.data.id, aula);
    else if(aula === 11 && !response.data.inicioa11) atualizaInicioAula(response.data.id, aula);
    else if(aula === 12 && !response.data.inicioa12) atualizaInicioAula(response.data.id, aula);
    else if(aula === 13 && !response.data.inicioa13) atualizaInicioAula(response.data.id, aula);
    else if(aula === 14 && !response.data.inicioa14) atualizaInicioAula(response.data.id, aula);
    else if(aula === 15 && !response.data.inicioa15) atualizaInicioAula(response.data.id, aula);
    else if(aula === 16 && !response.data.inicioa16) atualizaInicioAula(response.data.id, aula);

    // console.log('Aula: ', response.data);
}

async function atualizaInicioAula(id, aula) {
    // console.log(`provaID: ${id}`);

    if (aula === 1) {
        await api.put(`provasaluno/${id}`, {
            inicioa1: new Date(),
        });
    } else if (aula === 2) {
        await api.put(`provasaluno/${id}`, {
            inicioa2: new Date(),
        });
    } else if (aula === 3) {
        await api.put(`provasaluno/${id}`, {
            inicioa3: new Date(),
        });
    } else if (aula === 4) {
        await api.put(`provasaluno/${id}`, {
            inicioa4: new Date(),
        });
    } else if (aula === 5) {
        await api.put(`provasaluno/${id}`, {
            inicioa5: new Date(),
        });
    } else if (aula === 6) {
        await api.put(`provasaluno/${id}`, {
            inicioa6: new Date(),
        });
    } else if (aula === 7) {
        await api.put(`provasaluno/${id}`, {
            inicioa7: new Date(),
        });
    } else if (aula === 8) {
        await api.put(`provasaluno/${id}`, {
            inicioa8: new Date(),
        });
    } else if (aula === 9) {
        await api.put(`provasaluno/${id}`, {
            inicioa9: new Date(),
        });
    } else if (aula === 10) {
        await api.put(`provasaluno/${id}`, {
            inicioa10: new Date(),
        });
    } else if (aula === 11) {
        await api.put(`provasaluno/${id}`, {
            inicioa11: new Date(),
        });
    } else if (aula === 12) {
        await api.put(`provasaluno/${id}`, {
            inicioa12: new Date(),
        });
    } else if (aula === 13) {
        await api.put(`provasaluno/${id}`, {
            inicioa13: new Date(),
        });
    } else if (aula === 14) {
        await api.put(`provasaluno/${id}`, {
            inicioa14: new Date(),
        });
    } else if (aula === 15) {
        await api.put(`provasaluno/${id}`, {
            inicioa15: new Date(),
        });
    } else if (aula === 16) {
        await api.put(`provasaluno/${id}`, {
            inicioa16: new Date(),
        });
    }
}
