import {
  BOOK_CREATE,
  BOOK_DELETE,
  BOOK_LOAD,
  BOOK_UPDATE,
  LOADER_DISPLAY_ON,
} from "./types";

export function bookCreate(text, author, id) {
  return {
    type: BOOK_CREATE,
    data: {
      text,
      author,
      id,
    },
  };
}
export function bookUpdate(text, author, id) {
  return {
    type: BOOK_UPDATE,
    data: {
      text,
      author,
      id,
    },
  };
}
export function bookDelete(id) {
  return {
    type: BOOK_DELETE,
    id,
  };
}

export function loaderOn() {
  return {
    type: LOADER_DISPLAY_ON,
  };
}
export function jsonLoad() {
  return async (dispatch) => {
    try {
      dispatch(loaderOn);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments?_limit=10"
      );
      console.log(response, "response");
      const jsonData = await response.json();
      setTimeout(() => {
        dispatch({ type: BOOK_LOAD, data: jsonData });
      }, 1000);
    } catch (e) {
      console.log(e);
    }
  };
}
