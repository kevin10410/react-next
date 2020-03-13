import axios from 'axios';

export const fetchShowsByName = name => axios
  .get(`https://api.tvmaze.com/search/shows?q=${name}`);

export const fetchShowDetailById = id => axios
  .get(`https://api.tvmaze.com/shows/${id}`);
