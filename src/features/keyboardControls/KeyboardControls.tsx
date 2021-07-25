import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectPressedKeys, setPressedKeys } from "./keyboardControlsSlice";

export const KeyboardControls = () => {
  const dispatch = useAppDispatch();
  const keyboardControlsState = useAppSelector(selectPressedKeys);
  const pressedKeys = useAppSelector(selectPressedKeys);
  useEffect(() => {
    const ALLOWED_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

    const handleKeyDown = (event: any) => {
      const { key } = event;

      if (ALLOWED_KEYS.includes(key) && !pressedKeys.includes(key)) {
        dispatch(setPressedKeys([...pressedKeys, key]));
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
  }, [pressedKeys, dispatch, keyboardControlsState]);

  return <span></span>;
};
