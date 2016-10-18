import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = 'http://localhost:3090';

export function contactUs({ email, title, content }) {
  return function(dispatch) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/contact`, { email, title, content })
  }
}
