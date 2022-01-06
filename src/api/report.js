import axios from 'axios';

const baseURL = axios.create({
  baseURL:
    'https://intense-mesa-62220.herokuapp.com/https://data.mongodb-api.com/app/data-xeujf/endpoint/data/beta/action',
  headers: {
    'api-key': process.env.REACT_APP_SCOUTER_API_KEY,
  },
});

export default class api {
  static get = async (id) => {
    return await baseURL.post('/find', {
      collection: 'reports',
      database: 'myFirstDatabase',
      dataSource: 'Cluster0',
      filter: { player_api_id: id },
    });
  };

  static put = async (field, value, id) => {
    let obj = {};
    obj[field] = value;
    return await baseURL.post('/update', {
      collection: 'reports',
      database: 'myFirstDatabase',
      dataSource: 'Cluster0',
      filter: { player_api_id: id },
      update: { $set: obj },
      upsert: true,
    });
  };

  static post = async (field, value, id) => {
    let obj = {};
    obj[field] = value;
    return await baseURL.post('/update', {
      collection: 'reports',
      database: 'myFirstDatabase',
      dataSource: 'Cluster0',
      filter: { player_api_id: id },
      update: { $set: obj },
      upsert: true,
    });
  };

  static delete = async (id, field) => {
    if (!field) {
      return await baseURL.post('/delete', {
        collection: 'reports',
        database: 'myFirstDatabase',
        dataSource: 'Cluster0',
        filter: { player_api_id: id },
      });
    }
    let obj = {};
    obj[field] = '';
    return await baseURL.post('/update', {
      collection: 'reports',
      database: 'myFirstDatabase',
      dataSource: 'Cluster0',
      filter: { player_api_id: id },
      update: { $unset: obj },
      upsert: true,
    });
  };
}
