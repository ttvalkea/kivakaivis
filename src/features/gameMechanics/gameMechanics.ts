import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import { mapTileTerrain, renderedObjectType } from "../types/types";
import { EMIT_NAME_START_NEW_GAME } from "./constants";

export const areColliding = (
  item1: renderedObjectType,
  item2: renderedObjectType
): boolean => {
  return (
    item1.x < item2.x + item2.width &&
    item1.x + item1.width > item2.x &&
    item1.y < item2.y + item2.height &&
    item1.y + item1.height > item2.y
  );
};

export const doesItemHaveAnObstacleOnASide = (
  item: renderedObjectType,
  obstacles: renderedObjectType[],
  side: "top" | "bottom" | "left" | "right"
): boolean => {
  // Check if there's an obstacle on a certain side of an item
  for (let index = 0; index < obstacles.length; index++) {
    const obstacle = obstacles[index];
    let checkedObjectXPositionDifference = 0;
    let checkedObjectYPositionDifference = 0;

    switch (side) {
      case "top":
        checkedObjectYPositionDifference = -1;
        break;
      case "bottom":
        checkedObjectYPositionDifference = 1;
        break;
      case "left":
        checkedObjectXPositionDifference = -1;
        break;
      case "right":
        checkedObjectXPositionDifference = 1;
        break;
      default:
        break;
    }

    if (
      areColliding(
        {
          ...item,
          y: item.y + checkedObjectYPositionDifference,
          x: item.x + checkedObjectXPositionDifference,
        },
        obstacle
      )
    ) {
      return true;
    }
  }
  return false;
};

export const startNewGame = (
  socket: Socket<DefaultEventsMap, DefaultEventsMap>
) => {
  socket.emit(EMIT_NAME_START_NEW_GAME);
};

export const getRenderedElementImageName = (type: mapTileTerrain): string => {
  switch (type) {
    case mapTileTerrain.dirt:
      return "dirt";
    case mapTileTerrain.rock:
      return "rock";
    case mapTileTerrain.indestructible:
      return "rock";
    case mapTileTerrain.empty:
      return "empty";
    default:
      return "";
  }
};
