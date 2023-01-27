import axios from 'axios'
const baseUrl = 'https://rickandmortyapi.com/api/';
const characterUrl = baseUrl+'character/2';

export const getData = () => {
    const data = axios.get(characterUrl)
    return data
}