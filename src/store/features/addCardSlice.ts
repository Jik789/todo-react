import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Card } from '../../utils/type';

const initialState: Card[] = [
  { id: 1, text: 'one' },
  { id: 2, text: 'two' },
  { id: 3, text: 'three' },
  { id: 4, text: 'four' },
  { id: 5, text: 'five' },
];

export const AddCardSlice = createSlice({
  name: 'addCardToList',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      state.push(action.payload);
    },
  },
});

export const { addCard } = AddCardSlice.actions;

export default AddCardSlice.reducer;
