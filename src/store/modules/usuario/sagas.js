import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  updatePerfilSucesso,
  updateProvaSucesso,
  updatePerfilFalha,
  updateEmProvaSucesso,
  updateRespostaSucesso,
  updateFimProvaSucesso,
  updateTesteInicialSucesso,
  updateQtdTestesSucesso,
} from './actions';

export function* updatePerfil({ payload }) {
  try {
    const { nome, email, img_id, ...rest } = payload.data;

    const perfil = Object.assign(
      { nome, email, img_id },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, 'usuarios', perfil);

    toast.success('Perfil atualizado com sucesso!');

    yield put(updatePerfilSucesso(response.data));
  } catch (error) {
    toast.error('Erro ao atualizar o perfil. Tente novamente!');
    yield put(updatePerfilFalha());
  }
}

export function* updateProva() {
  const response = yield call(api.get, 'provas');

  yield put(updateProvaSucesso(response.data));
}

export function* updateEmProva() {
  yield put(updateEmProvaSucesso());
}

export function* updateFimProva() {
  yield put(updateFimProvaSucesso());
}

export function* updateResposta({ payload }) {
  yield put(updateRespostaSucesso(payload.data));
}

export function* updateTesteInicial({ payload }) {
  yield put(updateTesteInicialSucesso(payload.data));
}

export function* updateQtdTestes() {
  const prova = yield call(api.put, 'provas');
  const response = yield call(api.put, 'testealuno', prova.id);

  // console.log('teste sagas');

  if (response.data.length >= 19) {
    yield call(api.delete, 'provasaluno', prova.id);
    yield put(updateQtdTestesSucesso(0));
  } else {
    yield put(updateQtdTestesSucesso(response.data.length));
  }

}

export default all([
  takeLatest('@usuario/UPDATE_PERFIL_REQUEST', updatePerfil),
  takeLatest('@usuario/UPDATE_PROVA_REQUEST', updateProva),
  takeLatest('@usuario/UPDATE_EMPROVA_REQUEST', updateEmProva),
  takeLatest('@usuario/UPDATE_FIMPROVA_REQUEST', updateFimProva),
  takeLatest('@usuario/UPDATE_RESPOSTA_REQUEST', updateResposta),
  takeLatest('@usuario/UPDATE_TESTE_INICIAL_REQUEST', updateTesteInicial),
  takeLatest('@usuario/UPDATE_QTD_TESTES_REQUEST', updateQtdTestes),
]);
