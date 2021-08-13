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
  EMIT_NAME_REMOVE_PLAYER,
  EMIT_NAME_SET_OTHER_PLAYERS_LIST,
  EMIT_NAME_START_NEW_GAME,
} from "./features/gameMechanics/constants";
import { RenderedElement } from "./features/renderedElement/RenderedElement";
import {
  selectObstacles,
  setObstacles,
} from "./features/obstacle/obstaclesSlice";
import {
  removePlayer,
  selectOtherPlayers,
  setOtherPlayers,
} from "./features/player/otherPlayersSlice";
import { Player } from "./features/player/Player";
import {
  // moveDown, // TODO: Remove these and remove outcommented code
  // moveLeft,
  // moveRight,
  // moveUp,
  selectPlayer,
} from "./features/player/playerSlice";
import useWindowDimensions from "./features/windowDimensions/windowDimensions";
import { obstacleType, PlayerType } from "./features/types/types";
import { startNewGame } from "./features/gameMechanics/gameMechanics";

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

      // Defining all the events that are listened for
      newSocket.on(EMIT_NAME_UPDATE_PLAYER_POSITION, (player: PlayerType) => {
        // Receive message from the server about another player's position
        dispatch(setOtherPlayers([player]));
      });
      newSocket.on(EMIT_NAME_REMOVE_PLAYER, (playerId: string) => {
        dispatch(removePlayer(playerId));
      });
      newSocket.on(
        EMIT_NAME_SET_OTHER_PLAYERS_LIST,
        (players: PlayerType[]) => {
          dispatch(setOtherPlayers(players));
        }
      );
      newSocket.on(EMIT_NAME_START_NEW_GAME, (obstacles: obstacleType[]) => {
        dispatch(setObstacles(obstacles));
      });

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
        imageName=""
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
        imageName="otherPlayer"
      />
    );
  });

  const { height, width } = useWindowDimensions();
  let isSocketConnectedText = "No socket";
  if (socket) {
    isSocketConnectedText = socket.connected ? "Yes" : "No";
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
        {`Connected to server: ${isSocketConnectedText} `}
        {`- Number of players: ${otherPlayersState.otherPlayers.length + 1}`}
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
          {/* <button onClick={() => dispatch(moveLeft())} style={{ zIndex: 20 }}>
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
          <br /> */}
          pos x: {playerState.x}
          <br />
          pos y: {playerState.y}
          <br />
          speedX: {playerState.speedX}
          <br />
          speedY: {playerState.speedY}
          <br />
          <button
            onClick={() => (socket ? startNewGame(socket) : {})}
            style={{ zIndex: 20 }}
          >
            Start a new game
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
