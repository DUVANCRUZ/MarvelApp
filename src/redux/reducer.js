import { GET_COMICS, GET_COMICS_BY_NAME, GET_COMICS_ID, GET_CHARACTER_COMICS } from "./actiontypes";

const initialState = {
  comics: [],
  allComics: [],
  detail: [],
  characters: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMICS:
      return {
        ...state,
        comics: action.payload,
        allComics: action.payload,
      };
    case GET_COMICS_BY_NAME:
      const searchTerm = action.payload.toLowerCase();
      if (searchTerm === "") {
        // Si la búsqueda está vacía, mostrar todos los cómics
        return {
          ...state,
          comics: state.allComics,
        };
      } else {
        /* Filtrar cómics por nombre si hay un término de búsqueda, se utiliza el toLowerCase()
        para buscar independientemete si el usuario utlizo mayusculas o minisculas y se utiliza 
        includes() para que se busquen todos los elementos que concidn con lo que el usuario ponga
        en la searchBar*/
        const filteredComics = state.allComics.filter((comic) =>
          comic.title.toLowerCase().includes(searchTerm)
        );
        return {
          ...state,
          comics: filteredComics,
        };
      }
    case GET_COMICS_ID:
        return {
          ...state,
          detail: action.payload,
        };
    case GET_CHARACTER_COMICS:
        return {
            ...state,
            characters: action.payload,
        };
    default:
      return { ...state };
  }
};

export default rootReducer;
