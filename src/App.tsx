import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  SCREEN_TOP_MARGIN,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "./features/gameMechanics/constants";
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

  // Socket.io
  const [socket, setSocket] = useState(
    null as Socket<DefaultEventsMap, DefaultEventsMap> | null
  );

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:8000`);
    setSocket(newSocket as Socket<DefaultEventsMap, DefaultEventsMap>);

    newSocket.on("greetings", (arg) => {
      // Receive message from the server
      console.log(arg);
    });

    return () => {
      newSocket.disconnect();
    };
  }, [setSocket]);

  const emitSocketIoMessage = () => {
    if (socket) {
      // Send message to the server
      socket.emit("hello", "world");
    } else {
      console.log("Error emitting a socket.io message: No socket");
    }
  };

  // Socket.io ends ---

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
  let isSocketConnectedText = "No socket";
  if (socket) {
    isSocketConnectedText = socket.connected.toString();
  }

  return (
    <div className="Game-container">
      <div
        className="Window-border"
        style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
      >
        {obstacleElements}
        <Player socket={socket} />
        {`Connected: ${isSocketConnectedText}`}
        {/* These border blockers block the visibility of off-screen objects */}
        <div
          className="Border-blocker right"
          style={{
            height: height,
            width: (width - SCREEN_WIDTH) / 2,
            right: -(width - SCREEN_WIDTH) / 2,
            top: -SCREEN_TOP_MARGIN,
          }}
        ></div>
        <div
          className="Border-blocker left"
          style={{
            height: height,
            width: (width - SCREEN_WIDTH) / 2,
            left: -(width - SCREEN_WIDTH) / 2,
            top: -SCREEN_TOP_MARGIN,
          }}
        ></div>
        <div
          className="Border-blocker top"
          style={{
            height: SCREEN_TOP_MARGIN,
            width: SCREEN_WIDTH,
            left: 0,
            top: -SCREEN_TOP_MARGIN,
          }}
        ></div>
        <div
          className="Border-blocker bottom"
          style={{
            height: height - SCREEN_HEIGHT - SCREEN_TOP_MARGIN,
            width: SCREEN_WIDTH,
            left: 0,
            bottom: -(height - SCREEN_HEIGHT - SCREEN_TOP_MARGIN),
          }}
        >
          <button onClick={() => emitSocketIoMessage()} style={{ zIndex: 20 }}>
            Emit socket.io message
          </button>
          <br />
          <br />
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
