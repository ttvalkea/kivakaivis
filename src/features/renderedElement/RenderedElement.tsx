import { useAppSelector } from "../../app/hooks";

import { selectPlayer } from "../player/playerSlice";
import {
  PLAYER_HEIGHT,
  PLAYER_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../gameMechanics/constants";
import { renderedObjectType } from "../types/types";

export function RenderedElement(props: {
  renderedObject: renderedObjectType;
  className: string;
  imageName: string;
}) {
  const playerState = useAppSelector(selectPlayer);

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

  // Don't render element if it's out of viewport
  const isVisible =
    // Outside, right of the player
    props.renderedObject.x - playerState.x - PLAYER_WIDTH / 2 <=
      SCREEN_WIDTH / 2 &&
    // Outside, left of the player
    props.renderedObject.x -
      playerState.x -
      PLAYER_WIDTH / 2 +
      props.renderedObject.width >=
      (SCREEN_WIDTH / 2) * -1 &&
    // Outside, below the player
    props.renderedObject.y - playerState.y - PLAYER_HEIGHT / 2 <=
      SCREEN_HEIGHT / 2 &&
    // Outside, above the player
    props.renderedObject.y -
      playerState.y -
      PLAYER_HEIGHT / 2 +
      props.renderedObject.height >=
      (SCREEN_HEIGHT / 2) * -1;

  if (isVisible) {
    const style: React.CSSProperties = {
      top: relativeYPosition,
      left: relativeXPosition,
      height: props.renderedObject.height,
      width: props.renderedObject.width,
    };

    if (props.imageName) {
      style.backgroundImage = `url(${
        process.env.PUBLIC_URL + `images/${props.imageName}.PNG`
      })`;
    }

    return <div className={props.className} style={style}></div>;
  }
  return null; // Element is not in view
}
