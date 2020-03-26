import { combineReducers } from 'redux';
import * as moment from 'moment';
let db = JSON.parse(localStorage.getItem('APP_DATA')) || {
  cup: 250,
  dailyTarget: 3000,
  achievedTarget: 0
};
let date = localStorage.getItem('DATE') || null;
if (date)
  if (date != new Date().getDate()) {
    let dailyStats = db;
    let weeklyStats = JSON.parse(localStorage.getItem('WEEKLY_STATS')) || [];
    dailyStats.day = moment().format('dddd');
    if (weeklyStats.length > 6) {
      weeklyStats.shift();
    }
    weeklyStats.push(dailyStats);
    localStorage.setItem('WEEKLY_STATS', JSON.stringify(weeklyStats));
  }
db.achievedTarget = date == new Date().getDate() ? db.achievedTarget : 0;

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

function cup(state = db.cup || 250, action) {
  switch (action.type) {
    case 'CHANGE':
      return action.cup;
    default:
      return state;
  }
}

function dailyTarget(state = db.dailyTarget || 3000, action) {
  switch (action.type) {
    case 'SETDAILYTARGET':
      return action.dailyTarget;
    default:
      return state;
  }
}

function achievedTarget(state = db.achievedTarget || 0, action) {
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
