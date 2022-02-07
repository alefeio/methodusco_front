import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';

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
    Voltar,
    Box1,
} from './styles';

export default function Editaraluno(props) {
    const [aluno, setAluno] = useState();
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const id = parseInt(props.match.params.id);

    async function loadAluno() {
        const response = await api.get(`editaraluno/${id}`);

        console.log('aluno: ', response.data);

        setAluno({
            id: response.data.id,
            nome: response.data.nome,
            email: response.data.email,
            password: response.data.password_hash
        });
    }

    async function editAluno(ref, dado) {
        if (ref === "nome") setNome(dado);
        if (ref === "email") setEmail(dado);
        if (ref === "password") setPassword(dado);
    }

    async function alterarAluno() {
        if (nome) {
            await api.put(`usuarios/${aluno.id}`, {
                nome,
            });
        }
        if (email) {
            await api.put(`usuarios/${aluno.id}`, {
                email,
            });
        }
        if (password) {
            await api.put(`usuarios/${aluno.id}`, {
                password,
            });
        }

        alert('Usuário alterado com sucesso!');

        loadAluno();

        setNome('');
        setEmail('');
        setPassword('');
    }

    useEffect(() => {
        loadAluno();
    }, []);

    return (
        <Container>
            <Voltar>
                <ul>
                    <li>
                        <Link to="/dashboard">
                            <small>Home</small>
                        </Link>
                    </li>
                </ul>

                <a href="javascript:history.back()">
                    <small>&laquo; Voltar</small>
                </a>
            </Voltar>
            <Prod>
                <div>
                    <Titulo>
                        Editar Aluno
                    </Titulo>

                    <Box1>
                        {aluno && <span key={aluno.id}>
                            {/* <img src={icoPlay2} /> */}
                            <div>
                                <Titulo3>{aluno.id} - {aluno.nome}</Titulo3>
                                <h4>{aluno.email}</h4>
                                <small>{aluno.password}</small>
                                {/* <small>Criado em: {aluno.updated_at.split('T')[0].split('-').reverse().join('/')}</small> */}
                            </div>
                        </span>}
                    </Box1>
                    <Box1>
                        <p>Nome: <input value={nome} onChange={(e) => editAluno("nome", e.target.value)} /></p>
                        <p>Email: <input value={email} onChange={(e) => editAluno("email", e.target.value)} /></p>
                        <p>Senha: <input value={password} type="password" onChange={(e) => editAluno("password", e.target.value)} /></p>
                        <p><button onClick={() => alterarAluno()}>Alterar</button></p>
                    </Box1>

                </div>
            </Prod>
        </Container>
    );
}
