import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Card, sliceType } from '../../utils/type';

const initialState: sliceType = {
  items: [
    { id: 1, text: 'one' },
    { id: 2, text: 'two' },
    { id: 3, text: 'three' },
    { id: 4, text: 'four' },
    { id: 5, text: 'five' },
  ],
};

export const сardSlice = createSlice({
  name: 'cardList',
  initialState,
  reducers: {
    removeCard: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
      state.items = state.items.filter((item) => item.id !== action.payload);
      // state = state.filter((item) => item.id !== action.payload);
    },
    addCard: (state, action: PayloadAction<Card>) => {
      console.log(state.items);
      state.items.push(action.payload);
    },
  },
});

export const { addCard, removeCard } = сardSlice.actions;

export default сardSlice.reducer;
