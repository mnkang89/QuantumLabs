import axios from 'axios';

export const SEND_MAIL = 'SEND_MAIL';

const ROOT_URL = 'http://localhost:3090';

export function sendMail(props) {
  console.log('action creator success');
  const request = axios.post(`${ROOT_URL}/posts`, props);

  return {
    type: SEND_MAIL,
    payload: request
  };
}
