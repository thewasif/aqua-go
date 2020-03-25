import { combineReducers } from 'redux';
function counter(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'SUBTRACT':
      return state - 1;
    default:
      return state;
  }
}

function cup(state = 250, action) {
  switch (action.type) {
    case 'CHANGE':
      return action.cup;
    default:
      return state;
  }
}

function dailyTarget(state = 3000, action) {
  switch (action.type) {
    case 'SETDAILYTARGET':
      return action.dailyTarget;
    default:
      return state;
  }
}

function achievedTarget(state = 0, action) {
  switch (action.type) {
    case 'SETACHIEVEDTARGET':
      return action.achievedTarget;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter,
  cup,
  dailyTarget,
  achievedTarget
});

export default rootReducer;
