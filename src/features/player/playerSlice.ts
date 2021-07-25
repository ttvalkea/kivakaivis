import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import renderedObject from "../../classes/renderedObject";

export interface PlayerState extends renderedObject {}

const initialState: PlayerState = {
  x: 0,
  y: 0,
  width: 20,
  height: 20,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    moveLeft: (state) => {
      state.x -= 1;
    },
    moveRight: (state) => {
      state.x += 1;
    },
    moveUp: (state) => {
      state.y -= 1;
    },
    moveDown: (state) => {
      state.y += 1;
    },
  },
});

export const { moveLeft, moveRight, moveUp, moveDown } = playerSlice.actions;

export const selectPlayer = (state: RootState): renderedObject => state.player;

export default playerSlice.reducer;
