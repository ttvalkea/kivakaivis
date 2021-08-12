import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import { EMIT_NAME_UPDATE_PLAYER_POSITION } from "../gameMechanics/constants";

export const emitPlayerPositionUpdate = (
  socket: Socket<DefaultEventsMap, DefaultEventsMap> | null,
  x: number,
  y: number
) => {
  if (socket) {
    socket.emit(EMIT_NAME_UPDATE_PLAYER_POSITION, { x, y });
  } else {
    console.log(
      `Error trying to emit ${EMIT_NAME_UPDATE_PLAYER_POSITION}: No emit function`
    );
  }
};
