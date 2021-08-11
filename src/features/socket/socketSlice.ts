// NOTE: THIS FILE IS NOT IN USE AND CAN BE DELETED!

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";

// // Socket.io
// const [socket, setSocket] = useState(
//   null as Socket<DefaultEventsMap, DefaultEventsMap> | null
// );

// useEffect(() => {
//   const newSocket = io(`http://${window.location.hostname}:8000`);
//   setSocket(newSocket as Socket<DefaultEventsMap, DefaultEventsMap>);

//   newSocket.on("greetings", (arg) => {
//     // Receive message from the server
//     console.log(arg);
//   });

//   return () => {
//     newSocket.disconnect();
//   };
// }, [setSocket]);

// const emitSocketIoMessage = () => {
//   if (socket) {
//     // Send message to the server
//     socket.emit("hello", "world");
//   } else {
//     console.log("Error emitting a socket.io message: No socket");
//   }
// };

const initializeSocket = (): Socket<DefaultEventsMap, DefaultEventsMap> => {
  const newSocket: Socket<DefaultEventsMap, DefaultEventsMap> = io(
    `http://${window.location.hostname}:8000`
  );

  newSocket.on("greetings", (arg) => {
    // Receive message from the server
    console.log(arg);
  });

  return newSocket;
};

export interface SocketState {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

const initialState: SocketState = {
  socket: initializeSocket(),
};

export const playerSlice = createSlice({
  name: "socket",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    emitSocketIoMessage: (
      state,
      action: PayloadAction<{
        messageName: string;
        information: String | Object;
      }>
    ) => {
      if (state.socket) {
        state.socket.emit(
          action.payload.messageName,
          action.payload.information
        );
      } else {
        console.log("Error emitting a socket.io message: No socket");
      }
    },
  },
});

export const { emitSocketIoMessage } = playerSlice.actions;

export default playerSlice.reducer;
