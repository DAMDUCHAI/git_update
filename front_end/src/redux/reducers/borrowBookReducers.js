import { GET_ALL_BOOK_BY_READER } from "../constant/libraryManager/borrowConstants";
import { UPDATE_CODE_CARD,UPDATE_BOOK_CARD } from "../constant/libraryManager/bookConstant";
import {GET_ALL_BOOK_BY_ACOUNT } from "../constant/libraryManager/borrowConstants";
const stateDefault = {
  ListBookByReader: [],
  ListBorrowByAcount:[],
  readerBorrow: "",
  SoLgMuonMax: "",
  countBook: "",
  MaFieuSach: "",
};
const borrowBookReducers = (state = stateDefault, action) => {
  switch (action.type) {


    // eslint-disable-next-line no-duplicate-case
    case GET_ALL_BOOK_BY_READER: {
      state.ListBookByReader = action.ListBookByReader;
      state.readerBorrow = action.readerBorrow;

      return { ...state };
    }
    case GET_ALL_BOOK_BY_ACOUNT: {
      state.ListBorrowByAcount = action.ListBorrowByAcount;
      state.ListBorrowByAcount=[...state.ListBorrowByAcount]

      return { ...state };
    }
    case UPDATE_CODE_CARD: {
      state.MaFieuSach = action.MaFieuSach;
      state.SoLgMuonMax = action.SoLgMuonMax;

      return { ...state };
    }

    case UPDATE_BOOK_CARD: {
      state.countBook = action.countBook;
    

      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default borrowBookReducers;
