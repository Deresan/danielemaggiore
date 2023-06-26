import { createSlice } from '@reduxjs/toolkit';

export const navigationReducer = createSlice({
  name: 'navigation',
  initialState: {
    active: null,
  },
  reducers: {
    setNav: (state, { payload }) => {
      state.active = payload;
    },
  },
});

export const { setNav, setRef, setScrollbar } = navigationReducer.actions;

export default navigationReducer.reducer;