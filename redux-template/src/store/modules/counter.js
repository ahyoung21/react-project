// counter.js

// Actions
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const CHANGE_COLOR = 'counter/CHANGE_COLOR';

// ACTION CREATORS (액션 생성 함수)
export const increment = number => ({ type: INCREMENT, number: number });
export const decrement = number => ({ type: DECREMENT, number: number });
export const changeColor = color => ({ type: CHANGE_COLOR, color });

// 스토어안에서 관리할 상태값
const initialState = {
  number: 0,
  color: '#bfcd7e'
};

// 리듀서
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        number: state.number + action.number
      };

    case DECREMENT:
      return {
        ...state,
        number: state.number - action.number
      };

    case CHANGE_COLOR:
      return {
        ...state,
        color: action.color
      };

    default:
      return state;
  }
}
