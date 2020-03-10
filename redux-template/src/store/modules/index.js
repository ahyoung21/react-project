import { combineReducers } from 'redux';
import counter from './counter';
import colorList from './colorList';

// counter모듈을 작성했다면 combineReducers를 통해서 묶어줍니다.
// 지금은 모듈이 한개지만 나중에는 여러개가 될 수 있으니까요.
// 따라서 index.js에서 스토어를 만들기전에, 여러 리듀서들을 한번에 합쳐주는 작업을 해줄게요.

export default combineReducers({
  counter,
  colorList
});
