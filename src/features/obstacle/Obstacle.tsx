import { useAppSelector } from '../../app/hooks';

import { selectPlayer } from '../player/playerSlice';
import renderedObject from '../../classes/renderedObject';
import { PLAYER_HEIGHT, PLAYER_WIDTH, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants';

export function Obstacle(props: renderedObject) {
  const playerState = useAppSelector(selectPlayer);

  const isVisible = true;

  const relativeXPosition = props.x - playerState.x + SCREEN_WIDTH/2 - PLAYER_WIDTH/2;
  const relativeYPosition = props.y - playerState.y + SCREEN_HEIGHT/2 - PLAYER_HEIGHT/2;

  return (
    isVisible ?
    <div className="Obstacle" style={{ top: relativeYPosition, left: relativeXPosition, height: props.height, width: props.width }}></div>
    : null
  );
}
