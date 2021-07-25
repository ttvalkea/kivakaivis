import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  PLAYER_HEIGHT,
  PLAYER_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../../constants";
import { areColliding } from "../gameMechanics/gameMechanics";
import useInterval from "../interval/useInterval";
import { selectObstacles } from "../obstacle/obstaclesSlice";
import { moveDown, selectPlayer } from "./playerSlice";

export function Player() {
  const dispatch = useAppDispatch();
  const playerState = useAppSelector(selectPlayer);
  const obstaclesState = useAppSelector(selectObstacles);
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
    ></div>
  );
}
