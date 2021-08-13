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

  return isVisible ? (
    <div className={props.className} style={style}></div>
  ) : null;
}
