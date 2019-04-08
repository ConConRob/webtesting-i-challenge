const enhancer = require('./enhancer.js');
// test away!

const weapon = {
  name: "Flame Blade",
  durability: 70,
  enhancement: 10
}

describe("Weapon enhancers", () => {
  describe("repair a weapon", () => {
    it("weapon is repaired 100%", () => {
      expect(enhancer.repair(weapon)).toEqual({ ...weapon, durability: 100 })
    })
  })
})