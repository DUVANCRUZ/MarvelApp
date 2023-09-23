import axios from "axios";


import { GET_COMICS, GET_COMICS_BY_NAME, GET_COMICS_ID, GET_CHARACTER_COMICS } from "./actiontypes";

//credenciales de la api
const urlBase= "https://gateway.marvel.com";
const apiKey = "900b0248670ee5819b02ce85dfe0fba7";
const hash= "f901268a7181cf5f1ef2c0102ba47143";

//obtenemos 100 personajes 
export const getComics = () => {
  return async function(dispatch) {
    try {
      const comicsData = await axios.get(`${urlBase}/v1/public/comics?limit=100&ts=1&apikey=${apiKey}&hash=${hash}`);
      const comics = await comicsData.data.data.results;
      
      dispatch({
        type: GET_COMICS, 
        payload: comics
      })
    } catch (error) {
      console.log(error)
    }
  }
}

//Hacer la logica para buscar comics por nombre en el searchBar
export const getComicByName=(payload)=>{
      return{
          type: GET_COMICS_BY_NAME,
          payload
        } 
}

//Traer un comic por id de la api 
export const getComicById = (id) => {

  return async function(dispatch) {
    
    try {
      const comicData = await axios.get(`${urlBase}/v1/public/comics/${id}?ts=1&apikey=${apiKey}&hash=${hash}`);
      const comic = await comicData.data.data.results;
      console.log(comic)
      dispatch({
        type: GET_COMICS_ID, 
        payload: comic
      })
    } catch (error) {
      console.log(error)
    }
  }
}

//logica para traer los personajes del comiv
export const getCharacterByComic = (id) => {
  return async function(dispatch) {
    try {
      const charactersData = await axios.get(`${urlBase}/v1/public/comics/${id}/characters?ts=1&apikey=${apiKey}&hash=${hash}`);
      const character = await charactersData.data.data.results;
    
      dispatch({
        type: GET_CHARACTER_COMICS, 
        payload: character
      })
    } catch (error) {
      console.log(error)
    }
  }
}


