import axios from 'axios';

export default axios.create({
  baseURL:
    'https://intense-mesa-62220.herokuapp.com/https://data.mongodb-api.com/app/data-xeujf/endpoint/data/beta/action',
  headers: {
    'api-key': process.env.REACT_APP_SCOUTER_API_KEY,
  },
});
//'https://intense-mesa-62220.herokuapp.com/http://sofifa.com/api/player/suggestion?gender=0&hl=en-US&term=messi',
