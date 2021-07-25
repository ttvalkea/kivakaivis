import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  PLAYER_HEIGHT,
  PLAYER_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../../constants";
import { areColliding } from "../gameMechanics/gameMechanics";
import useInterval from "../interval/useInterval";
import { KeyboardControls } from "../keyboardControls/KeyboardControls";
import { selectPressedKeys } from "../keyboardControls/keyboardControlsSlice";
import { selectObstacles } from "../obstacle/obstaclesSlice";
import {
  addXSpeed,
  moveDown,
  moveLeft,
  moveRight,
  selectPlayer,
} from "./playerSlice";

export function Player() {
  const dispatch = useAppDispatch();
  const playerState = useAppSelector(selectPlayer);
  const obstaclesState = useAppSelector(selectObstacles);
  const pressedKeys = useAppSelector(selectPressedKeys);
  const fall = () => {
    // If there's no obstacle under the player, move down one
    let isColliding = false;
    for (let index = 0; index < obstaclesState.length; index++) {
      const obstacle = obstaclesState[index];
      if (areColliding(playerState, { ...obstacle, y: obstacle.y - 1 })) {
        isColliding = true;
        break;
      }
    }
    if (!isColliding) {
      dispatch(moveDown());
    }
  };

  // Accelerating
  useInterval(() => {
    if (
      (pressedKeys.includes("ArrowRight") && playerState.speedX < 0) ||
      (pressedKeys.includes("ArrowLeft") && playerState.speedX > 0) ||
      (!pressedKeys.includes("ArrowRight") &&
        !pressedKeys.includes("ArrowLeft"))
    ) {
      if (playerState.speedX > 0) {
        dispatch(addXSpeed(playerState.speedX - 5 < 0 ? -1 : -5));
      }
      if (playerState.speedX < 0) {
        dispatch(addXSpeed(playerState.speedX + 5 > 0 ? 1 : 5));
      }
    }
    if (pressedKeys.includes("ArrowLeft")) {
      dispatch(addXSpeed(playerState.speedX > -30 ? -30 : -5));
    }
    if (pressedKeys.includes("ArrowRight")) {
      dispatch(addXSpeed(playerState.speedX < 30 ? 30 : 5));
    }
  }, 50);

  // Speed
  useInterval(() => {
    if (playerState.speedX < 0) {
      dispatch(moveLeft());
    } else if (playerState.speedX > 0) {
      dispatch(moveRight());
    }
  }, 1000 / Math.abs(playerState.speedX));

  // Gravity
  useInterval(() => {
    fall();
  }, 50);

  return (
    <div
      className="Character"
      style={{
        width: PLAYER_WIDTH,
        height: PLAYER_HEIGHT,
        marginTop: SCREEN_HEIGHT / 2 - PLAYER_HEIGHT / 2,
        marginLeft: SCREEN_WIDTH / 2 - PLAYER_WIDTH / 2,
      }}
    >
      <KeyboardControls />
      <i>{pressedKeys}</i>
    </div>
  );
}
