const initialState = {
  loggedIn: false,
  user: null,
  foreignProfile: {
    active: false,
    userId: '',
  },
  room: {
    active: false,
    display: false,
    data: {
      foreignId: '',
      roomId: '',
    },
  },
  darkmode: true,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'counter/loggedIn':
      return {
        ...state,
        loggedIn: action.payload.active,
      }
    case 'counter/getUser':
      return {
        ...state,
        user: action.payload.data,
      }
    case 'counter/foreignProfile':
      return {
        ...state,
        foreignProfile: {
          active: action.payload.active,
          userId: action.payload.userId,
        },
      }
    case 'counter/socketClient':
      return {
        ...state,
        socket: action.payload.socket,
      }
    case 'counter/roomIsOpen': {
      const { foreignId, roomId } = action.payload.data;

      return {
        ...state,
        room: {
          active: action.payload.active,
          display: action.payload.display,
          data: {
            foreignId,
            roomId,
          },
        },
      }
    }
    case 'counter/darkmode':
      return {
        ...state,
        darkmode: action.payload.active,
      }
    default:
      return state;
  }
}

export default reducer;
