import React, { useState, useEffect } from 'react';

import api from '~/services/api';

async function Verificatestes() {
    await api.post(`provas`);

    const prova = await api.get(`provas`);

    console.log('Prova: ', prova.data);

    if (prova.data) {
        const response = await api.put(`testealuno/${prova.data.id}`);
        console.log('Qtd Testes: ', response.data.length);

        if (response.data.length >= 2) {
            await api.delete(`provasaluno/${prova.data.id}`);
            await api.post(`provas`);
        };
    } else {
        await api.post(`provas`);
    }
}

export default Verificatestes;