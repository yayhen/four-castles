import { MapCreator } from './mapCreator';

let obj = new MapCreator({x: 5, y: 5}, ['player1', 'player2']);

test('init object is valid', () => {
  expect(obj.numberOfPlayers).toBe(2);
});

obj.createBattleGround();
test('battle ground is array', () => {
  expect(obj.battleGround[1][1].biom).toBe('field');
});

obj.addCastle({x: 4, y: 0}, 0);
test('castle is exist', () => {
  expect(obj.battleGround[4][0].update).toBe('castle');
});