import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { JUMP_STRENGTH } from "../gameMechanics/constants";
import { doesItemHaveAnObstacleOnASide } from "../gameMechanics/gameMechanics";
import { selectObstacles } from "../obstacle/obstaclesSlice";
import { selectPlayer, setYSpeed } from "../player/playerSlice";
import { selectPressedKeys, setPressedKeys } from "./keyboardControlsSlice";

export const KeyboardControls = () => {
  const dispatch = useAppDispatch();
  const keyboardControlsState = useAppSelector(selectPressedKeys);
  const pressedKeys = useAppSelector(selectPressedKeys);
  const playerState = useAppSelector(selectPlayer);
  const obstaclesState = useAppSelector(selectObstacles);

  useEffect(() => {
    const ALLOWED_KEYS = [
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "Shift",
    ];

    const handleKeyDown = (event: any) => {
      const { key } = event;
      if (ALLOWED_KEYS.includes(key) && !pressedKeys.includes(key)) {
        dispatch(setPressedKeys([...pressedKeys, key]));
      }

      // Jumping
      if (
        key === "Shift" &&
        doesItemHaveAnObstacleOnASide(playerState, obstaclesState, "bottom")
      ) {
        dispatch(setYSpeed(playerState.speedY - JUMP_STRENGTH));
      }
    };

    const handleKeyUp = (event: any) => {
      const { key } = event;
      dispatch(setPressedKeys(pressedKeys.filter((k) => k !== key)));
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [
    pressedKeys,
    dispatch,
    keyboardControlsState,
    playerState,
    obstaclesState,
  ]);

  return <span></span>;
};
