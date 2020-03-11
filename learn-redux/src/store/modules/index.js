// 루트리듀서
// combineReducers를 통해 서브리듀서들을 하나로 합쳐줌
import { combineReducers } from 'redux';
import counter from './counter';

export default combineReducers({
  counter
  // 다른 리듀서를 만들게 되면 여기에 넣어줌
});
