import { useAppSelector } from "../../app/hooks";

import { selectPlayer } from "../player/playerSlice";
import renderedObject from "../../classes/renderedObject";
import {
  PLAYER_HEIGHT,
  PLAYER_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../gameMechanics/constants";

export function RenderedElement(props: {
  renderedObject: renderedObject;
  className: string;
}) {
  const playerState = useAppSelector(selectPlayer);

  const isVisible = true; // TODO: Don't render if out of viewport

  const relativeXPosition =
    props.renderedObject.x -
    playerState.x +
    SCREEN_WIDTH / 2 -
    PLAYER_WIDTH / 2;
  const relativeYPosition =
    props.renderedObject.y -
    playerState.y +
    SCREEN_HEIGHT / 2 -
    PLAYER_HEIGHT / 2;

  return isVisible ? (
    <div
      className={props.className}
      style={{
        top: relativeYPosition,
        left: relativeXPosition,
        height: props.renderedObject.height,
        width: props.renderedObject.width,
      }}
    ></div>
  ) : null;
}
