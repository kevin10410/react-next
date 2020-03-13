import axios from 'axios';

export const fetchShowsByName = name => axios
  .get(`https://api.tvmaze.com/search/shows?q=${name}`);
