import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { TILE_SIZE_IN_PX } from "../gameMechanics/constants";
import { mapTileTerrain, mapTileType, obstacleType } from "../types/types";

export interface ObstaclesState {
  obstacles: obstacleType[];
}

const initialState: ObstaclesState = {
  obstacles: [
    { x: -75, y: 25, width: 375, height: 125, type: mapTileTerrain.rock },
    { x: -100, y: -100, width: 25, height: 175, type: mapTileTerrain.rock },
    { x: 300, y: -100, width: 25, height: 150, type: mapTileTerrain.rock },

    { x: 275, y: 0, width: 25, height: 25, type: mapTileTerrain.rock },
    { x: 225, y: -25, width: 25, height: 25, type: mapTileTerrain.rock },
    { x: 200, y: -50, width: 25, height: 25, type: mapTileTerrain.rock },
    { x: 275, y: -75, width: 25, height: 25, type: mapTileTerrain.rock },
    { x: 225, y: -125, width: 25, height: 25, type: mapTileTerrain.rock },
    { x: 200, y: -150, width: 25, height: 25, type: mapTileTerrain.rock },
    { x: 250, y: -175, width: 25, height: 25, type: mapTileTerrain.rock },
    // Lobby text :D
    // L
    { x: -125, y: -300, width: 25, height: 125, type: mapTileTerrain.rock },
    { x: -125, y: -200, width: 75, height: 25, type: mapTileTerrain.rock },
    // O
    { x: -25, y: -300, width: 25, height: 125, type: mapTileTerrain.rock },
    { x: 0, y: -300, width: 25, height: 25, type: mapTileTerrain.rock },
    { x: 0, y: -200, width: 25, height: 25, type: mapTileTerrain.rock },
    { x: 25, y: -300, width: 25, height: 125, type: mapTileTerrain.rock },
    // B
    { x: 75, y: -300, width: 25, height: 125, type: mapTileTerrain.rock },
    { x: 100, y: -300, width: 25, height: 25, type: mapTileTerrain.rock },
    { x: 100, y: -200, width: 25, height: 25, type: mapTileTerrain.rock },
    { x: 125, y: -275, width: 25, height: 25, type: mapTileTerrain.rock },
    { x: 100, y: -250, width: 25, height: 25, type: mapTileTerrain.rock },
    { x: 125, y: -225, width: 25, height: 25, type: mapTileTerrain.rock },
    // B
    { x: 175, y: -300, width: 25, height: 125, type: mapTileTerrain.rock },
    { x: 200, y: -300, width: 25, height: 25, type: mapTileTerrain.rock },
    { x: 200, y: -200, width: 25, height: 25, type: mapTileTerrain.rock },
    { x: 225, y: -275, width: 25, height: 25, type: mapTileTerrain.rock },
    { x: 200, y: -250, width: 25, height: 25, type: mapTileTerrain.rock },
    { x: 225, y: -225, width: 25, height: 25, type: mapTileTerrain.rock },
    // Y
    { x: 300, y: -250, width: 25, height: 75, type: mapTileTerrain.rock },
    { x: 275, y: -300, width: 25, height: 50, type: mapTileTerrain.rock },
    { x: 325, y: -300, width: 25, height: 50, type: mapTileTerrain.rock },
  ],
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
