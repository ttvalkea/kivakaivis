import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { obstacleType } from "../types/types";

export interface ObstaclesState {
  obstacles: obstacleType[];
}

const initialState: ObstaclesState = {
  obstacles: [
    { x: -60, y: 20, width: 300, height: 100, destructible: false },
    { x: -80, y: -100, width: 20, height: 140, destructible: false },
    { x: 240, y: -100, width: 20, height: 140, destructible: false },
    // Lobby text :D
    // L
    { x: -100, y: -240, width: 20, height: 100, destructible: false },
    { x: -100, y: -160, width: 60, height: 20, destructible: false },
    // O
    { x: -20, y: -240, width: 20, height: 100, destructible: false },
    { x: 0, y: -240, width: 20, height: 20, destructible: false },
    { x: 0, y: -160, width: 20, height: 20, destructible: false },
    { x: 20, y: -240, width: 20, height: 100, destructible: false },
    // B
    { x: 60, y: -240, width: 20, height: 100, destructible: false },
    { x: 80, y: -240, width: 20, height: 20, destructible: false },
    { x: 80, y: -160, width: 20, height: 20, destructible: false },
    { x: 100, y: -220, width: 20, height: 20, destructible: false },
    { x: 80, y: -200, width: 20, height: 20, destructible: false },
    { x: 100, y: -180, width: 20, height: 20, destructible: false },
    // B
    { x: 140, y: -240, width: 20, height: 100, destructible: false },
    { x: 160, y: -240, width: 20, height: 20, destructible: false },
    { x: 160, y: -160, width: 20, height: 20, destructible: false },
    { x: 180, y: -220, width: 20, height: 20, destructible: false },
    { x: 160, y: -200, width: 20, height: 20, destructible: false },
    { x: 180, y: -180, width: 20, height: 20, destructible: false },
    // Y
    { x: 240, y: -200, width: 20, height: 60, destructible: false },
    { x: 220, y: -240, width: 20, height: 40, destructible: false },
    { x: 260, y: -240, width: 20, height: 40, destructible: false },
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
