import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import renderedObject from "../../classes/renderedObject";
import { EMIT_NAME_UPDATE_PLAYER_POSITION } from "../gameMechanics/constants";

export interface PlayerState extends renderedObject {
  speedX: number;
  speedY: number;
  canJump: boolean;
}

const initialState: PlayerState = {
  x: 0,
  y: 0,
  width: 20,
  height: 20,
  speedX: 0,
  speedY: 0,
  canJump: true, // If canJump is false, the player can't jump. When the player makes contact with the ground, this is set to true. Player must also be touching the ground in order to jump.
};

const emitPlayerPositionUpdate = (emitFunction: Function, state: any) => {
  if (emitFunction) {
    emitFunction(EMIT_NAME_UPDATE_PLAYER_POSITION, { x: state.x, y: state.y });
  } else {
    console.log(
      `Error trying to emit ${EMIT_NAME_UPDATE_PLAYER_POSITION}: No emit function`
    );
  }
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    moveLeft: (state, action: PayloadAction<Function>) => {
      state.x -= 1;
      emitPlayerPositionUpdate(action.payload, state);
    },
    moveRight: (state, action: PayloadAction<Function>) => {
      state.x += 1;
      emitPlayerPositionUpdate(action.payload, state);
    },
    moveUp: (state, action: PayloadAction<Function>) => {
      state.y -= 1;
      emitPlayerPositionUpdate(action.payload, state);
    },
    moveDown: (state, action: PayloadAction<Function>) => {
      state.y += 1;
      emitPlayerPositionUpdate(action.payload, state);
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
