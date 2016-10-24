import { SEND_MAIL } from '../actions/index';

const INITIAL_STATE={};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SEND_MAIL:
      return state;
    default:
      return state;
  }
}
