import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import obstacleObject from './classes/obstacleObject';
import { Obstacle } from './features/obstacle/Obstacle';
import { moveLeft, moveRight, selectX, selectY } from './features/player/playerSlice';

function App() {

  const dispatch = useAppDispatch();
  const playerXPosition = useAppSelector(selectX);  
  const playerYPosition = useAppSelector(selectY);

  const obstacles = [new obstacleObject(450, 75, 50, 10), new obstacleObject(100, 200, 75, 5)];

  const obstacleElements: any[] = []

  obstacles.forEach((obstacle, index) => {
    obstacleElements.push(<Obstacle key={index} x={obstacle.x} y={obstacle.y} height={obstacle.height} width={obstacle.width} />)
  })

  return (
    <div className="Game-container">
      <div className="Window-border">
        {obstacleElements}
        <div className="Character"></div>
      </div>
      <button  onClick={() => dispatch(moveLeft())}>Move left</button>
      <button  onClick={() => dispatch(moveRight())}>Move right</button>
      {playerXPosition}
      {playerYPosition}
    </div>
  )
}

export default App;