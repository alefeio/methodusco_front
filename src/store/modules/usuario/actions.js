export function updatePerfilRequest(data) {
  return {
    type: '@usuario/UPDATE_PERFIL_REQUEST',
    payload: { data },
  };
}

export function updateProvaRequest(data) {
  return {
    type: '@usuario/UPDATE_PROVA_REQUEST',
    payload: { data },
  };
}

export function updateEmProvaRequest() {
  return {
    type: '@usuario/UPDATE_EMPROVA_REQUEST',
  };
}

export function updateFimProvaRequest() {
  return {
    type: '@usuario/UPDATE_FIMPROVA_REQUEST',
  };
}

export function updateRespostaRequest(data) {
  return {
    type: '@usuario/UPDATE_RESPOSTA_REQUEST',
    payload: { data },
  };
}

export function updateTesteInicialRequest(data) {
  return {
    type: '@usuario/UPDATE_TESTE_INICIAL_REQUEST',
    payload: { data },
  };
}

export function updatePerfilSucesso(perfil) {
  return {
    type: '@usuario/UPDATE_PERFIL_SUCESSO',
    payload: { perfil },
  };
}

export function updateProvaSucesso(prova) {
  return {
    type: '@usuario/UPDATE_PROVA_SUCESSO',
    payload: { prova },
  };
}

export function updateEmProvaSucesso() {
  return {
    type: '@usuario/UPDATE_EMPROVA_SUCESSO',
  };
}

export function updateFimProvaSucesso() {
  return {
    type: '@usuario/UPDATE_FIMPROVA_SUCESSO',
  };
}

export function updateRespostaSucesso(resposta) {
  return {
    type: '@usuario/UPDATE_RESPOSTA_SUCESSO',
    payload: { resposta },
  };
}

export function updateTesteInicialSucesso(data) {
  return {
    type: '@usuario/UPDATE_TESTE_INICIAL_SUCESSO',
    payload: { data },
  };
}

export function updatePerfilFalha() {
  return {
    type: '@usuario/UPDATE_PERFIL_FALHA',
  };
}
