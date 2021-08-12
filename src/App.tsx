import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  SCREEN_TOP_MARGIN,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  EMIT_NAME_UPDATE_PLAYER_POSITION,
  PLAYER_HEIGHT,
  PLAYER_WIDTH,
} from "./features/gameMechanics/constants";
import { RenderedElement } from "./features/renderedElement/RenderedElement";
import { selectObstacles } from "./features/obstacle/obstaclesSlice";
import {
  selectOtherPlayers,
  setOtherPlayers,
} from "./features/player/otherPlayersSlice";
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
  const otherPlayersState = useAppSelector(selectOtherPlayers);

  // Socket.io
  const [socket, setSocket] = useState(
    null as Socket<DefaultEventsMap, DefaultEventsMap> | null
  );

  useEffect(() => {
    const initializeSocket = (): Socket<DefaultEventsMap, DefaultEventsMap> => {
      const newSocket = io(`http://${window.location.hostname}:8000`);
      setSocket(newSocket as Socket<DefaultEventsMap, DefaultEventsMap>);

      newSocket.on(
        EMIT_NAME_UPDATE_PLAYER_POSITION,
        (info: { x: number; y: number; playerId: string }) => {
          // Receive message from the server about another player's position
          dispatch(setOtherPlayers(info));
          console.log(otherPlayersState);
          console.log(info);
        }
      );
      return newSocket;
    };
    const newSocket = initializeSocket();

    return () => {
      newSocket.disconnect();
    };
    // eslint-disable-next-line
  }, [setSocket, dispatch]);

  // Socket.io ends ---

  // ------ Rendered elements -------
  // Obstacles
  const obstacleElements: any[] = [];
  obstaclesState.forEach((obstacle, index) => {
    obstacleElements.push(
      <RenderedElement
        className="Obstacle"
        key={`obstacle${index}`}
        renderedObject={{
          x: obstacle.x,
          y: obstacle.y,
          height: obstacle.height,
          width: obstacle.width,
        }}
      />
    );
  });

  // Other players
  const otherPlayerElements: any[] = [];
  otherPlayersState.otherPlayers.forEach((otherPlayer, index) => {
    otherPlayerElements.push(
      <RenderedElement
        className="OtherPlayer"
        key={`otherPlayer${index}`}
        renderedObject={{
          x: otherPlayer.x,
          y: otherPlayer.y,
          height: PLAYER_HEIGHT,
          width: PLAYER_WIDTH,
        }}
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
        {otherPlayerElements}
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
