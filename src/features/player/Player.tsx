import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  PLAYER_HEIGHT,
  PLAYER_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  GRAVITY_INTERVAL_MS,
  PLAYER_DECELERATION,
  PLAYER_EARLY_ACCELERATION,
  PLAYER_LATE_ACCELERATION,
  X_AXIS_MOVEMENT_INTERVAL_MS,
  Y_AXIS_MOVEMENT_INTERVAL_MS,
} from "../gameMechanics/constants";
import { doesItemHaveAnObstacleOnASide } from "../gameMechanics/gameMechanics";
import useInterval from "../interval/useInterval";
import { KeyboardControls } from "../keyboardControls/KeyboardControls";
import { selectPressedKeys } from "../keyboardControls/keyboardControlsSlice";
import { selectObstacles } from "../obstacle/obstaclesSlice";
import { emitPlayerPositionUpdate } from "../socket/socketUtilities";
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

export function Player(props: {
  socket: Socket<DefaultEventsMap, DefaultEventsMap> | null;
}) {
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
      if (
        doesItemHaveAnObstacleOnASide(playerState, obstaclesState, "bottom")
      ) {
        if (playerState.speedX > 0) {
          dispatch(
            setXSpeed(
              playerState.speedX +
                (playerState.speedX - PLAYER_DECELERATION < 0
                  ? -1
                  : -PLAYER_DECELERATION)
            )
          );
        }
        if (playerState.speedX < 0) {
          dispatch(
            setXSpeed(
              playerState.speedX +
                (playerState.speedX + PLAYER_DECELERATION > 0
                  ? 1
                  : PLAYER_DECELERATION)
            )
          );
        }
      }
    }
    if (pressedKeys.includes("ArrowLeft")) {
      dispatch(
        setXSpeed(
          playerState.speedX +
            (playerState.speedX > -PLAYER_EARLY_ACCELERATION
              ? -PLAYER_EARLY_ACCELERATION
              : -PLAYER_LATE_ACCELERATION)
        )
      );
    }
    if (pressedKeys.includes("ArrowRight")) {
      dispatch(
        setXSpeed(
          playerState.speedX +
            (playerState.speedX < PLAYER_EARLY_ACCELERATION
              ? PLAYER_EARLY_ACCELERATION
              : PLAYER_LATE_ACCELERATION)
        )
      );
    }
  }, 50);

  // Speed (x-axis movement)
  useInterval(() => {
    if (playerState.speedX < 0) {
      // TODO: Optimize which obstacles to check (can't check every single one). Do for all doesItemHaveAnObstacleOnASide's
      if (doesItemHaveAnObstacleOnASide(playerState, obstaclesState, "left")) {
        dispatch(setXSpeed(0));
      } else {
        dispatch(moveLeft());
        emitPlayerPositionUpdate(props.socket, playerState.x, playerState.y);
      }
    } else if (playerState.speedX > 0) {
      if (doesItemHaveAnObstacleOnASide(playerState, obstaclesState, "right")) {
        dispatch(setXSpeed(0));
      } else {
        dispatch(moveRight());
        emitPlayerPositionUpdate(props.socket, playerState.x, playerState.y);
      }
    }
  }, X_AXIS_MOVEMENT_INTERVAL_MS / Math.abs(playerState.speedX) ?? 100);

  // Speed (y-axis movement)
  useInterval(() => {
    if (playerState.speedY < 0) {
      if (doesItemHaveAnObstacleOnASide(playerState, obstaclesState, "top")) {
        dispatch(setYSpeed(0));
      } else {
        dispatch(moveUp());
        emitPlayerPositionUpdate(props.socket, playerState.x, playerState.y);
      }
    } else if (playerState.speedY > 0) {
      if (
        doesItemHaveAnObstacleOnASide(playerState, obstaclesState, "bottom")
      ) {
        dispatch(setCanJump(true));
        dispatch(setYSpeed(0));
      } else {
        dispatch(moveDown());
        emitPlayerPositionUpdate(props.socket, playerState.x, playerState.y);
      }
    }
  }, Y_AXIS_MOVEMENT_INTERVAL_MS / Math.abs(playerState.speedY) ?? 10);

  // Gravity
  useInterval(() => {
    if (!doesItemHaveAnObstacleOnASide(playerState, obstaclesState, "bottom")) {
      dispatch(setYSpeed(playerState.speedY + 1));
    }
  }, GRAVITY_INTERVAL_MS);

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
      {/* <i>{pressedKeys}</i> */}
    </div>
  );
}
