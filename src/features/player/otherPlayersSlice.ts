import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

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
    setOtherPlayers: (
      state,
      action: PayloadAction<{ x: number; y: number; playerId: string }>
    ) => {
      // Check if there's a player with this id already. If yes, modify its x and y. If not, add that into the array.
      const existingPlayer = state.otherPlayers.find(
        (player) => player.playerId === action.payload.playerId
      );
      if (existingPlayer) {
        existingPlayer.x = action.payload.x;
        existingPlayer.y = action.payload.y;
      } else {
        state.otherPlayers.push(action.payload);
      }
    },
  },
});

export const { setOtherPlayers } = otherPlayersSlice.actions;

export const selectOtherPlayers = (state: RootState): OtherPlayersState =>
  state.otherPlayers;

export default otherPlayersSlice.reducer;
