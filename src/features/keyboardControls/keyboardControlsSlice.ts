import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ObstaclesState {
  pressedKeys: string[];
}

const initialState: ObstaclesState = {
  pressedKeys: [],
};

export const keyboardControlsSlice = createSlice({
  name: "keyboardControls",
  initialState,
  reducers: {
    setPressedKeys: (state, action: PayloadAction<string[]>) => {
      state.pressedKeys = action.payload;
    },
  },
});

export const { setPressedKeys } = keyboardControlsSlice.actions;

export const selectPressedKeys = (state: RootState): string[] =>
  state.keyboardControls.pressedKeys;

export default keyboardControlsSlice.reducer;
