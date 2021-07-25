import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import playerSlice from "../features/player/playerSlice";
import obstaclesSlice from "../features/obstacle/obstaclesSlice";

export const store = configureStore({
  reducer: {
    player: playerSlice,
    obstacles: obstaclesSlice,
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
