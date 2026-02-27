import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_URL_API;

const connectedClient = axios.create({
  baseURL
});

export default connectedClient;