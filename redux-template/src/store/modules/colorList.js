import { createAction, handleActions } from 'react-actions';

const CHANGE_INPUT = 'colorList/CHANGE_INPUT';
const INSERT = 'colorList/INSERT';
const UPDATE = 'colorList/UPDATE';
const REMOVE = 'colorList/REMOVE';

// export const changeInput = input => ({
//   type: CHANGE_INPUT,
//   payload: input
// });
// export const insert = color => ({ type: INSERT, payload: color });

let id = 1;

export const changeInput = createAction(CHANGE_INPUT, input => input);
export const insert = createAction(INSERT, color => ({
  color: color,
  id: id++
}));
export const update = createAction(UPDATE, id => id);
export const remove = createAction(REMOVE, id => id);

// export default function colorList(state, action) {

// }

export default handleActions(
  {
    [CHANGE_INPUT]: (state, action) => ({}),

    [INSERT]: (state, action) => ({})
  },
  initialState
);
