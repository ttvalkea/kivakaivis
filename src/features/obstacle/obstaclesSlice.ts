import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import obstacleObject from "../../classes/obstacleObject";

export interface ObstaclesState {
  obstacles: obstacleObject[];
}

const initialState: ObstaclesState = {
  obstacles: [
    { x: 0, y: 20, width: 300, height: 100 },
    { x: 250, y: 75, width: 50, height: 10 },
    { x: 200, y: -200, width: 450, height: 25 },
    { x: 300, y: -100, width: 450, height: 25 },
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
