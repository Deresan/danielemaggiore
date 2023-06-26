import { createSlice } from '@reduxjs/toolkit';

export const langReducer = createSlice({
  name: 'lang',
  initialState: {
    lang: localStorage.getItem('lang') || 'it'
  },
  reducers: {
    setIt: (state) => {
      localStorage.setItem('lang', 'it')
      state.lang = 'it'
    },
    setEn: (state) => {
      localStorage.setItem('lang', 'en')
      state.lang = 'en'
    },
  }
});

export const { setIt, setEn } = langReducer.actions;

export default langReducer.reducer;