import { createAction } from 'redux-actions';

const CHANGE_INPUT = 'waiting/CHANGE_INPUT'; // 인풋 값 변경
const CREATE = 'waiting/CREATE'; // 명단에 이름 추가
const ENTER = 'waiting/ENTER'; // 입장
const LEAVE = 'waiting/LEAVE'; //나감

// FSA 규칙을 따르는 액션 생성 함수 정의
// export const changeInput = text => ({ type: CHANGE_INPUT, payload: text });
// export const create = text => ({ type: CREATE, payload: text });
// export const enter = id => ({ type: ENTER, payload: id });
// export const leave = id => ({ type: LEAVE, payload: id });

// createAction 으로 액션 만들기
export const changeInput = createAction(CHANGE_INPUT, text => text);
export const create = createAction(CREATE, text => text);
export const enter = createAction(ENTER, id => id);
export const leave = createAction(LEAVE, id => id);
