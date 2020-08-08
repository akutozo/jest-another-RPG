const Player = require('../lib/Player');

const Potion = require('../lib/Potion');

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
test("gets player's health value", () => {
    const player = new Player('Dave');
  
    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
  });

//Test 5
test('checks if player is alive or not', () => {
const player = new Player('Dave');

expect(player.isAlive()).toBeTruthy();

player.health = 0;

expect(player.isAlive()).toBeFalsy();
});

//Test 6
test("subtracts from player's health", () => {
  const player = new Player('Dave');
  const oldHealth = player.health;

  player.reduceHealth(5);

  expect(player.health).toBe(oldHealth - 5);

  player.reduceHealth(99999);

  expect(player.health).toBe(0);
});

//Test 7
test("gets player's attack value", () => {
  const player = new Player('Dave');
  player.strength = 10;

  expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
  expect(player.getAttackValue()).toBeLessThanOrEqual(15);
});

//Test
test('adds a potion to the inventory', () => {
  const player = new Player('Dave');
  const oldCount = player.inventory.length;

  player.addPotion(new Potion());

  expect(player.inventory.length).toBeGreaterThan(oldCount);
});

//Test
test('uses a potion from inventory', () => {
  const player = new Player('Dave');
  player.inventory = [new Potion(), new Potion(), new Potion()];
  const oldCount = player.inventory.length;

  player.usePotion(1);

  expect(player.inventory.length).toBeLessThan(oldCount);
});

//Test