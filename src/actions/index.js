export const NEXT_STEP = 'NEXT_STEP';
export const PREVIOUS_STEP = 'PREVIOUS_STEP';
export const UPDATE_USER = 'UPDATE_USER';

export const nextStep = () => {
  return {
    type: NEXT_STEP
  }
};

export const previousStep = () => {
  return {
    type: PREVIOUS_STEP
  }
};

export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    user
  }
};
