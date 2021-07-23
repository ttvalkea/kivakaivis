import { useState } from 'react';

import { useAppSelector } from '../../app/hooks';

import styles from './Counter.module.css';
import { selectX, selectY } from '../player/playerSlice';
import renderedObject from '../../classes/renderedObject';

export function Obstacle(props: renderedObject) {
  const playerXPosition = useAppSelector(selectX);
  const playerYPosition = useAppSelector(selectY);

  const isVisible = true;

  const relativeXPosition = props.x - playerXPosition;
  const relativeYPosition = props.y - playerYPosition;

  return (
    isVisible ?
    <div className="Obstacle" style={{ top: relativeYPosition, left: relativeXPosition, height: props.height, width: props.width }}></div>
    : null
  );
}
