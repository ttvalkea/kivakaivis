import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface PlayerState {
  x: number;
  y: number;
}

const initialState: PlayerState = {
  x: 0,
  y: 0
};

export const playerSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    moveLeft: (state) => {
      state.x -= 1;
    },
    moveRight: (state) => {
      state.x += 1;
    }
  }
});

export const { moveLeft, moveRight } = playerSlice.actions;

export const selectX = (state: RootState) => state.player.x;
export const selectY = (state: RootState) => state.player.y;

export default playerSlice.reducer;
