import authReducer from '../../reducers/auth';

test('should set authentication default state', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should set uid for login', () => {
  const uid = 'randomstring';
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer({}, action);
  expect(state).toEqual({ uid });
});

test('should set uid for logout', () => {
  const uid = 'randomstring';
  const currState = { uid };
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer(currState, action);
  expect(state).toEqual({});
});
