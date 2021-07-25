import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import playerSlice from "../features/player/playerSlice";
import obstaclesSlice from "../features/obstacle/obstaclesSlice";
import keyboardControlsSlice from "../features/keyboardControls/keyboardControlsSlice";

export const store = configureStore({
  reducer: {
    player: playerSlice,
    obstacles: obstaclesSlice,
    keyboardControls: keyboardControlsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
