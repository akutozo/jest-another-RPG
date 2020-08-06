const Player = require('../lib/Player');

jest.mock('../lib/Potion');
//Test 1
test('creates a player object', () => {
    const player = new Player('Dave');
  
    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect.arrayContaining([expect.any(Object)]);
  });

//Test 2
test("gets player's stats as an object", () => {
const player = new Player('Dave');

expect(player.getStats()).toHaveProperty('potions');
expect(player.getStats()).toHaveProperty('health');
expect(player.getStats()).toHaveProperty('strength');
expect(player.getStats()).toHaveProperty('agility');
});

//Test 3
test('gets inventory from player or returns false', () => {
const player = new Player('Dave');

expect(player.getInventory()).toEqual(expect.any(Array));

player.inventory = [];

expect(player.getInventory()).toEqual(false);
});

//Test 4