import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('fleek/fetchData', async params => {
    let api = `https://rickandmortyapi.com/api/character/?page=${params.currentPage}&name=${params.search}&status=${params.status}&gender=${params.gender}`;
    const response = await fetch(api)
        .then((res) => res.json());
    const data = await response;
    return data === undefined ? null : data;    
});


const initialState = {
    fetchedData: [],
    pageNumber: 1,
    status: " ",
    gender: " ",
    search: " "
};

const fleekSlice = createSlice({
  name: "fleek",
  initialState,
  reducers: {
    setFleekSearch: (state, action) => {
        state.search = action.payload;
    },
    setFleekStatus: (state, action) => {
        state.status = action.payload;
    },
    setFleekGender: (state, action) => {
        state.gender = action.payload;
    },
    setFleekPageNumber: (state, action) => {
        state.pageNumber = action.payload;
    }

  },
  extraReducers: {
      [fetchData.fulfilled]: (state, action) => {
        state.fetchedData = action.payload;
      }
  },
});

export const {setFleekSearch, setFleekStatus, setFleekGender, setFleekPageNumber } = fleekSlice.actions;

export default fleekSlice.reducer;
