import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { PlayerType } from "../types/types";

export interface OtherPlayersState {
  otherPlayers: { x: number; y: number; playerId: string }[];
}

const initialState: OtherPlayersState = {
  otherPlayers: [],
};

export const otherPlayersSlice = createSlice({
  name: "otherPlayers",
  initialState,
  reducers: {
    setOtherPlayers: (state, action: PayloadAction<PlayerType[]>) => {
      for (let index = 0; index < action.payload.length; index++) {
        const player = action.payload[index];
        // Check if there's a player with this id already. If yes, modify its x and y. If not, add that into the array.
        const existingPlayer = state.otherPlayers.find(
          (x) => x.playerId === player.playerId
        );
        if (existingPlayer) {
          existingPlayer.x = player.x;
          existingPlayer.y = player.y;
        } else {
          state.otherPlayers.push(player);
        }
      }
    },
    removePlayer: (state, action: PayloadAction<string>) => {
      state.otherPlayers = state.otherPlayers.filter(
        (x) => x.playerId !== action.payload
      );
    },
  },
});

export const { setOtherPlayers, removePlayer } = otherPlayersSlice.actions;

export const selectOtherPlayers = (state: RootState): OtherPlayersState =>
  state.otherPlayers;

export default otherPlayersSlice.reducer;
