import CONF from '@/views/page-one/conf';
import API from '@/public/utils/api';

const M = CONF['part1'];

if (process.env.STATS === 'dev') M.MOCK ? require('./mock') : '';

export default {
  get: (params) => {
    return new Promise((resolve, reject) => {
      API.get(M['API']['GET'], params).then((data) => {
        resolve(data);
      });
    });
  }
}
