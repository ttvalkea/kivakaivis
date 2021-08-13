import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { PLAYER_HEIGHT, PLAYER_WIDTH } from "../gameMechanics/constants";
import { renderedObjectType } from "../types/types";

export interface PlayerState extends renderedObjectType {
  speedX: number;
  speedY: number;
}

const initialState: PlayerState = {
  x: 0,
  y: -2,
  width: PLAYER_WIDTH,
  height: PLAYER_HEIGHT,
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
    setXSpeed: (state, action: PayloadAction<number>) => {
      state.speedX = action.payload;
    },
    setYSpeed: (state, action: PayloadAction<number>) => {
      state.speedY = action.payload;
    },
  },
});

export const { moveLeft, moveRight, moveUp, moveDown, setXSpeed, setYSpeed } =
  playerSlice.actions;

export const selectPlayer = (state: RootState): PlayerState => state.player;

export default playerSlice.reducer;
