const pidor = require('./actions');

test('returning "END_TURN"', () => {
  expect( pidor.endingTurn()).toEqual({type: "END_TURN"});
});