import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { obstacleType } from "../types/types";

export interface ObstaclesState {
  obstacles: obstacleType[];
}

const initialState: ObstaclesState = {
  obstacles: [
    { x: -75, y: 25, width: 375, height: 125, destructible: false },
    { x: -100, y: -100, width: 25, height: 175, destructible: false },
    { x: 300, y: -100, width: 25, height: 150, destructible: false },

    { x: 275, y: 0, width: 25, height: 25, destructible: false },
    { x: 225, y: -25, width: 25, height: 25, destructible: false },
    { x: 200, y: -50, width: 25, height: 25, destructible: false },
    { x: 275, y: -75, width: 25, height: 25, destructible: false },
    { x: 225, y: -125, width: 25, height: 25, destructible: false },
    { x: 200, y: -150, width: 25, height: 25, destructible: false },
    { x: 250, y: -175, width: 25, height: 25, destructible: false },
    // Lobby text :D
    // L
    { x: -125, y: -300, width: 25, height: 125, destructible: false },
    { x: -125, y: -200, width: 75, height: 25, destructible: false },
    // O
    { x: -25, y: -300, width: 25, height: 125, destructible: false },
    { x: 0, y: -300, width: 25, height: 25, destructible: false },
    { x: 0, y: -200, width: 25, height: 25, destructible: false },
    { x: 25, y: -300, width: 25, height: 125, destructible: false },
    // B
    { x: 75, y: -300, width: 25, height: 125, destructible: false },
    { x: 100, y: -300, width: 25, height: 25, destructible: false },
    { x: 100, y: -200, width: 25, height: 25, destructible: false },
    { x: 125, y: -275, width: 25, height: 25, destructible: false },
    { x: 100, y: -250, width: 25, height: 25, destructible: false },
    { x: 125, y: -225, width: 25, height: 25, destructible: false },
    // B
    { x: 175, y: -300, width: 25, height: 125, destructible: false },
    { x: 200, y: -300, width: 25, height: 25, destructible: false },
    { x: 200, y: -200, width: 25, height: 25, destructible: false },
    { x: 225, y: -275, width: 25, height: 25, destructible: false },
    { x: 200, y: -250, width: 25, height: 25, destructible: false },
    { x: 225, y: -225, width: 25, height: 25, destructible: false },
    // Y
    { x: 300, y: -250, width: 25, height: 75, destructible: false },
    { x: 275, y: -300, width: 25, height: 50, destructible: false },
    { x: 325, y: -300, width: 25, height: 50, destructible: false },
  ],
};

export const obstaclesSlice = createSlice({
  name: "obstacles",
  initialState,
  reducers: {
    setObstacles: (state, action: PayloadAction<obstacleType[]>) => {
      state.obstacles = action.payload;
    },
  },
});

export const { setObstacles } = obstaclesSlice.actions;

export const selectObstacles = (state: RootState): obstacleType[] =>
  state.obstacles.obstacles;

export default obstaclesSlice.reducer;
