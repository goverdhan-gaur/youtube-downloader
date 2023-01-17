
import { getVideoId } from 'is-youtube-url';
import _ from 'lodash';
export function validateURI(url) {  
  const ID = getVideoId(url);
  const idLength = _.get(ID, 'length', 0);
  console.info(idLength)
  return idLength === 11 ? true : false;
}