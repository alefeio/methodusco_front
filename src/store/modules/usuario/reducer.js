import produce from 'immer';

const INITIAL_STATE = {
  perfil: null,
  prova: null,
  emProva: false,
  resposta: [],
};

export default function usuario(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/LOGIN_SUCESSO': {
        draft.perfil = action.payload.usuario;
        draft.resposta = [];
        break;
      }
      case '@usuario/UPDATE_PERFIL_SUCESSO': {
        draft.perfil = action.payload.perfil;
        break;
      }
      case '@usuario/UPDATE_PROVA_SUCESSO': {
        draft.prova = action.payload.prova;
        break;
      }
      case '@usuario/UPDATE_EMPROVA_SUCESSO': {
        draft.emProva = !draft.emProva;
        break;
      }
      case '@usuario/UPDATE_FIMPROVA_SUCESSO': {
        draft.prova = null;
        draft.emProva = false;
        draft.resposta = [];
        break;
      }
      case '@usuario/UPDATE_RESPOSTA_SUCESSO': {
        draft.resposta = [...draft.resposta, action.payload.resposta];
        break;
      }
      case '@auth/LOGOUT': {
        draft.perfil = null;
        draft.prova = null;
        draft.emProva = false;
        draft.resposta = [];
        break;
      }
      default:
    }
  });
}
