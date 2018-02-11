import { NEXT_STEP, PREVIOUS_STEP, UPDATE_USER } from '../actions';

const initialState = {
  step: 0,
  user: {
    email: '',
    password: '',
    birthday: null,
    gender: 'male',
    from: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEXT_STEP:
      return {
        ...state,
        step: state.step + 1,
      };
    case PREVIOUS_STEP:
      return {
        ...state,
        step: state.step - 1,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: { ...state.user, ...action.user },
      };
    default:
      return state;
  }
};
