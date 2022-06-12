import { BOOK_CREATE, BOOK_DELETE, BOOK_UPDATE } from "./types";

export function bookCreate(text, id) {
  return {
    type: BOOK_CREATE,
    data: {
      text,
      id,
    },
  };
}
export function bookUpdate(text, id) {
  return {
    type: BOOK_UPDATE,
    data: {
      text,
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
