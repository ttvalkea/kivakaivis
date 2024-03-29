export const JUMP_STRENGTH = 11;
export const PLAYER_DECELERATION = 15;
export const PLAYER_EARLY_ACCELERATION = 30;
export const PLAYER_LATE_ACCELERATION = 5;
export const GRAVITY_INTERVAL_MS = 55;
export const X_AXIS_MOVEMENT_INTERVAL_MS = 500;
export const Y_AXIS_MOVEMENT_INTERVAL_MS = 100;

export const SCREEN_TOP_MARGIN = 50;
export const PLAYER_WIDTH = 34;
export const PLAYER_HEIGHT = 40;
export const SCREEN_WIDTH = 800;
export const SCREEN_HEIGHT = 800;
export const TILE_SIZE_IN_PX = 50;

// Socket.io emitted event names
// NOTE: All of these should be the exact same in server and client
export const EMIT_NAME_UPDATE_PLAYER_POSITION = "updatePlayerPosition";
export const EMIT_NAME_REMOVE_PLAYER = "removePlayer";
export const EMIT_NAME_SET_OTHER_PLAYERS_LIST = "setOtherPlayerList";
export const EMIT_NAME_START_NEW_GAME = "startNewGame";
export const EMIT_NAME_SET_NEARBY_OBSTACLES = "setNearbyObstacles";
