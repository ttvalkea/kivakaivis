import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { TILE_SIZE_IN_PX } from "../gameMechanics/constants";
import { mapTileType, obstacleType } from "../types/types";

export interface ObstaclesState {
  obstacles: obstacleType[];
}

const initialState: ObstaclesState = {
  obstacles: [],
};

export const obstaclesSlice = createSlice({
  name: "obstacles",
  initialState,
  reducers: {
    setObstacles: (state, action: PayloadAction<mapTileType[]>) => {
      const obstacles: obstacleType[] = [];
      for (let index = 0; index < action.payload.length; index++) {
        const mapTile = action.payload[index];
        obstacles.push({
          x: mapTile.gridX * TILE_SIZE_IN_PX,
          y: mapTile.gridY * TILE_SIZE_IN_PX,
          height: TILE_SIZE_IN_PX,
          width: TILE_SIZE_IN_PX,
          type: mapTile.type,
        });
      }

      state.obstacles = obstacles;
    },
  },
});

export const { setObstacles } = obstaclesSlice.actions;

export const selectObstacles = (state: RootState): obstacleType[] =>
  state.obstacles.obstacles;

export default obstaclesSlice.reducer;
