import { mapTileTerrain, mapTileType } from "../types/types";

export const getLobbyMapTiles = (): mapTileType[] => {
  const tiles: mapTileType[] = [
    {
      gridX: 11,
      gridY: -10,
      type: mapTileTerrain.indestructible,
      isDiscovered: true,
      widthInTiles: 1,
      heightInTiles: 1,
    },
    {
      gridX: 9,
      gridY: -11,
      type: mapTileTerrain.indestructible,
      isDiscovered: true,
      widthInTiles: 1,
      heightInTiles: 1,
    },
    {
      gridX: 8,
      gridY: -12,
      type: mapTileTerrain.indestructible,
      isDiscovered: true,
      widthInTiles: 1,
      heightInTiles: 1,
    },
    {
      gridX: 11,
      gridY: -13,
      type: mapTileTerrain.indestructible,
      isDiscovered: true,
      widthInTiles: 1,
      heightInTiles: 1,
    },
    {
      gridX: 9,
      gridY: -15,
      type: mapTileTerrain.indestructible,
      isDiscovered: true,
      widthInTiles: 1,
      heightInTiles: 1,
    },
    {
      gridX: 8,
      gridY: -16,
      type: mapTileTerrain.indestructible,
      isDiscovered: true,
      widthInTiles: 1,
      heightInTiles: 1,
    },
    {
      gridX: 10,
      gridY: -17,
      type: mapTileTerrain.indestructible,
      isDiscovered: true,
      widthInTiles: 1,
      heightInTiles: 1,
    },
  ];

  tiles.push({
    gridX: -3,
    gridY: -9,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
    widthInTiles: 14,
    heightInTiles: 1,
  });

  tiles.push({
    gridX: -4,
    gridY: -14,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
    widthInTiles: 1,
    heightInTiles: 5,
  });
  tiles.push({
    gridX: 12,
    gridY: -14,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
    widthInTiles: 1,
    heightInTiles: 4,
  });

  // Lobby text :D
  // L
  for (let index = 0; index < 5; index++) {
    const tile = {
      gridX: -5,
      gridY: -22 + index,
      type: mapTileTerrain.indestructible,
      isDiscovered: true,
      widthInTiles: 1,
      heightInTiles: 1,
    };
    tiles.push(tile);
  }

  for (let index = 0; index < 3; index++) {
    const tile = {
      gridX: -5 + index,
      gridY: -18,
      type: mapTileTerrain.indestructible,
      isDiscovered: true,
      widthInTiles: 1,
      heightInTiles: 1,
    };
    tiles.push(tile);
  }

  // O
  for (let index = 0; index < 5; index++) {
    const tile = {
      gridX: -1,
      gridY: -22 + index,
      type: mapTileTerrain.indestructible,
      isDiscovered: true,
      widthInTiles: 1,
      heightInTiles: 1,
    };
    tiles.push(tile);
  }
  tiles.push({
    gridX: 0,
    gridY: -22,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
    widthInTiles: 1,
    heightInTiles: 1,
  });
  tiles.push({
    gridX: 0,
    gridY: -18,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
    widthInTiles: 1,
    heightInTiles: 1,
  });
  for (let index = 0; index < 5; index++) {
    const tile = {
      gridX: 1,
      gridY: -22 + index,
      type: mapTileTerrain.indestructible,
      isDiscovered: true,
      widthInTiles: 1,
      heightInTiles: 1,
    };
    tiles.push(tile);
  }

  // B
  for (let index = 0; index < 5; index++) {
    const tile = {
      gridX: 3,
      gridY: -22 + index,
      type: mapTileTerrain.indestructible,
      isDiscovered: true,
      widthInTiles: 1,
      heightInTiles: 1,
    };
    tiles.push(tile);
  }

  tiles.push({
    gridX: 4,
    gridY: -22,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
    widthInTiles: 1,
    heightInTiles: 1,
  });
  tiles.push({
    gridX: 4,
    gridY: -18,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
    widthInTiles: 1,
    heightInTiles: 1,
  });
  tiles.push({
    gridX: 5,
    gridY: -21,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
    widthInTiles: 1,
    heightInTiles: 1,
  });
  tiles.push({
    gridX: 4,
    gridY: -20,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
    widthInTiles: 1,
    heightInTiles: 1,
  });
  tiles.push({
    gridX: 5,
    gridY: -19,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
    widthInTiles: 1,
    heightInTiles: 1,
  });

  // B
  for (let index = 0; index < 5; index++) {
    const tile = {
      gridX: 7,
      gridY: -22 + index,
      type: mapTileTerrain.indestructible,
      isDiscovered: true,
      widthInTiles: 1,
      heightInTiles: 1,
    };
    tiles.push(tile);
  }

  tiles.push({
    gridX: 8,
    gridY: -22,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
    widthInTiles: 1,
    heightInTiles: 1,
  });
  tiles.push({
    gridX: 8,
    gridY: -18,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
    widthInTiles: 1,
    heightInTiles: 1,
  });
  tiles.push({
    gridX: 9,
    gridY: -21,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
    widthInTiles: 1,
    heightInTiles: 1,
  });
  tiles.push({
    gridX: 8,
    gridY: -20,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
    widthInTiles: 1,
    heightInTiles: 1,
  });
  tiles.push({
    gridX: 9,
    gridY: -19,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
    widthInTiles: 1,
    heightInTiles: 1,
  });

  // Y
  tiles.push({
    gridX: 12,
    gridY: -20,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
    widthInTiles: 1,
    heightInTiles: 1,
  });
  tiles.push({
    gridX: 12,
    gridY: -19,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
    widthInTiles: 1,
    heightInTiles: 1,
  });
  tiles.push({
    gridX: 12,
    gridY: -18,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
    widthInTiles: 1,
    heightInTiles: 1,
  });
  tiles.push({
    gridX: 11,
    gridY: -22,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
    widthInTiles: 1,
    heightInTiles: 1,
  });
  tiles.push({
    gridX: 11,
    gridY: -21,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
    widthInTiles: 1,
    heightInTiles: 1,
  });
  tiles.push({
    gridX: 13,
    gridY: -22,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
    widthInTiles: 1,
    heightInTiles: 1,
  });
  tiles.push({
    gridX: 13,
    gridY: -21,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
    widthInTiles: 1,
    heightInTiles: 1,
  });

  return tiles;
};
