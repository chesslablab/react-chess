import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import boardReducer from './boardReducer';
import historyReducer from './historyReducer';
import createInvitationDialogReducer from './createInvitationDialogReducer';
import enterCodeDialogReducer from './enterCodeDialogReducer';
import modeReducer from './modeReducer';
import serverReducer from './serverReducer';

const rootReducer = combineReducers({
  alert: alertReducer,
  board: boardReducer,
  history: historyReducer,
  createInvitationDialog: createInvitationDialogReducer,
  enterCodeDialog: enterCodeDialogReducer,
  mode: modeReducer,
  server: serverReducer
});

export default rootReducer;
