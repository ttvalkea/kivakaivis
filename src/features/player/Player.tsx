import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  PLAYER_HEIGHT,
  PLAYER_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../../constants";
import { doesItemHaveAnObstacleOnASide } from "../gameMechanics/gameMechanics";
import useInterval from "../interval/useInterval";
import { KeyboardControls } from "../keyboardControls/KeyboardControls";
import { selectPressedKeys } from "../keyboardControls/keyboardControlsSlice";
import { selectObstacles } from "../obstacle/obstaclesSlice";
import {
  setYSpeed,
  setXSpeed,
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
  selectPlayer,
  setCanJump,
} from "./playerSlice";

export function Player() {
  const dispatch = useAppDispatch();
  const playerState = useAppSelector(selectPlayer);
  const obstaclesState = useAppSelector(selectObstacles);
  const pressedKeys = useAppSelector(selectPressedKeys);

  // Accelerating
  useInterval(() => {
    if (
      (pressedKeys.includes("ArrowRight") && playerState.speedX < 0) ||
      (pressedKeys.includes("ArrowLeft") && playerState.speedX > 0) ||
      (!pressedKeys.includes("ArrowRight") &&
        !pressedKeys.includes("ArrowLeft"))
    ) {
      if (playerState.speedX > 0) {
        dispatch(
          setXSpeed(
            playerState.speedX + (playerState.speedX - 15 < 0 ? -1 : -15)
          )
        );
      }
      if (playerState.speedX < 0) {
        dispatch(
          setXSpeed(playerState.speedX + (playerState.speedX + 15 > 0 ? 1 : 15))
        );
      }
    }
    if (pressedKeys.includes("ArrowLeft")) {
      dispatch(
        setXSpeed(playerState.speedX + (playerState.speedX > -30 ? -30 : -5))
      );
    }
    if (pressedKeys.includes("ArrowRight")) {
      dispatch(
        setXSpeed(playerState.speedX + (playerState.speedX < 30 ? 30 : 5))
      );
    }
  }, 50);

  // Speed (x-axis movement)
  useInterval(() => {
    if (playerState.speedX < 0) {
      // TODO: Optimize which obstacles to check (can't check every single one). Do for all doesItemHaveAnObstacleOnASide's
      if (doesItemHaveAnObstacleOnASide(playerState, obstaclesState, "left")) {
        dispatch(setYSpeed(0));
      } else {
        dispatch(moveLeft());
      }
    } else if (playerState.speedX > 0) {
      if (doesItemHaveAnObstacleOnASide(playerState, obstaclesState, "right")) {
        dispatch(setYSpeed(0));
      } else {
        dispatch(moveRight());
      }
    }
  }, 500 / Math.abs(playerState.speedX) ?? 100);

  // Speed (y-axis movement)
  useInterval(() => {
    if (playerState.speedY < 0) {
      if (doesItemHaveAnObstacleOnASide(playerState, obstaclesState, "top")) {
        dispatch(setYSpeed(0));
      } else {
        dispatch(moveUp());
      }
    } else if (playerState.speedY > 0) {
      if (
        doesItemHaveAnObstacleOnASide(playerState, obstaclesState, "bottom")
      ) {
        dispatch(setCanJump(true));
        dispatch(setYSpeed(0));
      } else {
        dispatch(moveDown());
      }
    }
  }, 50 / Math.abs(playerState.speedY) ?? 10);

  // Gravity
  useInterval(() => {
    if (!doesItemHaveAnObstacleOnASide(playerState, obstaclesState, "bottom")) {
      dispatch(setYSpeed(playerState.speedY + 1));
    }
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
