import { BOOK_CREATE, BOOK_UPDATE, BOOK_DELETE, BOOK_LOAD } from "./types";

const initialState = {
  books: [],
};

export const bookReducer = (state = initialState, action) => {
  console.log(action, "bookreducer");
  switch (action.type) {
    case BOOK_CREATE:
      return { ...state, books: [...state.books, action.data] };
    case BOOK_UPDATE:
      // eslint-disable-next-line no-case-declarations
      const { data } = action;
      // eslint-disable-next-line no-case-declarations
      const { books } = state;
      // eslint-disable-next-line no-case-declarations
      const itemIndex = books.findIndex((res) => res.id === data.id);

      // eslint-disable-next-line no-case-declarations
      const nextBooks = [
        ...books.slice(0, itemIndex),
        data,
        ...books.slice(itemIndex + 1),
      ];
      return { ...state, books: nextBooks };

    case BOOK_LOAD:
      // eslint-disable-next-line no-case-declarations
      const booksNew = action.data.map((res) => {
        return {
          text: res.name,
          author: res.name,
          id: res.id,
        };
      });
      return { ...state, books: booksNew };

    case BOOK_DELETE:
      return (() => {
        // eslint-disable-next-line no-unused-vars
        const { id } = action;
        // eslint-disable-next-line no-case-declarations
        const { books } = state;
        // eslint-disable-next-line no-case-declarations
        const itemIndex = books.findIndex((res) => res.id === data.id);

        // eslint-disable-next-line no-case-declarations
        const nextBooks = [
          ...books.slice(0, itemIndex),
          ...books.slice(itemIndex + 1),
        ];
        return { ...state, comments: nextBooks };
      })();

    default:
      return state;
  }
};
