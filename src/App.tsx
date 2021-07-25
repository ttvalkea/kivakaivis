import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "./constants";
import { Obstacle } from "./features/obstacle/Obstacle";
import { selectObstacles } from "./features/obstacle/obstaclesSlice";
import { Player } from "./features/player/Player";
import {
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
  selectPlayer,
} from "./features/player/playerSlice";
import useWindowDimensions from "./features/windowDimensions/windowDimensions";

function App() {
  const dispatch = useAppDispatch();
  const playerState = useAppSelector(selectPlayer);
  const obstaclesState = useAppSelector(selectObstacles);

  const obstacleElements: any[] = [];

  obstaclesState.forEach((obstacle, index) => {
    obstacleElements.push(
      <Obstacle
        key={index}
        x={obstacle.x}
        y={obstacle.y}
        height={obstacle.height}
        width={obstacle.width}
      />
    );
  });

  const { height, width } = useWindowDimensions();

  return (
    <div className="Game-container">
      <div
        className="Window-border"
        style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
      >
        {obstacleElements}
        <Player />
        {/* These border blockers block the visibility of off-screen objects */}
        <div
          className="Border-blocker right"
          style={{
            height: height,
            width: (width - SCREEN_WIDTH) / 2,
            right: -(width - SCREEN_WIDTH) / 2,
            top: -50,
          }}
        ></div>
        <div
          className="Border-blocker left"
          style={{
            height: height,
            width: (width - SCREEN_WIDTH) / 2,
            left: -(width - SCREEN_WIDTH) / 2,
            top: -50,
          }}
        ></div>
        <div
          className="Border-blocker top"
          style={{
            height: 50,
            width: SCREEN_WIDTH + 600,
            left: -300,
            top: -50,
          }}
        ></div>
        <div
          className="Border-blocker bottom"
          style={{
            height: height - SCREEN_HEIGHT - 50,
            width: SCREEN_WIDTH + 600,
            left: -300,
            bottom: -(height - SCREEN_HEIGHT - 50),
          }}
        >
          <button onClick={() => dispatch(moveLeft())} style={{ zIndex: 20 }}>
            Move left
          </button>
          <br />
          <button onClick={() => dispatch(moveRight())} style={{ zIndex: 20 }}>
            Move right
          </button>
          <br />
          <button onClick={() => dispatch(moveUp())} style={{ zIndex: 20 }}>
            Move up
          </button>
          <br />
          <button onClick={() => dispatch(moveDown())} style={{ zIndex: 20 }}>
            Move down
          </button>
          <br />
          pos x: {playerState.x}
          <br />
          pos y: {playerState.y}
          <br />
          speedX: {playerState.speedX}
          <br />
          speedY: {playerState.speedY}
        </div>
      </div>
    </div>
  );
}

export default App;
