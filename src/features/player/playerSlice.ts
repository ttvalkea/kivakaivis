import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { renderedObjectType } from "../types/types";

export interface PlayerState extends renderedObjectType {
  speedX: number;
  speedY: number;
  canJump: boolean;
}

const initialState: PlayerState = {
  x: 0,
  y: -2,
  width: 20,
  height: 20,
  speedX: 0,
  speedY: 0,
  canJump: true, // If canJump is false, the player can't jump. When the player makes contact with the ground, this is set to true. Player must also be touching the ground in order to jump.
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
    setCanJump: (state, action: PayloadAction<boolean>) => {
      state.canJump = action.payload;
    },
  },
});

export const {
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
  setXSpeed,
  setYSpeed,
  setCanJump,
} = playerSlice.actions;

export const selectPlayer = (state: RootState): PlayerState => state.player;

export default playerSlice.reducer;
