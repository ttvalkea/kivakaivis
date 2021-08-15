import { mapTileTerrain, mapTileType } from "../types/types";

export const getLobbyMapTiles = (): mapTileType[] => {
  const tiles: mapTileType[] = [
    {
      gridX: 11,
      gridY: -10,
      type: mapTileTerrain.indestructible,
      isDiscovered: true,
    },
    {
      gridX: 9,
      gridY: -11,
      type: mapTileTerrain.indestructible,
      isDiscovered: true,
    },
    {
      gridX: 8,
      gridY: -12,
      type: mapTileTerrain.indestructible,
      isDiscovered: true,
    },
    {
      gridX: 11,
      gridY: -13,
      type: mapTileTerrain.indestructible,
      isDiscovered: true,
    },
    {
      gridX: 9,
      gridY: -15,
      type: mapTileTerrain.indestructible,
      isDiscovered: true,
    },
    {
      gridX: 8,
      gridY: -16,
      type: mapTileTerrain.indestructible,
      isDiscovered: true,
    },
    {
      gridX: 10,
      gridY: -17,
      type: mapTileTerrain.indestructible,
      isDiscovered: true,
    },
  ];
  for (let index = 0; index < 15; index++) {
    const tile = {
      gridX: -3 + index,
      gridY: -9,
      type: mapTileTerrain.indestructible,
      isDiscovered: true,
    };
    tiles.push(tile);
  }

  for (let index = 0; index < 5; index++) {
    const tile = {
      gridX: -4,
      gridY: -14 + index,
      type: mapTileTerrain.indestructible,
      isDiscovered: true,
    };
    const tile2 = {
      gridX: 12,
      gridY: -14 + index,
      type: mapTileTerrain.indestructible,
      isDiscovered: true,
    };
    tiles.push(tile);
    tiles.push(tile2);
  }

  // Lobby text :D
  // L
  for (let index = 0; index < 5; index++) {
    const tile = {
      gridX: -5,
      gridY: -22 + index,
      type: mapTileTerrain.indestructible,
      isDiscovered: true,
    };
    tiles.push(tile);
  }

  for (let index = 0; index < 3; index++) {
    const tile = {
      gridX: -5 + index,
      gridY: -18,
      type: mapTileTerrain.indestructible,
      isDiscovered: true,
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
    };
    tiles.push(tile);
  }
  tiles.push({
    gridX: 0,
    gridY: -22,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
  });
  tiles.push({
    gridX: 0,
    gridY: -18,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
  });
  for (let index = 0; index < 5; index++) {
    const tile = {
      gridX: 1,
      gridY: -22 + index,
      type: mapTileTerrain.indestructible,
      isDiscovered: true,
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
    };
    tiles.push(tile);
  }

  tiles.push({
    gridX: 4,
    gridY: -22,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
  });
  tiles.push({
    gridX: 4,
    gridY: -18,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
  });
  tiles.push({
    gridX: 5,
    gridY: -21,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
  });
  tiles.push({
    gridX: 4,
    gridY: -20,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
  });
  tiles.push({
    gridX: 5,
    gridY: -19,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
  });

  // B
  for (let index = 0; index < 5; index++) {
    const tile = {
      gridX: 7,
      gridY: -22 + index,
      type: mapTileTerrain.indestructible,
      isDiscovered: true,
    };
    tiles.push(tile);
  }

  tiles.push({
    gridX: 8,
    gridY: -22,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
  });
  tiles.push({
    gridX: 8,
    gridY: -18,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
  });
  tiles.push({
    gridX: 9,
    gridY: -21,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
  });
  tiles.push({
    gridX: 8,
    gridY: -20,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
  });
  tiles.push({
    gridX: 9,
    gridY: -19,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
  });

  // Y
  tiles.push({
    gridX: 12,
    gridY: -20,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
  });
  tiles.push({
    gridX: 12,
    gridY: -19,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
  });
  tiles.push({
    gridX: 12,
    gridY: -18,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
  });
  tiles.push({
    gridX: 11,
    gridY: -22,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
  });
  tiles.push({
    gridX: 11,
    gridY: -21,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
  });
  tiles.push({
    gridX: 13,
    gridY: -22,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
  });
  tiles.push({
    gridX: 13,
    gridY: -21,
    type: mapTileTerrain.indestructible,
    isDiscovered: true,
  });

  return tiles;
};
