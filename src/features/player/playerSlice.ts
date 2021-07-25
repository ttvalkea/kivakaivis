import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import renderedObject from "../../classes/renderedObject";

export interface PlayerState extends renderedObject {
  speedX: number;
  speedY: number;
}

const initialState: PlayerState = {
  x: 0,
  y: 0,
  width: 20,
  height: 20,
  speedX: 0,
  speedY: 0,
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
    addXSpeed: (state, action: PayloadAction<number>) => {
      state.speedX += action.payload;
    },
    addYSpeed: (state, action: PayloadAction<number>) => {
      state.speedY += action.payload;
    },
  },
});

export const { moveLeft, moveRight, moveUp, moveDown, addXSpeed, addYSpeed } =
  playerSlice.actions;

export const selectPlayer = (state: RootState): PlayerState => state.player;

export default playerSlice.reducer;
