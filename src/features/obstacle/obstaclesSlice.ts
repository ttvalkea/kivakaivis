import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import obstacleObject from "../../classes/obstacleObject";

export interface ObstaclesState {
  obstacles: obstacleObject[];
}

const initialState: ObstaclesState = {
  obstacles: [
    { x: -60, y: 20, width: 300, height: 100 },
    { x: -80, y: -100, width: 20, height: 140 },
    { x: 240, y: -100, width: 20, height: 140 },
    // Lobby text :D
    // L
    { x: -100, y: -240, width: 20, height: 100 },
    { x: -100, y: -160, width: 60, height: 20 },
    // O
    { x: -20, y: -240, width: 20, height: 100 },
    { x: 0, y: -240, width: 20, height: 20 },
    { x: 0, y: -160, width: 20, height: 20 },
    { x: 20, y: -240, width: 20, height: 100 },
    // B
    { x: 60, y: -240, width: 20, height: 100 },
    { x: 80, y: -240, width: 20, height: 20 },
    { x: 80, y: -160, width: 20, height: 20 },
    { x: 100, y: -220, width: 20, height: 20 },
    { x: 80, y: -200, width: 20, height: 20 },
    { x: 100, y: -180, width: 20, height: 20 },
    // B
    { x: 140, y: -240, width: 20, height: 100 },
    { x: 160, y: -240, width: 20, height: 20 },
    { x: 160, y: -160, width: 20, height: 20 },
    { x: 180, y: -220, width: 20, height: 20 },
    { x: 160, y: -200, width: 20, height: 20 },
    { x: 180, y: -180, width: 20, height: 20 },
    // Y
    { x: 240, y: -220, width: 20, height: 80 },
    { x: 220, y: -240, width: 20, height: 20 },
    { x: 260, y: -240, width: 20, height: 20 },
  ],
};

export const obstaclesSlice = createSlice({
  name: "obstacles",
  initialState,
  reducers: {},
});

export const selectObstacles = (state: RootState): obstacleObject[] =>
  state.obstacles.obstacles;

export default obstaclesSlice.reducer;
